import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const DATA = [
  {
    label: 'Supported Countries',
    value: '70+',
  },
  {
    label: 'Supported NFT/DAO/Defi/Game Assets',
    value: '2,000,000+',
  },
  {
    label: 'Available Cryptos',
    value: '90+',
  },
];

const Summary = () => {
  return (
    <Flex
      justify={'center'}
      flexWrap='wrap'
      my={{
        md: 16,
        sm: 8,
        xs: 8,
      }}
      gap={{
        sm: 3,
        xs: 3,
      }}
    >
      {DATA.map(({ label, value }) => (
        <Flex justify={'center'} key={value} w='30%'>
          <Box textAlign={'center'}>
            <Text
              align={'center'}
              fontSize={{
                md: 60,
                sm: 24,
                xs: 24,
              }}
              fontWeight={700}
              color='font.primary'
            >
              {value}
            </Text>
            <Text
              fontSize={{
                md: 14,
                sm: 12,
                xs: 12,
              }}
              color='font.tip'
            >
              {label}
            </Text>
          </Box>
          {/* {index !== DATA.length - 1 && (
            <Divider
              orientation='vertical'
              // mx={10}
              display={{
                xs: 'none',
                sm: 'none',
                md: 'block',
              }}
            />
          )} */}
        </Flex>
      ))}
    </Flex>
  );
};

export default Summary;
