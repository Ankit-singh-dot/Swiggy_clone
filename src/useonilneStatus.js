import { useEffect, useState, useRef } from "react";

const useOnlineStatus = () => {
  const [Onlinestatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  });
  return Onlinestatus;
};
export default useOnlineStatus;
