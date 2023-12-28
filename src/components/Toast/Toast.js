import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ state, id, children }) {
  const variantClass = styles[state];
  const Icon = ICONS_BY_VARIANT[state];
  const { dismissToast } = React.useContext(ToastContext);

  return (
    <div className={`${styles.toast} ${variantClass}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <VisuallyHidden>{state} </VisuallyHidden>
      {children}
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => dismissToast(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
