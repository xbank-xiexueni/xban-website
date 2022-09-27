import React from 'react';
import { Box, Button, Center, Flex, Text, Highlight } from '@chakra-ui/react';
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from 'gatsby-plugin-image';
import Slider from 'react-slick';
import '../../style/global.scss';
import ModalButton from '../ModalButton';
import Title from '../Title';

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
    <Box paddingY={100}>
      <Header />
      <Box
        display={{
          sm: 'block',
          md: 'flex',
        }}
        gap={10}
        justifyContent={'space-between'}
        alignItems='center'
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
          <GatsbyImage image={image} alt='' loading='lazy' />
        </Box>
      </Box>
    </Box>
  );
};

export const Header = () => {
  const DATA = ['Token', 'Token'];
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
    <Box bg='bg.gray' py={6}>
      <Title display={'flex'}>
        Why choose&nbsp;
        <Text
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
        <Box w={100}>
          <Slider {...settings} className='d-inline-block '>
            {DATA.map((item, index) => (
              <Text
                color={'primary'}
                fontWeight={500}
                fontSize={32}
                key={`${item}${index}`}
              >
                {item}
              </Text>
            ))}
          </Slider>
        </Box>
        <Text fontWeight={500} fontSize={32} lineHeight={'48px'}>
          &nbsp;Never Been Easy Like This
        </Text>
      </Flex>
    </Box>
  );
};

export default Item;
