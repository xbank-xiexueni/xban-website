import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';

const breakpoints = {
  xs: '345px',
  sm: '668px',
  md: '968px',
  lg: '1200px',
  xl: '1400px',
  '2xl': '1920px',
};

const theme = {
  colors: {
    primary: '#0000FF',
    secondary: '#E802E5',
    // 提示文字
    font: {
      primary: '#00000F',
      tip: '#566E8C',
    },
    bg: {
      gray: '#F2F5FA',
    },
    border: '#EFF4FB',
  },
  breakpoints,
  fonts: {
    body: 'HarmonyOS',
    heading: 'HarmonyOS',
    mono: 'HarmonyOS',
  },
};

export default extendTheme(theme);
