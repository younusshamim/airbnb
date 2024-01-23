import { Button } from "@chakra-ui/react";
import React from "react";

const PrimaryButton = ({ children, bgColor, ...rest }) => {
  return (
    <Button
      p="16px 24px"
      borderRadius="8px"
      w="fit-content"
      _active={{ opacity: 0.8 }}
      fontWeight="500"
      bg={bgColor}
      _hover={{ bg: bgColor }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
