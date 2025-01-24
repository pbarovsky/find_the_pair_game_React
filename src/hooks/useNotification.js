import { useState, useCallback } from "react";

export const useNotification = () => {
  const [notification, setNotification] = useState(null);
  const [notificationClass, setNotificationClass] = useState("");

  const showNotification = useCallback((message, duration = 3000) => {
    setNotification(message);
    setNotificationClass("animate-fadeIn");

    setTimeout(() => {
      setNotificationClass("animate-fadeOut");
    }, duration - 500);

    setTimeout(() => {
      setNotification(null);
      setNotificationClass("");
    }, duration);
  }, []);

  return { notification, notificationClass, showNotification };
};
