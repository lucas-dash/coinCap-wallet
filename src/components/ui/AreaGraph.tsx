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
  const values = data.map((item) => parseFloat(item.value));
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  const colorChart =
    data[0].value > data[data.length - 1].value ? '#EA3943' : '#16C784';
  return (
    <div className="m-1 dark:text-typography">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 15, right: 20, left: 0 }}>
          <defs>
            <linearGradient id="color" x1={0} y1={0} x2={0} y2={1}>
              <stop offset={'0%'} stopColor={colorChart} stopOpacity={0.4} />
              <stop offset={'75%'} stopColor={colorChart} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={colorChart}
            fill="url(#color)"
            format={'number'}
          />
          <XAxis
            dataKey={'hour'}
            tickLine={false}
            axisLine={false}
            fontSize={12}
          />
          <YAxis
            domain={[minValue, maxValue]}
            axisLine={false}
            tickLine={false}
            fontSize={12}
            tickFormatter={(number) => `$${number}`}
          />
          <Tooltip contentStyle={{ borderRadius: 16 }} />
          <CartesianGrid opacity={0.4} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
