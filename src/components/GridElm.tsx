import { IonCol } from "@ionic/react";
import { useContentStore } from "../store/content";
import PlayButton from "./PlayBut";

const GridElement = ({
  movieTitle,
  windowSize,
  bookmaked,
  toggleBookMark,
}: {
  movieTitle: string;
  windowSize: number;
  bookmaked: boolean;
  toggleBookMark: () => void;
}) => {
  const CONTENTS = useContentStore((state) => state.media);
  const movieIndex = CONTENTS.findIndex((d) => d.title === movieTitle);

  let newURL = CONTENTS[movieIndex].thumbnail.regular!.large;

  if (windowSize <= 375) {
    newURL = newURL.replace("large", "small");
  }

  if (windowSize > 375 && windowSize <= 768) {
    newURL = newURL.replace("large", "medium");
  }

  return (
    <IonCol size-xs="12" size-sm="6" size-md="4" size-lg="3">
      <div className="w-[95%] h-[226px] rounded-xl m-2 group">
        <div
          className="w-full h-[75%] bg-cover bg-center flex justify-center items-center relative text-lg text-white"
          style={{ backgroundImage: `url(${newURL})` }}
        >
          <svg
            onClick={toggleBookMark}
            className={`${
              bookmaked ? "fill-white" : "fill-none"
            } stroke-white stroke-2 bg-cuins rounded-full p-3 w-10 h-10 top-6 right-10 absolute hover:bg-white hover:stroke-cuins cursor-pointer`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              strokeWidth="1.5"
            />
          </svg>
          <PlayButton />
        </div>
        <div className="w-full">
          {/*  */}
          <div className=" flex justify-between items-center w-[60%] font-outfl text-#CFD1D6">
            <p>{CONTENTS[movieIndex].year}</p>
            <span>•</span>

            {CONTENTS[movieIndex].category === "Movie" ? (
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                  fill="#CFD1D6"
                  opacity=".75"
                />
              </svg>
            ) : (
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                  fill="#CFD1D6"
                  opacity=".75"
                />
              </svg>
            )}

            <span>•</span>
            <p>{CONTENTS[movieIndex].category}</p>
            <span>•</span>
            <p>{CONTENTS[movieIndex].rating}</p>
          </div>
          <p className="text-white text-3xl font-bold absolute bottom-2 left-4">
            {CONTENTS[movieIndex].title}
          </p>
        </div>
      </div>
    </IonCol>
  );
};

export default GridElement;
