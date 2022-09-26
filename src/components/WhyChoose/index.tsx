import { Box, Text, Highlight } from '@chakra-ui/react';
import React, { Component } from 'react';
import Slider from 'react-slick';
import MyContainer from '../container';
import Item from './Item';
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
};
const DATA = [
  {
    title: 'NFT lowest as $10, Join to Free Mint & Pre-Mint',
    titleHighlight: ['NFT', '$10'],
    buttonTitle: 'Buy my NFT',
    description:
      'Pick-Up and Own Your New Profile Picture by Artists; Find Interesting Digital Collectibles of Sport, Music and Photography.',
  },
  {
    title: 'Early Bird Access to Hot Games',
    titleHighlight: ['Hot Games'],
    buttonTitle: 'Get hot games',
    description:
      'Onboard Blockchain Games without Hassles and Be Ready to Enjoy New Worlds All the Time.',
  },
  {
    title: 'Participate Popular DAO with Friends',
    titleHighlight: ['DAO'],
    buttonTitle: 'Link my wallet',
    description:
      'Interact with Your New Friends From Decentralized Communities Based on Your Hobbies, Interests, Visions and Wishes..',
  },
  {
    title: 'Play Around and Earn Free Coins',
    buttonTitle: 'Exploring Web3',
    description:
      'Explore Token Bounties of Events and Applications of Web3 and Earn on Your Contributions',
  },
];
const WhyChoose = () => {
  return (
    <Box overflow={'auto'} bg='bg.gray'>
      <MyContainer h={700}>
        <Box height={700}>
          {DATA.map((item) => (
            <Item {...item} key={item.title} />
          ))}
        </Box>
      </MyContainer>
    </Box>
  );
};

export default WhyChoose;
