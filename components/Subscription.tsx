// /components/Subscription.tsx

import React from "react";

const subscribe = () => {
  // Тут має бути інтеграція з Stripe (наприклад, перенаправлення на checkout)
  // Для тесту просто зберігаємо підписку в localStorage
  localStorage.setItem("subscribed", "true");
  window.location.reload();
};

export default function Subscription() {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-4">Subscribe to ChartCraft AI</h2>
      <p className="mb-4 text-center">
        To use ChartCraft AI, you need an active subscription.<br />
        <b>Click the button below to subscribe.</b>
      </p>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
        onClick={subscribe}
      >
        Subscribe (Test)
      </button>
      <p className="mt-2 text-xs text-gray-400">
        <i>Stripe integration is needed for real payments.</i>
      </p>
    </div>
  );
}
