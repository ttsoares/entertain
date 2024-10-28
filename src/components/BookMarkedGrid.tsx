import { IonGrid, IonRow } from "@ionic/react";

import { useContentStore } from "../store/content";
import GridElement from "../components/GridElm";

const BookMarkedGrid = ({ windWidth }: { windWidth: number }) => {
  const CONTENTS = useContentStore((state) => state.media);
  const toggleBookmark = useContentStore((state) => state.toggleBookmark);

  return (
    <div className="w-full h-full">
      <h2 className="text-5xl font-outfl mt-14">Movies</h2>
      <IonGrid>
        <IonRow>
          {CONTENTS.filter(
            (movie) => movie.category === "Movie" && movie.isBookmarked
          ).map((movie, index) => (
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
      <h2 className="text-5xl font-outfl mt-14">TV Series</h2>
      <IonGrid>
        <IonRow>
          {CONTENTS.filter(
            (movie) => movie.category === "TV Series" && movie.isBookmarked
          ).map((movie, index) => (
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
  );
};

export default BookMarkedGrid;
