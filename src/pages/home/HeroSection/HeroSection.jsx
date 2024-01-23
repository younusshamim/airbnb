import { Box, Button, Heading, Image, Stack } from "@chakra-ui/react";
import heroBg from "../../../assets/HeroBg.jpg";

const HeroSection = () => {
  return (
    <Stack
      justify="space-between"
      alignItems="center"
      px="80px"
      position="relative"
      pb="96px"
    >
      <Image src={heroBg} alt="" h="640px" w="full" borderRadius="8px" />

      <Box position="absolute" bottom="140px" textAlign="center" w="full">
        <Heading mb="4" color="#fff" fontWeight="500" fontSize="48px">
          Not sure where to go? Perfect.
        </Heading>
        <Button
          w="fit-content"
          color="#671296"
          borderRadius="100px"
          p="16px 24px"
        >
          I’m flexible
        </Button>
      </Box>
    </Stack>
  );
};

export default HeroSection;
