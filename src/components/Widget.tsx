import CoinImage from './ui/CoinImage';
import EmptyState from './ui/EmptyState';

type WidgetProps = {
  realTimeData: ReaTimelHoldingType[];
};

export default function Widget({ realTimeData }: WidgetProps) {
  return (
    <>
      {realTimeData.length === 0 || realTimeData === undefined ? (
        <EmptyState
          image="/noAssets.svg"
          title="No Assets"
          description="You don't own any assets yet."
          className="dark:bg-background/80"
          width={250}
          height={220}
        />
      ) : (
        <section className="w-full flex flex-col items-center justify-center min-[520px]:flex-row lg:flex-col lg:justify-start overflow-hidden">
          {realTimeData.slice(0, 2).map((hodl, index) => {
            return (
              <article
                key={index}
                className="bg-foreground dark:bg-slate-900 rounded-xl w-[230px] max-w-[230px] max-h-[230px] p-2 sm:p-3"
              >
                <div className="flex gap-2 pb-2">
                  <CoinImage src={hodl.coinDetail.image} alt={hodl.coinName} />
                  <h5 className="font-medium text-lg">{hodl.coinName}</h5>
                </div>
                <div className="flex justify-between">
                  <h6 className="">Your profit/loss</h6>
                  <p
                    className={` font-medium ${
                      hodl.realTime.profitable
                        ? 'text-upchange'
                        : 'text-downchange'
                    }`}
                  >
                    {hodl.realTime.profitPercentage}%
                  </p>
                </div>
                <div className="flex justify-between">
                  <h6>Holding</h6>
                  <p>
                    {hodl.hodling}
                    {hodl.coinDetail.symbol}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </>
  );
}
