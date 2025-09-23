// import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'
// import React, { useState , useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import{RiDeleteBin7Fill } from "react-icons/ri"
// import { FileUploadCss } from '../Auth/Register'
// import { useDispatch, useSelector } from 'react-redux';
// import toast from 'react-hot-toast';
// import {
//   removeFromPlaylist,
//   updateProfilePicture,
// } from '../../redux/Actions/profileActions.js';
// import { cancelSubscription, loadUser } from '../../redux/Actions/userActions.js';




// const Profile = ({  user}) => {
//       const dispatch = useDispatch();
//      const { loading, message, error } = useSelector(state => state.profile);
//       const {
//     loading: subscriptionLoading,
//     message: subscriptionMessage,
//     error: subscriptionError,
//   } = useSelector(state => state.subscription);

      
   
            
    
//      const removeFromPlaylistHandler = async id => {
//     await dispatch(removeFromPlaylist(id));
//     dispatch(loadUser());
//   };
//   const changeImageSubmitHandler = async (e, Image) => {
//   e.preventDefault();
//   const myForm = new FormData();
//   myForm.append("file", Image);

//   await dispatch(updateProfilePicture(myForm));
//   onClose(); // close modal after success
// };


//   const cancelSubscriptionHandler = () => {
//     dispatch(cancelSubscription());
//   };
//     const {isOpen,onClose,onOpen} = useDisclosure()
//       useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch({ type: 'clearError' });
//     }
//     if (message) {
//       toast.success(message);
//       dispatch({ type: 'clearMessage' });
//     }
//     if (subscriptionMessage) {
//       toast.success(subscriptionMessage);
//       dispatch({ type: 'clearMessage' });
//       dispatch(loadUser());
//     }

//     if (subscriptionError) {
//       toast.error(subscriptionError);
//       dispatch({ type: 'clearError' });
//     }
//   }, [dispatch, error, message, subscriptionError, subscriptionMessage]);

      
//   return (
//    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>

//     <Heading children='Profile' textTransform={'uppercase'} m={'8'}/>
//     <Stack
//     justifyContent={'flexStart'}
//     direction={['column','row']}
//     alignItems={'center'}
//     padding={'8'}
//     spacing={['8','16']}

//     >
// <VStack>
//     <Avatar boxSize={'48'} src={user.avatar.url}/>
//     <Button onClick={onOpen} colorScheme='yellow' variant={'ghost'}> 
//         Change Photo
//     </Button>
// </VStack>
// <VStack spacing={'4'} alignItems={['center','flex-start']}>
//     <HStack>
//         <Text children='Name' fontWeight={'bold'}/>
//         <Text children={user.name}/>
//     </HStack>
//     <HStack>
//         <Text children='Email' fontWeight={'bold'}/>
//         <Text children={user.email}/>
//     </HStack>
//     <HStack>
//         <Text children='CreatedAt' fontWeight={'bold'}/>
//         <Text children={user.createdAt.split('T')[0]}/>
//     </HStack>
//     {user.role!=='admin'&& (
//         <HStack>
//         <Text fontWeight={'bold'}> 
//             Subscription
//         </Text>
//         {user.subscription.status=== 'active' ? (

//             <Button isLoading={subscriptionLoading} onClick={cancelSubscriptionHandler} colorScheme='yellow' variant={'outline'}>
//            Cancel Subscription
//             </Button>
//         ) : (
//             <Link to='/subscribe'>
//                 <Button colorScheme='yellow'>Subscribe</Button>
//             </Link>
//         )}
        

//         </HStack> 
//     )}

//     <Stack     direction={['column','row']}
//     alignItems={'center'}>
//         <Link to={'/updateprofile'}>
//         <Button>
//             Update Profile
//         </Button>
//         </Link>
//         <Link to={'/changepassword'}>
//         <Button>
//            Change Password
//         </Button>
//         </Link>

//     </Stack>
// </VStack>

//     </Stack>
//     <Heading children="Playlist" size={'md'}/>
//    {user.playlist.length> 0 && (
//     <Stack
//     flexWrap={'wrap'}
//     p={'4'}
//     direction={['column','row']}
//     alignItems={'center'}>
//         {user.playlist.map((element,index)=>(
//             <VStack
//             key={element.course}
//             w={'48'}
//             m={'2'}>
//         <Image boxSize={'full'} objectFit={'contain'} src={element.poster}/>
//         <HStack>
//             <Link to={`/course/${element.course}`}>
//             <Button variant={'ghost'} colorScheme='yellow'>
//   Watch Now
//         </Button>
            
//             </Link>

//             <Button   isLoading={loading} onClick={()=>removeFromPlaylistHandler(element.course)}>
//                 <RiDeleteBin7Fill/>

//             </Button>
//         </HStack>

//             </VStack>

//         ))}

//     </Stack>
//    ) }
   
//    <ChangePhotoBox  isLoading={loading} changeImageSubmitHandler={changeImageSubmitHandler} isOpen={isOpen} onClose={onClose}/>
//    </Container>
//   )
// }

// export default Profile

// // function ChnagePhotoBox({isOpen,
// //   onClose,
// //   changeImageSubmitHandler,
// //   loading,}){
// //     const [ImagePrev,setImagePrev]=useState();
// //     const [Image,setImage]=useState();
   


// //     const changeImage =(e)=>{
// //         const file = e.target.files[0];
// //         const reader= new FileReader();
// //         reader.readAsDataURL(file);
// //         reader.onloadend =()=>{
// //           setImagePrev(reader.result);
// //           setImage(file);
      
// //         }
      
// //       }
// //       const closeHandler =()=>(
// //         onClose(),
// //         setImagePrev(''),
// //         setImage('')
// //       )
// //     return(
// // <Modal isOpen={isOpen} onClose={closeHandler} >
// //     <ModalOverlay backdropFilter={'blur(10px)'}/>
// //     <ModalContent>
// //         <ModalHeader>Change Photo</ModalHeader>
// //         <ModalCloseButton/>
// //         <ModalBody>
// //             <Container>
// //                 <form onSubmit={e=>changeImageSubmitHandler(e,Image)}>
// //                     <VStack spacing={'8'}>
// //                        {ImagePrev&& <Avatar boxSize={'48'} src={ImagePrev}/>}
// //                         <Input type='file' css={{'&::file-selector-button':FileUploadCss}} onChange={changeImage}/>
// //                    <Button isLoading={loading} colorScheme='yellow' w={'full'} type='submit'>Change</Button>
                
// //                     </VStack>
// //                 </form>
// //             </Container>

// //         </ModalBody>
// //         <ModalFooter>
// //             <Button mr={'3'} onClick={closeHandler}>Cancel</Button>
// //         </ModalFooter>


// //     </ModalContent>
// // </Modal>

// //     )
// // }

// // // 
// function ChangePhotoBox({
//   isOpen,
//   onClose,
//   changeImageSubmitHandler,
//   loading,
// }) {
//   const [image, setImage] = useState("");
//   const [imagePrev, setImagePrev] = useState("");
//   const [submitting, setSubmitting] = useState(false); // local state

//   const changeImage = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.readAsDataURL(file);

//     reader.onloadend = () => {
//       setImagePrev(reader.result);
//       setImage(file);
//     };
//   };

//   const closeHandler = () => {
//     onClose();
//     setImagePrev("");
//     setImage("");
//     setSubmitting(false); // reset local loader if modal closes
//   };

//   // wrapper around your submit handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true); // start local spinner immediately
//     await changeImageSubmitHandler(e, image); // call original handler
//     setSubmitting(false); // stop after request finishes
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={closeHandler}>
//       <ModalOverlay backdropFilter={"blur(10px)"} />
//       <ModalContent>
//         <ModalHeader>Change Photo</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <Container>
//             <form onSubmit={handleSubmit}>
//               <VStack spacing={"8"}>
//                 {imagePrev && <Avatar src={imagePrev} boxSize={"48"} />}

//                 <Input
//                   type={"file"}
//                   css={{ " &::file-selector-button ": FileUploadCss }}
//                   onChange={changeImage}
//                 />

//                 <Button
//                   isLoading={submitting || loading} // ✅ combine both loaders
//                   w="full"
//                   colorScheme={"yellow"}
//                   type="submit"
//                 >
//                   Change
//                 </Button>
//               </VStack>
//             </form>
//           </Container>
//         </ModalBody>

//         <ModalFooter>
//           <Button mr="3" onClick={closeHandler}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// }
import {
  Avatar,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FileUploadCss } from "../Auth/Register";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  removeFromPlaylist,
  updateProfilePicture,
} from "../../redux/Actions/profileActions.js";
import { cancelSubscription, loadUser } from "../../redux/Actions/userActions.js";

const Profile = ({ user }) => {
  const dispatch = useDispatch();

  const { loading, message, error } = useSelector((state) => state.profile);
  const {
    loading: subscriptionLoading,
    message: subscriptionMessage,
    error: subscriptionError,
  } = useSelector((state) => state.subscription);

  // remove from playlist
  const removeFromPlaylistHandler = async (id) => {
    await dispatch(removeFromPlaylist(id));
    dispatch(loadUser());
  };

  // profile picture update
  const changeImageSubmitHandler = async (e, image) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("file", image);

    await dispatch(updateProfilePicture(myForm));
    onClose();
  };

  // cancel subscription
  const cancelSubscriptionHandler = () => {
    dispatch(cancelSubscription());
  };

  const { isOpen, onClose, onOpen } = useDisclosure();

  // Toast handling
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (subscriptionMessage) {
      toast.success(subscriptionMessage);
      dispatch({ type: "clearMessage" });
      dispatch(loadUser());
    }
    if (subscriptionError) {
      toast.error(subscriptionError);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, error, message, subscriptionError, subscriptionMessage]);

  return (
    <Container minH={"95vh"} maxW={"container.lg"} py={"8"}>
      <Heading children="Profile" textTransform={"uppercase"} m={"8"} />

      <Stack
        justifyContent={"flexStart"}
        direction={["column", "row"]}
        alignItems={"center"}
        padding={"8"}
        spacing={["8", "16"]}
      >
        {/* Left side: Avatar */}
        <VStack>
          <Avatar boxSize={"48"} src={user.avatar.url} />
          <Button onClick={onOpen} colorScheme="yellow" variant={"ghost"}>
            Change Photo
          </Button>
        </VStack>

        {/* Right side: Info */}
        <VStack spacing={"4"} alignItems={["center", "flex-start"]}>
          <HStack>
            <Text fontWeight={"bold"}>Name</Text>
            <Text>{user.name}</Text>
          </HStack>

          <HStack>
            <Text fontWeight={"bold"}>Email</Text>
            <Text>{user.email}</Text>
          </HStack>

          <HStack>
            <Text fontWeight={"bold"}>Created At</Text>
            <Text>{user.createdAt.split("T")[0]}</Text>
          </HStack>

          {/* Subscription logic (not for admin) */}
          {user.role !== "admin" && (
            <HStack>
              <Text fontWeight={"bold"}>Subscription</Text>
              {user.subscription?.status === "active" ? (
                <Button
                  isLoading={subscriptionLoading}
                  onClick={cancelSubscriptionHandler}
                  colorScheme="yellow"
                  variant={"outline"}
                >
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="yellow">Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          {/* Update profile & password */}
          <Stack direction={["column", "row"]} alignItems={"center"}>
            <Link to={"/updateprofile"}>
              <Button>Update Profile</Button>
            </Link>
            <Link to={"/changepassword"}>
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>

      {/* Playlist */}
      <Heading children="Playlist" size={"md"} />
      {user.playlist.length > 0 && (
        <Stack
          flexWrap={"wrap"}
          p={"4"}
          direction={["column", "row"]}
          alignItems={"center"}
        >
          {user.playlist.map((element) => (
            <VStack key={element.course} w={"48"} m={"2"}>
              <Image boxSize={"full"} objectFit={"contain"} src={element.poster} />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button variant={"ghost"} colorScheme="yellow">
                    Watch Now
                  </Button>
                </Link>

                <Button
                  isLoading={loading}
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}

      {/* Change photo modal */}
      <ChangePhotoBox
        isLoading={loading}
        changeImageSubmitHandler={changeImageSubmitHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Container>
  );
};

export default Profile;

// ====================== Change Photo Modal ======================
function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler, loading }) {
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const changeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const closeHandler = () => {
    onClose();
    setImagePrev("");
    setImage("");
    setSubmitting(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await changeImageSubmitHandler(e, image);
    setSubmitting(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={"blur(10px)"} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={handleSubmit}>
              <VStack spacing={"8"}>
                {imagePrev && <Avatar src={imagePrev} boxSize={"48"} />}
                <Input
                  type={"file"}
                  css={{ " &::file-selector-button ": FileUploadCss }}
                  onChange={changeImage}
                />
                <Button
                  isLoading={submitting || loading}
                  w="full"
                  colorScheme={"yellow"}
                  type="submit"
                >
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button mr="3" onClick={closeHandler}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
