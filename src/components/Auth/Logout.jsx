import {
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/Actions/userActions.js'; // adjust path

function Logout() {
  const { isAuthenticated, user } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleRetryLogout = () => {
    dispatch(logout());
  };

  return (
    <Container h={'95vh'}>
      <Stack h={'full'} justifyContent={'center'} alignItems={'center'}>
        <VStack
          spacing={6}
          p={10}
          w={['full', 'md']}
          borderRadius={'2xl'}
          boxShadow={'2xl'}
          bg={'white'}
          textAlign={'center'}
        >
          <Icon as={FiLogOut} boxSize={12} color={'yellow.500'} />

          {isAuthenticated ? (
            <>
              <Heading size={'lg'} color={'yellow.600'}>
                Oops, still logged in
              </Heading>
              <Text fontSize={'md'} color={'gray.600'}>
                Hi <b>{user?.name}</b>, the logout didn’t work.
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                You can retry or go back to your profile.
              </Text>

              <Stack direction={['column', 'row']} spacing={4} pt={4} w={'full'}>
                <Button
                  colorScheme="yellow"
                  w={'full'}
                  onClick={handleRetryLogout}
                >
                  Retry Logout
                </Button>
                <Link to={'/profile'} style={{ width: '100%' }}>
                  <Button colorScheme="yellow" variant={'outline'} w={'full'}>
                    Go to Profile
                  </Button>
                </Link>
              </Stack>
            </>
          ) : (
            <>
              <Heading size={'lg'} color={'yellow.600'}>
                You’ve been logged out
              </Heading>
              <Text fontSize={'md'} color={'gray.600'}>
                Thanks for visiting <b>CourseBundler</b>.
              </Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Come back anytime to continue your learning journey 🚀
              </Text>

              <Stack direction={['column', 'row']} spacing={4} pt={4} w={'full'}>
                <Link to={'/'} style={{ width: '100%' }}>
                  <Button colorScheme="yellow" w={'full'}>
                    Go Home
                  </Button>
                </Link>
                <Link to={'/login'} style={{ width: '100%' }}>
                  <Button colorScheme="yellow" variant={'outline'} w={'full'}>
                    Login Again
                  </Button>
                </Link>
              </Stack>
            </>
          )}
        </VStack>
      </Stack>
    </Container>
  );
}

export default Logout;
