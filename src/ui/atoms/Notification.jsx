export const Notification = ({ message, className }) => {
  if (!message) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 px-4 py-2 bg-main text-accent shadow-current transition-all ${className}`}>
      {message}
    </div>
  );
};
