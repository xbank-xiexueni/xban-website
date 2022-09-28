import React from 'react';
import MyContainer from '../container';
import { Box, Heading, Text } from '@chakra-ui/react';
import ModalButton from '../ModalButton';

const title = 'Maximize the Utilities of Your Cryptos and Digital Collectibles';
const des =
  'xBank Will Match Your Portfolio of Web3 Assets with Available Financial Services and Recommend You A Better Yield while Holding Them';

const Utilities = () => {
  return (
    <MyContainer py={40}>
      <Box
        justifyContent={'space-between'}
        alignItems='center'
        gap={10}
        display={{
          sm: 'block',
          md: 'flex',
        }}
      >
        <Box>
          <Box
            w={{
              md: '40%',
              sm: '100%',
              xs: '100%',
            }}
            height={200}
            bg='pink'
          ></Box>
        </Box>
        <Box>
          <Heading
            fontSize={{
              md: 40,
              sm: 28,
              xs: 28,
            }}
            textAlign={{
              md: 'left',
              sm: 'center',
              xs: 'center',
            }}
            // lineHeight='57px'
            fontWeight={700}
            color='font.primary'
          >
            {title}
          </Heading>
          <Text
            fontSize={16}
            lineHeight='30px'
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
      </Box>
    </MyContainer>
  );
};

export default Utilities;
