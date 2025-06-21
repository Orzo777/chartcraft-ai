import { useEffect, useState } from "react";

// !!! Для реальної перевірки має бути справжній бекенд-ендпоінт.
// Тут заглушка: завжди false (НЕ підписаний).
// Після інтеграції Stripe тут має бути fetch до бекенду.

export function useSubscription() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // TODO: Підключити реальну перевірку підписки користувача (наприклад, через fetch('/api/check-subscription'))
    setIsSubscribed(false);
  }, []);

  return isSubscribed;
}
