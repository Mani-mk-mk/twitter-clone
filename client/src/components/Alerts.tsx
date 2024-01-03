import { useState, useEffect } from "react";

interface AlertProps {
  message: string;
  type?: string;
}

const Alert = (props: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide the alert after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`fixed bottom-1 left-1/2 w-fit -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-btn-dark p-2 text-white shadow-md transition-transform duration-300 ease-in-out`}
        >
          <p>{props.message}</p>
        </div>
      )}
    </>
  );
};

export default Alert;
