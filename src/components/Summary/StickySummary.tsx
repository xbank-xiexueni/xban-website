import React from 'react';
import { Box, Center, Divider, Flex, Highlight, Text } from '@chakra-ui/react';
import { DATA } from './index';
import '../../style/global.scss';

const StickySummary = () => {
  return (
    <Flex
      bgColor={'rgba(255, 255, 255, 0.8)'}
      // backdropBlur={'lg'}
      alignItems='center'
      justify={'center'}
      py={6}
    >
      {DATA.map(({ label, value }, index) => (
        <Flex key={value}>
          <Box>
            <Text
              align={'center'}
              fontSize={14}
              display='flex'
              alignItems={'center'}
            >
              <Highlight
                query={value}
                styles={{
                  fontSize: 30,
                  fontWeight: 700,
                  marginRight: 2,
                }}
              >
                {`${value} ${label}`}
              </Highlight>
            </Text>
          </Box>

          {index !== DATA.length - 1 && (
            <Divider orientation='vertical' mx={10} borderColor={'pink'} />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default StickySummary;
