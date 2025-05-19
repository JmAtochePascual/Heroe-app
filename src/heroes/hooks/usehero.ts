import { useState } from "react";

export const useHero = (initialValue: string) => {
  const [search, setSearch] = useState(initialValue);

  return {
    search,
    setSearch
  };
};
