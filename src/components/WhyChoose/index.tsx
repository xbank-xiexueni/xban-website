import { Box, Divider } from '@chakra-ui/react';
import React from 'react';
// import ReactPageScroller from 'react-page-scroller';
import MyContainer from '../container';
import Item, { Header } from './Item';
import { graphql, useStaticQuery } from 'gatsby';
import { DIVIDE } from '../../constants/paddingY';
import { StaticImage } from 'gatsby-plugin-image';

const DATA = [
  {
    key: 'why1',
    title: 'NFT lowest as $10, Join to Free Mint & Pre-Mint',
    titleHighlight: ['NFT', '$10'],
    extra: <StaticImage src='../../images/why/process1.png' alt={''} />,
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
    buttonTitle: 'Connect my wallet',
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
      why1extra: file(relativePath: { eq: "why/process1.png" }) {
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
      why4extra: file(relativePath: { eq: "why/process4.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <Box bg='bg.gray'>
      {/* <MyContainer> */}
      <Box
        pt={{
          md: DIVIDE,
          sm: '60px',
          xs: '60px',
        }}
      >
        <Header />
      </Box>
      {DATA.map((item, index) => (
        <Box
          position={'sticky'}
          top={{
            md: 130,
            sm: '60px',
            xs: '60px',
          }}
          zIndex={11 + index}
          bg='bg.gray'
          key={item.key}
        >
          {index !== 0 && <Divider color={'gray'} borderWidth={2} />}
          <MyContainer
            py={{
              md: DIVIDE - 20,
              sm: '25px',
              xs: '25px',
            }}
          >
            <Item
              {...item}
              id={item.key}
              extra={
                query[`${item?.key}extra`]?.childImageSharp?.gatsbyImageData
              }
              image={query[item?.key]?.childImageSharp?.gatsbyImageData}
            />
          </MyContainer>
        </Box>
      ))}
      {/* <Box position={'sticky'} top={130} zIndex={15} bg='bg.gray'>
        <MyContainer>
          <Divider color={'gray'} borderWidth={2} />

          <Item
            {...DATA[0]}
            image={query[DATA[0].key]?.childImageSharp?.gatsbyImageData}
          />
        </MyContainer>
      </Box>

      <Box position={'sticky'} top={130} zIndex={16} bg='bg.gray'>
        <MyContainer>
          <Item
            {...DATA[1]}
            image={query[DATA[1].key]?.childImageSharp?.gatsbyImageData}
          />
          <Divider color={'gray'} borderWidth={2} />
        </MyContainer>
      </Box>

      <Box position={'sticky'} top={130} zIndex={17} bg='bg.gray'>
        <MyContainer>
          <Item
            {...DATA[2]}
            image={query[DATA[2].key]?.childImageSharp?.gatsbyImageData}
          />
          <Divider color={'gray'} borderWidth={2} />
        </MyContainer>
      </Box>

      <Box position={'sticky'} top={130} zIndex={18} bg='bg.gray'>
        <MyContainer>
          <Item
            {...DATA[3]}
            image={query[DATA[3].key]?.childImageSharp?.gatsbyImageData}
          />
          <Divider color={'gray'} borderWidth={2} />
        </MyContainer>
      </Box> */}
      {/* </MyContainer> */}
    </Box>
  );
};

export default WhyChoose;
