import { Box,Grid, Heading, Text, VStack } from '@chakra-ui/react'
// import Introvideo from '../../assets/vedios/intro.mp4'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../redux/Actions/courseActions';
import Loader from '../Layout/Loader/Loader';


const CoursePage = ({user}) => {
 const [lectureNumber,setLectureNumber] = useState(0);
   const { lectures, loading } = useSelector(state => state.course);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to={'/subscribe'} />;
  }
   
    
  return  loading ? (
    <Loader />
  ) :(
   <Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']}>
            {lectures && lectures.length > 0 ? ( 
               <>

    <Box>
    <video
    width={'100%'}
                controls   
                 controlsList='nodownload  noremoteplayback'
                 disablePictureInPicture
                 disableRemotePlayback
                src={lectures[lectureNumber].video.url}
                >
                   </video>  
                   <Heading m={'4'}>
   {`#${lectureNumber+1} ${lectures[lectureNumber].title}`}
      </Heading>

      <Heading m={'4'}>
   Description
      </Heading>
      <Text m={'4'}>
        {lectures[lectureNumber].description}
      </Text>

    </Box>
    <VStack>
        {
            lectures.map((element,index)=>(
                <button onClick={()=>setLectureNumber(index)} key={element._id}
                style={{
                    width:"100%",
                    padding:"1rem",
                    textAlign:"center",
                    margin:"0",
                    borderBottom:"1px solid rgba   (0, 0, 0, 0.2  )"
                }}  
                >
                    <Text noOfLines={1}>
                        #{index+1} {element.title}
                    </Text>
                </button>

            ))
        }
    </VStack>
    </>
      ) : (
        <VStack justify="center" align="center" minH="70vh" spacing={4}>
    <Text fontSize="5xl">📚</Text>
    <Heading size="md" color="gray.600">
      No Lectures Found
    </Heading>
    <Text color="gray.400">Please check back later</Text>
  </VStack>
      )} 

   </Grid>
  )
}

export default CoursePage
