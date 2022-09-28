import React from 'react';
import MyContainer from '../container';
import { Box, Heading, Text } from '@chakra-ui/react';
import ModalButton from '../ModalButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

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
    <MyContainer py={40}>
      <Box
        justifyContent={'space-between'}
        alignItems='center'
        gap={10}
        flexDirection='row-reverse'
        display={{
          sm: 'block',
          md: 'flex',
        }}
      >
        <Box>
          <GatsbyImage
            image={query?.pay?.childImageSharp?.gatsbyImageData}
            alt=''
            loading='lazy'
          />
        </Box>
        <Box>
          <Heading
            fontSize={40}
            lineHeight='57px'
            fontWeight={700}
            color='font.primary'
          >
            {title}
          </Heading>
          <Text
            fontSize={16}
            lineHeight='30px'
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
      </Box>
    </MyContainer>
  );
};

export default Pay;
