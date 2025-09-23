// // import { Button, Container, Heading, VStack } from '@chakra-ui/react'
// // import React from 'react'
// // import { RiErrorWarningFill } from 'react-icons/ri'
// // import { Link } from 'react-router-dom'

// // const PaymentFail = () => {
// //   return (
// //     <Container h={'90vh'}  >

// //     <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
// //       <RiErrorWarningFill size={'5rem'}/>
// //     <Heading textTransform={'uppercase'} >
// //         Payment Failed

// //     </Heading>
      
// //       <Link to={'/subscribe'}>
// //       <Button variant={'ghost'}>
// // Try Again      </Button>
      

// //       </Link>
      

// //     </VStack>

// //    </Container>
// //   )
// // }



// // export default PaymentFail


// // src/pages/PaymentSuccess.jsx
// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Heading,
//   Text,
//   VStack,
//   Spinner,
//   useToast,
// } from "@chakra-ui/react";
// import { RiCheckboxCircleFill } from "react-icons/ri";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { paymentVerification } from "../redux/Actions/subscriptionActions";
// import { loadUser } from "../redux/Actions/userActions";

// const PaymentSuccess = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const toast = useToast();

//   const [verifying, setVerifying] = useState(true);
//   const [reference, setReference] = useState("");

//   useEffect(() => {
//     const verifyPayment = async () => {
//       try {
//         const params = new URLSearchParams(window.location.search);
//         const session_id = params.get("session_id");

//         if (!session_id) {
//           toast({
//             title: "Error",
//             description: "Missing payment session ID",
//             status: "error",
//           });
//           return navigate("/paymentfail");
//         }

//         // 1) Verify payment with backend
//         const data = await dispatch(paymentVerification(session_id));

//         // 2) Refresh user in Redux so Profile updates immediately
//         await dispatch(loadUser());

//         setReference(session_id);
//         toast({
//           title: "Payment verified",
//           description: "Your subscription is now active",
//           status: "success",
//         });
//       } catch (error) {
//         toast({
//           title: "Payment verification failed",
//           description: error.response?.data?.message || error.message,
//           status: "error",
//         });
//         navigate("/paymentfail");
//       } finally {
//         setVerifying(false);
//       }
//     };

//     verifyPayment();
//   }, [dispatch, navigate, toast]);

//   if (verifying) {
//     return (
//       <Container h={"90vh"} display="flex" justifyContent="center" alignItems="center">
//         <VStack spacing="4">
//           <Spinner size="xl" />
//           <Heading size="md">Verifying your payment...</Heading>
//         </VStack>
//       </Container>
//     );
//   }

//   return (
//     <Container h={"90vh"} padding={"16"}>
//       <Heading my={"8"} textAlign={"center"}>
//         You have Pro Pack
//       </Heading>

//       <VStack boxShadow={"lg"} borderRadius={"lg"} alignItems={"center"} pb={"16"}>
//         <Box
//           p={"4"}
//           backgroundColor={"yellow.400"}
//           w={"full"}
//           css={{ borderRadius: "8px 8px 0 0" }}
//         >
//           <Text color={"black"}> Payment Success </Text>
//         </Box>

//         <Box p={"4"}>
//           <VStack mt={"8"} textAlign={"center"} px={"8"} spacing={"8"}>
//             <Text>
//               Congratulations! You are now a Pro member. You have access to premium content.
//             </Text>
//             <Heading size={"4xl"}>
//               <RiCheckboxCircleFill />
//             </Heading>
//           </VStack>
//         </Box>

//         <Link to={"/profile"}>
//           <Button variant={"ghost"}>Go to profile</Button>
//         </Link>

//         <Heading size={"xs"}>Reference: {reference}</Heading>
//       </VStack>
//     </Container>
//   );
// };

// export default PaymentSuccess;

// src/pages/PaymentFail.jsx
import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PaymentFail = () => {
  return (
    <Container h={"90vh"}>
      <VStack justifyContent={"center"} h={"full"} spacing={"4"}>
        <RiErrorWarningFill size={"5rem"} />
        <Heading textTransform={"uppercase"}>Payment Failed</Heading>

        <Link to={"/subscribe"}>
          <Button variant={"ghost"}>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default PaymentFail;
