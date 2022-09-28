import { Box, Divider, Flex, Text } from '@chakra-ui/react';
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
    <Flex justify={'center'} flexWrap='wrap' my={16}>
      {DATA.map(({ label, value }, index) => (
        <Flex justify={'center'} key={value}>
          <Box textAlign={'center'}>
            <Text
              align={'center'}
              fontSize={60}
              fontWeight={700}
              color='font.primary'
            >
              {value}
            </Text>
            <Text fontSize={14} color='font.tip'>
              {label}
            </Text>
          </Box>
          {index !== DATA.length - 1 && (
            <Divider
              orientation='vertical'
              mx={10}
              display={{
                xs: 'none',
                sm: 'none',
                md: 'block',
              }}
            />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default Summary;
