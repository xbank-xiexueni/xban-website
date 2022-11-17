import { Box, BoxProps, Flex, Text, Image } from '@chakra-ui/react';
import React, { useMemo } from 'react';
import {
  IOS_URL,
  ANDROID_DEV_URL,
  GOOGLE_PLAY_URL,
  ANDROID_PRO_URL,
} from '../constants/URL';
import { handleNavigate } from '../utils/navigate';
import GoogleIcon from '../images/download/google-play.png';
import GoogleIconDark from '../images/download/google-play-dark.png';
import AppStoreIcon from '../images/download/app-store.png';
import AppStoreIconDark from '../images/download/app-store-dark.png';
import AndroidIcon from '../images/download/android-apk.png';
import AndroidIconDark from '../images/download/android-apk-dark.png';

const DownloadButton: React.FunctionComponent<
  BoxProps & {
    onClick?: () => void;
    dType: 'ios' | 'android' | 'google';
    onHover?: () => void;
    onLeave?: () => void;
    iconW?: string;
    iconH?: string;
  }
> = ({
  onClick,
  dType,
  bg = '#6867F5',
  iconW = '150px',
  iconH = '43px',
  ...rest
}) => {
  const icon = useMemo(() => {
    switch (dType) {
      case 'ios':
        return (
          <Box h={iconH} w={iconW}>
            <Image
              src={bg === '#000000' ? AppStoreIconDark : AppStoreIcon}
              h={iconH}
              w={iconW}
            />
          </Box>
        );
      case 'android':
        return (
          <Box h={iconH} w={iconW}>
            <Image
              src={bg === '#000000' ? AndroidIconDark : AndroidIcon}
              h={iconH}
              w={iconW}
            />
          </Box>
        );

      case 'google':
        return (
          <Box h={iconH} w={iconW}>
            <Image
              src={bg === '#000000' ? GoogleIconDark : GoogleIcon}
              h={iconH}
              w={iconW}
            />
          </Box>
        );
      default:
        return null;
    }
  }, [dType, bg, iconW, iconH]);
  return (
    <Box
      cursor='pointer'
      {...rest}
      onClick={() => {
        if (dType === 'ios') {
          handleNavigate(IOS_URL, true);
        }
        if (dType === 'android') {
          const isBrowser = typeof window !== 'undefined';
          if (!isBrowser) {
            return;
          }
          if (window?.location?.host === 'xbank.plus') {
            handleNavigate(ANDROID_PRO_URL, true);
          } else {
            handleNavigate(ANDROID_DEV_URL, true);
          }
        }
        if (dType === 'google') {
          handleNavigate(GOOGLE_PLAY_URL, true);
        }
      }}
    >
      <Flex justify={'space-between'} flexWrap='wrap'>
        {icon}
      </Flex>
    </Box>
  );
};

export default DownloadButton;
