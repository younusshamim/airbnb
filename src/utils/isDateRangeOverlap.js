function isDateRangeOverlap(start1, end1, start2, end2) {
  const searchStartDate = new Date(start1);
  const searchEndDate = new Date(end1);
  const rangeStart = new Date(start2);
  const rangeEnd = new Date(end2);

  return searchStartDate <= rangeEnd && searchEndDate >= rangeStart;
}

export default isDateRangeOverlap;
