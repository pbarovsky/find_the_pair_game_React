import sc from "./Button.module.css";

export const Button = ({
  onClick,
  children,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      disabled={disabled}
      className={`${sc.btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
