import { Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Nashville from "../../../assets/Nashville.png";
import SouthHaven from "../../../assets/SouthHaven.png";
import Stanton from "../../../assets/Stanton.png";
import NewBuffalo from "../../../assets/NewBuffalo.png";
import Card from "./Card";

const Inspiration = () => {
  return (
    <Stack px="80px" gap="48px">
      <Heading fontSize="36px" fontWeight="500">
        Inspiration for your next trip
      </Heading>

      <Grid templateColumns="repeat(4, 1fr)" gap={"24px"}>
        <Card
          img={Nashville}
          title="Nashville"
          subTitle="53 miles away"
          bgColor="#CC2D4A"
        />
        <Card
          img={SouthHaven}
          title="South Haven"
          subTitle="168 miles away "
          bgColor="#BC1A6E "
        />
        <Card
          img={Stanton}
          title="Stanton"
          subTitle="192 miles away "
          bgColor="#DE3151 "
        />
        <Card
          img={NewBuffalo}
          title="New Buffalo"
          subTitle="130 miles away "
          bgColor="#D93B30"
        />
      </Grid>
    </Stack>
  );
};

export default Inspiration;
