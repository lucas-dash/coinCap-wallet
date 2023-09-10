import AssetsList from './transaction/AssetsList';
import { ScrollArea } from './ui/scroll-area';

type AssetsProps = {
  realTimeData: ReaTimelHoldingType[];
  transactions: Transaction[] | undefined;
};

export default function Assets({ realTimeData, transactions }: AssetsProps) {
  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/50 p-2 sm:p-3 rounded-xl shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30">
      <h5 className="font-medium text-lg pb-0.5">Assets</h5>
      <ScrollArea className="w-full h-72 sm:min-h-72 sm:h-auto px-2 md:px-0 md:pr-2 rounded-lg">
        <AssetsList realTimeData={realTimeData} transactions={transactions} />
      </ScrollArea>
    </section>
  );
}
