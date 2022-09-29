import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Icon from '../images/icon.png';
import ModalButton from './ModalButton';

const MobileStickyFooter = () => {
  return (
    <Box
      display={{
        md: 'none',
        sm: 'block',
        xs: 'block',
      }}
    >
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
        <Flex
          alignItems={'center'}
          justify='space-between'
          px={4}
          gap={'10px'}
          height={20}
        >
          <Image src={Icon} alt='' width={50} height={50} />
          <Box>
            <Text fontSize={16} fontWeight={700} color='font.primary'>
              xBank Apps
            </Text>
            <Text fontSize={12} color='font.primary'>
              Support more than 70 kinds of fiats to purchase.
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
    </Box>
  );
};

export default MobileStickyFooter;
