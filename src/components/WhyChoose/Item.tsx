import React from 'react';
import { Box, Flex, Text, Highlight } from '@chakra-ui/react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import '../../style/global.scss';
import ModalButton from '../ModalButton';
import Title from '../Title';
import { DIVIDE } from '../../constants/paddingY';

type ItemProps = {
  title: string;
  description: string;
  extra?: IGatsbyImageData;
  buttonTitle: string;
  titleHighlight?: string[];
  image: IGatsbyImageData;
  id: string;
};

const Item: React.FunctionComponent<ItemProps> = ({
  title,
  description,
  buttonTitle,
  titleHighlight,
  image,
  extra,
  id,
}) => {
  return (
    <Box
      py={{
        md: DIVIDE,
        sm: 10,
        xs: 10,
      }}
    >
      <Flex
        gap={{
          md: 10,
          sm: 0,
          xs: 0,
        }}
        justifyContent={'space-between'}
        alignItems='center'
        flexWrap={'wrap'}
        // mt={DIVIDE}
      >
        {/* 左边 */}
        <Box
          order={{
            md: 1,
            sm: 2,
            xs: 2,
          }}
          w={{
            md: '50%',
            sm: '100%',
            xs: '100%',
          }}
          textAlign={{
            md: 'left',
            sm: 'center',
            xs: 'center',
          }}
        >
          {id === 'why1' ? (
            <Text
              fontSize={{
                md: 40,
                sm: 18,
                xs: 18,
              }}
              fontWeight={700}
            >
              <Text>
                <Highlight
                  query={titleHighlight || ''}
                  styles={{ color: 'var(--chakra-colors-primary)' }}
                >
                  NFT lowest as $10,
                </Highlight>
              </Text>
              Join to Free Mint & Pre-Mint
            </Text>
          ) : (
            <Text
              fontSize={{
                md: 40,
                sm: 18,
                xs: 18,
              }}
              fontWeight={700}
            >
              <Highlight
                query={titleHighlight || ''}
                styles={{ color: 'var(--chakra-colors-primary)' }}
              >
                {title}
              </Highlight>
            </Text>
          )}

          <Text
            fontSize={{
              md: 16,
              sm: 12,
              xs: 12,
            }}
            lineHeight={'24px'}
            color='font.tip'
            my={6}
          >
            {description}
          </Text>
          {extra && (
            <Box mb={6}>
              <GatsbyImage
                image={extra}
                alt=''
                loading='lazy'
                style={{ width: 250 }}
              />
            </Box>
          )}

          <ModalButton
            title={buttonTitle}
            w={
              id === 'why3'
                ? { md: 330, sm: 230, xs: 230 }
                : {
                    md: 300,
                    sm: 230,
                    xs: 230,
                  }
            }
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
            color='#FFF'
          />
        </Box>
        <Box
          w={{
            md: '45%',
            sm: '100%',
            xs: '100%',
          }}
          order={{
            md: 2,
            sm: 1,
            xs: 1,
          }}
          h={500}
        >
          {image && <GatsbyImage image={image} alt='' loading='lazy' />}
          {!image && <Box height={500} bg='lightgray' />}
        </Box>
      </Flex>
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
      <Title mb={{ md: 4, sm: 1, xs: 1 }} w='100%' textAlign={'center'}>
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
        <Box
          w={{ md: '90px', sm: '40px', xs: '40px' }}
          position={'relative'}
          top={{
            md: 1,
            sm: 0.5,
            xs: 0.5,
          }}
        >
          <Slider {...settings} className='d-inline-block'>
            {DATA.map((item) => (
              <Box
                // w={{ md: '90px', sm: '40px', xs: '40px' }}
                textAlign={{
                  md: 'right',
                  sm: 'left',
                  xs: 'left',
                }}
                key={item}
              >
                <Text
                  as='span'
                  color={'primary'}
                  fontWeight={500}
                  fontSize={{
                    md: 32,
                    sm: 14,
                    xs: 14,
                  }}
                  key={item}
                >
                  {item}
                </Text>
              </Box>
            ))}
          </Slider>
        </Box>

        <Text
          fontWeight={500}
          fontSize={{
            md: 32,
            sm: 14,
            xs: 14,
          }}
        >
          &nbsp;New Internet Never Been Easy Like This
        </Text>
      </Flex>
    </Box>
  );
};

export default Item;
