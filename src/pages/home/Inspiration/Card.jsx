import { Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ img, title, subTitle, bgColor }) => {
  return (
    <Stack color="#fff" gap="0">
      <Image src={img} alt="" h="200px" borderRadius="8px 8px 0px 0px" />

      <Stack
        bg={bgColor}
        gap="8px"
        h="200px"
        p="16px 24px"
        borderRadius="0px 0px 8px 8px"
      >
        <Heading fontSize="36px" fontWeight="500">
          {title}
        </Heading>
        <Text fontSize="18px">{subTitle}</Text>
      </Stack>
    </Stack>
  );
};

export default Card;
