import { FC } from "react";

type ChartProps = {
  chartData: any;
};

const Chart: FC<ChartProps> = ({ chartData }) => {
  // ПРИКЛАД: Можеш підключити будь-яку бібліотеку для графіків (наприклад, Chart.js, recharts)
  if (!chartData) return null;
  return (
    <div>
      <h2>AI-generated Chart</h2>
      <pre>{JSON.stringify(chartData, null, 2)}</pre>
      {/* ТУТ МІСЦЕ ДЛЯ ВІЗУАЛІЗАЦІЇ */}
    </div>
  );
};

export default Chart;
