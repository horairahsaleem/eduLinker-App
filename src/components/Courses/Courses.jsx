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
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/Actions/courseActions.js';
import toast from 'react-hot-toast';
import { addToPlaylist } from '../../redux/Actions/profileActions.js';
import { loadUser } from '../../redux/Actions/userActions.js';

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
    <VStack
      alignItems="flex-start"
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      w="280px"
      h="420px"
      spacing="3"
      justifyContent="space-between"
      bg="white"
    >
      {/* Image */}
      <Box
        w="full"
        h="150px"
        borderRadius="md"
        overflow="hidden"
        bg="gray.50"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={imageSrc}
          alt={title}
          objectFit="contain"
          maxW="100%"
          maxH="100%"
          fallbackSrc="https://via.placeholder.com/280x150"
        />
      </Box>

      {/* Title & Description */}
      <Box flex="1" w="full">
        <Heading size="sm" noOfLines={2} mb="1" color="gray.800">
          {title}
        </Heading>
        <Text noOfLines={2} fontSize="sm" color="gray.600">
          {description}
        </Text>
      </Box>

      {/* Meta */}
      <VStack align="flex-start" spacing="1" fontSize="sm" color="gray.700">
        <Text>
          <b>Creator:</b> {creator}
        </Text>
        <Text>Lectures: {lectureCount}</Text>
        <Text>Views: {views}</Text>
      </VStack>

      {/* Buttons */}
      <Stack direction="row" spacing="2" w="full" justifyContent="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow" size="sm">
            Watch Now
          </Button>
        </Link>
        <Button
          isLoading={loading}
          variant="outline"
          colorScheme="yellow"
          size="sm"
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

function Courses() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const addToPlaylistHandler = async courseId => {
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  };

  const categories = [
    'Web Development',
    'Programming',
    'Data Science',
    'DataBase',
    'Data Structures and Algorithms',
    'Artificial Intelligence',
    'Game development',
  ];

  const { loading, courses, error, message } = useSelector(state => state.course);

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [category, keyword, dispatch, error, message]);

  return (
    <Container minH="95vh" maxW="container.lg" py="10">
      <Heading mb="6">All Courses</Heading>

      {/* Search */}
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a keyword"
        type="text"
        focusBorderColor="yellow.500"
        mb="6"
      />

      {/* Categories */}
      <HStack overflowX="auto" py="4" spacing="4">
        {categories.map((item, index) => (
          <Button
            key={index}
            onClick={() => setCategory(item)}
            size="sm"
            variant={category === item ? 'solid' : 'outline'}
            colorScheme="yellow"
            flexShrink={0}
          >
            {item}
          </Button>
        ))}
      </HStack>

      {/* Courses */}
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['center', 'flex-start']}
        alignItems="flex-start"
        spacing="6"
        mt="8"
      >
        {courses.length > 0 ? (
          courses.map(item => (
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
          ))
        ) : (
          <Heading size="md" color="gray.500">
            Courses Not Found
          </Heading>
        )}
      </Stack>
    </Container>
  );
}

export default Courses;
