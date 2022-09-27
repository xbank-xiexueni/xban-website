import { Box, Center, Heading } from '@chakra-ui/react';
import React from 'react';
import AutoSlider from '../AutoSlider';
import Title from '../Title';

const Featured = () => {
  return (
    <Box bg='bg.gray' pt={100}>
      <Title>As Featured In</Title>
      <AutoSlider data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
      <AutoSlider data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} isRtl />
    </Box>
  );
};

export default Featured;
