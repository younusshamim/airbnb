import { Divider, HStack, Stack, Text } from "@chakra-ui/react";
import homeList from "./homeList";
import SingleHome from "./SingleHome";

const HomeContent = () => {
  const filterList = [
    "Free cancellation",
    "Type of place",
    "Price",
    "Instant Book",
    "More filters",
  ];

  return (
    <Stack p="40px" w="60%" gap="24px">
      <Text color="#6B7280">200+ Airbnb Luxe stays in Bordeaux</Text>

      <HStack gap="8px">
        {filterList.map((filter) => (
          <Text
            key={filter}
            fontSize="14px"
            cursor="pointer"
            p="6px 12px"
            border="1px solid #E5E7EB"
            boxShadow="md"
            borderRadius="100px"
          >
            {filter}
          </Text>
        ))}
      </HStack>

      <Divider
        style={{
          backgroundColor: "#E5E7EB",
          height: "1px",
        }}
      />

      {homeList.map((home, index) => (
        <SingleHome home={home} key={index} />
      ))}
    </Stack>
  );
};

export default HomeContent;
