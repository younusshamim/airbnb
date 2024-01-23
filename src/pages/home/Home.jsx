import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
  return (
    <Stack gap="0">
      <Navbar />
      <SearchBar />
    </Stack>
  );
};

export default Home;
