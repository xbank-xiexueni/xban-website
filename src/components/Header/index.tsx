import { Box, Button, Collapse, Flex, Text } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import MyContainer from '../container';
import './index.scss';
import MyMenu from './MyMenu';
import { StaticImage } from 'gatsby-plugin-image';
import StickySummary from '../Summary/StickySummary';
import {
  ABOUT_US_ID,
  COMMUNITY_ID,
  CONVERT_MONEY_ID,
  DISCOVER_WEB3_ID,
} from '../../constants/ID';
import ModalButton from '../ModalButton';

const ARROW = (
  <svg
    width='8'
    height='4'
    viewBox='0 0 8 4'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M1 1L4 3L7 1' stroke='#00000F' />
  </svg>
);

const Header = () => {
  const [show, setShow] = useState(false);
  // const [show2, setShow2] = useState(true);

  useEffect(() => {
    // 添加滚动事件
    addEventListener('scroll', handleScroll);
    return () => {
      removeEventListener('scroll', handleScroll);
    };
  }, []);
  const isBrowser = typeof window !== 'undefined';

  const handleScroll = useCallback(() => {
    if(!isBrowser) {
      return
    }
    const scrollTop =
      document.documentElement.scrollTop ||
      window?.pageYOffset ||
      document.body.scrollTop;

    //  高度
    const dom = document.getElementById('content1');
    const height: number = dom?.offsetHeight || 500;
    setShow(scrollTop > height);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const dom = document.getElementById(id);
    const offset = dom?.offsetTop || 0;
    if (!isBrowser) {
      return;
    }
    window?.scrollTo(0, offset - 100);
  }, []);

  return (
    <Box position={'sticky'} top={0} zIndex={21}>
      <Box
        bg='linear-gradient(270deg, #E404E6 0%, #5843F4 53.65%, #1EF6F0
      100%)'
        h={3}
      />
      <Box bg='#FFFFFF'>
        <MyContainer>
          <Flex justify={'space-between'} h={58} alignItems='center'>
            <Flex>
              <Box
                onClick={() => {
                  if (isBrowser) {
                    window?.scrollTo(0, 0);
                  }
                }}
              >
                <StaticImage
                  src='../../images/LOGO_NAME.png'
                  loading='lazy'
                  title='logo'
                  alt='logo'
                  width={127}
                />
              </Box>

              <Flex
                display={{
                  xs: 'none',
                  sm: 'flex',
                }}
              >
                <MyMenu
                  title={
                    <Text display={'flex'} alignItems='center'>
                      Products&nbsp;{ARROW}
                    </Text>
                  }
                  data={[
                    {
                      label: 'Discover Web3',
                      onClick: () => {
                        console.log('121');
                        scrollTo(DISCOVER_WEB3_ID);
                      },
                    },
                    {
                      label: 'Convert Money',
                      onClick: () => {
                        console.log('asas');
                        scrollTo(CONVERT_MONEY_ID);
                      },
                    },
                  ]}
                />
                <MyMenu
                  title={
                    <Text display={'flex'} alignItems='center'>
                      Company&nbsp;{ARROW}
                    </Text>
                  }
                  data={[
                    {
                      label: 'About Us',
                      onClick: () => {
                        console.log(ABOUT_US_ID);
                        scrollTo(ABOUT_US_ID);
                      },
                    },
                    {
                      label: 'Comminitty',
                      onClick: () => {
                        console.log('xcxc');
                        scrollTo(COMMUNITY_ID);
                      },
                    },
                  ]}
                />
              </Flex>
            </Flex>
            {/* <Button
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
          </Button> */}
            <ModalButton
              arrow={false}
              title='Get xBank'
              h={35}
              display={{
                xs: 'none',
                sm: 'block',
              }}
              bg='secondary'
              color='#FFF'
              borderRadius={26}
            />
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
      </Box>

      <Collapse in={show} animateOpacity>
        <StickySummary />
      </Collapse>
    </Box>
  );
};

export default Header;
