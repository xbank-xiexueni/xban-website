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
    <Flex justify={'center'} mt={50}>
      {DATA.map(({ label, value }, index) => (
        <Flex>
          <Box textAlign={'center'}>
            <Text
              align={'center'}
              fontSize={60}
              fontWeight={700}
              color='font.primary'
            >
              {value}
            </Text>
            <Text fontSize={14} color='font.gray'>
              {label}
            </Text>
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
