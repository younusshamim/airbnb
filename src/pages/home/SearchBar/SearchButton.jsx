import { Flex } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

const SearchButton = () => {
  return (
    <Flex
      fontSize="20px"
      color="#fff"
      bg="#DE3151"
      h="40px"
      w="48px"
      borderRadius="50%"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      _active={{ opacity: 0.8 }}
    >
      <IoSearchOutline />
    </Flex>
  );
};

export default SearchButton;
