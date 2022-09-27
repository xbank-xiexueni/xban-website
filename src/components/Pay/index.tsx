import React from 'react';
import MyContainer from '../container';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import ModalButton from '../ModalButton';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const title = 'Pay with Credit Card and Get Your First Crypto Asset';
const des =
  'xBank currently support more than 50 different kinds of fiats to purchase Cryptos with credit cards, bank transfers, open banking and mobile payments.';

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
      <Flex
        justify={'space-between'}
        alignItems='center'
        gap={10}
        direction='row-reverse'
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
            color={'font.gray'}
            mt={6}
            mb={12}
          >
            {des}
          </Text>
          <Box>
            <ModalButton
              title='Buy Cryptos'
              color={'#FFFFFF'}
              w={316}
              h={70}
              fontSize={26}
            />
          </Box>
        </Box>
      </Flex>
    </MyContainer>
  );
};

export default Pay;
