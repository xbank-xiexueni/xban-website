import { BoxProps, Box } from '@chakra-ui/react';
import React from 'react';

import './index.scss';
const CardBorder: React.FunctionComponent<BoxProps> = ({
  children,
  ...rest
}) => {
  return (
    <>
      <Box
        borderWidth={4}
        borderStyle='solid'
        borderColor={'border'}
        // borderColor={'pink'}
        borderRadius={8}
        {...rest}
      >
        {children}
      </Box>
      <Box className='tri' />
    </>
  );
};

export default CardBorder;
