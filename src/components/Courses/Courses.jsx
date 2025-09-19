// import { Box , Button, Container, Heading, HStack, Image, Input, Link, Stack, Text, VStack } from '@chakra-ui/react'
// import React, { useState,useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllCourses } from '../../redux/Actions/courseActions.js';
// import toast from 'react-hot-toast';
// import { addToPlaylist } from '../../redux/Actions/profileActions.js';
// import { loadUser } from '../../redux/Actions/userActions.js';

// const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount, loading,
// })=>{
//   return(
//     <VStack className='course' alignItems={['center','flex-start']}>
//       <Image src={imageSrc} boxSize={'60'} objectFit={'contain'}/>
     
//       <Heading
//       textAlign={['center','left']}
//       maxW='200px'
//       fontFamily={'sans-serif'}
//       noOfLines={3}
//       children={title}
//       size={'sm'}
//       />
//             <Text noOfLines={2}  children={description}  />

//             <HStack>
//             <Text fontWeight='bold' children={"Creator"}  textTransform={'uppercase'} /> 
//       <Text fontWeight='body' children={creator}  textTransform={'uppercase'} /> 
  
//       </HStack>
//       <Heading textAlign={'center'} children={`lecture - ${lectureCount}`} size={'sm'} textTransform={'uppercase'}/>
//       <Heading  children={`Views - ${views}`} size={'sm'} textTransform={'uppercase'}/>
//       <Stack direction={['column','row']} alignItems={'center'}>
//         <Link to={`/course/${id}`} >
//         <Button colorScheme='yellow'>Watch Now</Button>
//         </Link>
//         <Button isLoading={loading} variant={'ghost'} colorScheme='yellow' onClick={()=>addToPlaylistHandler(id)}>Add to Playlist</Button>

//       </Stack>


//     </VStack>

//   )
// }
// // const Course = ({
// //   views,
// //   title,
// //   imageSrc,
// //   id,
// //   addToPlaylistHandler,
// //   creator,
// //   description,
// //   lectureCount,
// //   loading,
// // }) => {
// //   return (
// //     <VStack
// //       className="course"
// //       alignItems="flex-start"
// //       borderWidth="1px"
// //       borderRadius="lg"
// //       p="4"
// //       w="300px"            // fixed width
// //       h="450px"            // fixed height for all cards
// //       justifyContent="space-between" // pushes buttons to bottom
// //     >
// //       {/* Image container */}
// //       <Box
// //         w="full"
// //         h="150px"
// //         display="flex"
// //         alignItems="center"
// //         justifyContent="center"
// //       >
// //         <Image
// //           src={imageSrc}
// //           maxW="100%"
// //           maxH="100%"
// //           objectFit="cover"
// //           fallbackSrc="https://via.placeholder.com/150"
// //         />
// //   </Box>

// //       {/* Title & description section */}
// //       <Box flex="1" w="full">
// //         <Heading
// //           size="sm"
// //           noOfLines={2}
// //           children={title}
// //         />
// //         <Text noOfLines={2} children={description} mt="2" />

// //         <Text fontWeight="bold" mt="2">
// //           CREATOR <Text as="span" fontWeight="normal">{creator}</Text>
// //         </Text>

// //         <Text mt="1">LECTURES - {lectureCount}</Text>
// //         <Text>VIEWS - {views}</Text>
// //       </Box>

// //       {/* Buttons section */}
// //       <Stack direction="row" spacing="2" w="full" justifyContent="center">
// //         <Link to={`/course/${id}`}>
// //           <Button colorScheme="yellow">Watch Now</Button>
// //         </Link>
// //         <Button
// //           isLoading={loading}
// //           variant="ghost"
// //           colorScheme="yellow"
// //           onClick={() => addToPlaylistHandler(id)}
// //         >
// //           Add to Playlist
// //         </Button>
// //       </Stack>
// //     </VStack>
// //   );
// // };




// function Courses() {
//   const [keyword,setKeyword] = useState('');
//   const [category,setCategory] = useState('');
//    const dispatch = useDispatch();

//   const addToPlaylistHandler = async couseId => {
//     await dispatch(addToPlaylist(couseId));
//     dispatch(loadUser());
//   };

//   const categories=[
//     'Web Development','Programming','Data Science','DataBase','Data Structures and Algorithms','Artificial Intelligence','Game development'
//   ]
//  const { loading, courses, error, message } = useSelector(
//     state => state.course
//   );

//   useEffect(() => {
//     dispatch(getAllCourses(category, keyword));

//     if (error) {
//       toast.error(error);
//       dispatch({ type: 'clearError' });
//     }

//     if (message) {
//       toast.success(message);
//       dispatch({ type: 'clearMessage' });
//     }
//   }, [category, keyword, dispatch, error, message]);
//   return (
//     <>
//     <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
//       <Heading children="All Courses" m={'8'}/>
//       <Input value={keyword} onChange={(e)=>setKeyword(e.target.value)}  placeholder='serach a keyword' type='text' focusBorderColor='yellow.500'/>
//        <HStack overflow={'auto'} paddingY={'8'}>
//         {
//           categories.map((item ,index)=>(
//             <Button  key={index} onClick={()=>setCategory(item)} minW={'60'}>
//           <Text children={item}/>

//         </Button>
        
//           ))
//         }
//        </HStack>
//        <Stack
//        direction={['column','row']}
//        flexWrap={'wrap'}
//        justifyContent={['flex-start','space-evenly']}
//        alignItems={['center','flex-start']}
//        >
//  {courses.length > 0 ? (
//           courses.map(item => (
//             <Course
//               key={item._id}
//               title={item.title}
//               description={item.description}
//               views={item.views}
//               imageSrc={item.poster.url}
//               id={item._id}
//               creator={item.createdby}
//               lectureCount={item.numOfVideos}
//               addToPlaylistHandler={addToPlaylistHandler}
//               loading={loading}
//             />
//           ))
//         ) : (
//           <Heading mt="4" children="Courses Not Found" />
//         )}
//        </Stack>
//     </Container>
//     </>
//   )
// }

// export default Courses


import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
  useToast,
  Flex,
  Grid,
  Tag,
  TagLabel,
  Skeleton
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/Actions/courseActions.js';
import { addToPlaylist } from '../../redux/Actions/profileActions.js';
import { loadUser } from '../../redux/Actions/userActions.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <MotionBox
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      w="100%"
      bg="white"
      shadow="md"
      _hover={{ shadow: 'xl' }}
      transition="box-shadow 0.2s ease"
    >
      {/* Image */}
      <Box
        w="full"
        h="180px"
        overflow="hidden"
        bg="gray.50"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Image
          src={imageSrc}
          alt={title}
          objectFit="cover"
          w="full"
          h="full"
          fallbackSrc="https://via.placeholder.com/280x180?text=Course+Image"
        />
        <Tag
          size="sm"
          colorScheme="yellow"
          position="absolute"
          top="3"
          right="3"
          borderRadius="full"
        >
          {lectureCount} lectures
        </Tag>
      </Box>

      {/* Content */}
      <VStack p="5" spacing="4" align="stretch">
        {/* Title */}
        <Heading size="md" noOfLines={1} color="gray.800" fontWeight="600">
          {title}
        </Heading>

        {/* Description */}
        <Text noOfLines={2} fontSize="sm" color="gray.600" lineHeight="tall">
          {description}
        </Text>

        {/* Meta */}
        <VStack align="flex-start" spacing="1" fontSize="sm">
          <Text color="gray.700" noOfLines={1}>
            By <Text as="span" fontWeight="500">{creator}</Text>
          </Text>
          <Flex justify="space-between" w="full">
            <Text color="gray.500">{views} views</Text>
          </Flex>
        </VStack>

        {/* Buttons */}
        <Flex direction={{ base: 'column', sm: 'row' }} gap="3">
          <Button
            as={Link}
            to={`/course/${id}`}
            colorScheme="yellow"
            size="sm"
            borderRadius="lg"
            flex="1"
          >
            Watch Now
          </Button>
          <Button
            isLoading={loading}
            variant="outline"
            colorScheme="yellow"
            size="sm"
            borderRadius="lg"
            flex="1"
            onClick={() => addToPlaylistHandler(id)}
          >
            Add to Playlist
          </Button>
        </Flex>
      </VStack>
    </MotionBox>
  );
};

function Courses() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const toast = useToast();

  const addToPlaylistHandler = async courseId => {
    const result = await dispatch(addToPlaylist(courseId));
    if (result && result.success) {
      toast({
        title: 'Added to playlist',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
    dispatch(loadUser());
  };

  const categories = [
    'Web Development',
    'Programming',
    'Data Science',
    'DataBase',
    'Data Structures',
    'AI',
    'Game Development',
  
  ];

  const { loading, courses, error, message } = useSelector(
    state => state.course
  );

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));

    if (error) {
      toast({
        title: 'Error',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      dispatch({ type: 'clearMessage' });
    }
  }, [category, keyword, dispatch, error, message, toast]);

  return (
    <Container minH="95vh" maxW="container.lg" py="10">
      <Heading mb="6" color="gray.800" fontSize="3xl" fontWeight="700">
        All Courses
      </Heading>

      {/* Search */}
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search courses..."
        type="text"
        focusBorderColor="yellow.500"
        mb="8"
        borderRadius="lg"
        size="lg"
        shadow="sm"
        maxW="600px"
        mx="auto"
        display="block"
      />

      {/* Categories */}
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        gap="3"
        py="4"
        mb="8"
      >
        {categories.map((item, index) => (
          <Button
            key={index}
            onClick={() => setCategory(category === item ? '' : item)}
            size="sm"
            borderRadius="full"
            variant={category === item ? 'solid' : 'outline'}
            colorScheme="yellow"
            px="4"
            fontWeight="500"
          >
            {item}
          </Button>
        ))}
      </Flex>

      {/* Courses Grid */}
      {loading ? (
        <Grid
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={8}
          mt="8"
        >
          {[...Array(6)].map((_, i) => (
            <Box key={i} borderWidth="1px" borderRadius="xl" overflow="hidden">
              <Skeleton height="180px" />
              <VStack p="5" spacing="4" align="stretch">
                <Skeleton height="24px" />
                <Skeleton height="40px" />
                <Skeleton height="20px" width="70%" />
                <Flex gap="3" mt="2">
                  <Skeleton height="36px" flex="1" borderRadius="lg" />
                  <Skeleton height="36px" flex="1" borderRadius="lg" />
                </Flex>
              </VStack>
            </Box>
          ))}
        </Grid>
      ) : courses.length > 0 ? (
        <Grid
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gap={8}
          mt="8"
        >
          {courses.map(item => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdby}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))}
        </Grid>
      ) : (
        <VStack spacing="4" py="12" color="gray.500">
          <Heading size="md">No courses found</Heading>
          <Text>Try adjusting your search or filter criteria</Text>
          {(keyword || category) && (
            <Button
              colorScheme="yellow"
              onClick={() => {
                setKeyword('');
                setCategory('');
              }}
            >
              Clear Filters
            </Button>
          )}
        </VStack>
      )}
    </Container>
  );
}

export default Courses;