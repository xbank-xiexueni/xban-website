import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

type MyMenuProps = {
  title: React.ReactNode;
  data: any[];
  focusId?:
    | 'ABOUT_US_ID'
    | 'COMMUNITY_ID'
    | 'CONVERT_MONEY_ID'
    | 'DISCOVER_WEB3_ID';
};

const MyMenu: React.FunctionComponent<MyMenuProps> = ({
  title,
  data,
  focusId,
}) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  console.log(isOpen);
  return (
    <Menu isOpen={isOpen}>
      <MenuButton ml={10} id='menu-button' onClick={onToggle}>
        {title}
      </MenuButton>
      <Portal>
        <MenuList zIndex={99}>
          {data?.map(({ label, onClick, cId }) => (
            <Box
              cursor={'pointer'}
              fontSize={16}
              onClick={() => {
                onClick();
                onClose();
              }}
              // color={}
              key={label}
              py={2}
              px={3}
              _active={{
                bg: 'bg.gray',
              }}
              bg={focusId === cId ? 'bg.gray' : '#FFFFFF'}
            >
              {label}
            </Box>
          ))}
        </MenuList>
      </Portal>
    </Menu>
  );
};

export default MyMenu;
