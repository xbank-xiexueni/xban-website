import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  Highlight,
  useStatStyles,
  ScaleFade,
  Divider,
} from '@chakra-ui/react';
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from 'gatsby-plugin-image';
import Slider from 'react-slick';
import '../../style/global.scss';
import ModalButton from '../ModalButton';
import Title from '../Title';
import { DIVIDE } from '../../constants/paddingY';

type ItemProps = {
  title: string;
  description: string;
  extra?: React.ReactNode;
  buttonTitle: string;
  titleHighlight?: string[];
  image: IGatsbyImageData;
};

const Item: React.FunctionComponent<ItemProps> = ({
  title,
  description,
  buttonTitle,
  titleHighlight,
  image,
}) => {
  return (
    <Box py={DIVIDE}>
      <Box
        display={{
          sm: 'block',
          md: 'flex',
        }}
        gap={10}
        justifyContent={'space-between'}
        alignItems='center'
        mt={DIVIDE}
      >
        {/* 左边 */}
        <Box
          w={{
            sm: '100%',
            md: '50%',
          }}
        >
          <Text fontSize={40} lineHeight={'60px'} fontWeight={700}>
            <Highlight
              query={titleHighlight || ''}
              styles={{ color: 'var(--chakra-colors-primary)' }}
            >
              {title}
            </Highlight>
          </Text>

          <Text fontSize={16} lineHeight={'24px'} color='font.tip' my={6}>
            {description}
          </Text>
          <ModalButton
            title={buttonTitle}
            w={257}
            h={68}
            color='#FFF'
            fontSize={24}
          />
        </Box>
        <Box
          w={{
            sm: '100%',
            md: '50%',
          }}
        >
          {image && <GatsbyImage image={image} alt='' loading='lazy' />}
          {!image && <Box w='500px' h='500px' bg='pink'></Box>}
        </Box>
      </Box>
    </Box>
  );
};

export const Header = () => {
  const DATA = ['Token', ' NFT', 'Game', 'Defi', 'DAO'];
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

    // variableWidth: true,
  };
  return (
    // <Box position={'sticky'} top={130} bg='bg.gray' zIndex={20} py={'4px'}>
    <Box>
      <Title mb={4} w='100%' textAlign={'center'}>
        Why choose&nbsp;
        <Text
          as='span'
          bgGradient={
            'linear-gradient(258.47deg, #EA01E5 17.23%, #5844F5 50.33%, #1CFEF0 92.82%)'
          }
          bgClip='text'
          fontWeight={900}
        >
          xBank
        </Text>
      </Title>
      <Flex alignItems='center' justifyContent={'center'} flexWrap='wrap'>
        <Box w='80px' position={'relative'} top={1}>
          <Slider {...settings} className='d-inline-block'>
            {DATA.map((item) => (
              <Text
                as='span'
                color={'primary'}
                fontWeight={500}
                fontSize={32}
                key={item}
              >
                {item}
              </Text>
            ))}
          </Slider>
        </Box>

        <Text fontWeight={500} fontSize={32} lineHeight={'48px'}>
          &nbsp;New Internet Never Been Easy Like This
        </Text>
      </Flex>
    </Box>
  );
};

export default Item;
