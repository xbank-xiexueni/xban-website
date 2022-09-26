import { Box } from '@chakra-ui/react';
import React from 'react';
import Summary from '../Summary';

const Content1 = () => {
  return (
    <Box bg='pink' id='content1'>
      <Box h={200}>121 Summary</Box>
      <Summary />
    </Box>
  );
};

export default Content1;
