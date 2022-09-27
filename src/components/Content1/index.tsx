import { Box, Divider, Flex, Heading, Highlight, Text } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';

import Summary from '../Summary';
import ModalButton from '../ModalButton';
import '@/style/global.scss';

const LIST = [
  'xBank is the First Platform Making Web3 and Crypto As Easy As Shopping Online ',
  'Explore Web3 and Crypto Opportunities, Set Up Multi-Chain Identities, Pay with Trustful Gateway, Hold Digital Assets Safely and More',
  'In One Single Place, with One Single Tap',
];

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
    // variableWidth: true,
  };
  return (
    <Box
      id='content1'
      pl={{
        lg: 100,
      }}
      py={100}
    >
      <Flex alignItems={'center'} mb={70}>
        <Box w={'45%'} pr={19}>
          <Heading fontSize={60} lineHeight='70px' fontWeight={900}>
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
                {['Web3 Events', 'Web3 Events'].map((item, index) => (
                  <Text
                    color={'primary'}
                    fontWeight={500}
                    fontSize={24}
                    key={`${item}${index}`}
                  >
                    {item}
                  </Text>
                ))}
              </Slider>
            </Box>
            <Text>&nbsp;in xBank</Text>
          </Flex>
          {/* <Text mt={10} mb={5} fontSize={24} fontWeight={500} lineHeight='28px'>
            <Highlight query={'Web3 Events'} styles={{ color: 'primary' }}>
              Find the Hottest Web3 Events in xBank
            </Highlight>
          </Text> */}
          {LIST.map((item) => (
            <Flex key={item}>
              *&nbsp;
              <Text
                maxW={470}
                fontSize={14}
                lineHeight='20px'
                color={'font.gray'}
              >
                {item}
              </Text>
            </Flex>
          ))}

          <ModalButton
            title='Try it !'
            color={'#FFFFFF'}
            w={371}
            fontSize={32}
            height={78}
            borderRadius={40}
            mt={70}
          />
        </Box>
        <Box w={'55%'} h='300px' bg='pink'>
          图片
        </Box>
      </Flex>
      <Divider />
      <Summary />
    </Box>
  );
};

export default Content1;
