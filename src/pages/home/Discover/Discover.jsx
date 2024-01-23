import { Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import discover1 from "../../../assets/discover1.jpg";
import discover2 from "../../../assets/discover2.jpg";
import PrimaryButton from "../../../components/PrimaryButton";

const Discover = () => {
  return (
    <Stack px="80px" gap="48px">
      <Heading fontSize="36px" fontWeight="500">
        Discover Airbnb Experiences
      </Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={"24px"}>
        <Stack
          backgroundImage={`url(${discover1})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          minH="628px"
          borderRadius="8px"
          p="80px"
        >
          <Heading color="#fff" fontSize="48px" fontWeight="500" mb="24px">
            Things to do <br /> on your trip
          </Heading>
          <PrimaryButton>Experiences</PrimaryButton>
        </Stack>

        <Stack
          backgroundImage={`url(${discover2})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          minH="628px"
          borderRadius="8px"
          p="80px"
        >
          <Heading color="#fff" fontSize="48px" fontWeight="500" mb="24px">
            Things to do <br /> from home
          </Heading>
          <PrimaryButton>Experiences</PrimaryButton>
        </Stack>
      </Grid>
    </Stack>
  );
};

export default Discover;
