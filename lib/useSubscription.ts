// /lib/useSubscription.ts

import { useEffect, useState } from "react";

export function useSubscription() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Тут має бути твоя логіка перевірки підписки (наприклад, через cookie або запит на бекенд)
    // Простий варіант для тесту: localStorage
    const status = localStorage.getItem("subscribed");
    setIsSubscribed(status === "true");
  }, []);

  return isSubscribed;
}
