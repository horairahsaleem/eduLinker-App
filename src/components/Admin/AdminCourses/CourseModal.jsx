import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { RiDeleteBin7Fill,RiCloseFill } from 'react-icons/ri'
import { FiUploadCloud } from 'react-icons/fi'
import { FileUploadCss } from '../../Auth/Register'

const CourseModal = ({isOpen,onClose,id,deleteButtonHandler,courseTitle,lectures=[1,2,3,4,5,6,7,8,9,10],addLectureHandler}) => {
    const [title,setTitle]=useState()
    const [description,setDescription]=useState()
    const [video,setVideo]=useState()
    const [videoPrev,setVideoPrev]=useState()
    const videoHandler =(e)=>{
        const file = e.target.files[0];
        const reader= new FileReader();
        reader.readAsDataURL(file);
        reader.onload =()=>{
          setVideoPrev(reader.result);
          setVideo(file);
      
        }
      
      }
      const handleClose =()=>{
        setTitle('')
        setDescription('')
        setVideo("")
        setVideoPrev("")
        onClose()
      }
  return (
   <Modal isOpen={isOpen} size={'full'} onClose={handleClose} scrollBehavior='outside'>
    <ModalOverlay/>
    <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton/>
        <ModalBody p={'16'}>
            <Grid templateColumns={['1fr','3fr 1fr']}>
                <Box px={['0','16']}>
                    <Box my={'5'}>
                        <Heading children={courseTitle}/>
                        <Heading children={`#${id}` } size='sm' opacity={'0,4'}/>

                    </Box>
                    <Heading children='Lectures' size='lg'/>
                    {lectures.map((item,i)=>(
                        <VideoCard
                        title="React Intro"
                        description="In this lecture you will know the basics of react"
                        num={1}
                         lectureId={"dhjsdshjdjdd"}
                        courseId={id}
                        deleteButtonHandler={deleteButtonHandler}
                        />
    
                    ))}
                </Box>
                <Box >
                    <form onSubmit={e=>addLectureHandler(e,id,title,description,video)} >
                        <VStack spacing={'4'}>
                            <Heading children='Add lectures' textTransform={'uppercase'}/>
                            <Input
                            value={title}
                            placeholder='Title'
                            focusBorderColor='purple.300'
                            onChange={(e)=>setTitle(e.target.value)}/>
                            <Input
                            value={description}
                            placeholder='Description'
                            focusBorderColor='purple.300'
                            onChange={(e)=>setDescription(e.target.value)}/>
                             
                             <Input accept='video/mp4/*' required  
                type='file' focusBorderColor='purple.300'
                css={{
                  '&::file-selector-button':{
                    ...FileUploadCss,color:'purple'
                  },
                }} onChange={videoHandler}
                />
                {
                    videoPrev && (
                        <video src={videoPrev} controlsList='nodownload' controls>

                        </video>
                    )
                }
                <Button w={'full'} colorScheme='purple' type='submit'> <FiUploadCloud size={'xs'}/> </Button>


                        </VStack>


                    </form>


                </Box>

            </Grid>


        </ModalBody>
        <ModalFooter>
            <Button onClick={handleClose}> Close     <RiCloseFill/></Button>
        </ModalFooter>
    </ModalContent>

   </Modal>
  )
}

export default CourseModal


function VideoCard({title,description,num,lectureId,courseId,deleteButtonHandler}){
    return <Stack direction={['column','row']} my={'8'} borderRadius={'lg'} p={['4','8']} justifyContent={['flex-start','space-between']} boxShadow={'0 0 10px rgba(107,70,193,0.5)'}>
        <Box>
        <Heading size={'sm'} children={`#${num} ${title}`}/>
        <Text children={description}/>
        </Box>
        <Button color={'purple.600'} onClick={()=>deleteButtonHandler(courseId,lectureId)}>
            <RiDeleteBin7Fill/> 

        </Button>


    </Stack>
}