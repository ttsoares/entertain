import { create } from "zustand";

export type User = {
  email: string;
  password: string;
};

type UserStore = {
  users: User[];
  addUser: (user: User) => void;
  getUserByEmail: (email: string) => User | undefined;
};

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

export type Media = {
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

// Create the Zustand store
export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  addUser: (user: User) =>
    set((state) => ({
      users: [...state.users, user],
    })),
  getUserByEmail: (email: string) =>
    get().users.find((user) => user.email === email),
}));
