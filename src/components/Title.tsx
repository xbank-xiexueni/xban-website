import { Text, TextProps } from '@chakra-ui/react';
import React from 'react';

const Title: React.FunctionComponent<TextProps> = ({ children, ...rest }) => {
  return (
    <Text
      mb={{ md: 50, sm: 8, sx: 8 }}
      fontSize={{
        md: 60,
        sm: 28,
        xs: 28,
      }}
      fontWeight={700}
      textAlign={'center'}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Title;
