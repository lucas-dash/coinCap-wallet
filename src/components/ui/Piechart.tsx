'use client';

import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
type PiechartProps<T> = {
  data: T[];
};

type DataItem = {
  name: string;
  value: number;
};

export default function Piechart({ data }: PiechartProps<DataItem>) {
  return (
    <div className=" m-1 rounded-xl">
      <ResponsiveContainer width="100%" height={250}>
        <PieChart width={300} height={200}>
          <Pie
            data={data}
            dataKey="value"
            isAnimationActive={false}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#6A52FF"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
