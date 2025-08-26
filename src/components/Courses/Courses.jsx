import { Button, Container, Heading, HStack, Image, Input, Link, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
const addToPlaylistHandler =()=>{
  console.log('added to playlist')
}
const Course = ({views,title,imageSrc,id,addToPlaylistHandler,creator,description,lectureCount})=>{
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
        <Button variant={'ghost'} colorScheme='yellow' onClick={()=>addToPlaylistHandler(id)}>Add to Playlist</Button>

      </Stack>


    </VStack>

  )
}

function Courses() {
  const [Keyword,setKeyword] = useState('');
  const [Category,setCategory] = useState('');
  const categories=[
    'Web Development','Data Science','DataBase','Data Structures and Algorithms','Artificial Intelligence','Game development'
  ]

  return (
    <>
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'}/>
      <Input value={Keyword} onChange={(e)=>setKeyword(e.target.value)}  placeholder='serach a keyword' type='text' focusBorderColor='yellow.500'/>
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
<Course
title={'sample'}
description={'sample'}
views={23}
lectureCount={2}
creator={'sample'}
imageSrc='https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_1280.jpg'
id={'sample'}
addToPlaylistHandler={addToPlaylistHandler}
/>
       </Stack>
    </Container>
    </>
  )
}

export default Courses
