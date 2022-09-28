import React, { ReactNode } from 'react';

import Slider from 'react-slick';
import { Box, BoxProps } from '@chakra-ui/react';
import { handleNavigate } from '../utils/navigate';
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
  pauseOnHover: true,
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
const FeaturedBox = ({ icon, url }: { icon: ReactNode; url: string }) => {
  return (
    <Box
      onClick={() => {
        handleNavigate(url, true);
      }}
      borderRadius={10}
      w={{
        md: 216,
        sm: 160,
        xs: 160,
      }}
      h={{
        md: 70,
        sm: 10,
        xs: 10,
      }}
      display='inline-flex'
      bg='#FFF'
      alignItems={'center'}
      justifyContent='center'
      ml={2}
      cursor={url ? 'pointer' : 'default'}
    >
      {icon}
    </Box>
  );
};
const AutoSlider = ({
  data,
  isRtl,
  ...rest
}: { data: any[]; isRtl?: boolean } & BoxProps) => {
  return (
    <Box {...rest}>
      <Slider {...settings} rtl={isRtl}>
        {data.map(({ url, icon }) => (
          <FeaturedBox icon={icon} url={url} key={url} />
        ))}
      </Slider>
    </Box>
  );
};

export default AutoSlider;
