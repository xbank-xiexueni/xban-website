import * as React from 'react';
import { Link, HeadFC } from 'gatsby';
import { Flex, Button, Text, Heading, Box } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <Flex h='100vh' alignItems={'center'}>
      <Box m={5} border='1px solid var(--chakra-colors-bg-gray)'>
        <Heading bg={'bg.gray'} textAlign='center' py={2}>
          Not Found
        </Heading>
        <Flex justify={'center'} p={6} flexWrap='wrap'>
          <Text fontSize={16}>
            Sorry, we couldn’t find what you were looking for.
          </Text>

          <Button bg={'primary'} color='#FFFFFF' mt={6}>
            <Link to='/'>Go home</Link>.
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
