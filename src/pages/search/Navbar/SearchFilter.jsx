import { HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import Divider from "../../../components/Divider";
import SearchButton from "../../../components/SearchButton";

const SearchFilter = () => {
  const handleSearch = () => {};

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
      <Input value="Bordeaux" variant="unstyled" fontSize="14px" />

      <Divider />
      <Input value="Feb 19-26" variant="unstyled" fontSize="14px" />

      <Divider />
      <Input value="2 guests" variant="unstyled" fontSize="14px" />

      <SearchButton onClick={handleSearch} minW="32px" maxH="30px" />
    </HStack>
  );
};

export default SearchFilter;
