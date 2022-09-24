// theme.ts

// theme/index.ts
import { extendTheme } from '@chakra-ui/react';

// Global style overrides
// import styles from './styles';

// import config from './config';

import breakpoints from './breakpoints';

// import colors from './color';

// import components from './components';

const overrides = {
  // styles,
  // config,
  colors: {
    primary: 'pink',
  },
  breakpoints,
  // components,
};

export default extendTheme(overrides);
