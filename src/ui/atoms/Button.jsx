export const Button = ({
  onClick,
  children,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      disabled={disabled}
      className={`
        text-[12px] sm:text-[16px] cursor-pointer relative 
        select-none max-w-[200px] border-[3px] border-solid sm:px-[10px] sm:py-[6px] px-[8px] py-[4px] 
        bg-main shadow-current border-accent text-accent
        active:shadow-active active:top-[5px] active:left-[5px]
        disabled:text-disabled disabled:border-disabled disabled:cursor-not-allowed disabled:shadow-disabled disabled:pointer-events-none
        ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
