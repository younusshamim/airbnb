import { Heading, Stack } from "@chakra-ui/react";
import PrimaryButton from "../../../components/PrimaryButton";
import QuestionBg from "../../../assets/QuestionBg.jpg";

const Questions = () => {
  return (
    <Stack
      mx="80px"
      justify="space-between"
      backgroundImage={`url(${QuestionBg})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="640px"
      borderRadius="8px"
      p="80px"
    >
      <Heading color="white" fontSize="96px" fontWeight="500">
        Questions <br /> about <br /> hosting?
      </Heading>

      <PrimaryButton>Ask a Superhost</PrimaryButton>
    </Stack>
  );
};

export default Questions;
