import { Input, Stack, Text } from "@chakra-ui/react";

const InputField = ({ label, ...rest }) => {
  return (
    <Stack gap="0" fontSize="14px">
      <Text fontWeight="bold">{label}</Text>
      <Input variant="unstyled" {...rest} />
    </Stack>
  );
};

export default InputField;
