import { Box, Divider, Grid, HStack, Stack, Text } from "@chakra-ui/react";
import Card from "./Card";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Stack px="80px" pt="64px" bg="#F9FAFB">
      <Grid templateColumns="repeat(4, 1fr)" gap={"24px"} w="full" mb="48px ">
        <Card title="Support" />
        <Card title="Community" />
        <Card title="Hosting" />
        <Card title="About" />
      </Grid>

      <Divider mb="24px" />

      <HStack justify="space-between" pb="24px">
        <HStack>
          <Text fontSize="14px" color="#4B5563">
            © 2022 Airbnb, Inc.
          </Text>
          <Text fontSize="14px" color="#4B5563">
            Privacy
          </Text>
          <Text fontSize="14px" color="#4B5563">
            Terms
          </Text>
          <Text fontSize="14px" color="#4B5563">
            Sitemap
          </Text>
        </HStack>

        <HStack gap="16px">
          <Box fontSize="24px" color="#4B5563" cursor="pointer">
            <FaFacebook />
          </Box>

          <Box fontSize="24px" color="#4B5563" cursor="pointer">
            <FaTwitter />
          </Box>

          <Box fontSize="24px" color="#4B5563" cursor="pointer">
            <FaInstagram />
          </Box>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default Footer;
