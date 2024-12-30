export interface Lang {
  lang: "en" | "id";
}

export interface LangProps {
  params: Promise<Lang>;
}
