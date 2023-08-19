//? coin image, name, price, wallet price

import { currencyFormat } from '@/lib/functions';

export default function Holding() {
  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/60 rounded-xl p-2 sm:p-4 shadow-base shadow-shadow/60 dark:shadow-shadow-dark/60">
      <h5 className="font-medium text-lg">Holding</h5>

      <article className="container">
        <div className="flex items-center justify-evenly">
          <p>Coin</p>
          <p>Price</p>
          <p>All-Time-Profit</p>
        </div>

        <div className="flex items-center justify-evenly">
          <p>Bitcoin</p>
          <p>{currencyFormat(2021)}</p>
          <p>-$9090</p>
        </div>
      </article>
    </section>
  );
}
