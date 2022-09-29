import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useFocusEffect,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import Summary from '../Summary';
import ModalButton from '../ModalButton';
import '@/style/global.scss';
import bg from '../../images/content1-bg.png';
import { DIVIDE } from '../../constants/paddingY';
import ResponsiveBox from '../ResponsiveBox';
import MyContainer from '../container';

const LIST = [
  'xBank is the First Platform Making Web3 and Crypto As Easy As Shopping Online ',
  'Explore Web3 and Crypto Opportunities, Set Up Multi-Chain Identities, Pay with Trustful Gateway, Hold Digital Assets Safely and More, In One Single Place, with One Single Tap',
];

const isBrowser = typeof window !== 'undefined';

const Content1 = () => {
  const settings = {
    // dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    arrows: false,
    autoPlaySpeed: 200,
    adaptiveHeight: true,
  };
  const [pl, setPl] = useState(isBrowser ? window?.innerWidth - 1200 : 0);

  useEffect(() => {
    if (!isBrowser) return;
    addEventListener('resize', () => {
      setPl(window?.innerWidth - 1200);
    });
    return removeEventListener('resize', () => {
      // console.log;
    });
  }, []);

  return (
    <Box position={'relative'}>
      <Box position={'absolute'} zIndex={2} left={0} top={-10}>
        <Image
          src={bg}
          alt=''
          w={{
            md: '50%',
            sm: '100%',
            xs: '100%',
          }}
        />
      </Box>
      <Box
        id='content1'
        pt={{
          md: DIVIDE,
          sm: 12,
          xs: 12,
        }}
        pl={{
          md: pl / 2,
        }}
      >
        <ResponsiveBox
          mobile={
            <Box>
              <Heading
                fontSize={28}
                // lineHeight='70px'
                fontWeight={900}
                textAlign='center'
                px={3}
              >
                <Text>Your All-In-One Portal for</Text>
                <Text>
                  for
                  <Text
                    as='span'
                    bgGradient={
                      'linear-gradient(254.66deg, #EA01E5 16.39%, #5844F5 49.14%, #1CFEF0 91.18%)'
                    }
                    bgClip='text'
                  >
                    &nbsp;Web3 and Cryptos
                  </Text>
                </Text>
              </Heading>
              <Flex
                alignItems='center'
                flexWrap='wrap'
                fontSize={14}
                fontWeight={500}
                lineHeight='28px'
                my={4}
                justify='center'
              >
                <Text>Find the Hottest&nbsp;</Text>
                <Box w={90} position='relative' top={1.5}>
                  <Slider className='d-inline-block' {...settings}>
                    {['Assets', 'Web3 Events', 'Communities'].map((item) => (
                      <Box textAlign='center' key={item}>
                        <Text color={'primary'} fontWeight={500} fontSize={14}>
                          {item}
                        </Text>
                      </Box>
                    ))}
                  </Slider>
                </Box>
                <Text>&nbsp;in xBank</Text>
              </Flex>

              <Box
                bg='lightgray'
                h='300px'
                mx={4}
                display={{ md: 'none', sm: 'block', xs: 'block' }}
              ></Box>
              <Flex justify={'center'} my={4}>
                <ModalButton
                  title='Try it !'
                  color={'#FFFFFF'}
                  w={232}
                  fontSize={16}
                  h={47}
                  borderRadius={40}
                />
              </Flex>

              <Box mb={8} mx={4}>
                {LIST.map((item) => (
                  <Flex key={item} gap={2}>
                    •
                    <Text fontSize={12} color={'font.tip'} mb={1}>
                      {item}
                    </Text>
                  </Flex>
                ))}
              </Box>
            </Box>
          }
          pc={
            <Flex alignItems={'center'} mb={8}>
              <Box w='40%'>
                <Heading
                  fontSize={60}
                  // lineHeight='70px'
                  fontWeight={900}
                >
                  <Text>Your All-In-One</Text>
                  <Text>
                    Portal for
                    <Text
                      as='span'
                      bgGradient={
                        'linear-gradient(254.66deg, #EA01E5 16.39%, #5844F5 49.14%, #1CFEF0 91.18%)'
                      }
                      bgClip='text'
                    >
                      &nbsp;Web3&nbsp;
                    </Text>
                  </Text>
                  <Text>and Cryptos</Text>
                </Heading>

                <Flex
                  alignItems='center'
                  flexWrap='wrap'
                  fontSize={24}
                  fontWeight={500}
                  lineHeight='28px'
                  mt={10}
                  mb={5}
                >
                  <Text>Find the Hottest&nbsp;</Text>
                  <Box w={150} position='relative' top={1}>
                    <Slider className='d-inline-block' {...settings}>
                      {['Assets', 'Web3 Events', 'Communities'].map((item) => (
                        <Box w={150} textAlign='center' key={item}>
                          <Text
                            color={'primary'}
                            fontWeight={500}
                            fontSize={24}
                          >
                            {item}
                          </Text>
                        </Box>
                      ))}
                    </Slider>
                  </Box>
                  <Text>&nbsp;in xBank</Text>
                </Flex>
                {LIST.map((item) => (
                  <Flex key={item}>
                    •
                    <Text
                      maxW={470}
                      fontSize={14}
                      lineHeight='20px'
                      color={'font.tip'}
                    >
                      {item}
                    </Text>
                  </Flex>
                ))}
                <ModalButton
                  title='Try it !'
                  color={'#FFFFFF'}
                  w={{
                    md: 371,
                    sm: 232,
                    xs: 232,
                  }}
                  fontSize={32}
                  h={{
                    md: 78,
                    sm: 47,
                    xs: 47,
                  }}
                  borderRadius={40}
                  mt={70}
                />
              </Box>
              <Box
                bg='lightgray'
                w={'60%'}
                h='300px'
                display={{ md: 'block', sm: 'none', xs: 'none' }}
              ></Box>
            </Flex>
          }
        />

        <Divider />
      </Box>
      <MyContainer>
        <Summary />
      </MyContainer>
    </Box>
  );
};

export default Content1;
