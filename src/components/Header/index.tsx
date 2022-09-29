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
  Divider,
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
  const [focusId, setFocusId] = useState<
    | 'ABOUT_US_ID'
    | 'COMMUNITY_ID'
    | 'CONVERT_MONEY_ID'
    | 'DISCOVER_WEB3_ID'
    | undefined
  >();
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

  const { isOpen, onClose, onToggle } = useDisclosure();

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
                  focusId={focusId}
                  title={
                    <Text display={'flex'} alignItems='center'>
                      Products&nbsp;{ARROW}
                    </Text>
                  }
                  data={[
                    {
                      label: 'Discover Web3',
                      cId: DISCOVER_WEB3_ID,
                      onClick: () => {
                        scrollTo(DISCOVER_WEB3_ID);
                        setFocusId(DISCOVER_WEB3_ID);
                      },
                    },
                    {
                      label: 'Convert Money',
                      cId: CONVERT_MONEY_ID,
                      onClick: () => {
                        scrollTo(CONVERT_MONEY_ID);
                        setFocusId(CONVERT_MONEY_ID);
                      },
                    },
                  ]}
                />
                <MyMenu
                  focusId={focusId}
                  title={
                    <Text display={'flex'} alignItems='center'>
                      Company&nbsp;{ARROW}
                    </Text>
                  }
                  data={[
                    {
                      label: 'About Us',
                      cId: ABOUT_US_ID,
                      onClick: () => {
                        scrollTo(ABOUT_US_ID);
                        setFocusId(ABOUT_US_ID);
                      },
                    },
                    {
                      label: 'Community',
                      cId: COMMUNITY_ID,
                      onClick: () => {
                        scrollTo(COMMUNITY_ID);
                        setFocusId(COMMUNITY_ID);
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

            <Menu isOpen={isOpen}>
              <MenuButton
                display={{
                  md: 'none',
                  xs: 'block',
                  sm: 'block',
                }}
                bg='#FFFFFF'
                as={Box}
                cursor='pointer'
                onClick={onToggle}
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
              <MenuList p={3}>
                <Text fontWeight={700} fontSize={16}>
                  Products
                </Text>
                <Box fontSize={14}>
                  <Box
                    py={2}
                    onClick={() => {
                      scrollTo(DISCOVER_WEB3_ID);
                      setFocusId(DISCOVER_WEB3_ID);
                      onClose();
                    }}
                    _active={{
                      bg: 'bg.gray',
                    }}
                    bg={focusId === DISCOVER_WEB3_ID ? 'bg.gray' : '#FFFFFF'}
                  >
                    Discover Web3
                  </Box>
                  <Box
                    py={2}
                    onClick={() => {
                      scrollTo(CONVERT_MONEY_ID);
                      setFocusId(CONVERT_MONEY_ID);
                      onClose();
                    }}
                    _active={{
                      bg: 'bg.gray',
                    }}
                    bg={focusId === CONVERT_MONEY_ID ? 'bg.gray' : '#FFFFFF'}
                  >
                    Convert Money
                  </Box>
                </Box>

                <Divider />
                <Text pt={2} fontWeight={700}>
                  Company
                </Text>
                <Box fontSize={14}>
                  <Box
                    py={2}
                    onClick={() => {
                      scrollTo(ABOUT_US_ID);
                      setFocusId(ABOUT_US_ID);
                      onClose();
                    }}
                    _active={{
                      bg: 'bg.gray',
                    }}
                    bg={focusId === ABOUT_US_ID ? 'bg.gray' : '#FFFFFF'}
                  >
                    About Us
                  </Box>
                  <Box
                    py={2}
                    onClick={() => {
                      scrollTo(COMMUNITY_ID);
                      setFocusId(COMMUNITY_ID);
                      onClose();
                    }}
                    _active={{
                      bg: 'bg.gray',
                    }}
                    bg={focusId === COMMUNITY_ID ? 'bg.gray' : '#FFFFFF'}
                  >
                    Community
                  </Box>
                </Box>
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
