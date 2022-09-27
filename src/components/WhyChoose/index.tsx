import { Box } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import MyContainer from '../container';
import Item, { Header } from './Item';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import { graphql, useStaticQuery } from 'gatsby';

const DATA = [
  {
    key: 'why1',
    title: 'NFT lowest as $10, Join to Free Mint & Pre-Mint',
    titleHighlight: ['NFT', '$10'],
    buttonTitle: 'Buy my NFT',
    description:
      'Pick-Up and Own Your New Profile Picture by Artists; Find Interesting Digital Collectibles of Sport, Music and Photography.',
  },
  {
    key: 'why2',
    title: 'Early Bird Access to Hot Games',
    titleHighlight: ['Hot Games'],
    buttonTitle: 'Get hot games',
    description:
      'Onboard Blockchain Games without Hassles and Be Ready to Enjoy New Worlds All the Time.',
  },
  {
    key: 'why3',
    title: 'Participate Popular DAO with Friends',
    titleHighlight: ['DAO'],
    buttonTitle: 'Link my wallet',
    description:
      'Interact with Your New Friends From Decentralized Communities Based on Your Hobbies, Interests, Visions and Wishes..',
  },
  {
    key: 'why4',
    title: 'Play Around and Earn Free Coins',
    buttonTitle: 'Exploring Web3',
    description:
      'Explore Token Bounties of Events and Applications of Web3 and Earn on Your Contributions',
  },
];

const WhyChoose = () => {
  const query = useStaticQuery(graphql`
    query {
      why1: file(relativePath: { eq: "why/why1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      why2: file(relativePath: { eq: "why/why2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      why3: file(relativePath: { eq: "why/why3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      why4: file(relativePath: { eq: "why/why4.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <Box bg='bg.gray'>
      <MyContainer>
        {/* <Box
          position={'sticky'}
          top={170}
          left={0}
          right={0}
          w='100%'
          zIndex={9}
        >
          <Header />
        </Box> */}
        {DATA.map((item) => (
          <Zoom ssrFadeout key={item.key}>
            <Item
              {...item}
              image={query[item.key]?.childImageSharp?.gatsbyImageData}
            />
          </Zoom>
        ))}
      </MyContainer>
    </Box>
  );
  return (
    <Box h={4 * (innerHeight - 170)}>
      <Box position={'fixed'} top={170} left={0} h={innerHeight - 170}>
        <ReactPageScroller containerHeight={innerHeight - 170}>
          <Box h='100%' bg='blue'>
            121
          </Box>
          <Box h='100%' bg='orange'>
            121
          </Box>
          <Box h='100%' bg='black'>
            121
          </Box>
          <Box h={innerHeight - 170} bg='yellow'>
            xxxx
          </Box>
        </ReactPageScroller>
        {/* <Box bg='#FFF' h={1}></Box> */}
      </Box>
    </Box>
  );
};

export default WhyChoose;
