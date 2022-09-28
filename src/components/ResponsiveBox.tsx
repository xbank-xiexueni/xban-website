import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';
type ResponsiveBoxProps = BoxProps & {
  mobile: React.ReactElement;
  pc: React.ReactElement;
};
const ResponsiveBox: React.FunctionComponent<ResponsiveBoxProps> = ({
  mobile,
  pc,
  ...rest
}) => {
  return (
    <Box {...rest}>
      <Box
        display={{
          md: 'block',
          sm: 'none',
          xs: 'none',
        }}
      >
        {pc}
      </Box>
      <Box
        display={{
          md: 'none',
          sm: 'block',
          xs: 'block',
        }}
      >
        {mobile}
      </Box>
    </Box>
  );
};

export default ResponsiveBox;
