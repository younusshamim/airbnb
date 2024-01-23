import { Flex, HStack } from "@chakra-ui/react";
import Divider from "../../../components/Divider";
import InputField from "./InputField";
import SearchButton from "../../../components/SearchButton";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <Flex justify="center" alignItems="center" px="80px" py="24px">
      <HStack
        w="848px"
        h="64px"
        bg="#fff"
        borderRadius="1000px"
        p="8px 8px 8px 32px"
        justify="space-between"
      >
        <InputField
          label="Location"
          type="text"
          placeholder="Where are you going?"
        />

        <Divider />
        <InputField label="Check in" type="date" placeholder="Add dates" />

        <Divider />
        <InputField label="Check out" type="date" placeholder="Add dates" />

        <Divider />
        <InputField label="Guest" type="text" placeholder="Add guests" />

        <SearchButton onClick={handleSearch} />
      </HStack>
    </Flex>
  );
};

export default SearchBar;
