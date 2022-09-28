import { Box, BoxProps, Center, Flex, Highlight, Text } from '@chakra-ui/react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import MyContainer from '../container';
import Title from '../Title';

const WITH = [
  {
    value: '10 Minute to Buy&Hold Newly Released NFTs',
    highlight: '10 Minute',
  },
  {
    value: 'Play with Web3 as Shopping Online, Everything Understandable',
    highlight: 'Understandable',
  },
  {
    value: 'All Interactions with Web3 and Cryptos in One App',
    highlight: '',
  },
  {
    value: 'Smart Recommendations for Exploring More of Web3',
    highlight: 'Exploring More of Web3',
  },
];

const WITHOUT = [
  {
    value: 'Spend 2 Days to Learn 3 Different Apps for Single Item Purchasing',
    highlight: '',
  },
  {
    value: 'Complicated or Meaningless User Interfaces',
    highlight: '',
  },
  {
    value: 'Fragmented User Experience for Buying, Using, and Interacting',
    highlight: '',
  },
  {
    value: 'No Recommendations for Further Applications with Assets',
    highlight: '',
  },
];

const Advantage = () => {
  return (
    <Box bg='bg.gray' py={100}>
      <MyContainer>
        <Title>
          Advantage&nbsp;
          <Text
            as='span'
            bgGradient={
              'linear-gradient(258.47deg, #EA01E5 17.23%, #5844F5 50.33%, #1CFEF0 92.82%)'
            }
            bgClip='text'
          >
            comparison
          </Text>
        </Title>
        <Center>
          <Text fontSize={16} lineHeight='24px' color={'font.tip'}>
            Buy&Hold Newly Released NFTs as soon as faster
          </Text>
        </Center>
        <Flex gap={10} mt={90} position='relative'>
          <Box
            w={127}
            h={127}
            borderRadius={'50%'}
            border='8px solid #F2F5FA'
            backgroundColor='#FFFFFF'
            position={'absolute'}
            display='flex'
            alignItems={'center'}
            justifyContent='center'
            top='50%'
            left='50%'
            transform={'auto'}
            translate='yes'
            translateX={'-50%'}
            translateY={'-50%'}
            fontSize={58}
            fontWeight={700}
          >
            VS
          </Box>
          <ItemCard title='With xBank' data={WITH} checked />
          <ItemCard title='Without xBank' data={WITHOUT} checked={false} />
        </Flex>
      </MyContainer>
    </Box>
  );
};

type ItemCardProps = {
  checked?: boolean;
  data: { value: string; highlight: string }[];
  image?: IGatsbyImageData;
  title: string;
} & BoxProps;

const CHECKED_ICON = (
  <svg
    width='21'
    height='15'
    viewBox='0 0 21 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2 7.81888L7.61893 13.4378L18.8568 2.19995'
      stroke='#50B64D'
      stroke-width='2.78989'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

const UNCHECKED_ICON = (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M6 18C10.2 13.8 18 6 18 6'
      stroke='#F35C59'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M18 18C13.8 13.8 6 6 6 6'
      stroke='#F35C59'
      stroke-width='3'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
);

const ItemCard: React.FunctionComponent<ItemCardProps> = ({
  title,
  checked,
  data,
  image,
}) => {
  return (
    <Box bg='#FFFFFF' borderRadius={10} py={'60px'} px='50px' w='48%'>
      <Text fontSize={40} lineHeight='47px' fontWeight={700} mb={'40px'}>
        <Highlight query={checked ? 'xBank' : ''} styles={{ color: 'primary' }}>
          {title}
        </Highlight>
      </Text>

      {data.map(({ value, highlight }) => (
        <Flex gap={2} key={value} mb={6}>
          <Box>{checked ? CHECKED_ICON : UNCHECKED_ICON}</Box>
          <Text fontSize={20} lineHeight='28px'>
            <Highlight query={highlight} styles={{ fontWeight: 700 }}>
              {value}
            </Highlight>
          </Text>
        </Flex>
      ))}
    </Box>
  );
};

export default Advantage;
