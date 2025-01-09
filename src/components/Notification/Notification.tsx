import { useEffect, useState } from "react";

interface NotiProps {
  text: string;
  timer: number;
}

const Notification: React.FC<NotiProps> = ({ text, timer }) => {
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    if (text !== "") {
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), timer * 1000);
    }
  }, [text, timer]);

  return (
    <div>
      {alertVisible && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
          {text}
        </div>
      )}
    </div>
  );
};

export default Notification;
