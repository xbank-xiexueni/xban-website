import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import {
  DISCORD_URL,
  FACEBOOK_URL,
  INS_URL,
  LINKEDIN_URL,
} from '../../constants/URL';
import MyContainer from '../container';
import { handleNavigate } from '../../utils/navigate';

const DES = [
  'Initial Blockchain Tech Inc (EntityID#20218185210) is a company registered with the office of the secretary of state of the state of Colorado, with its principal office address at 4255 South Buckley Road#1296, Aurora, Colorado. It is a regulated money service provider which has registered with FinCEN as a Money Service Business (MSB) with the registration number of 31000205541338.',
  'Travel Tao AU PTY Ltd (Company Number 638433860) is a company registered in New South Wales of Australia, with its principal office address at 102 Level 1, 309 Pitt Street, Sydney. It is a regulated remittance service provider which has registered with AUSTRAC.',
];

const Footer = () => {
  return (
    <MyContainer
      py={{
        md: 70,
        sm: 10,
        xs: 10,
      }}
    >
      <Flex alignItems={'center'}>
        {ICON}
        <Text
          fontSize={{
            md: 40,
            sm: 14,
            xs: 14,
          }}
          color={'font.primary'}
        >
          &nbsp;xBank
        </Text>
      </Flex>
      <Flex justify={'space-between'} mb={70} gap={10} flexWrap='wrap'>
        <Box>
          <Text
            fontSize={{
              md: 14,
              sm: 12,
              xs: 12,
            }}
            display={'flex'}
            alignItems='center'
            cursor={'pointer'}
            onClick={() => {
              handleNavigate('mailto:help@xbank.plus');
            }}
          >
            {EMAIL}&nbsp;help@xbank.plus
          </Text>
          {/* <Flex mt={5} gap={2}>
            {DATA.map(({ url, icon }) => (
              <Box
                onClick={() => {
                  handleNavigate(url)
                }}
                key={icon.toString()}
                cursor='pointer'
              >
                {icon}
              </Box>
            ))}
          </Flex> */}
        </Box>
        <Flex direction={'column'} gap={6}>
          {DES.map((item) => (
            <Text
              color={'font.primary'}
              fontSize={12}
              lineHeight={'22px'}
              key={item}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Flex>
      <Divider />
      <Box
        display={{
          md: 'flex',
          sm: 'block',
          xs: 'block',
        }}
        maxW={406}
        justifyContent='space-between'
        flexWrap='wrap'
      >
        <Text color={'font.primary'} fontSize={12} mt={3}>
          {new Date().getFullYear()}2022 © All Rights Reserved
        </Text>
        <Text color={'font.primary'} opacity={0.5} fontSize={12} mt={3}>
          <a href='https://xbank.plus/terms-of-service/en' target='_blank'>
            Terms of Services
          </a>
        </Text>
        <Text color={'font.primary'} opacity={0.5} fontSize={12} mt={3}>
          <a href='https://xbank.plus/privacy-policy/en' target='_blank'>
            Private Policy
          </a>
        </Text>
      </Box>
    </MyContainer>
  );
};

const EMAIL = (
  <svg
    width='20'
    height='16'
    viewBox='0 0 20 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18.3346 3.00065C18.3346 2.08398 17.5846 1.33398 16.668 1.33398H3.33464C2.41797 1.33398 1.66797 2.08398 1.66797 3.00065M18.3346 3.00065V13.0007C18.3346 13.9173 17.5846 14.6673 16.668 14.6673H3.33464C2.41797 14.6673 1.66797 13.9173 1.66797 13.0007V3.00065M18.3346 3.00065L10.0013 8.83398L1.66797 3.00065'
      stroke='#00000F'
      strokeWidth='1.66667'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const TWITTER = (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      width='31.4118'
      height='31.4118'
      rx='15.7059'
      fill='black'
      fillOpacity='0.1'
    />
    <path
      d='M21.9184 10.4121L22.4644 10.376C22.4499 10.1563 22.3051 9.96674 22.097 9.89488C21.8889 9.82302 21.658 9.8829 21.511 10.0468L21.9184 10.4121ZM21.5766 13.0555C21.5766 12.7533 21.3316 12.5083 21.0294 12.5083C20.7272 12.5083 20.4822 12.7533 20.4822 13.0555H21.5766ZM15.7051 13.8516V14.3988H16.2523V13.8516H15.7051ZM10.3616 10.4121L10.8743 10.2208C10.7981 10.0166 10.6079 9.87705 10.3902 9.86566C10.1725 9.85428 9.96884 9.97319 9.87173 10.1684L10.3616 10.4121ZM13.8354 18.5418L14.2233 18.9278C14.3568 18.7936 14.4115 18.6 14.3679 18.4158C14.3243 18.2317 14.1887 18.0831 14.0092 18.023L13.8354 18.5418ZM9.47266 20.2392V19.692C9.23176 19.692 9.0192 19.8496 8.94912 20.0801C8.87905 20.3105 8.96796 20.5597 9.16809 20.6938L9.47266 20.2392ZM20.3493 11.2817L19.9428 11.648L20.1401 11.867L20.4315 11.8227L20.3493 11.2817ZM21.3724 10.4482C21.418 11.1381 21.3747 11.5442 21.269 11.8429C21.1675 12.1301 20.9898 12.3712 20.6502 12.6978L21.4087 13.4867C21.8036 13.1069 22.1178 12.7253 22.3008 12.2077C22.4798 11.7016 22.5136 11.1207 22.4644 10.376L21.3724 10.4482ZM21.5766 13.7064V13.0922H20.4822V13.7064H21.5766ZM21.5766 13.0922V13.0555H20.4822V13.0922H21.5766ZM15.158 13.2262V13.8516H16.2523V13.2262H15.158ZM18.399 9.86492C16.5742 9.86492 15.158 11.454 15.158 13.2262H16.2523C16.2523 11.9976 17.2377 10.9593 18.399 10.9593V9.86492ZM20.4822 13.7064C20.4822 17.5181 17.2904 20.8088 13.5238 20.8088V21.9031C17.9196 21.9031 21.5766 18.0974 21.5766 13.7064H20.4822ZM9.84898 10.6034C10.3496 11.9451 12.2154 14.3988 15.7051 14.3988V13.3044C12.7943 13.3044 11.2626 11.2615 10.8743 10.2208L9.84898 10.6034ZM9.87173 10.1684C8.93147 12.0582 8.75993 13.9243 9.42649 15.5249C10.0932 17.1257 11.554 18.3547 13.6616 19.0607L14.0092 18.023C12.1164 17.3889 10.9513 16.3397 10.4368 15.1041C9.92205 13.8682 10.0138 12.3395 10.8515 10.6559L9.87173 10.1684ZM13.4475 18.1559C12.9326 18.6733 11.4287 19.692 9.47266 19.692V20.7864C11.7838 20.7864 13.5529 19.6015 14.2233 18.9278L13.4475 18.1559ZM20.7558 10.9154C20.1754 10.2714 19.3344 9.86492 18.399 9.86492V10.9593C19.0106 10.9593 19.5606 11.2238 19.9428 11.648L20.7558 10.9154ZM20.4315 11.8227C21.1334 11.716 21.8152 11.3469 22.3258 10.7774L21.511 10.0468C21.1628 10.4351 20.7078 10.6738 20.2671 10.7407L20.4315 11.8227ZM9.16809 20.6938C10.6202 21.6667 12.0191 21.9031 13.5238 21.9031V20.8088C12.1554 20.8088 10.9921 20.5986 9.77722 19.7846L9.16809 20.6938Z'
      fill='#00000F'
    />
  </svg>
);

const FACEBOOK = (
  <svg
    width='33'
    height='32'
    viewBox='0 0 33 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='0.646973'
      width='31.4118'
      height='31.4118'
      rx='15.7059'
      fill='black'
      fillOpacity='0.1'
    />
    <path
      d='M16.3535 21.5963C19.6062 21.5963 22.2432 18.9594 22.2432 15.7066C22.2432 12.4538 19.6062 9.81689 16.3535 9.81689C13.1007 9.81689 10.4637 12.4538 10.4637 15.7066C10.4637 18.9594 13.1007 21.5963 16.3535 21.5963Z'
      stroke='#00000F'
      strokeWidth='1.30882'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.8075 13.2524H17.8259C17.4354 13.2524 17.0609 13.4076 16.7847 13.6837C16.5086 13.9598 16.3535 14.3344 16.3535 14.7249V21.5962'
      stroke='#00000F'
      strokeWidth='1.30882'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.3902 16.688H18.3167'
      stroke='#00000F'
      strokeWidth='1.30882'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const DISCORD = (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='0.294189'
      width='31.4118'
      height='31.4118'
      rx='15.7059'
      fill='black'
      fillOpacity='0.1'
    />
    <g clip-path='url(#clip0_1_873)'>
      <path
        d='M21.3473 10.3618L17.1623 22.3594L14.7709 16.9605L9.39026 14.561L21.3473 10.3618Z'
        stroke='#00000F'
        strokeWidth='1.19975'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.3473 10.3618L14.7709 16.9605'
        stroke='#00000F'
        strokeWidth='1.19975'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_873'>
        <rect
          width='14.3484'
          height='14.3971'
          fill='white'
          transform='translate(8.19458 9.16211)'
        />
      </clipPath>
    </defs>
  </svg>
);

const INS = (
  <svg
    width='33'
    height='32'
    viewBox='0 0 33 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='0.941162'
      width='31.4118'
      height='31.4118'
      rx='15.7059'
      fill='black'
      fillOpacity='0.1'
    />
    <path
      d='M19.7331 12.9118H20.2941M13.2825 10.0977H20.0136C21.2528 10.0977 22.2573 11.1056 22.2573 12.349V19.1029C22.2573 20.3462 21.2528 21.3542 20.0136 21.3542H13.2825C12.0434 21.3542 11.0388 20.3462 11.0388 19.1029V12.349C11.0388 11.1056 12.0434 10.0977 13.2825 10.0977ZM16.6481 17.9772C15.4089 17.9772 14.4044 16.9693 14.4044 15.7259C14.4044 14.4826 15.4089 13.4746 16.6481 13.4746C17.8872 13.4746 18.8918 14.4826 18.8918 15.7259C18.8918 16.9693 17.8872 17.9772 16.6481 17.9772Z'
      stroke='#00000F'
      strokeWidth='0.984945'
    />
  </svg>
);

const LINKEDIN = (
  <svg
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='0.588135'
      width='31.4118'
      height='31.4118'
      rx='15.7059'
      fill='black'
      fillOpacity='0.1'
    />
    <path
      d='M21.2027 10.3076H11.3865C11.1154 10.3076 10.8957 10.5274 10.8957 10.7984V20.6146C10.8957 20.8857 11.1154 21.1054 11.3865 21.1054H21.2027C21.4737 21.1054 21.6935 20.8857 21.6935 20.6146V10.7984C21.6935 10.5274 21.4737 10.3076 21.2027 10.3076Z'
      stroke='#00000F'
      strokeWidth='1.30882'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.8038 14.7246V18.6511'
      stroke='#00000F'
      strokeWidth='1.30882'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.8405 14.7246V18.6511'
      stroke='#00000F'
      strokeWidth='1.30882'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.8038 16.4424C15.8038 15.9868 15.9848 15.5499 16.3069 15.2278C16.6291 14.9056 17.066 14.7246 17.5216 14.7246C17.9772 14.7246 18.4141 14.9056 18.7363 15.2278C19.0584 15.5499 19.2394 15.9868 19.2394 16.4424V18.6511'
      stroke='#00000F'
      strokeWidth='1.30882'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13.8406 13.4978C14.2472 13.4978 14.5768 13.1682 14.5768 12.7616C14.5768 12.355 14.2472 12.0254 13.8406 12.0254C13.434 12.0254 13.1043 12.355 13.1043 12.7616C13.1043 13.1682 13.434 13.4978 13.8406 13.4978Z'
      fill='#00000F'
    />
  </svg>
);

const ICON = (
  <svg
    width='71'
    height='32'
    viewBox='0 0 71 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M55.0797 0.715332C51.0186 0.715332 47.1842 2.28309 44.2816 5.12899L24.0707 24.9557C21.7475 27.235 18.6749 28.4881 15.426 28.4881C8.66389 28.4881 3.15469 23.0292 3.07914 16.2859C2.99729 9.58671 8.35537 3.98937 15.0546 3.79418C18.4419 3.69344 21.6593 4.95898 24.0707 7.32008L29.2211 12.3759C29.4981 12.6466 29.9451 12.6404 30.216 12.3634L31.387 11.1734C31.6577 10.8963 31.6515 10.4493 31.3744 10.1786L26.2241 5.12268C23.3215 2.28309 19.4871 0.715332 15.4198 0.715332C6.76872 0.715332 -0.245272 7.88044 0.00657681 16.5944C0.239537 24.5528 6.58614 31.0883 14.5319 31.5354C18.9204 31.7809 23.1074 30.2005 26.2178 27.1468L46.4286 7.32008C48.7519 5.04083 51.8246 3.78789 55.0734 3.78789C61.8355 3.78789 67.3384 9.24671 67.4202 15.99C67.5085 22.6892 62.1441 28.2865 55.4511 28.4817C52.0638 28.5824 48.8464 27.3169 46.435 24.9557L41.2847 19.8999C41.0076 19.6292 40.5606 19.6355 40.2899 19.9126L39.1188 21.1024C38.848 21.3795 38.8544 21.8266 39.1313 22.0973L44.2816 27.1532C47.392 30.2068 51.5789 31.7872 55.9675 31.5417C63.9196 31.1009 70.2662 24.5592 70.4991 16.6007C70.7509 7.88044 63.737 0.715332 55.0797 0.715332Z'
      fill='url(#paint0_linear_1_853)'
    />
    <defs>
      <linearGradient
        id='paint0_linear_1_853'
        x1='56.16'
        y1='1.32002'
        x2='7.92'
        y2='31.56'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#EA01E5' />
        <stop offset='0.437907' stopColor='#5844F5' />
        <stop offset='1' stopColor='#1CFEF0' />
      </linearGradient>
    </defs>
  </svg>
);

const DATA = [
  {
    url: 'https://twitter.com/xBank_Official',
    icon: TWITTER,
  },
  {
    url: FACEBOOK_URL,
    icon: FACEBOOK,
  },
  {
    url: DISCORD_URL,
    icon: DISCORD,
  },
  {
    url: INS_URL,
    icon: INS,
  },
  {
    url: LINKEDIN_URL,
    icon: LINKEDIN,
  },
];
export default Footer;
