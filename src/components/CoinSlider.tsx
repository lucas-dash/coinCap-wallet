import CoinImage from './ui/CoinImage';
import { Icons } from './ui/Icons';

type CoinSliderProps = {
  coinsData: CryptoData;
};

export default function CoinSlider({ coinsData }: CoinSliderProps) {
  return (
    <section className="w-full flex items-center overflow-hidden gap-2">
      {coinsData?.data.coins
        .slice(0, 10)
        .map(({ uuid, name, change, iconUrl }) => {
          const changeIcon = change.includes('-') ? (
            <Icons.trendDown size={18} />
          ) : (
            <Icons.trendUp size={18} />
          );

          return (
            <div
              key={uuid}
              className="flex min-w-max items-center bg-foreground/60 dark:bg-foreground-dark/60 rounded-2xl py-1 px-1.5 animate-autoplay"
            >
              <CoinImage src={iconUrl} alt={name} width={20} height={20} />
              <p className="text-sm font-medium px-1">{name}</p>

              <div
                className={`w-max flex items-center text-sm ${
                  change.includes('-') ? 'text-downchange' : 'text-upchange'
                }`}
              >
                {changeIcon}
                <p>{change}%</p>
              </div>
            </div>
          );
        })}
    </section>
  );
}
