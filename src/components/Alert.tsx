import type { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  type?: "primary" | "secondary" | "success" | "danger" | "warning";
  onClose: () => void;
}
const Alert = ({ children, type = "primary", onClose }: AlertProps) => {
  return (
    <div className={`alert alert-${type} alert-dismissible`}>
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
