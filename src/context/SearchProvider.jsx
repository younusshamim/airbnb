import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [place, setPlace] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [searchBtnClick, setSearchBtnClick] = useState(1);

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const onChangeDate = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const value = {
    place,
    handlePlaceChange,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    onChangeDate,
    searchBtnClick,
    setSearchBtnClick,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchFilter = () => {
  return useContext(SearchContext);
};

export default SearchProvider;
