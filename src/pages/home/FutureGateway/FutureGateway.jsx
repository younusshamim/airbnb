import {
  Grid,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";

const FutureGateway = () => {
  const [selectedTab, setSelectedTab] = useState(
    "Destinations for arts & culture"
  );

  const tabs = [
    "Destinations for arts & culture",
    "Destinations for outdoor adventure",
    "Mountain cabins",
    "Beach destinations",
    "Popular destinations",
    "Unique Stays",
  ];

  const data = [
    { title: "Phoenix", subTitle: "Arizona" },
    { title: "Phoenix", subTitle: "Arizona" },
    { title: "Phoenix", subTitle: "Arizona" },
    { title: "Phoenix", subTitle: "Arizona" },
    { title: "Phoenix", subTitle: "Arizona" },
    { title: "Phoenix", subTitle: "Arizona" },
    { title: "Phoenix", subTitle: "Arizona" },
    { title: "Phoenix", subTitle: "Arizona" },
    { title: "Phoenix", subTitle: "Arizona" },
    { title: "Phoenix", subTitle: "Arizona" },
    { title: "Phoenix", subTitle: "Arizona" },
  ];

  return (
    <Stack px="80px" gap="48px">
      <Heading fontSize="36px" fontWeight="500">
        Inspiration for future getaways
      </Heading>

      <Tabs colorScheme="black">
        <TabList>
          {tabs.map((tab, index) => (
            <Tab key={index}>{tab}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel key={index}>
              <Grid
                templateColumns="repeat(4, 1fr)"
                columnGap={"24px"}
                rowGap={"32px"}
              >
                {data.map((item, index) => (
                  <Stack key={index} p="16px 24px" gap="0px">
                    <Text fontWeight="500">{item.title}</Text>
                    <Text fontWeight="400" color="gray.600">
                      {item.subTitle}
                    </Text>
                  </Stack>
                ))}

                <Text
                  textDecoration="underline"
                  fontWeight="500"
                  cursor="pointer"
                >
                  Show more
                </Text>
              </Grid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default FutureGateway;
