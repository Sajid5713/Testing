import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
    });

    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
    });
  });

  return onlineStatus;
};
