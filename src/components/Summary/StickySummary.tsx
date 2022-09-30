import React from 'react';
import { Box, Divider, Flex, Highlight, Text } from '@chakra-ui/react';
import { DATA } from './index';
import '../../style/global.scss';

const StickySummary = () => {
  return (
    <Flex
      bgColor={'rgba(255, 255, 255, 0.4)'}
      backdropFilter={'blur(22px)'}
      alignItems='center'
      justify={'center'}
      py={4}
    >
      {DATA.map(({ label, value }, index) => (
        <Flex key={value}>
          <Box>
            <Text
              align={'center'}
              fontSize={14}
              display='flex'
              alignItems={'center'}
              lineHeight='28px'
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
            <Divider orientation='vertical' mx={10} borderColor={'lightgray'} />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default StickySummary;
