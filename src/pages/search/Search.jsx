import { HStack, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import Maps from "./Maps/Maps";
import HomeContent from "./HomeContent/HomeContent";
import SearchProvider from "../../context/SearchProvider";

const Search = () => {
  return (
    <SearchProvider>
      <Stack gap="0">
        <Navbar />

        <HStack gap="40px" alignItems="flex-start">
          <HomeContent />
          <Maps />
        </HStack>
      </Stack>
    </SearchProvider>
  );
};

export default Search;
