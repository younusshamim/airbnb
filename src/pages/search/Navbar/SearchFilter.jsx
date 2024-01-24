import { HStack, Input, Box } from "@chakra-ui/react";
import Divider from "../../../components/Divider";
import SearchButton from "../../../components/SearchButton";
import { useSearchFilter } from "../../../context/SearchProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchFilter = () => {
  const {
    place,
    handlePlaceChange,
    startDate,
    endDate,
    onChangeDate,
    setSearchBtnClick,
  } = useSearchFilter();

  return (
    <HStack
      w="334px"
      h="48px"
      bg="#fff"
      borderRadius="1000px"
      p="8px 8px 8px 24px"
      justify="space-between"
      boxShadow="md"
      border="1px solid #E5E7EB"
      gap="5px"
    >
      <Input
        onChange={handlePlaceChange}
        value={place}
        placeholder="Write Place"
        variant="unstyled"
        fontSize="14px"
      />

      <Divider />

      <Box maxW="full" overflow="hidden" fontSize="14px">
        <DatePicker
          selected={startDate}
          onChange={onChangeDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          placeholderText="Date"
        />
      </Box>

      <Divider />
      <Input placeholder="Guest" variant="unstyled" fontSize="14px" />

      <SearchButton
        onClick={() => setSearchBtnClick((prev) => prev + 1)}
        minW="32px"
        maxH="30px"
      />
    </HStack>
  );
};

export default SearchFilter;
