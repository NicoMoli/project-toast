import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey({
    key: "Escape",
    callback: dismissAllToasts,
  });

  function createToast(message, variant) {
    if (message !== "" && variant !== "") {
      setToasts([
        ...toasts,
        {
          id: crypto.randomUUID(),
          message,
          variant,
        },
      ]);
    }
  }

  function dismissToast(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  }

  function dismissAllToasts() {
    setToasts([]);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast, dismissAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
