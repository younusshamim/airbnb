import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { toTitleCase } from "../../../utils";

const SingleHome = ({ home }) => {
  const { img, title, details, review, reviewCount, perNightCost } = home;

  return (
    <HStack gap="24px">
      <Image src={img} alt={title} w="300px" h="200px" borderRadius="8px" />

      <Stack gap="0">
        <HStack justify="space-between">
          <Text color="#6B7280" fontSize="14px">
            Entire home in Bordeaux
          </Text>

          <Box fontSize="22px" cursor="pointer">
            <FaRegHeart />
          </Box>
        </HStack>

        <Heading fontSize="20px" fontWeight="500">
          {toTitleCase(title)}
        </Heading>

        <Box h="1px" w="40px" background="#E5E7EB" my="16px"></Box>

        <HStack flexWrap="wrap">
          {details.map((detail, i) => (
            <Flex key={detail + i} fontSize="14px" color="gray.500" gap="8px">
              <Text>{detail}</Text>
              <Text>.</Text>
            </Flex>
          ))}
        </HStack>

        <Box h="1px" w="40px" background="#E5E7EB" my="16px"></Box>

        <HStack justifyContent="space-between">
          <HStack>
            <Text fontSize="14px" fontWeight="500">
              {review}
            </Text>
            <Box color="#F59E0B" fontSize="20px">
              <FaStar />
            </Box>
            <Text fontSize="14px" fontWeight="400">
              ({reviewCount} reviews)
            </Text>
          </HStack>

          <HStack>
            <Text color="#374151" fontSize="18px" fontWeight="500">
              ${perNightCost}
            </Text>
            <Text fontSize="14px" color="#374151">
              /night
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default SingleHome;
