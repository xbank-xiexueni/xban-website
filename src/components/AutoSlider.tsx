import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { Box } from '@chakra-ui/react';
const settings = {
  // dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3500,
  autoplaySpeed: 3500,
  cssEase: 'linear',
  variableWidth: true,
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const FeaturedBox = ({ title }: { title: any }) => {
  return (
    <Box
      borderRadius={10}
      w={216}
      h={70}
      display='inline-block'
      bg='#FFF'
      ml={2}
    >
      {title}
    </Box>
  );
};
const AutoSlider = ({ data, isRtl }: { data: any[]; isRtl?: boolean }) => {
  return (
    <Box mb={5}>
      <Slider {...settings} rtl={isRtl}>
        {data.map((item) => (
          <FeaturedBox title={item} />
        ))}
      </Slider>
    </Box>
  );
};

export default AutoSlider;
