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
  // MenuGroup,
  // MenuItem,
  // MenuDivider,
  MenuButton,
  Divider,
  Portal,
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import MyContainer from '../container';
import './index.scss';
// import MyMenu from './MyMenu';
// import { StaticImage } from 'gatsby-plugin-image';
import StickySummary from '../Summary/StickySummary';
import {
  ABOUT_US_ID,
  COMMUNITY_ID,
  CONVERT_MONEY_ID,
  DISCOVER_WEB3_ID,
} from '../../constants/ID';
import ModalButton from '../ModalButton';
import Icon from '../../images/logo.png';
import SoonImage from '../../images/soon-tag.png';

// 48

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

const Tag = () => (
  <Box pos={'absolute'} right={'-30px'} top='-12px'>
    <Image src={SoonImage} w='57px' h='12px' />
  </Box>
);

const ComingSoon = () => (
  <Flex align={'center'} mx={12} h='20px'>
    <Box pos={'relative'} h='20px'>
      <Text
        display={'flex'}
        alignItems='center'
        fontSize={14}
        color={'font.primary'}
        lineHeight='20px'
      >
        Web3 Credit
      </Text>
      <Tag />
    </Box>
    <Box ml={12} pos={'relative'} h='20px'>
      <Text
        display={'flex'}
        alignItems='center'
        fontSize={14}
        color={'font.primary'}
        lineHeight='20px'
      >
        Liquidity
      </Text>
      <Tag />
    </Box>
  </Flex>
);

const MobileTag = () => (
  <Box>
    <Image src={SoonImage} w='57px' h='12px' />
  </Box>
);

const MobileComingSoon = () => (
  <Box my='12px'>
    {['Web3 Credit', 'Liquidity'].map((item) => (
      <Flex alignItems={'center'} gap={2} mb={'10px'}>
        <Text
          display={'flex'}
          alignItems='center'
          color={'#000000'}
          fontWeight={500}
        >
          {item}
        </Text>
        <MobileTag />
      </Flex>
    ))}
  </Box>
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

  const [currentOpen, setCurrentOpen] = useState<
    'product' | 'company' | undefined
  >(undefined);
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
        h={1}
      />
      <Box bg='#FFFFFF'>
        <MyContainer>
          <Flex justify={'space-between'} h={58} alignItems='center'>
            <Flex alignItems={'center'}>
              <Flex
                gap={2}
                onClick={() => {
                  if (isBrowser) {
                    window?.scrollTo(0, 0);
                  }
                }}
                alignItems='center'
              >
                <Image src={Icon} h={25} alt='icon' loading='lazy' />
              </Flex>

              <Flex
                display={{
                  xs: 'none',
                  sm: 'none',
                  md: 'flex',
                }}
              >
                <Menu isOpen={currentOpen === 'product'}>
                  <MenuButton
                    h='20px'
                    ml={'100px'}
                    id='menu-button'
                    onClick={() => {
                      if (currentOpen === 'product') {
                        setCurrentOpen(undefined);
                      } else {
                        setCurrentOpen('product');
                      }
                    }}
                  >
                    <Text
                      display={'flex'}
                      alignItems='center'
                      fontSize={14}
                      color={'font.primary'}
                      lineHeight='20px'
                    >
                      Products&nbsp;{ARROW}
                    </Text>
                  </MenuButton>
                  <Portal>
                    <MenuList zIndex={99}>
                      {[
                        {
                          label: 'Discover Web3',
                          cId: DISCOVER_WEB3_ID,
                          onClick: () => {
                            scrollTo(DISCOVER_WEB3_ID);
                            setFocusId(DISCOVER_WEB3_ID);
                            setCurrentOpen(undefined);
                          },
                        },
                        {
                          label: 'Convert Money',
                          cId: CONVERT_MONEY_ID,
                          onClick: () => {
                            scrollTo(CONVERT_MONEY_ID);
                            setFocusId(CONVERT_MONEY_ID);
                            setCurrentOpen(undefined);
                          },
                        },
                      ]?.map(({ label, onClick, cId }) => (
                        <Box
                          cursor={'pointer'}
                          fontSize={16}
                          color={focusId === cId ? 'primary' : 'font.primary'}
                          onClick={() => {
                            onClick();
                            onClose();
                          }}
                          _hover={{
                            color: 'primary',
                          }}
                          // color={}
                          key={label}
                          py={2}
                          px={3}
                          _active={{
                            bg: 'bg.gray',
                          }}
                          bg={focusId === cId ? 'bg.gray' : '#FFFFFF'}
                        >
                          {label}
                        </Box>
                      ))}
                    </MenuList>
                  </Portal>
                </Menu>

                <ComingSoon />

                <Menu isOpen={currentOpen === 'company'}>
                  <MenuButton
                    // ml={10}
                    h='20px'
                    id='menu-button1'
                    onClick={() => {
                      if (currentOpen === 'company') {
                        setCurrentOpen(undefined);
                      } else {
                        setCurrentOpen('company');
                      }
                    }}
                  >
                    <Text
                      display={'flex'}
                      alignItems='center'
                      fontSize={14}
                      color={'font.primary'}
                    >
                      Company&nbsp;{ARROW}
                    </Text>
                  </MenuButton>
                  <Portal>
                    <MenuList zIndex={99}>
                      {[
                        {
                          label: 'About Us',
                          cId: ABOUT_US_ID,
                          onClick: () => {
                            scrollTo(ABOUT_US_ID);
                            setFocusId(ABOUT_US_ID);
                            setCurrentOpen(undefined);
                          },
                        },
                        {
                          label: 'Community',
                          cId: COMMUNITY_ID,
                          onClick: () => {
                            scrollTo(COMMUNITY_ID);
                            setFocusId(COMMUNITY_ID);
                            setCurrentOpen(undefined);
                          },
                        },
                      ]?.map(({ label, onClick, cId }) => (
                        <Box
                          cursor={'pointer'}
                          fontSize={16}
                          onClick={() => {
                            onClick();
                            onClose();
                          }}
                          _hover={{
                            color: 'primary',
                          }}
                          color={focusId === cId ? 'primary' : 'font.primary'}
                          // color={}
                          key={label}
                          py={2}
                          px={3}
                          _active={{
                            bg: 'bg.gray',
                          }}
                          bg={focusId === cId ? 'bg.gray' : '#FFFFFF'}
                        >
                          {label}
                        </Box>
                      ))}
                    </MenuList>
                  </Portal>
                </Menu>
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
                md: 'block',
                xs: 'none',
                sm: 'none',
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
                <Text fontWeight={500} fontSize={16} color={'font.primary'}>
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
                    px={1}
                    borderRadius={4}
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
                    px={1}
                    borderRadius={4}
                    bg={focusId === CONVERT_MONEY_ID ? 'bg.gray' : '#FFFFFF'}
                  >
                    Convert Money
                  </Box>
                </Box>

                <Divider />

                <MobileComingSoon />

                <Divider />
                <Text pt={2} fontWeight={500} color={'font.primary'}>
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
                    px={1}
                    borderRadius={4}
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
                    px={1}
                    borderRadius={4}
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
