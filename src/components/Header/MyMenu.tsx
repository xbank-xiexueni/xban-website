import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuProps,
  Portal,
} from '@chakra-ui/react';
import React from 'react';

type MyMenuProps = {
  title: string;
  data: any[];
};

const MyMenu: React.FunctionComponent<MyMenuProps> = ({ title, data }) => {
  return (
    <Menu>
      <MenuButton ml={10}>{title}</MenuButton>
      <Portal>
        <MenuList>
          {data?.map(({ label, onClick }) => (
            <MenuItem onClick={onClick}>{label}</MenuItem>
          ))}
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default MyMenu;
