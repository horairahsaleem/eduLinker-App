import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Introvideo from '../../assets/vedios/intro.mp4'

const CoursePage = () => {
    const [lectureNumber,setLectureNumber] = useState(0)
    const lectures= [
        {
           _id: 'asdfghjkl1',
          title:'Sample1',
          description:'This is the sample data actual data come from the  the backend and they properly will be displayed here ',
       video:{
    url:'asdsdsadsadsa'
   }
        },
        {
           _id: 'asdfghjk2',
          title:'Sample2',
          description:'This is the sample data actual data come from the  the backend and they properly will be displayed here ',
       video:{
    url:'asdsdsadsadsa'
   }
        }
        ,
        {
           _id: 'asdfghjk3',
          title:'Sample3',
          description:'This is the sample data actual data come from the  the backend and they properly will be displayed here ',
       video:{
    url:'asdsdsadsadsa'
   }
        }
        ,
        {
           _id: 'asdfghjk4',
          title:'Sample4',
          description:'This is the sample data actual data come from the  the backend and they properly will be displayed here ',
       video:{
    url:'asdsdsadsadsa'
   }
        }
    ]
    
  return (
   <Grid minH={'90vh'} templateColumns={['1fr','3fr 1fr']}>
    <Box>
    <video
    width={'100%'}
                controls   
                 controlsList='nodownload  noremoteplayback'
                 disablePictureInPicture
                 disableRemotePlayback
                src={Introvideo}
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

   </Grid>
  )
}

export default CoursePage
