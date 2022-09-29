import {
  Box,
  Image,
  Collapse,
  Flex,
  Text,
  useDisclosure,
  // Button,
  // Drawer,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
  // DrawerBody,
  // DrawerHeader,
  Menu,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  MenuButton,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import MyContainer from '../container';
import './index.scss';
import MyMenu from './MyMenu';
// import { StaticImage } from 'gatsby-plugin-image';
import StickySummary from '../Summary/StickySummary';
import {
  ABOUT_US_ID,
  COMMUNITY_ID,
  CONVERT_MONEY_ID,
  DISCOVER_WEB3_ID,
} from '../../constants/ID';
import ModalButton from '../ModalButton';
import Icon from '../../images/xbank.png';

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
    if (!isBrowser) {
      return;
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

  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <Flex
                gap={2}
                onClick={() => {
                  if (isBrowser) {
                    window?.scrollTo(0, 0);
                  }
                }}
                alignItems='center'
              >
                <Image src={Icon} h={25} />
                <Text color={'font.primary'} fontSize={30} fontWeight={500}>
                  xBank
                </Text>
              </Flex>

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
                        scrollTo(DISCOVER_WEB3_ID);
                      },
                    },
                    {
                      label: 'Convert Money',
                      onClick: () => {
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
                        scrollTo(ABOUT_US_ID);
                      },
                    },
                    {
                      label: 'Community',
                      onClick: () => {
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

            <Menu>
              <MenuButton
                display={{
                  md: 'none',
                  xs: 'block',
                  sm: 'block',
                }}
                bg='#FFFFFF'
                as={Box}
                cursor='pointer'
              >
                <svg
                  width='40'
                  height='40'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M5 14H35' stroke='black' strokeWidth='3' />
                  <path d='M5 26H35' stroke='black' strokeWidth='3' />
                </svg>
                {/* <Box onClick={onOpen} cursor={'pointer'}></Box> */}
              </MenuButton>
              <MenuList>
                <MenuGroup title='Products'>
                  <MenuItem
                    onClick={() => {
                      onClose();
                      scrollTo(DISCOVER_WEB3_ID);
                    }}
                  >
                    Discover Web3
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      onClose();
                      scrollTo(CONVERT_MONEY_ID);
                    }}
                  >
                    Convert Money{' '}
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title='Company'>
                  <MenuItem
                    onClick={() => {
                      onClose();
                      scrollTo(ABOUT_US_ID);
                    }}
                  >
                    About Us
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      onClose();
                      scrollTo(COMMUNITY_ID);
                    }}
                  >
                    Community
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </MyContainer>
      </Box>

      <Box
        display={{
          md: 'block',
          sm: 'none',
          xs: 'none',
        }}
      >
        <Collapse in={show} animateOpacity>
          <StickySummary />
        </Collapse>
      </Box>
      {/* 
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display={'flex'} alignItems='center' gap={4}>
            <Image src={Icon} h={25} />
            <Text color={'font.primary'} fontSize={30} fontWeight={500}>
              xBank
            </Text>
          </DrawerHeader>

          <DrawerBody>1212</DrawerBody>
        </DrawerContent>
      </Drawer> */}
    </Box>
  );
};

export default Header;
