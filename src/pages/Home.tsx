import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

import { useHistory } from "react-router-dom";

import { validateEmail, validatePassword } from "../lib/Functions";

const Home: React.FC = () => {
  const navigate = useHistory();

  const [isTouchedEmail, setIsTouchedEmail] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>();
  const [isTouchedPassword, setIsTouchedPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>();

  const emailValidate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    setIsValidEmail(undefined);
    if (value === "") return;
    validateEmail(value) !== null
      ? setIsValidEmail(true)
      : setIsValidEmail(false);
  };

  const passwordValidate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    setIsValidPassword(undefined);
    if (value === "") return;
    validatePassword(value) !== null
      ? setIsValidPassword(true)
      : setIsValidPassword(false);
  };

  const markTouchedEmail = () => {
    setIsTouchedEmail(true);
  };

  const markTouchedPassword = () => {
    setIsTouchedPassword(true);
  };

  function handleSignUp() {
    navigate.push("/signup");
  }

  return (
    <IonPage className="ion-no-padding">
      <IonContent fullscreen>
        <div className="w-full h-screen bg-cubg1 flex items-center justify-center">
          <div className="w-[28%] h-[44%] flex flex-col justify-center items-center">
            <img src="/images/logo.svg" className="w-10 mb-20" />
            <div className="w-full h-[373px] flex bg-cubg2  rounded-2xl">
              <div className="p-6 w-full h-full flex flex-col">
                <div className="w-full h-1/3 text-white">
                  <p className="text-4xl">Login</p>
                </div>
                <div className="w-full h-1/3 text-cuins text-xl">
                  <IonInput
                    className={`${isValidEmail && "ion-valid"} ${
                      isValidEmail === false && "ion-invalid"
                    } ${isTouchedEmail && "ion-touched"}`}
                    type="email"
                    fill="solid"
                    label="Email"
                    labelPlacement="floating"
                    helperText="Enter a valid email"
                    errorText="Invalid email"
                    onIonInput={(event) => emailValidate(event)}
                    onIonBlur={() => markTouchedEmail()}
                    minlength={10}
                    clearInput={true}
                  ></IonInput>
                  <IonInput
                    className={`${isValidPassword && "ion-valid"} ${
                      isValidPassword === false && "ion-invalid"
                    } ${isTouchedPassword && "ion-touched"}`}
                    type="password"
                    fill="solid"
                    label="Password"
                    labelPlacement="floating"
                    helperText="One digit, one lower, one upper, one special. Min 8 chars"
                    errorText="Invalid password"
                    onIonInput={(event) => passwordValidate(event)}
                    onIonBlur={() => markTouchedPassword()}
                    minlength={8}
                    maxlength={16}
                  ></IonInput>
                </div>
                <div className="w-full h-1/3 text-cuins">
                  <IonButton routerLink="/main" expand="block">
                    Login to your account
                  </IonButton>
                  <div className="flex justify-center mt-10">
                    <p>Dont have an account?</p>
                    <p
                      onClick={handleSignUp}
                      className="text-cured ml-2 hover:cursor-pointer hover:font-bold"
                    >
                      Sign Up
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
