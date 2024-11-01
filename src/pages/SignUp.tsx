import { IonButton, IonContent, IonInput, IonPage } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import * as bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

import { validateEmail, validatePassword } from "../lib/Functions";

type stateUser = {
  email: string;
  password: string;
};

import { useUserStore } from "../store/content";
import Toast from "../components/Toast";

const Home: React.FC = () => {
  const navigate = useHistory();
  const [user, setUser] = useState<stateUser>({ email: "", password: "" });
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [isTouchedEmail, setIsTouchedEmail] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>();
  const [isTouchedPassword1, setIsTouchedPassword1] = useState(false);
  const [isValidPassword1, setIsValidPassword1] = useState<boolean>();
  const [isTouchedPassword2, setIsTouchedPassword2] = useState(false);
  const [isValidPassword2, setIsValidPassword2] = useState<boolean>();
  const [showPasswordsNotEqual, setShowPasswordsNotEqual] =
    useState<boolean>(false);
  const [userCreated, setUserCreated] = useState<boolean>(false);

  const { users, addUser } = useUserStore();

  const emailValidate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    setIsValidEmail(undefined);
    if (value === "") return;
    validateEmail(value) !== null
      ? setIsValidEmail(true)
      : setIsValidEmail(false);
    isValidEmail && setUser({ ...user, email: value });
  };

  const passwordValidate1 = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    setIsValidPassword1(undefined);
    if (value === "") return;
    validatePassword(value) !== null
      ? setIsValidPassword1(true)
      : setIsValidPassword1(false);
    if (isValidPassword1) {
      setPassword1(value);
    }
  };

  const passwordValidate2 = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;
    setIsValidPassword2(undefined);
    if (value === "") return;
    validatePassword(value) !== null
      ? setIsValidPassword2(true)
      : setIsValidPassword2(false);
    if (isValidPassword2) {
      setPassword2(value);
    }
  };

  const markTouchedEmail = () => {
    setIsTouchedEmail(true);
  };

  const markTouchedPassword1 = () => {
    setIsTouchedPassword1(true);
  };
  const markTouchedPassword2 = () => {
    setIsTouchedPassword2(true);
  };

  function submitForm() {
    if (password1 === password2) {
      const hash = bcrypt.hashSync(password1, salt);
      addUser({ email: user.email, password: hash });
      setUserCreated(true);
      navigate.push("/home");
    } else {
      setShowPasswordsNotEqual(true);
      setPassword1("");
      setPassword2("");
    }
  }

  return (
    <IonPage className="ion-no-padding">
      <IonContent fullscreen>
        <div className="w-full h-full bg-cubg1 flex">
          <div className="w-[28%] h-[70%] flex flex-col justify-center items-center m-auto">
            <img src="/images/logo.svg" className="w-10 mb-20" />
            <div className="w-full h-full flex bg-cubg2 rounded-2xl">
              <div className="p-6 w-full h-[90%] flex flex-col">
                <div className="w-full h-1/3 text-white">
                  <p className="text-4xl">Sign Up</p>
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
                  ></IonInput>
                  <IonInput
                    className={`${isValidPassword1 && "ion-valid"} ${
                      isValidPassword1 === false && "ion-invalid"
                    } ${isTouchedPassword1 && "ion1-touched"}`}
                    type="password"
                    fill="solid"
                    label="Password"
                    labelPlacement="floating"
                    helperText="One digit, one lower, one upper, one special. Min 8 chars"
                    errorText="Invalid password"
                    onIonInput={(event) => passwordValidate1(event)}
                    onIonBlur={() => markTouchedPassword1()}
                    minlength={8}
                    maxlength={16}
                  ></IonInput>
                  <IonInput
                    className={`${isValidPassword2 && "ion-valid"} ${
                      isValidPassword2 === false && "ion-invalid"
                    } ${isTouchedPassword2 && "ion-touched"}`}
                    type="password"
                    fill="solid"
                    label="Password"
                    labelPlacement="floating"
                    helperText="One digit, one lower, one upper, one special. Min 8 chars"
                    errorText="Invalid password"
                    onIonInput={(event) => passwordValidate2(event)}
                    onIonBlur={() => markTouchedPassword2()}
                    minlength={8}
                    maxlength={16}
                  ></IonInput>
                </div>
                <div className="w-full h-1/3 text-cuins">
                  <IonButton
                    disabled={
                      isValidEmail === false ||
                      isValidPassword1 === false ||
                      isValidPassword2 === false
                    }
                    onClick={submitForm}
                    expand="block"
                  >
                    Create an account
                  </IonButton>
                  <div className="flex justify-center">
                    <p>Have an account?</p>
                    <p
                      onClick={() => navigate.push("/home")}
                      className="text-cured hover:underline hover:cursor-pointer ml-2"
                    >
                      Login
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
      {/* Toasts */}
      <Toast
        showToast={showPasswordsNotEqual}
        setShowToast={setShowPasswordsNotEqual}
        kind="toast-error"
        message="Those two password you typed are not equal !"
      />
      <Toast
        kind="toast-success"
        message="New user created successfully !"
        showToast={userCreated}
        setShowToast={setUserCreated}
      />
    </IonPage>
  );
};

export default Home;
