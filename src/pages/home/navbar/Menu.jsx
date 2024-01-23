import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

const Menu = () => {
  const menuList = ["Places to stay", "Experiences", "Online Experiences"];
  const [selected, setSelected] = useState("Places to stay");

  return (
    <HStack gap="32px">
      {menuList.map((menu, index) => (
        <Stack
          key={index}
          gap="2px"
          alignItems="center"
          cursor="pointer"
          onClick={() => setSelected(menu)}
        >
          <Text>{menu}</Text>
          {selected === menu && <Box w="16px" h="2px" background="#fff"></Box>}
        </Stack>
      ))}
    </HStack>
  );
};

export default Menu;
