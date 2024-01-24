import isDateRangeOverlap from "./isDateRangeOverlap";

export function searchHomesByDateAndPlace(
  homeList,
  placeName,
  startDate,
  endDate
) {
  if (startDate && endDate && !placeName) {
    return homeList.filter((home) =>
      isDateRangeOverlap(
        startDate,
        endDate,
        home.dateRange.startDate,
        home.dateRange.endDate
      )
    );
  } else if (!startDate && !endDate && placeName) {
    console.log(placeName);
    return homeList.filter((home) =>
      home.title.toLowerCase().includes(placeName.toLowerCase())
    );
  } else if (startDate && endDate && placeName) {
    return homeList.filter(
      (home) =>
        isDateRangeOverlap(
          startDate,
          endDate,
          home.dateRange.startDate,
          home.dateRange.endDate
        ) && home.title.toLowerCase().includes(placeName.toLowerCase())
    );
  }
}

export default searchHomesByDateAndPlace;
