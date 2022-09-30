import {
  Box,
  BoxProps,
  Center,
  Flex,
  Highlight,
  Text,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { DIVIDE } from '../../constants/paddingY';
import MyContainer from '../container';
import Title from '../Title';
import withImg from '../../images/with-xBank.png';
import withoutImg from '../../images/without-xBank.png';

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
    <Box
      bg='bg.gray'
      py={{
        md: DIVIDE,
        sm: '60px',
        xs: '60px',
      }}
    >
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
          <Text
            fontSize={{
              md: 16,
              sm: 12,
              xs: 12,
            }}
            lineHeight='24px'
            color={'font.tip'}
          >
            Buy&Hold Newly Released NFTs as soon as faster
          </Text>
        </Center>
        <Flex
          gap={{
            md: 10,
            sm: 2,
            xs: 2,
          }}
          mt={{
            md: 90,
            sm: 8,
            xs: 8,
          }}
          position='relative'
          flexWrap={{
            md: 'nowrap',
            sm: 'wrap',
            xs: 'wrap',
          }}
        >
          <Box
            w={137}
            h={137}
            borderRadius={'50%'}
            border={'10px solid #F2F5FA'}
            backgroundColor='#FFFFFF'
            position={'absolute'}
            display={{
              md: 'flex',
              sm: 'none',
              xs: 'none',
            }}
            alignItems={'center'}
            justifyContent='center'
            top='50%'
            left='50%'
            transform={'auto'}
            translate='yes'
            translateX={'-50%'}
            translateY='-50%'
            fontSize={58}
            fontWeight={700}
          >
            VS
          </Box>
          <Box
            w={10}
            h={10}
            borderRadius={'50%'}
            border={'5px solid #F2F5FA'}
            backgroundColor='#FFFFFF'
            position={'absolute'}
            display={{
              md: 'none',
              sm: 'flex',
              xs: 'flex',
            }}
            alignItems={'center'}
            justifyContent='center'
            top='50%'
            left='50%'
            transform={'auto'}
            translate='yes'
            translateX={'-50%'}
            translateY='-80%'
            fontSize={14}
            fontWeight={700}
          >
            VS
          </Box>
          <ItemCard title='With xBank' data={WITH} checked image={withImg} />
          <ItemCard
            title='Without xBank'
            data={WITHOUT}
            checked={false}
            image={withoutImg}
          />
        </Flex>
      </MyContainer>
    </Box>
  );
};

type ItemCardProps = {
  checked?: boolean;
  data: { value: string; highlight: string }[];
  image?: any;
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
      strokeWidth='2.78989'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const CHECKED_ICON_M = (
  <svg
    width='14'
    height='15'
    viewBox='0 0 14 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M2.33594 7.53479L5.61365 10.8125L12.1691 4.25708'
      stroke='#50B64D'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
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
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18 18C13.8 13.8 6 6 6 6'
      stroke='#F35C59'
      strokeWidth='3'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const UNCHECKED_ICON_M = (
  <svg
    width='14'
    height='15'
    viewBox='0 0 14 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.5 10.5574C5.95 8.10737 10.5 3.55737 10.5 3.55737'
      stroke='#F35C59'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.5 10.5574C8.05 8.10737 3.5 3.55737 3.5 3.55737'
      stroke='#F35C59'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
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
    <Box
      bg='#FFFFFF'
      borderRadius={10}
      py={{
        md: 15,
        sm: 4,
        xs: 4,
      }}
      px={{
        md: '50px',
        sm: 4,
        xs: 4,
      }}
      w={{
        md: '49%',
        sm: '100%',
        xs: '100%',
      }}
    >
      <Text
        fontSize={{
          md: 40,
          sm: 16,
          xs: 16,
        }}
        fontWeight={700}
        mb={{
          md: 10,
          xs: 25,
          sm: 25,
        }}
      >
        <Highlight query={checked ? 'xBank' : ''} styles={{ color: 'primary' }}>
          {title}
        </Highlight>
      </Text>

      {data.map(({ value, highlight }) => (
        <Flex
          gap={2}
          key={value}
          mb={{
            md: 6,
            sm: 3,
            xs: 3,
          }}
        >
          <Box
            display={{
              md: 'block',
              sm: 'none',
              xs: 'none',
            }}
          >
            <Box mt={1}>{checked ? CHECKED_ICON : UNCHECKED_ICON}</Box>
          </Box>
          <Box
            display={{
              md: 'none',
              sm: 'block',
              xs: 'block',
            }}
          >
            <Box mt={1}>{checked ? CHECKED_ICON_M : UNCHECKED_ICON_M}</Box>
          </Box>
          <Text
            fontSize={{
              md: 18,
              sm: 12,
              xs: 12,
            }}
            letterSpacing={'-0.1px'}
            // noOfLines={4}
          >
            <Highlight query={highlight} styles={{ fontWeight: 700 }}>
              {value}
            </Highlight>
          </Text>
        </Flex>
      ))}
      <Box
        display={{
          md: 'flex',
          sm: 'none',
          xs: 'none',
        }}
        textAlign='center'
        justifyContent={'center'}
      >
        {image && <Image src={image} alt='' w={340} />}
        {!image && <Box height={500} bg='lightgray' />}
      </Box>
    </Box>
  );
};

export default Advantage;
