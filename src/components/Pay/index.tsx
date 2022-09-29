import React from 'react';
import MyContainer from '../container';
import { Box, Heading, Text, Flex, Highlight } from '@chakra-ui/react';
import ModalButton from '../ModalButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import ResponsiveBox from '../ResponsiveBox';

const title = 'Pay with Credit Card and Get Your First Crypto Asset';
const des =
  'xBank currently support more than 70 different kinds of fiats to purchase Cryptos with credit cards, bank transfers, open banking and mobile payments.';

const Pay = () => {
  const query = useStaticQuery(graphql`
    query {
      pay: file(relativePath: { eq: "pay.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <MyContainer
      py={{
        md: 40,
        // xs: '60px',
        // sm: '60px',
      }}
      pb={{
        xs: '60px',
        sm: '60px',
      }}
    >
      <Flex
        justify={'space-between'}
        alignItems='center'
        gap={10}
        flexWrap='wrap'
        textAlign={{
          md: 'left',
          sm: 'center',
          xs: 'center',
        }}
      >
        <Box
          order={2}
          display={{
            md: 'block',
            sm: 'none',
            xs: 'none',
          }}
          w={'45%'}
        >
          <GatsbyImage
            image={query?.pay?.childImageSharp?.gatsbyImageData}
            alt=''
            loading='lazy'
          />
        </Box>
        <Box
          w={{
            md: '45%',
            sm: '100%',
            xs: '100%',
          }}
        >
          <ResponsiveBox
            pc={
              <Heading
                fontSize={40}
                // lineHeight='57px'
                fontWeight={700}
                color='font.primary'
              >
                {title}
              </Heading>
            }
            mobile={
              <Heading
                fontSize={14}
                // lineHeight='57px'
                fontWeight={700}
                color='font.primary'
              >
                <Highlight
                  query={'Pay with Credit Card'}
                  styles={{
                    fontSize: 28,
                    display: 'block',
                    color: 'primary',
                  }}
                >
                  {title}
                </Highlight>
              </Heading>
            }
          />

          <Box
            display={{
              md: 'none',
              sm: 'block',
              xs: 'block',
            }}
            my={8}
          >
            <GatsbyImage
              image={query?.pay?.childImageSharp?.gatsbyImageData}
              alt=''
              loading='lazy'
            />
          </Box>
          <Text
            fontSize={{
              md: 16,
              sm: 12,
              xs: 12,
            }}
            color={'font.tip'}
            mt={6}
            mb={12}
          >
            {des}
          </Text>
          <Box>
            <ModalButton
              title='Buy Cryptos'
              color={'#FFFFFF'}
              w={{ md: 316, sm: 201, xs: 201 }}
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
            />
          </Box>
        </Box>
      </Flex>
    </MyContainer>
  );
};

export default Pay;
