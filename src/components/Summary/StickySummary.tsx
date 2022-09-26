import React from 'react';
import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react';
import { DATA } from './index';

const StickySummary = () => {
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

export default StickySummary;
