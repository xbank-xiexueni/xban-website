import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

const Title: React.FunctionComponent<TextProps> = ({ children, ...rest }) => {
  return (
    <Text mb={50} fontSize={60} fontWeight={700} textAlign={'center'} {...rest}>
      {children}
    </Text>
  );
};

export default Title;
