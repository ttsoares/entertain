import { IonButton, IonContent, IonInput, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";

import { useHistory, useLocation } from "react-router-dom";

import { validateEmail, validatePassword } from "../lib/Functions";

interface LocationState {
  from?: string; // Add a type annotation for location.state
}

const Home: React.FC = () => {
  const navigate = useHistory();

  const location = useLocation<LocationState>(); // Use the type annotation
  const comingFrom = location.state?.from;

  const [isTouchedEmail, setIsTouchedEmail] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>();
  const [isTouchedPassword, setIsTouchedPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Clear form fields when the component mounts
    setIsTouchedEmail(false);
    setIsValidEmail(undefined);
    setIsTouchedPassword(false);
    setIsValidPassword(undefined);
    setEmail("");
    setPassword("");
  }, [comingFrom]);

  const emailValidate = (ev: Event) => {
    ev.preventDefault();
    const value = (ev.target as HTMLInputElement).value;
    setIsValidEmail(undefined);
    if (value === "") return;
    if (validateEmail(value) !== null) {
      setEmail(value);
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const passwordValidate = (ev: Event) => {
    ev.preventDefault();
    const value = (ev.target as HTMLInputElement).value;
    setIsValidPassword(undefined);
    if (value === "") return;
    if (validatePassword(value) !== null) {
      setPassword(value);
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
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
        <div className="w-full h-full bg-cubg1 flex ">
          <div className="w-[28%] h-[70%] flex flex-col justify-center items-center  m-auto ">
            <img src="/images/logo.svg" className="w-10 mb-20" />
            <div className="w-full h-full flex bg-cubg2  rounded-2xl">
              <div className="p-6 w-full h-[90%] flex flex-col">
                <div className="w-full h-1/3 text-white">
                  <p className="text-4xl">Login</p>
                </div>
                <div className="w-full h-full text-cuins text-xl">
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
                    required
                    value={email}
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
                    clearInput={true}
                    required
                    value={password}
                  ></IonInput>
                </div>
                <div className="w-full h-1/3 text-cuins">
                  <IonButton
                    disabled={!isValidEmail || !isValidPassword}
                    routerLink="/main"
                    expand="block"
                  >
                    Login to your account
                  </IonButton>
                  <div className="flex justify-center mt-5">
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
