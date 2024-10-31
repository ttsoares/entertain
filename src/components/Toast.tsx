import { IonToast } from "@ionic/react";
import { alertCircle } from "ionicons/icons";
import { Dispatch, SetStateAction } from "react";

interface ToastProps {
  message: string;
  showToast: boolean;
  setShowToast: Dispatch<SetStateAction<boolean>>;
}

const Toast: React.FC<ToastProps> = ({ message, showToast, setShowToast }) => {
  return (
    <IonToast
      icon={alertCircle}
      className="custom-toast"
      isOpen={showToast}
      message={message}
      onDidDismiss={() => setShowToast(false)}
      duration={5000}
    ></IonToast>
  );
};

export default Toast;
