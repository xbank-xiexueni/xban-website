import { Container, ContainerProps } from '@chakra-ui/react';
import React from 'react';
const MyContainer: React.FunctionComponent<
  {
    children: React.ReactNode;
  } & ContainerProps
> = ({ children, bg, ...rest }) => {
  return (
    <Container
      maxW={{
        xs: 345,
        sm: 648,
        md: 900,
        lg: 1200,
      }}
      paddingX={0}
      bg={bg}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default MyContainer;
