import React from 'react';
import DownloadButton from '../DownloadButton';
import { QRCodeSVG } from 'qrcode.react';
import {
  Highlight,
  AlertDialog,
  useDisclosure,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  Button,
  AlertDialogCloseButton,
  Flex,
  Box,
  Text,
  ButtonProps,
  Image,
} from '@chakra-ui/react';
// import { handleNavigate } from '../../utils/navigate';
// import { IOS_URL } from '../../constants/URL';
import modalImg from '../../images/modal-bg.png';

const ARROW = (
  <svg
    width='32'
    height='16'
    viewBox='0 0 32 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M31.7071 8.70711C32.0976 8.31659 32.0976 7.68342 31.7071 7.2929L25.3431 0.928934C24.9526 0.53841 24.3195 0.53841 23.9289 0.928934C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM-8.74228e-08 9L31 9L31 7L8.74228e-08 7L-8.74228e-08 9Z'
      fill='white'
    />
  </svg>
);

const ARROW_M = (
  <svg
    width='22'
    height='14'
    viewBox='0 0 32 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M31.7071 8.70711C32.0976 8.31659 32.0976 7.68342 31.7071 7.2929L25.3431 0.928934C24.9526 0.53841 24.3195 0.53841 23.9289 0.928934C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM-8.74228e-08 9L31 9L31 7L8.74228e-08 7L-8.74228e-08 9Z'
      fill='white'
    />
  </svg>
);

const ModalButton: React.FunctionComponent<
  ButtonProps & {
    arrow?: boolean;
  }
> = ({ title, arrow = true, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);
  const isBrowser = typeof window !== 'undefined';

  return (
    <>
      <Button
        borderRadius={40}
        bg='primary'
        onClick={onOpen}
        _hover={{
          opacity: 0.7,
        }}
        _focus={{
          opacity: 0.7,
        }}
        _active={{
          opacity: 0.7,
        }}
        {...rest}
      >
        {title}&nbsp;
        {arrow && (
          <>
            <Box display={{ md: 'none', sm: 'block', xs: 'block' }}>
              {ARROW_M}
            </Box>
            <Box display={{ md: 'block', sm: 'none', xs: 'none' }}>{ARROW}</Box>
          </>
        )}
      </Button>

      <AlertDialog
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay bgColor='blackAlpha.800'>
          <AlertDialogContent
            maxW={{
              xs: 345,
              sm: 345,
              md: 530,
            }}
          >
            <AlertDialogHeader
              fontSize={{
                md: 24,
                sm: 18,
                xs: 18,
              }}
              fontWeight={700}
              color='font.primary'
              w={{ md: '100%', sm: '90%', xs: '90%' }}
            >
              Find the Hottest Web3 Services in xBank
            </AlertDialogHeader>
            <AlertDialogCloseButton />

            <AlertDialogBody>
              <Flex
                pb={8}
                gap={4}
                flexWrap={{
                  md: 'nowrap',
                  sm: 'wrap',
                  xs: 'wrap',
                }}
                justify={{
                  md: 'space-between',
                  sm: 'center',
                  xs: 'center',
                }}
                alignItems='center'
              >
                <Box
                  position={'relative'}
                  ml={{
                    sm: -4,
                    xs: -4,
                  }}
                >
                  <Image
                    src={modalImg}
                    alt='download'
                    width={193}
                    height={193}
                  />
                  <Box
                    bgGradient={
                      'linear-gradient(351.25deg, #FFFFFF 20.84%, rgba(234, 241, 254, 0) 82.31%)'
                    }
                    h={8}
                    position='absolute'
                    bottom={0}
                    w='100%'
                    zIndex={3}
                  />
                </Box>
                <Box
                  w={{
                    md: '60%',
                    sm: '100%',
                    xs: '100%',
                  }}
                >
                  <Text fontSize={14} fontWeight={700}>
                    <Highlight
                      query={'5 USDT + 500 BUSD'}
                      styles={{
                        color: 'primary',
                      }}
                    >
                      Follow us & Grab a 5 USDT + 500 BUSD Registration Reward
                    </Highlight>
                  </Text>
                  <Flex
                    mt={4}
                    alignItems='flex-start'
                    justify={{
                      md: 'start',
                      sm: 'space-around',
                      xs: 'space-around',
                    }}
                  >
                    <Box mr={6}>
                      <DownloadButton
                        dType='ios'
                        bg='#000000'
                        mb={2}
                        iconW='100px'
                        iconH='30px'
                      />
                      <DownloadButton
                        dType='google'
                        mb={2}
                        bg='#000000'
                        iconW='100px'
                        iconH='30px'
                      />
                      <DownloadButton
                        dType='android'
                        bg='#000000'
                        iconW='100px'
                        iconH='30px'
                      />
                    </Box>
                    <Box
                      filter='drop-shadow(0px 0px 4px rgba(170, 168, 230, 0.5))'
                      w={75}
                      h={75}
                      borderRadius={'4px'}
                    >
                      <QRCodeSVG
                        value={
                          isBrowser
                            ? `${window?.location?.origin}/download`
                            : ''
                        }
                        width={75}
                        height={75}
                        includeMargin
                        style={{
                          borderRadius: '4px',
                        }}
                      />
                    </Box>
                    {/* </ScaleFade> */}
                  </Flex>
                </Box>
              </Flex>
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ModalButton;
