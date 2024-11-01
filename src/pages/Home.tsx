import { IonButton, IonContent, IonInput, IonPage } from "@ionic/react";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Toast from "../components/Toast";
import { validateEmail, validatePassword } from "../lib/Functions";
import { useUserStore } from "../store/content";

import * as bcrypt from "bcryptjs";

interface LocationState {
  from?: string; // for location.state
}

const Home: React.FC = () => {
  const navigate = useHistory();

  const { getUserByEmail } = useUserStore();

  const location = useLocation<LocationState>();
  const comingFrom = location.state?.from;

  const [isTouchedEmail, setIsTouchedEmail] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>();
  const [isTouchedPassword, setIsTouchedPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState<boolean>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToastEmail, setShowToastEmail] = useState(false);
  const [showToastPassword, setShowToastPassword] = useState(false);

  useEffect(() => {
    setIsTouchedEmail(false);
    setIsValidEmail(undefined);
    setIsTouchedPassword(false);
    setIsValidPassword(undefined);
    setEmail("");
    setPassword("");
  }, [comingFrom]);

  const emailValidate = (ev: Event) => {
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

  function validateUser() {
    const foundUser = getUserByEmail(email);
    if (foundUser) {
      const passOK = bcrypt.compareSync(password, foundUser.password);
      if (passOK) {
        navigate.push("/main");
      } else {
        setShowToastPassword(true);
      }
    } else {
      setShowToastEmail(true);
    }
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
                  ></IonInput>
                </div>
                <div className="w-full h-1/3 text-cuins">
                  <IonButton
                    disabled={!isValidEmail || !isValidPassword}
                    onClick={validateUser}
                    expand="block"
                  >
                    Login to your account
                  </IonButton>
                  <div className="flex justify-center mt-5">
                    <p>Dont have an account?</p>
                    <p
                      onClick={handleSignUp}
                      className="text-cured ml-2 hover:cursor-pointer hover:underline"
                    >
                      Sign Up
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toast
          kind="toast-error"
          message="Email not found..."
          showToast={showToastEmail}
          setShowToast={setShowToastEmail}
        />
        <Toast
          kind="toast-error"
          message="Password is incorrect..."
          showToast={showToastPassword}
          setShowToast={setShowToastPassword}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
