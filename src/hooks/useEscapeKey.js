import { useEffect } from "react";

const useEscapeKey = ({ key, callback }) => {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === key) {
        callback();
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("keydown", handleKey);
    };
  }, [key, callback]);
};

export default useEscapeKey;
