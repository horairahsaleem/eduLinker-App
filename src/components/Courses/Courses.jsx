import { Button, Container, Heading, HStack, Image, Input, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/Actions/courseActions.js';
import toast from 'react-hot-toast';
import { addToPlaylist } from '../../redux/Actions/profileActions.js';
import { loadUser } from '../../redux/Actions/userActions.js';

const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount, loading,
})=>{
  return(
    <VStack className='course' alignItems={['center','flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'}/>
      <Heading
      textAlign={['center','left']}
      maxW='200px'
      fontFamily={'sans-serif'}
      noOfLines={3}
      children={title}
      size={'sm'}
      />
            <Text noOfLines={2}  children={description}  />

            <HStack>
            <Text fontWeight='bold' children={"Creator"}  textTransform={'uppercase'} /> 
      <Text fontWeight='body' children={creator}  textTransform={'uppercase'} /> 
  
      </HStack>
      <Heading textAlign={'center'} children={`lecture - ${lectureCount}`} size={'sm'} textTransform={'uppercase'}/>
      <Heading  children={`Views - ${views}`} size={'sm'} textTransform={'uppercase'}/>
      <Stack direction={['column','row']} alignItems={'center'}>
        <Link to={`/course/${id}`} >
        <Button colorScheme='yellow'>Watch Now</Button>
        </Link>
        <Button isLoading={loading} variant={'ghost'} colorScheme='yellow' onClick={()=>addToPlaylistHandler(id)}>Add to Playlist</Button>

      </Stack>


    </VStack>

  )
}

function Courses() {
  const [keyword,setKeyword] = useState('');
  const [category,setCategory] = useState('');
   const dispatch = useDispatch();

  const addToPlaylistHandler = async couseId => {
    await dispatch(addToPlaylist(couseId));
    dispatch(loadUser());
  };

  const categories=[
    'Web Development','Data Science','DataBase','Data Structures and Algorithms','Artificial Intelligence','Game development'
  ]
 const { loading, courses, error, message } = useSelector(
    state => state.course
  );

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
    <>
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'}/>
      <Input value={keyword} onChange={(e)=>setKeyword(e.target.value)}  placeholder='serach a keyword' type='text' focusBorderColor='yellow.500'/>
       <HStack overflow={'auto'} paddingY={'8'}>
        {
          categories.map((item ,index)=>(
            <Button  key={index} onClick={()=>setCategory(item)} minW={'60'}>
          <Text children={item}/>

        </Button>
        
          ))
        }
       </HStack>
       <Stack
       direction={['column','row']}
       flexWrap={'wrap'}
       justifyContent={['flex-start','space-evenly']}
       alignItems={['center','flex-start']}
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
              creator={item.createdBy}
              lectureCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading mt="4" children="Courses Not Found" />
        )}
       </Stack>
    </Container>
    </>
  )
}

export default Courses
