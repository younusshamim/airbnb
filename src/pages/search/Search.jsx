import { HStack, Stack } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import Maps from "./Maps/Maps";
import HomeContent from "./HomeContent/HomeContent";

const Search = () => {
  return (
    <Stack gap="0">
      <Navbar />

      <HStack gap="40px" alignItems="flex-start">
        <HomeContent />
        <Maps />
      </HStack>
    </Stack>
  );
};

export default Search;
