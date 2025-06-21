import { useState } from "react";
import Chart from "../components/Chart";
import { useSubscription } from "../lib/useSubscription";
import Subscription from "../components/Subscription";

export default function Home() {
  const [input, setInput] = useState("");
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const isSubscribed = useSubscription();

  async function generateChart() {
    setLoading(true);
    setChartData(null);

    const res = await fetch("/api/generate-chart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    setChartData(data.chartData);
    setLoading(false);
  }

  if (!isSubscribed) {
    // Show subscription paywall if user is not subscribed
    return <Subscription />;
  }

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">ChartCraft AI</h1>
      <p className="mb-4 text-gray-600">
        Enter your data description or table, and ChartCraft will turn it into a chart using AI!
      </p>
      <textarea
        className="w-full border rounded-lg p-3 mb-4"
        rows={6}
        placeholder="Paste your data or describe it in text (e.g. 'Monthly sales: Jan 100, Feb 150, Mar 120...')"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold disabled:bg-gray-400"
        onClick={generateChart}
        disabled={!input || loading}
      >
        {loading ? "Generating..." : "Generate Chart"}
      </button>
      {chartData && (
        <div className="mt-8">
          <Chart chartData={chartData} />
        </div>
      )}
    </main>
  );
}
