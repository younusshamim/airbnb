import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
import HeroSection from "./HeroSection/HeroSection";
import Inspiration from "./Inspiration/Inspiration";
import Discover from "./Discover/Discover";
import GiftCards from "./GiftCards/GiftCards";
import Questions from "./Questions/Questions";
import FutureGateway from "./FutureGateway/FutureGateway";

const Home = () => {
  return (
    <Stack gap="96px">
      <Stack gap="0" bg="#000">
        <Navbar />
        <SearchBar />
        <HeroSection />
      </Stack>

      <Inspiration />
      <Discover />
      <GiftCards />
      <Questions />
      <FutureGateway />
    </Stack>
  );
};

export default Home;
