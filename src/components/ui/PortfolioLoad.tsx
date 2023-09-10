import OverviewSkeleton from './Skeletons/OverviewSkeleton';
import AssetsLoading from './Skeletons/AssetsLoading';
import HoldingSkeleton from './Skeletons/HoldingSkeleton';
import TransactionsSkeleton from './Skeletons/TransactionsSkeleton';

export default function PortfolioLoad() {
  return (
    <section className="grid gap-5 2xl:container">
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        <OverviewSkeleton />
        <AssetsLoading />
      </div>
      <HoldingSkeleton />
      <TransactionsSkeleton />
    </section>
  );
}
