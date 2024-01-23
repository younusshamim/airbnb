import { Flex, Image } from "@chakra-ui/react";
import logo from "../../../assets/AirbnbWhiteLogo.svg";
import Menu from "./Menu";
import User from "./User";

const Navbar = () => {
  return (
    <Flex
      justify="space-between"
      alignItems="center"
      px="80px"
      color="#FFF"
      bg="#000"
      h="48px"
    >
      <Image src={logo} alt="Your Vector" color="blue.500" />
      <Menu />
      <User />
    </Flex>
  );
};

export default Navbar;
