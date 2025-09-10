import {
  Box,
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

function Logout() {
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
          {/* Icon + Title */}
          <Icon as={FiLogOut} boxSize={12} color={'yellow.500'} />
          <Heading size={'lg'} color={'yellow.600'}>
            You’ve been logged out
          </Heading>

          {/* Subtitle */}
          <Text fontSize={'md'} color={'gray.600'}>
            Thanks for visiting <b>CourseBundler</b>.
          </Text>
          <Text fontSize={'sm'} color={'gray.500'}>
            Come back anytime to continue your learning journey 🚀
          </Text>

          {/* Buttons */}
          <Stack direction={['column', 'row']} spacing={4} pt={4} w={'full'}>
            <Link to={'/'} style={{ width: '100%' }}>
              <Button colorScheme='yellow' w={'full'}>
                Go Home
              </Button>
            </Link>

            <Link to={'/login'} style={{ width: '100%' }}>
              <Button colorScheme='yellow' variant={'outline'} w={'full'}>
                Login Again
              </Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
    </Container>
  );
}

export default Logout;
