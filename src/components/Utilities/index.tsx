import React from 'react';
import MyContainer from '../container';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import ModalButton from '../ModalButton';

const title = 'Maximize the Utilities of Your Cryptos and Digital Collectibles';
const des =
  'xBank Will Match Your Portfolio of Web3 Assets with Available Financial Services and Recommend You A Better Yield while Holding Them';

const Utilities = () => {
  return (
    <MyContainer
      py={{
        md: 40,
        xs: 10,
        sm: 10,
      }}
    >
      <Flex
        justify={'space-between'}
        alignItems='center'
        gap={10}
        flexWrap='wrap'
        textAlign={{
          md: 'left',
          sm: 'center',
          xs: 'center',
        }}
      >
        <Box
          w={{
            md: '40%',
            sm: '100%',
            xs: '100%',
          }}
          order={1}
          display={{
            md: 'block',
            sm: 'none',
            xs: 'none',
          }}
        >
          <Box height={200} bg='pink'></Box>
        </Box>
        <Box
          w={{
            md: '50%',
            sm: '100%',
            xs: '100%',
          }}
        >
          <Heading
            fontSize={{
              md: 40,
              sm: 28,
              xs: 28,
            }}
            // lineHeight='57px'
            fontWeight={700}
            color='font.primary'
          >
            {title}
          </Heading>
          <Box
            w={'100%'}
            display={{
              md: 'none',
              sm: 'block',
              xs: 'block',
            }}
            my={8}
          >
            <Box height={200} bg='pink'></Box>
          </Box>
          <Text
            fontSize={{
              md: 16,
              sm: 12,
              xs: 12,
            }}
            color={'font.tip'}
            mt={6}
            mb={12}
          >
            {des}
          </Text>
          <Box>
            <ModalButton
              title='Exploring Web3'
              color={'#FFFFFF'}
              h={{
                md: 70,
                sm: 12,
                xs: 12,
              }}
              fontSize={{
                md: 26,
                sm: 12,
                xs: 12,
              }}
            />
          </Box>
        </Box>
      </Flex>
    </MyContainer>
  );
};

export default Utilities;
