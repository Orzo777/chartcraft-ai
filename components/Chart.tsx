import React from "react";

type ChartData = {
  labels: string[];
  values: number[];
};

export default function Chart({ chartData }: { chartData: ChartData }) {
  if (!chartData || !chartData.labels || !chartData.values) {
    return <div>No chart data</div>;
  }

  // Дуже простий рендер "графіка" (барчарт), БЕЗ бібліотек — для простоти.
  // Якщо хочеш гарніше — підключимо chart.js або recharts!

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">AI Chart</h2>
      <div className="flex items-end space-x-2 h-48 border-b">
        {chartData.values.map((val, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div
              style={{
                height: `${val}px`,
                width: "30px",
                background: "#6366f1",
                borderRadius: "4px 4px 0 0",
                marginBottom: "4px",
              }}
            />
            <span className="text-xs">{chartData.labels[idx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
