import { Menu, MenuButton, MenuItem, MenuList, Portal } from '@chakra-ui/react';
import React from 'react';

type MyMenuProps = {
  title: React.ReactNode;
  data: any[];
};

const MyMenu: React.FunctionComponent<MyMenuProps> = ({ title, data }) => {
  return (
    <Menu>
      <MenuButton ml={10} id='menu-button'>
        {title}
      </MenuButton>
      <Portal>
        <MenuList zIndex={99}>
          {data?.map(({ label, onClick }) => (
            <MenuItem onClick={onClick} key={label}>
              {label}
            </MenuItem>
          ))}
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default MyMenu;
