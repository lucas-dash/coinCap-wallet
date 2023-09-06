import Hodl from './transaction/Hodl';

type HoldingProps = {
  realTimeData: ReaTimelHoldingType[];
};

export default function Holding({ realTimeData }: HoldingProps) {
  return (
    <section className="bg-foreground/60 dark:bg-foreground-dark/60 rounded-xl p-2 sm:p-4 shadow-base shadow-shadow/30 dark:shadow-shadow-dark/30 overflow-hidden">
      <h5 className="font-medium text-lg">Holding</h5>

      <Hodl realTimeData={realTimeData} />
    </section>
  );
}
