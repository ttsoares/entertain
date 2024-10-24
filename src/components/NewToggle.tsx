import useLocalStorage from "use-local-storage";
import "./NewToggle.css";

import { IonItem, IonToggle } from "@ionic/react";
import { useEffect } from "react";

const NewToggle = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  useEffect(() => {
    document
      .querySelector("html")
      ?.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <IonItem>
      <div className="w-full py-4 flex justify-end bg-cubg1">
        <div className="h-full flex ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bg-cubg1 w-6 stroke-cuclr mr-2"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
              d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
            />
            <circle
              cx="256"
              cy="256"
              r="80"
              fill="none"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="32"
            />
          </svg>
          <div className="relative mx-2">
            <IonToggle
              checked={isDark}
              onIonChange={() => setIsDark(!isDark)}
            />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bg-cubg1 w-6 stroke-cuclr"
            viewBox="0 0 512 512"
          >
            <path
              d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
            />
          </svg>
        </div>
      </div>
    </IonItem>
  );
};

export default NewToggle;
