import { Stack, Text } from "@chakra-ui/react";

const Card = ({ title }) => {
  return (
    <Stack w="full">
      <Text fontWeight="500">{title}</Text>

      <Text fontSize="14px" color="#4B5563">
        Help Center
      </Text>
      <Text fontSize="14px" color="#4B5563">
        Safety information
      </Text>
      <Text fontSize="14px" color="#4B5563">
        Cancellation options
      </Text>
      <Text fontSize="14px" color="#4B5563">
        Try hosting
      </Text>
      <Text fontSize="14px" color="#4B5563">
        Airbnb Luxe
      </Text>
    </Stack>
  );
};

export default Card;
