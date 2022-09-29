import React from 'react';
import MyContainer from '../container';
import { Box, Heading, Text, Flex, Highlight, Divider } from '@chakra-ui/react';
import ModalButton from '../ModalButton';
import ResponsiveBox from '../ResponsiveBox';

const title = 'Maximize the Utilities of Your Cryptos and Digital Collectibles';
const des =
  'xBank Will Match Your Portfolio of Web3 Assets with Available Financial Services and Recommend You A Better Yield while Holding Them';

const Utilities = () => {
  return (
    <MyContainer
      py={{
        md: 40,
        xs: '60px',
        sm: '60px',
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
          order={2}
          display={{
            md: 'block',
            sm: 'none',
            xs: 'none',
          }}
        >
          <Box height={500} bg='lightgray'></Box>
        </Box>
        <Box
          w={{
            md: '50%',
            sm: '100%',
            xs: '100%',
          }}
          order={2}
        >
          <ResponsiveBox
            pc={
              <Heading
                fontSize={40}
                // lineHeight='57px'
                fontWeight={700}
                color='font.primary'
              >
                {title}
              </Heading>
            }
            mobile={
              <Heading
                fontSize={14}
                // lineHeight='57px'
                fontWeight={700}
                color='font.primary'
              >
                <Highlight
                  query={'Maximize the Utilities'}
                  styles={{
                    fontSize: 28,
                    display: 'block',
                    color: 'primary',
                  }}
                >
                  {title}
                </Highlight>
              </Heading>
            }
          />

          <Box
            w={'100%'}
            display={{
              md: 'none',
              sm: 'block',
              xs: 'block',
            }}
            my={8}
          >
            <Box height={300} bg='lightgray'></Box>
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
              w={{
                md: 300,
                sm: 230,
                xs: 230,
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
      <Box
        display={{
          md: 'none',
          sm: 'block',
          xs: 'block',
        }}
        mt={16}
      >
        <Divider />
      </Box>
    </MyContainer>
  );
};

export default Utilities;
