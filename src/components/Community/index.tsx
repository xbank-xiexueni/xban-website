import { Box, Flex, Highlight, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Slider from 'react-slick';
import { DIVIDE } from '../../constants/paddingY';
import {
  DISCORD_URL,
  LINKEDIN_URL,
  MEDIUM_URL,
  TWITTER_URL,
} from '../../constants/URL';
import { handleNavigate } from '../../utils/navigate';
import MyContainer from '../container';
import ResponsiveBox from '../ResponsiveBox';
import Title from '../Title';
import CardBorder from './CardBorder';

const COMMENT_DATA = [
  {
    state: 'United Kingdom',
    name: 'Solala',
    p: '@_euxo1uvss',
    comment: (
      <Box>
        Thank you so much sir @furrincrypto for hosting this Giveaway and to
        thesponsor
        <Text color='primary' as='span'>
          <a href={TWITTER_URL} target='_blank'>
            &nbsp;@xBank_Official&nbsp;
          </a>
        </Text>
        my greatest Thank you! Another Blessing to begrateful for! Bless you
        more, sir! Stay safe x
      </Box>
    ),
  },
  {
    p: 'Danielle Staggs',
    name: '@Billyswife94',
    state: 'United States',
    comment: (
      <Box>
        #NFT #web3 #xbank xBank is a platform that helps web2 users buy NFTs and
        digital currency directly
        <Text color='primary' as='span'>
          <a href={TWITTER_URL} target='_blank'>
            &nbsp;@xBank_Official&nbsp;
          </a>
        </Text>
      </Box>
    ),
  },
  {
    p: 'Top pour les novices!',
    name: 'Beuhbeuhbeuh567',
    state: 'French',
    comment:
      'Pratiquant la crypto depuis un moment , je trouve cette plateforme vraiment top et simple pour les novices , ça vous permet d’apprendre et d’investir avec des risques moindre.',
  },
  {
    p: 'Slick Investment Machine',
    name: 'Bpurcell95',
    state: 'United States',
    comment:
      'On xBank, I can easily buy digital currency through funds, and the price is very cheap. I can buy when it is low and sell it when it is high to earn more income. I can also withdraw my digital currency to my wallet.',
  },
  {
    p: 'XBank',
    name: 'Néji',
    state: 'Belgium',
    comment:
      'Cette application est bien pour démarrer dans le monde de la crypto Simple d’utilisation avec multiple crypto prose et taux de rendement pertinent Service support rapide et efficace A conseiller',
  },
  {
    p: 'Amazing App',
    name: 'Zummerwest',
    state: 'Canada',
    comment:
      'This app has changed my life for the better, I have made money on this app just by doing simple things and I’m amazed… thx for sharing such an awesome app.',
  },
];

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      right={-10}
      top={40}
      position='absolute'
      cursor={'pointer'}
    >
      <svg
        width='11'
        height='18'
        viewBox='0 0 11 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M2.11932 0L0.722656 1.39778L8.22377 8.88944L0.722656 16.38L2.11932 17.7778L10.9999 8.88944L2.11932 0Z'
          fill='#00000F'
        />
      </svg>
    </Box>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      position='absolute'
      left={-10}
      top={40}
      cursor={'pointer'}
    >
      <svg
        width='11'
        height='18'
        viewBox='0 0 11 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8.88068 0L10.2773 1.39778L2.77623 8.88944L10.2773 16.38L8.88068 17.7778L0.000123024 8.88944L8.88068 0Z'
          fill='#00000F'
        />
      </svg>
    </Box>
  );
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  //  vertical: true,
  //  verticalSwiping: true,
  autoplay: true,
  autoPlaySpeed: 3000,
  arrows: true,
  speed: 200,
  dotsClass: 'dots-class',
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
  customPaging: () => (
    <Box
      w={3}
      height={3}
      // bg={'#b3b3ff'}
      bg={'primary'}
      opacity={0.3}
      mr={2}
      borderRadius={10}
      _active={{
        opacity: 1,
      }}
    />
  ),
  // variableWidth: true,
};

const Community = () => {
  return (
    <MyContainer
      py={{
        md: DIVIDE,
        sm: 10,
        xs: 10,
      }}
    >
      <Title
        mb={{
          md: 20,
          sm: 4,
          xs: 4,
        }}
      >
        Join Our Community
      </Title>
      <Text
        textAlign={'center'}
        fontSize={{
          md: 28,
          sm: 14,
          xs: 14,
        }}
        mb={{
          md: 8,
          sm: 10,
          xs: 10,
        }}
        fontWeight={700}
      >
        <Highlight query={'5 USDT + 500 BUSD'} styles={{ color: 'primary' }}>
          Follow us & Grab a 5 USDT + 500 BUSD Registration Reward
        </Highlight>
      </Text>
      {/* 社媒 */}
      <Flex alignItems={'center'} justify='center' mb={10}>
        <Box
          textAlign={'center'}
          onClick={() => {
            handleNavigate(TWITTER_URL, true);
          }}
          cursor='pointer'
        >
          <ResponsiveBox
            mobile={
              <StaticImage
                src={'../../images/social/twitter.png'}
                alt={''}
                height={25}
              />
            }
            pc={
              <StaticImage
                src={'../../images/social/twitter.png'}
                alt={''}
                height={35}
              />
            }
          />

          <Text color={'font.tip'} fontSize={{ md: 14, sm: 12, xs: 12 }}>
            Twitter
          </Text>
        </Box>
        <Box
          textAlign={'center'}
          ml={10}
          onClick={() => {
            handleNavigate(DISCORD_URL, true);
          }}
          cursor='pointer'
        >
          <ResponsiveBox
            mobile={
              <StaticImage
                src={'../../images/social/discord.png'}
                alt={''}
                height={25}
              />
            }
            pc={
              <StaticImage
                src={'../../images/social/discord.png'}
                alt={''}
                height={35}
              />
            }
          />

          <Text color={'font.tip'} fontSize={{ md: 14, sm: 12, xs: 12 }}>
            Discord
          </Text>
        </Box>
        <Box
          textAlign={'center'}
          ml={10}
          onClick={() => {
            handleNavigate(LINKEDIN_URL, true);
          }}
          cursor='pointer'
        >
          <ResponsiveBox
            mobile={
              <StaticImage
                src={'../../images/social/linked.png'}
                alt={''}
                height={25}
              />
            }
            pc={
              <StaticImage
                src={'../../images/social/linked.png'}
                alt={''}
                height={35}
              />
            }
          />

          <Text color={'font.tip'} fontSize={{ md: 14, sm: 12, xs: 12 }}>
            Linkedin
          </Text>
        </Box>
        <Box
          textAlign={'center'}
          ml={10}
          onClick={() => {
            handleNavigate(MEDIUM_URL, true);
          }}
          cursor='pointer'
        >
          <ResponsiveBox
            mobile={
              <StaticImage
                src={'../../images/social/medium.png'}
                alt={''}
                height={25}
              />
            }
            pc={
              <StaticImage
                src={'../../images/social/medium.png'}
                alt={''}
                height={35}
              />
            }
          />

          <Text color={'font.tip'} fontSize={{ md: 14, sm: 12, xs: 12 }}>
            Medium
          </Text>
        </Box>
      </Flex>
      {/* 评价 */}
      <Slider {...settings}>
        {COMMENT_DATA.map(({ name, comment, p }, index) => (
          <Box key={name}>
            <CardBorder
              p={6}
              mr={{
                md: (index + 1) % 3 === 0 ? 0 : 6,
                sm: 0,
                xs: 0,
              }}
              minW={200}
            >
              {comment}
            </CardBorder>
            <Flex ml={10} mt={-8}>
              <StaticImage src='../../images/comment.png' alt='' height={44} />
              <Box ml={4}>
                <Text color={'font.primary'} fontSize={13}>
                  {p}
                </Text>
                <Text color={'font.tip'} fontSize={12}>
                  {name}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </MyContainer>
  );
};

export default Community;
