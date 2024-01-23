import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  return (
    <Stack gap="0">
      <Navbar />
      <SearchBar />
      <HeroSection />
    </Stack>
  );
};

export default Home;
