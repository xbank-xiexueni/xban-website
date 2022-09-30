import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { DIVIDE } from '../../constants/paddingY';
import MyContainer from '../container';
import Title from '../Title';

import b1 from '../../images/backed/1.png';
import b2 from '../../images/backed/2.png';
import b3 from '../../images/backed/3.png';
import b4 from '../../images/backed/4.png';
import b5 from '../../images/backed/5.png';
import b6 from '../../images/backed/6.png';
import b7 from '../../images/backed/7.png';
import b8 from '../../images/backed/8.png';
import b9 from '../../images/backed/9.png';

const Backed = () => {
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
          {[b1, b2, b3, b4, b5, b6, b7, b8, b9].map((item) => (
            <Image
              src={item}
              w={{
                md: 150,
                sm: 54,
                xs: 54,
              }}
              alt='backed'
              h={{
                md: 150,
                sm: 54,
                xs: 54,
              }}
              key={item.toString()}
            />
          ))}
        </Flex>
      </MyContainer>
    </Box>
  );
};

export default Backed;
