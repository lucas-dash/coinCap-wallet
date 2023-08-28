import AssetsList from './transaction/AssetsList';
import { ScrollArea } from './ui/scroll-area';

export default function Assets() {
  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/50 p-2 sm:p-3 rounded-xl shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 min-w-[240px]">
      <h5 className="font-medium text-lg pb-0.5">Assets</h5>
      <ScrollArea className="w-full h-72 sm:pr-3 rounded-lg">
        <AssetsList />
      </ScrollArea>
    </section>
  );
}
