import { HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";

const SingleHome = ({ home }) => {
  const { img, title } = home;

  return (
    <HStack gap="24px">
      <Image src={img} alt="" w="300px" h="200px" borderRadius="8px" />

      <Stack gap="0">
        <Text color="#6B7280" fontSize="14px">
          Entire home in Bordeaux
        </Text>
        <Heading fontSize="20px" fontWeight="500">
          {title}
        </Heading>
      </Stack>
    </HStack>
  );
};

export default SingleHome;
