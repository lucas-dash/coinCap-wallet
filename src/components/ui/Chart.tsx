'use client';

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

type ChartProps = {
  data: {
    hour: string;
    value: string;
  }[];
};

export default function Chart({ data }: ChartProps) {
  const colorChart =
    data[0].value > data[data.length - 1].value ? '#EA3943' : '#16C784';
  return (
    <div className="m-2.5 overflow-hidden aspect-auto dark:text-typography">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ right: 30 }}>
          <defs>
            <linearGradient id="color" x1={0} y1={0} x2={0} y2={1}>
              <stop offset={'0%'} stopColor={colorChart} stopOpacity={0.4} />
              <stop offset={'75%'} stopColor={colorChart} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area
            dataKey="value"
            stroke={colorChart}
            fill="url(#color)"
            format={'number'}
          />
          <XAxis dataKey={'hour'} axisLine={false} fontSize={14} />
          <YAxis
            axisLine={false}
            tickLine={false}
            fontSize={14}
            tickFormatter={(number) => `$${number}`}
          />
          <Tooltip contentStyle={{ borderRadius: 16 }} />
          <CartesianGrid opacity={0.3} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
