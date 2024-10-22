import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

import useLocalStorage from "use-local-storage";
import NewToggle from "../components/NewTogle";
import { Toggle } from "../components/Toggle";
import { useEffect } from "react";

const Home: React.FC = () => {
  // const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  // function toggleTheme() {
  //   setIsDark(!isDark);
  // }

  /*
  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);
*/

  return (
    <IonPage className="ion-no-padding">
      <IonContent fullscreen>
        <div
          id="themecontroll"
          className="w-full h-screen bg-cubg1 text-cuclr relative"
        >
          {/* <div className="w-full h-30  flex justify-end">
            <div className="relative w-48 h-24  ">
              <Toggle isChecked={isDark} handleChange={toggleTheme} />
            </div>
          </div> */}
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-1/2 h-full flex">
              <p className="text-6xl m-auto">Hello World</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
