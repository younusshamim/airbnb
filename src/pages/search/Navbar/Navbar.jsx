import { Flex, Image } from "@chakra-ui/react";
import logo from "../../../assets/AirbnbRedLogo.svg";
import SearchFilter from "./SearchFilter";
import User from "../../home/navbar/User";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setPlace }) => {
  const navigate = useNavigate();

  return (
    <Flex
      justify="space-between"
      alignItems="center"
      px="80px"
      color="#000"
      h="96px"
      borderBottom="1px solid #E5E7EB"
    >
      <Image
        src={logo}
        alt="Your Vector"
        color="blue.500"
        onClick={() => navigate("/")}
        cursor="pointer"
      />
      <SearchFilter />

      <User />
    </Flex>
  );
};

export default Navbar;
