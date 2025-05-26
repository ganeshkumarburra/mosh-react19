import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: (event: React.MouseEvent) => void;
  type?: "primary" | "secondary" | "success" | "danger" | "warning";
}
const Button = ({ children, type = "primary", onClick }: ButtonProps) => {
  return (
    <button type="button" className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
