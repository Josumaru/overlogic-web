import { Lang } from "@/types/lang";
import { create } from "zustand";

interface LangStore {
  lang: Lang | null;
  setLang: (lang: Lang) => void;
}

export const useLangStore = create<LangStore>((set) => ({
  lang: null,
  setLang: (lang) => set({ lang }),
}));
