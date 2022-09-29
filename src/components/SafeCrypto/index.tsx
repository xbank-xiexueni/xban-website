import MyContainer from '../container';
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import Title from '../Title';
import { handleNavigate } from '../../utils/navigate';
import ResponsiveBox from '../ResponsiveBox';
import { DIVIDE } from '../../constants/paddingY';

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
      styleM: {
        width: 104,
        height: 68,
      },
    },
    {
      key: 'two',
      url: 'https://www.austrac.gov.au',
      style: {
        width: 214,
        height: 70,
      },
      styleM: {
        width: 118,
        height: 40,
      },
    },
    {
      key: 'three',
      url: 'https://www.fca.org.uk',
      style: {
        width: 112,
        height: 112,
      },
      styleM: {
        width: 71,
        height: 71,
      },
    },
    {
      key: 'four',
      url: 'https://www.fintrac-canafe.gc.ca',
      style: {
        width: 174,
        height: 106,
      },
      styleM: {
        width: 96,
        height: 59,
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
        {DATA.map(({ url, key, style, styleM }) => (
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
          <ResponsiveBox
            pc={
              <GatsbyImage
                loading='lazy'
                image={query[key]?.childImageSharp?.gatsbyImageData}
                alt=''
                style={style}
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
              >
                <GatsbyImage
                  loading='lazy'
                  image={query[key]?.childImageSharp?.gatsbyImageData}
                  alt=''
                  style={styleM}
                />
              </Flex>
            }
          />
        ))}
      </Flex>
    </MyContainer>
  );
};

export default SafeCrypto;
