import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const DATA = [
  {
    label: 'Supported Countries',
    value: '70+',
  },
  {
    label: 'Supported Countries',
    value: '200,000+',
  },
  {
    label: 'Supported Countries',
    value: '1000+',
  },
];

const Summary = () => {
  return (
    <Flex justify={'center'}>
      {DATA.map(({ label, value }, index) => (
        <Flex>
          <Box>
            <Text align={'center'}>{value}</Text>
            <Text>{label}</Text>
          </Box>
          {index !== DATA.length - 1 && (
            <Divider orientation='vertical' mx={10} />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default Summary;
