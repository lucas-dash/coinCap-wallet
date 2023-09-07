export function compactNumber(numbers: number | string) {
  const formatter = Intl.NumberFormat('en', {
    notation: 'compact',
  });

  if (typeof numbers === 'number') return formatter.format(numbers);

  if (typeof numbers === 'string') return formatter.format(Number(numbers));
}

export function currencyFormat(price: number | string, digits: number = 2) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digits,
  });

  if (typeof price === 'number') return formatted.format(price);

  if (typeof price === 'string') return formatted.format(Number(price));
}

export function transactionFormat(payment: number | string) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  });

  if (typeof payment === 'number') return formatted.format(payment);

  if (typeof payment === 'string') return formatted.format(Number(payment));
}

export function getHoldingAssets(allTransaction: Transaction[]) {
  const holdings: Record<string, HoldingType> = {};

  allTransaction.forEach((transaction) => {
    const { amount, coinDetail, pricePerCoin, name, type } = transaction;

    if (!holdings[name]) {
      holdings[name] = {
        coinDetail,
        coinName: name,
        valueAtPurchase: [],
        hodling: 0,
        buyPrice: [],
        avgBuyPrice: 0,
      };
    }

    if (holdings[name]) {
      holdings[name].buyPrice.push(pricePerCoin);
      const avgPrice =
        holdings[name].buyPrice.reduce((total, price) => total + price, 0) /
        holdings[name].buyPrice.length;
      holdings[name].avgBuyPrice = avgPrice;
      holdings[name].valueAtPurchase.push(amount * pricePerCoin).toFixed(2);
    }

    if (type === 'Withdraw') {
      holdings[name].hodling -= amount;
    } else {
      holdings[name].hodling += amount;
    }
  });

  return Object.values(holdings).map((asset) => asset);
}

export function realTimeData(realData: Coin[], holding: HoldingType[]) {
  const realTime: Record<string, RealTimeType> = {};

  realData.find(({ change, name, price }) => {
    holding.forEach(({ coinName, hodling, valueAtPurchase }) => {
      if (coinName === name) {
        if (!realTime[coinName]) {
          const sumValues = valueAtPurchase.reduce(
            (total, price) => total + price,
            0
          );

          const valueNow = Number(price) * hodling;
          const profit = valueNow - sumValues;
          const profitable = sumValues < valueNow;
          const profitPercentage = ((profit / sumValues) * 100).toFixed(2);

          realTime[coinName] = {
            valueNow,
            profit,
            profitable,
            profitPercentage,
            coinPrice: price,
            coinChange: change,
          };
        }
      }
    });
  });

  const holdingWithRealTime = holding
    .map((holdingItem) => {
      const realDataItem = realTime[holdingItem.coinName];

      return {
        ...holdingItem,
        realTime: realDataItem,
      };
    })
    .sort((a, b) => b.realTime.valueNow - a.realTime.valueNow);

  return holdingWithRealTime as ReaTimelHoldingType[];
}

export function totalHolding(realData: Coin[], allTransaction: Transaction[]) {
  return realTimeData(realData, getHoldingAssets(allTransaction));
}

export function totalOverview(
  realTime: ReaTimelHoldingType[]
): TotalOverviewType {
  const balance = realTime?.reduce((total, asset) => {
    return total + asset.realTime.valueNow;
  }, 0);

  const totalDeposits = realTime?.reduce((total, asset) => {
    return (
      total + asset.valueAtPurchase.reduce((total, price) => total + price, 0)
    );
  }, 0);

  const allTimeProfit = realTime?.reduce((total, asset) => {
    return total + asset.realTime.profit;
  }, 0);

  const allTimeProfitInPercentage = realTime
    ?.reduce((total, asset) => {
      return total + Number(asset.realTime.profitPercentage);
    }, 0)
    .toFixed(2);

  return {
    balance,
    totalDeposits,
    allTimeProfit,
    allTimeProfitInPercentage,
  };
}
