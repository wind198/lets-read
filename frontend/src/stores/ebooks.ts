import { create } from "zustand";

type IEbook = any;

type IEbooksStore = {
  books: IEbook[];
  addBook: (v: IEbook) => void;
  currentBookId: string | null;
};

export const useEbookStore = create<IEbooksStore>((set) => ({
  books: [],
  addBook: (v: IEbook) => set((state) => ({ books: [...state.books, v] })),
  currentBookId: null,
}));

export const useCurrentBook = () =>
  useEbookStore((s: IEbooksStore) =>
    s.books.find((b) => b.id === s.currentBookId)
  );

export const useIsEmptyBookStore = () =>
  useEbookStore((s: IEbooksStore) => s.books.length === 0);
