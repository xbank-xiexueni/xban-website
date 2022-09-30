import { Box, Flex, Text, Image, useDisclosure, Slide } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import Icon from '../images/icon.png';
import ModalButton from './ModalButton';

const MobileStickyFooter = () => {
  const [show, setShow] = useState(true);

  return (
    <Box
      display={{
        md: 'none',
        sm: 'block',
        xs: 'block',
      }}
    >
      <Slide direction='bottom' in={!show} style={{ zIndex: 10 }}></Slide>
      {show && (
        <Box
          position={'fixed'}
          zIndex={21}
          bottom={2}
          left={6}
          right={6}
          bg='#FFF'
          borderRadius={10}
          boxShadow='0px 0px 18px rgba(0, 0, 0, 0.15)'
        >
          <Box
            position={'absolute'}
            right={2}
            top={2}
            onClick={() => {
              setShow(false);
            }}
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.5 4.5L19.5 19.5'
                stroke='#566E8C'
                strokeWidth='2'
                strokeLinecap='round'
              />
              <path
                d='M19.5 4.5L4.5 19.5'
                stroke='#566E8C'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </Box>
          <Flex
            alignItems={'center'}
            justify='space-between'
            px={4}
            gap={'10px'}
            height={20}
          >
            <Image src={Icon} alt='logo' width={50} height={50} />
            <Box>
              <Text fontSize={16} fontWeight={700} color='font.primary'>
                xBank Apps
              </Text>
              <Text fontSize={12} color='font.primary'>
                Sign up and get 5 USDT & 500 BUSD
              </Text>
            </Box>
            <ModalButton
              title='Get App'
              arrow={false}
              w={'64px'}
              h='30px'
              borderRadius={20}
              bg={'primary'}
              color='#FFFFFF'
              fontSize={12}
              px={10}
            />
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default MobileStickyFooter;
