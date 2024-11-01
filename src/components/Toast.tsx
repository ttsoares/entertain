import { IonToast } from "@ionic/react";
import { alertCircle } from "ionicons/icons";
import { Dispatch, SetStateAction } from "react";

interface ToastProps {
  message: string;
  showToast: boolean;
  setShowToast: Dispatch<SetStateAction<boolean>>;
  kind: string;
}

const Toast: React.FC<ToastProps> = ({
  message,
  kind,
  showToast,
  setShowToast,
}) => {
  return (
    <IonToast
      icon={alertCircle}
      className={`${kind}`}
      isOpen={showToast}
      message={message}
      onDidDismiss={() => setShowToast(false)}
      duration={5000}
    ></IonToast>
  );
};

export default Toast;
