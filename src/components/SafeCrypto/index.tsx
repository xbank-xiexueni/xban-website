import MyContainer from '../container';
import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import Title from '../Title';
import ResponsiveBox from '../ResponsiveBox';
import { DIVIDE } from '../../constants/paddingY';
import one from '../../images/service/11.png';
import two from '../../images/service/22.png';
import three from '../../images/service/33.png';
import four from '../../images/service/44.png';
import { handleNavigate } from '../../utils/navigate';

const SafeCrypto = () => {
  const DATA = [
    {
      key: 'one',
      url: 'https://www.fincen.gov',
      image: one,
      h: {
        md: 103,
        sm: 68,
        xs: 68,
      },
      w: {
        md: 103,
        sm: 68,
        xs: 68,
      },
    },
    // {
    //   key: 'two',
    //   url: 'https://www.austrac.gov.au',
    //   image: two,
    //   h: {
    //     md: 112,
    //     sm: 68,
    //     xs: 68,
    //   },
    //   w: {
    //     md: 178,
    //     sm: 104,
    //     xs: 104,
    //   },
    // },
    {
      key: 'three',
      image: three,
      url: 'https://www.fca.org.uk',
      h: {
        md: 71,
        sm: '40px',
        xs: '40px',
      },
      w: {
        md: 214,
        sm: '118px',
        xs: '118px',
      },
    },
    {
      key: 'four',
      image: four,
      url: 'https://www.fintrac-canafe.gc.ca',
      h: {
        md: 106,
        sm: '60px',
        xs: '60px',
      },
      w: {
        md: 178,
        sm: '100px',
        xs: '100px',
      },
    },
  ];

  return (
    <MyContainer
      py={{
        md: DIVIDE,
        sm: '60px',
        xs: '60px',
      }}
    >
      <Title
        mb={{
          md: 20,
          sm: 8,
          xs: 8,
        }}
      >
        Safe Crypto Service
      </Title>
      <Flex justify={'space-around'} alignItems='center' flexWrap='wrap'>
        {DATA.map(({ url, key, h, w, image }) => (
          // <Box
          //   key={key}
          //   onClick={() => {
          //     handleNavigate(url, true);
          //   }}
          // >
          //   <GatsbyImage
          //     loading='lazy'
          //     image={query[key]?.childImageSharp?.gatsbyImageData}
          //     alt=''
          //     style={style}
          //   />
          // </Box>
          // <Image src={image} h={h} w={w} alt='safe' />

          <ResponsiveBox
            key={key}
            pc={
              // <GatsbyImage
              //   loading='lazy'
              //   image={query[key]?.childImageSharp?.gatsbyImageData}
              //   alt='safe'
              //   style={style}
              // />
              <Image
                src={image}
                h={h}
                w={w}
                alt='safe'
                cursor={'pointer'}
                onClick={() => {
                  handleNavigate(url, true);
                }}
              />
            }
            mobile={
              <Flex
                w={160}
                alignItems='center'
                justify={'center'}
                bg={'bg.gray'}
                height={90}
                mb={2}
                borderRadius={10}
                onClick={() => {
                  handleNavigate(url, true);
                }}
              >
                <Image src={image} h={h} w={w} alt='safe' loading='lazy' />
              </Flex>
            }
          />
        ))}
      </Flex>
    </MyContainer>
  );
};

export default SafeCrypto;
