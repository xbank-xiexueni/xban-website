import MyContainer from '../container';
import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

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

  return (
    <MyContainer py={100}>
      <Heading textAlign='center' mb={90}>
        Safe Crypto Service
      </Heading>
      <Flex justify={'space-around'}>
        <GatsbyImage
          loading='lazy'
          image={query['one']?.childImageSharp?.gatsbyImageData}
          alt=''
          style={{
            width: 169,
            height: 111,
          }}
        />
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
          // style={{
          //   textAlign: 'center',
          // }}
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
        />
      </Flex>
    </MyContainer>
  );
};

export default SafeCrypto;
