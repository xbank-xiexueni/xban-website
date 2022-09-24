import { Container as ChakraContainer } from '@chakra-ui/react';
import React from 'react';
const Container: React.FunctionComponent<{
  children: React.ReactElement;
}> = ({ children }) => {
  return (
    <ChakraContainer maxW={{ sm: '345px', md: '706px', lg: '1000px' }}>
      {children}
    </ChakraContainer>
  );
};

export default Container;
