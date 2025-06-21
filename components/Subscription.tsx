// components/Subscription.tsx
import React from "react";

const Subscription = () => {
  // Тут має бути інтеграція з Stripe checkout/session!
  return (
    <div className="border p-6 rounded-xl shadow mt-8 text-center">
      <h2 className="text-2xl font-bold mb-3">Subscribe to ChartCraft Pro</h2>
      <p className="mb-4">To generate charts, please subscribe below!</p>
      <a
        href="/api/subscribe"
        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
      >
        Subscribe with Stripe
      </a>
    </div>
  );
};

export default Subscription;
