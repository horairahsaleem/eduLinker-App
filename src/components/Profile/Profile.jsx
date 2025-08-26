import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import{RiDeleteBin7Fill } from "react-icons/ri"
import { FileUploadCss } from '../Auth/Register'


const Profile = () => {
    const user = {
        name:'Horairah Saleem',
        email: 'horairahsaleem786@gmail.com',
        createdAt: String(new Date().toISOString()),
        role:'user',
        subscription:{
            status:undefined
        }
        ,
        playlist:[
            {
            
                course:'dummyid66778',
                poster:'https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_1280.jpg'
            
        }]
    };
    const changeImageSubmitHandler =(e,Image)=>(
        e.preventDefault(),
        console.log(Image)
    )
    

    const removeFromPlaylistHandler=(id)=>{
        console.log("Course is removed from the playlist ")
    }
    const {isOpen,onClose,onOpen} = useDisclosure()
      
  return (
   <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>

    <Heading children='Profile' textTransform={'uppercase'} m={'8'}/>
    <Stack
    justifyContent={'flexStart'}
    direction={['column','row']}
    alignItems={'center'}
    padding={'8'}
    spacing={['8','16']}

    >
<VStack>
    <Avatar boxSize={'48'}/>
    <Button onClick={onOpen} colorScheme='yellow' variant={'ghost'}> 
        Change Photo
    </Button>
</VStack>
<VStack spacing={'4'} alignItems={['center','flex-start']}>
    <HStack>
        <Text children='Name' fontWeight={'bold'}/>
        <Text children={user.name}/>
    </HStack>
    <HStack>
        <Text children='Email' fontWeight={'bold'}/>
        <Text children={user.email}/>
    </HStack>
    <HStack>
        <Text children='CreatedAt' fontWeight={'bold'}/>
        <Text children={user.createdAt.split('T')[0]}/>
    </HStack>
    {user.role!=='admin'&& (
        <HStack>
        <Text fontWeight={'bold'}> 
            Subscription
        </Text>
        {user.subscription.status=== 'active' ? (

            <Button colorScheme='yellow' variant={'outline'}>
           Cancel Subscription
            </Button>
        ) : (
            <Link to='/subscribe'>
                <Button colorScheme='yellow'>Subscribe</Button>
            </Link>
        )}
        

        </HStack> 
    )}

    <Stack     direction={['column','row']}
    alignItems={'center'}>
        <Link to={'/updateprofile'}>
        <Button>
            Update Profile
        </Button>
        </Link>
        <Link to={'/changepassword'}>
        <Button>
           Change Password
        </Button>
        </Link>

    </Stack>
</VStack>

    </Stack>
    <Heading children="Playlist" size={'md'}/>
   {user.playlist.length> 0 && (
    <Stack
    flexWrap={'wrap'}
    p={'4'}
    direction={['column','row']}
    alignItems={'center'}>
        {user.playlist.map((element,index)=>(
            <VStack
            key={element.course}
            w={'48'}
            m={'2'}>
        <Image boxSize={'full'} objectFit={'contain'} src={element.poster}/>
        <HStack>
            <Link to={`/course/${element.course}`}>
            <Button variant={'ghost'} colorScheme='yellow'>
  Watch Now
        </Button>
            
            </Link>

            <Button onClick={()=>removeFromPlaylistHandler(element.course)}>
                <RiDeleteBin7Fill/>

            </Button>
        </HStack>

            </VStack>

        ))}

    </Stack>
   ) }
   <ChnagePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}/>
   </Container>
  )
}

export default Profile

function ChnagePhotoBox({isOpen,onClose,changeImageSubmitHandler}){
    const [ImagePrev,setImagePrev]=useState();
    const [Image,setImage]=useState();
    const changeImage =(e)=>{
        const file = e.target.files[0];
        const reader= new FileReader();
        reader.readAsDataURL(file);
        reader.onload =()=>{
          setImagePrev(reader.result);
          setImage(file);
      
        }
      
      }
      const closeHandler =()=>(
        onClose(),
        setImagePrev(''),
        setImage('')
      )
    return(
<Modal isOpen={isOpen} onClose={closeHandler} >
    <ModalOverlay backdropFilter={'blur(10px)'}/>
    <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
            <Container>
                <form onSubmit={(e)=>changeImageSubmitHandler(e,Image)}>
                    <VStack spacing={'8'}>
                       {ImagePrev&& <Avatar boxSize={'48'} src={ImagePrev}/>}
                        <Input type='file' css={{'&::file-selector-button':FileUploadCss}} onChange={changeImage}/>
                    {ImagePrev && <Button colorScheme='yellow' w={'full'} type='submit'>Change</Button>
                }
                    </VStack>
                </form>
            </Container>

        </ModalBody>
        <ModalFooter>
            <Button mr={'3'} onClick={closeHandler}>Cancel</Button>
        </ModalFooter>


    </ModalContent>
</Modal>

    )
}
