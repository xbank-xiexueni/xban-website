import React from 'react';
import { Box, Button, Center, Flex, Text, Highlight } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import '../../style/global.scss';

type ItemProps = {
  title: string;
  description: string;
  extra?: React.ReactNode;
  buttonTitle: string;
  titleHighlight?: string[];
};

const Item: React.FunctionComponent<ItemProps> = ({
  title,
  description,
  buttonTitle,
  titleHighlight,
}) => {
  return (
    <Box paddingY={100} overflow={'hidden'}>
      <Header />
      <Box
        display={{
          sm: 'block',
          md: 'flex',
        }}
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
          <Button bg='primary' color={'#FFFFFF'} borderRadius={40}>
            {buttonTitle}
          </Button>
        </Box>
        <Box
          w={{
            sm: '100%',
            md: '50%',
          }}
        >
          <Box bg='pink' w='100%' height={500}></Box>
          插图
        </Box>
      </Box>
    </Box>
  );
};

const Header = () => {
  const DATA = ['11111', '22222'];
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
    <Box>
      <Center fontSize={60} flexWrap='wrap'>
        Why choose&nbsp;
        <StaticImage alt='name' src='../../images/xBank.png' height={70} />?
      </Center>
      {/* <Center> */}
      <Flex alignItems='center' justifyContent={'center'} flexWrap='wrap'>
        <Box w={100}>
          <Slider {...settings} className='d-inline-block '>
            {DATA.map((item) => (
              <Text color={'primary'} fontWeight={500} fontSize={32} key={item}>
                {item}
              </Text>
            ))}
          </Slider>
        </Box>
        <Text fontWeight={500} fontSize={32}>
          &nbsp;Never Been Easy Like This
        </Text>
      </Flex>
    </Box>
  );
};

export default Item;
