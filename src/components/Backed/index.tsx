import { Box, Flex } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { DIVIDE } from '../../constants/paddingY';
import MyContainer from '../container';
import ResponsiveBox from '../ResponsiveBox';
import Title from '../Title';

const Backed = () => {
  const query = useStaticQuery(graphql`
    query {
      b1: file(relativePath: { eq: "backed/1.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      b2: file(relativePath: { eq: "backed/2.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      b3: file(relativePath: { eq: "backed/3.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      b4: file(relativePath: { eq: "backed/4.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      b5: file(relativePath: { eq: "backed/5.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      b6: file(relativePath: { eq: "backed/6.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      b7: file(relativePath: { eq: "backed/7.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      b8: file(relativePath: { eq: "backed/8.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
      b9: file(relativePath: { eq: "backed/9.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);
  return (
    <Box
      bg={'bg.gray'}
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
        Backed By
      </Title>
      <MyContainer>
        <Flex
          justify={'center'}
          gap={{
            md: 10,
            sm: '10px',
            xs: '10px',
          }}
          flexWrap='wrap'
        >
          {['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'].map(
            (item) => (
              <ResponsiveBox
                key={item}
                mobile={
                  <GatsbyImage
                    image={query[item]?.childImageSharp?.gatsbyImageData}
                    alt={'backed'}
                    style={{ width: 54, height: 54 }}
                  />
                }
                pc={
                  <GatsbyImage
                    image={query[item]?.childImageSharp?.gatsbyImageData}
                    alt={'backed'}
                    style={{ width: 150, height: 150 }}
                  />
                }
              />
            )
          )}
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Backed;
