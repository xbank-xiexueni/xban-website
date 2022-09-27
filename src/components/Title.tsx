import { Center, Heading, HeadingProps } from '@chakra-ui/react';
import React from 'react';

const Title: React.FunctionComponent<HeadingProps> = ({
  children,
  ...rest
}) => {
  return (
    <Center mb={50}>
      <Heading fontSize={60} fontWeight={700} {...rest}>
        {children}
      </Heading>
    </Center>
  );
};

export default Title;
