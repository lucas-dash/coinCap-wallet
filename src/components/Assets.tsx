import AssetsList from './transaction/AssetsList';

export default function Assets() {
  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/50  rounded-xl p-2 sm:p-4 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 min-w-[240px]">
      <h5 className="font-medium text-lg">Assets</h5>
      <AssetsList />
    </section>
  );
}
