import { HStack, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import PrimaryButton from "../../../components/PrimaryButton";
import GiftCardImg from "../../../assets/GiftCards.jpg";

const GiftCards = () => {
  return (
    <HStack px="80px" gap="48px" justify="space-between">
      <Stack gap="24px">
        <Heading fontSize="48px" fontWeight="500">
          Shop Airbnb <br />
          gift cards
        </Heading>

        <PrimaryButton bgColor="#000" color="#fff">
          Learn more
        </PrimaryButton>
      </Stack>

      <Image src={GiftCardImg} alt="" w="855px" />
    </HStack>
  );
};

export default GiftCards;
