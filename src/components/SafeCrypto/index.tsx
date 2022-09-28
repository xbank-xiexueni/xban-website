import MyContainer from '../container';
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Title from '../Title';
import { handleNavigate } from '../../utils/navigate';

const SafeCrypto = () => {
  const query = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "service/1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      two: file(relativePath: { eq: "service/2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      three: file(relativePath: { eq: "service/3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      four: file(relativePath: { eq: "service/4.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  const DATA = [
    {
      key: 'one',
      url: 'https://www.fincen.gov',
      style: {
        width: 169,
        height: 111,
      },
    },
    {
      key: 'two',
      url: 'https://www.austrac.gov.au',
      style: {
        width: 214,
        height: 70,
      },
    },
    {
      key: 'three',
      url: 'https://www.fca.org.uk',
      style: {
        width: 112,
        height: 112,
      },
    },
    {
      key: 'four',
      url: 'https://www.fintrac-canafe.gc.ca',
      style: {
        width: 174,
        height: 106,
      },
    },
  ];

  return (
    <MyContainer py={100}>
      <Title>Safe Crypto Service</Title>
      <Flex justify={'space-around'} alignItems='center' flexWrap='wrap'>
        {DATA.map(({ url, key, style }) => (
          <Box
            key={key}
            onClick={() => {
              handleNavigate(url, true);
            }}
          >
            <GatsbyImage
              loading='lazy'
              image={query[key]?.childImageSharp?.gatsbyImageData}
              alt=''
              style={style}
            />
          </Box>
        ))}
        {/* 
        <GatsbyImage
          loading='lazy'
          image={query['two']?.childImageSharp?.gatsbyImageData}
          alt=''
          style={{
            width: 214,
            height: 70,
          }}
        />
        <GatsbyImage
          loading='lazy'
          image={query['three']?.childImageSharp?.gatsbyImageData}
          alt=''
          style={{
            width: 112,
            height: 112,
          }}
        />
        <GatsbyImage
          loading='lazy'
          image={query['four']?.childImageSharp?.gatsbyImageData}
          alt=''
          style={{
            width: 174,
            height: 106,
          }}
        /> */}
      </Flex>
    </MyContainer>
  );
};

export default SafeCrypto;
