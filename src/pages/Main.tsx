import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

import useResponsiveWidth from "../hooks/winWidth";

import DynamicBackground from "../components/DinBG";

type Trendyng = {
  small: string;
  large: string;
};

type Regular = {
  small: string;
  medium: string;
  large: string;
};

type Thumbnail = {
  regular: Regular;
  trending?: Trendyng;
};

type Movie = {
  title: string;
  thumbnail: Thumbnail;
  year: string;
  cetegory: string;
  rating: string;
  isBookmarked: boolean;
  isTrending?: boolean;
};

import DATA from "../../data.json";

const Main = () => {
  const [home, setHome] = useState(true);
  const [movie, setMovie] = useState(false);
  const [tv, setTv] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  function chooseTV() {
    setHome(false);
    setMovie(false);
    setTv(true);
    setBookmark(false);
  }
  function chooseMovie() {
    setHome(false);
    setMovie(true);
    setTv(false);
    setBookmark(false);
  }
  function chooseBookmark() {
    setHome(false);
    setMovie(false);
    setTv(false);
    setBookmark(true);
  }
  function chooseHome() {
    setHome(true);
    setMovie(false);
    setTv(false);
    setBookmark(false);
  }

  const handleInput = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    // setResults(data.filter((d) => d.toLowerCase().indexOf(query) > -1));
  };

  const windWidth = useResponsiveWidth();

  return (
    <IonPage className="ion-no-padding">
      <IonContent fullscreen>
        <div className="w-full h-full bg-cubg1 flex mt-[53px]">
          <div className="w-[7%] h-full bg-cubg2 mx-9 pb-5 flex flex-col justify-between ">
            <div className="flex flex-col items-center space-y-10 py-10 ">
              <img src="/images/logo.svg" className="w-10 mb-20 mx-auto" />
              <svg
                onClick={chooseHome}
                className={`${home ? "fill-cuist" : "fill-cuins"}`}
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" />
              </svg>
              <svg
                onClick={chooseMovie}
                className={`${movie ? "fill-cuist" : "fill-cuins"}`}
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" />
              </svg>
              <svg
                onClick={chooseTV}
                className={`${tv ? "fill-cuist" : "fill-cuins"}`}
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" />
              </svg>
              <svg
                onClick={chooseBookmark}
                className={`${bookmark ? "fill-cuist" : "fill-cuins"}`}
                width="17"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" />
              </svg>
            </div>
            <img
              className="w-10 h-10 mx-auto"
              src="/images/image-avatar.png"
              alt="Avatar"
            />
          </div>
          <div className="w-[86%] h-full bg-cubg1 ">
            <div>
              <IonSearchbar
                debounce={1000}
                onIonInput={(ev) => handleInput(ev)}
              />
            </div>
            <div className="h-[235px] w-[150%] border-2 border-red-500 flex justify-between">
              {DATA.map(
                (movie, index) =>
                  movie.isTrending && (
                    <div
                      key={index}
                      className="text-white w-[470px] h-[230px] rounded-xl ml-2"
                    >
                      <DynamicBackground
                        imageUrl={movie.thumbnail.regular.large}
                        size={windWidth}
                      />
                      <p>{movie.title}</p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;
