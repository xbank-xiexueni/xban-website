import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import MyContainer from '../container';
import DownloadButton from '../DownloadButton';

const DownloadApp = () => {
  return (
    <Box bg='bg.gray' py={100}>
      <MyContainer bg='primary' borderRadius={26}>
        <Flex justify={'center'} py={12} flexWrap={'wrap'}>
          <Box
            w={{
              md: '40%',
              sm: '100%',
              xs: '100%',
            }}
            height={200}
            bg='pink'
          ></Box>
          <Box color={'#FFFFFF'} w={'50%'}>
            <Heading>Download xBank Apps for iOS</Heading>
            {/* <Heading>Download xBank Apps for iOS & Android</Heading> */}
            <Text mt={5} mb={6}>
              xBank currently support more than 70 different kinds of fiats to
              purchase.
            </Text>

            <DownloadButton dType='ios' bg='#6867F5' mr={2} w={130} />
            {/* <DownloadButton dType='android' bg='#6867F5' w={130} /> */}
          </Box>
        </Flex>
      </MyContainer>
    </Box>
  );
};

const IOS_ICON = (
  <svg
    width='24'
    height='29'
    viewBox='0 0 24 29'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M19.4756 15.5399C19.4433 11.9946 22.4078 10.2698 22.5433 10.1895C20.8645 7.76621 18.2622 7.43511 17.3478 7.40871C15.1622 7.18101 13.0422 8.70341 11.9289 8.70341C10.7933 8.70341 9.07889 7.43071 7.23111 7.46811C4.85334 7.50441 2.62889 8.86731 1.40889 10.9837C-1.10889 15.299 0.768892 21.6405 3.18111 25.1286C4.38778 26.8369 5.79778 28.7443 7.64334 28.6772C9.44889 28.6035 10.1233 27.5376 12.3022 27.5376C14.4611 27.5376 15.0944 28.6772 16.9767 28.6343C18.9144 28.6035 20.1344 26.9183 21.2989 25.1946C22.6933 23.2366 23.2533 21.3083 23.2756 21.2093C23.23 21.1939 19.5122 19.7892 19.4756 15.5399Z'
      fill='white'
    />
    <path
      d='M15.92 5.11411C16.8911 3.91181 17.5556 2.27611 17.3711 0.616211C15.9656 0.677811 14.2078 1.57871 13.1956 2.75461C12.3 3.79081 11.5 5.48921 11.7067 7.08641C13.2856 7.20301 14.9067 6.29771 15.92 5.11411Z'
      fill='white'
    />
  </svg>
);

const GOOGLE_PLAY_ICON = (
  <svg
    width='26'
    height='29'
    viewBox='0 0 26 29'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0.594454 0.905291C0.268066 1.23681 0.0791779 1.75297 0.0791779 2.4214V26.2641C0.0791779 26.9326 0.268066 27.4487 0.594454 27.7803L0.675011 27.853L14.4444 14.4978V14.1824L0.675011 0.827127L0.594454 0.905291Z'
      fill='url(#paint0_linear_9_98)'
    />
    <path
      d='M19.0291 18.9517L14.4444 14.4977V14.1823L19.0347 9.7283L19.1375 9.78625L24.5736 12.7875C26.125 13.6392 26.125 15.0408 24.5736 15.8979L19.1375 18.8937L19.0291 18.9517Z'
      fill='url(#paint1_linear_9_98)'
    />
    <path
      d='M19.1375 18.8938L14.4444 14.3401L0.594437 27.7802C1.10971 28.3058 1.94999 28.3692 2.90555 27.8436L19.1375 18.8938Z'
      fill='url(#paint2_linear_9_98)'
    />
    <path
      d='M19.1375 9.78612L2.90555 0.836332C1.94999 0.316137 1.10971 0.379475 0.594437 0.905061L14.4444 14.3398L19.1375 9.78612Z'
      fill='url(#paint3_linear_9_98)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_9_98'
        x1='13.2219'
        y1='26.5124'
        x2='-4.86342'
        y2='7.8738'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#00A0FF' />
        <stop offset='0.0066' stop-color='#00A1FF' />
        <stop offset='0.2601' stop-color='#00BEFF' />
        <stop offset='0.5122' stop-color='#00D2FF' />
        <stop offset='0.7604' stop-color='#00DFFF' />
        <stop offset='1' stop-color='#00E3FF' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_9_98'
        x1='26.5937'
        y1='14.3385'
        x2='-0.291694'
        y2='14.3385'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#FFE000' />
        <stop offset='0.4087' stop-color='#FFBD00' />
        <stop offset='0.7754' stop-color='#FFA500' />
        <stop offset='1' stop-color='#FF9C00' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_9_98'
        x1='16.5855'
        y1='11.8646'
        x2='-7.9396'
        y2='-13.4109'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#FF3A44' />
        <stop offset='1' stop-color='#C31162' />
      </linearGradient>
      <linearGradient
        id='paint3_linear_9_98'
        x1='-2.8919'
        y1='35.7124'
        x2='8.05968'
        y2='24.4258'
        gradientUnits='userSpaceOnUse'
      >
        <stop stop-color='#32A071' />
        <stop offset='0.0685' stop-color='#2DA771' />
        <stop offset='0.4762' stop-color='#15CF74' />
        <stop offset='0.8009' stop-color='#06E775' />
        <stop offset='1' stop-color='#00F076' />
      </linearGradient>
    </defs>
  </svg>
);

export default DownloadApp;
