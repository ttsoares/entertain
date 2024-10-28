import { create } from "zustand";

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

type Media = {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending?: boolean;
};

type CounterStore = {
  media: Media[];
  toggleBookmark: (title: string) => void;
};

import DATA from "../../data.json";
const CONTENTS = DATA as Media[];

export const useContentStore = create<CounterStore>((set) => ({
  media: CONTENTS,
  toggleBookmark: (title: string) =>
    set((state) => ({
      media: state.media.map((m) => {
        if (m.title === title) return { ...m, isBookmarked: !m.isBookmarked };
        return m;
      }),
    })),
}));
