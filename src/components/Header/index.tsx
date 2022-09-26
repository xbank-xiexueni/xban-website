import { Box, Button, Collapse, Flex } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import MyContainer from '../container';
import './index.scss';
import MyMenu from './MyMenu';
import { StaticImage } from 'gatsby-plugin-image';
import StickySummary from '../Summary/StickySummary';

const Header = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // 添加滚动事件
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop =
      document.documentElement.scrollTop ||
      window.pageYOffset ||
      document.body.scrollTop;

    //  高度
    const dom = document.getElementById('content1');
    const height: number = dom?.offsetHeight || 500;
    setShow(scrollTop > height);
  }, []);

  return (
    <Box position={'sticky'} top={0} bg='#FFFFFF' zIndex={10}>
      <Box
        bg='linear-gradient(270deg, #E404E6 0%, #5843F4 53.65%, #1EF6F0
      100%)'
        h={3}
      />
      <MyContainer>
        <Flex justify={'space-between'} h={70} alignItems='center'>
          <Flex>
            <StaticImage
              src='../../images/LOGO_NAME.png'
              loading='lazy'
              title='logo'
              alt='logo'
              width={127}
            />
            <Flex
              display={{
                xs: 'none',
                sm: 'flex',
              }}
            >
              <MyMenu
                title='Products'
                data={[
                  {
                    label: 'sss',
                    onClick: () => console.log('xcxc'),
                  },
                ]}
              />
              <MyMenu
                title='Company'
                data={[
                  {
                    label: 'sss',
                    onClick: () => console.log('xcxc'),
                  },
                ]}
              />
            </Flex>
          </Flex>
          <Button
            display={{
              xs: 'none',
              sm: 'block',
            }}
            bg='secondary'
            color='#FFF'
            borderRadius={26}
            h={'35px'}
          >
            Get xBank
          </Button>
          <Button
            display={{
              xs: 'block',
              sm: 'none',
            }}
            colorScheme='primary'
          >
            展开
          </Button>
        </Flex>
      </MyContainer>

      <Collapse in={show} animateOpacity>
        <StickySummary />
      </Collapse>
    </Box>
  );
};

export default Header;
