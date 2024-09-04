import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return <SearchContext.Provider value={{ inputValue, setInputValue }}>{children}</SearchContext.Provider>;
};
