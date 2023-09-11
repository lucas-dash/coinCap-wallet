'use client';

import Image from 'next/image';
import { Icons } from './Icons';
import { currencyFormat } from '@/lib/functions';
import WatchlistButton from './ui/WatchlistButton';

export default function CoinHeader({
  name,
  iconUrl,
  symbol,
  price,
  change,
  uuid,
  rank,
  marketCap,
  ['24hVolume']: volume24,
}: CoinId) {
  const watchlistData: WatchlistData = {
    uuid,
    name,
    price,
    symbol,
    change,
    iconUrl,
    rank,
    volume24,
    marketCap,
  };

  const imageUrl = iconUrl.includes('?') ? (
    <Icons.coins size={25} />
  ) : (
    <Image src={iconUrl} alt={name} width={32} height={32} />
  );

  const changeFormat = change.toString().includes('-');
  const changeIcon = changeFormat ? <Icons.trendDown /> : <Icons.trendUp />;

  return (
    <section className="lg:max-w-[240px]">
      <div className="flex items-center gap-3 justify-center flex-wrap md:justify-start">
        {imageUrl}
        <div className="flex items-center gap-2 ">
          <h2 className="font-semibold text-xl sm:text-2xl">{name}</h2>
          <span className="text-sm text-typography-detail dark:text-typography-detail-dark">
            {symbol}
          </span>
        </div>
        <WatchlistButton
          uuid={uuid}
          watchlistData={watchlistData}
          iconSize={24}
        />
      </div>

      <div className="flex flex-col items-center md:items-start my-2 gap-1">
        <h4 className="font-bold text-2xl sm:text-3xl">
          {currencyFormat(price, 4)}
        </h4>
        <p
          className={`flex items-center gap-1 font-medium ${
            changeFormat ? 'text-downchange' : 'text-upchange'
          }`}
        >
          {changeIcon}
          {`${change}% (24h)`}
        </p>
      </div>
    </section>
  );
}
