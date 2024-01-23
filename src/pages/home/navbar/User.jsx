import { Box, HStack, Text } from "@chakra-ui/react";
import { TbWorld } from "react-icons/tb";
import { FaUser } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

const User = () => {
  return (
    <HStack gap="16px">
      <Text fontSize="14px">Become a Host</Text>
      <Box fontSize="24px">
        <TbWorld />
      </Box>

      <HStack
        bg="#fff"
        borderRadius="100px"
        h="48px"
        pl="20px"
        pr="10px"
        color="gray.600"
        fontSize="22px"
      >
        <AiOutlineMenu />
        <FaUser />
      </HStack>
    </HStack>
  );
};

export default User;
