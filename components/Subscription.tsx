import React from "react";

const Subscription = () => {
  // Тут можна зробити Stripe Checkout, або просто тестову кнопку
  const handleSubscribe = () => {
    // Тут буде логіка перенаправлення на Stripe Checkout Session
    window.location.href = "/api/subscribe";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Subscribe to ChartCraft AI</h2>
        <p className="mb-4">Access unlimited chart generation powered by AI.</p>
        <button
          onClick={handleSubscribe}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Subscribe for $5/month
        </button>
      </div>
    </div>
  );
};

export default Subscription;
