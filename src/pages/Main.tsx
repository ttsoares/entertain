import {
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import useResponsiveWidth from "../hooks/winWidth";
import DynamicBackground from "../components/DinBG";
import Nav from "../components/Nav";

import { useContentStore } from "../store/content";

import GridElement from "../components/GridElm";
import BookMarkedGrid from "../components/BookMarkedGrid";

import { Media } from "../store/content";

const Main = () => {
  // --------- Global State
  const CONTENTS = useContentStore((state) => state.media);
  const toggleBookmark = useContentStore((state) => state.toggleBookmark);

  const navigate = useHistory();

  const [home, setHome] = useState(true);
  const [movie, setMovie] = useState(false);
  const [tv, setTv] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchResult, setSearchResult] = useState<Media[]>([]);
  const [query, setQuery] = useState("");

  let queryResult: Media[] = [];

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
    const target = ev.target as HTMLIonSearchbarElement;
    if (target.value !== "") {
      setQuery(target?.value ?? "");
      const result = CONTENTS.filter((d) => d.title.includes(target.value!));
      setSearchResult(result);
      setSearch(true);
      setHome(false);
      setTv(false);
      setMovie(false);
      setBookmark(false);
    } else {
      setSearch(false);
      setHome(true);
      setSearchResult([]);
    }
  };

  const windWidth = useResponsiveWidth();

  useEffect(() => {
    setHome(true);
    setMovie(false);
    setTv(false);
    setBookmark(false);
    setSearch(false);
  }, []);

  return (
    <IonPage className="ion-no-padding">
      <IonContent fullscreen>
        <div className="w-full h-full bg-cubg1 flex flex-col lg:flex-row mt-[53px]">
          <Nav
            home={home}
            movie={movie}
            tv={tv}
            bookmark={bookmark}
            chooseHome={chooseHome}
            chooseMovie={chooseMovie}
            chooseTV={chooseTV}
            chooseBookmark={chooseBookmark}
          />
          <div className="w-full px-5 lg:px-0 lg:w-[86%] h-full bg-cubg1 text-white">
            <div>
              <IonSearchbar
                id="searchbar"
                debounce={1000}
                onIonInput={(ev) => handleInput(ev)}
                placeholder="Search for movies or TV series"
              ></IonSearchbar>
            </div>
            {/* Trending */}
            {home && (
              <div className="h-[235px] w-full flex flex-col justify-between ">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfl inline mb-2">
                  Trending
                </h2>
                <div>
                  <Swiper
                    breakpoints={{
                      375: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                      },
                      1440: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                      },
                    }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={5}
                    freeMode={true}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    {CONTENTS.map(
                      (movie, index) =>
                        movie.isTrending && (
                          <SwiperSlide key={index}>
                            <div className="text-white w-[470px] h-[230px] rounded-xl ml-2">
                              <DynamicBackground
                                movieIndex={index}
                                windowSize={windWidth}
                                bookmaked={movie.isBookmarked}
                                toggleBookMark={() =>
                                  toggleBookmark(movie.title)
                                }
                              />
                              <p>{movie.title}</p>
                            </div>
                          </SwiperSlide>
                        )
                    )}
                  </Swiper>
                </div>
              </div>
            )}
            {/* GRID */}
            <div className="w-full h-full">
              {home && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfl mt-14">
                  Recomended for you
                </h2>
              )}
              {tv && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfl mt-14">
                  TV Series
                </h2>
              )}
              {movie && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfl mt-14">
                  Movies
                </h2>
              )}
              {search && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfl mt-14">{`Found ${searchResult.length} results for "${query}"`}</h2>
              )}

              <IonGrid className="ion-no-padding">
                <IonRow>
                  {home &&
                    CONTENTS.map((movie, index) => (
                      <GridElement
                        key={index}
                        movieTitle={movie.title}
                        windowSize={windWidth}
                        bookmaked={movie.isBookmarked}
                        toggleBookMark={() => toggleBookmark(movie.title)}
                      />
                    ))}
                  {movie &&
                    CONTENTS.filter((movie) => movie.category === "Movie").map(
                      (movie, index) => (
                        <GridElement
                          key={index}
                          movieTitle={movie.title}
                          windowSize={windWidth}
                          bookmaked={movie.isBookmarked}
                          toggleBookMark={() => toggleBookmark(movie.title)}
                        />
                      )
                    )}
                  {tv &&
                    CONTENTS.filter(
                      (movie) => movie.category === "TV Series"
                    ).map((movie, index) => (
                      <GridElement
                        key={index}
                        movieTitle={movie.title}
                        windowSize={windWidth}
                        bookmaked={movie.isBookmarked}
                        toggleBookMark={() => toggleBookmark(movie.title)}
                      />
                    ))}
                  {bookmark && <BookMarkedGrid windWidth={windWidth} />}
                  {query &&
                    searchResult.map((movie, index) => (
                      <GridElement
                        key={index}
                        movieTitle={movie.title}
                        windowSize={windWidth}
                        bookmaked={movie.isBookmarked}
                        toggleBookMark={() => toggleBookmark(movie.title)}
                      />
                    ))}
                </IonRow>
              </IonGrid>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Main;
