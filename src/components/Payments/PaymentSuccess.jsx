
// import React, { useEffect } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Heading,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import { RiCheckboxCircleFill } from "react-icons/ri";
// import { Link, useSearchParams, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { paymentVerification } from "../../redux/Actions/userActions.js";
// import { loadUser } from "../../redux/Actions/userActions.js";

// const PaymentSuccess = () => {
//   const [searchParams] = useSearchParams();
//   const reference = searchParams.get("session_id"); // ✅ Stripe session_id
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { loading, message, error } = useSelector(
//     (state) => state.subscription
//   );

//   // 🔹 Verify payment when we land on this page
//   useEffect(() => {
//     if (reference) {
//       dispatch(paymentVerification(reference));
//     }
//   }, [dispatch, reference]);

//   // 🔹 Handle backend response
//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch({ type: "clearError" });
//     }
//     if (message) {
//       toast.success(message);
//       dispatch({ type: "clearMessage" });
//       dispatch(loadUser()); // refresh user so subscription status updates
//     }
//   }, [dispatch, error, message]);

//   // 🔹 NEW: Auto-redirect to profile after successful payment
//   useEffect(() => {
//     if (message) {
//       const timer = setTimeout(() => {
//         navigate("/profile");
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, [message, navigate]);

//   // 🔹 Enhanced Go to Profile handler - ensures user data is loaded
//   const handleGoToProfile = () => {
//     // Force reload user data before navigating
//     dispatch(loadUser()).then(() => {
//       navigate("/profile");
//     });
//   };

//   return (
//     <Container h={"90vh"} padding={"16"}>
//       <Heading my={"8"} textAlign={"center"}>
//         You have Pro Pack
//       </Heading>

//       <VStack
//         boxShadow={"lg"}
//         borderRadius={"lg"}
//         alignItems={"center"}
//         pb={"16"}
//       >
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
//               Congratulations! You are now a Pro member and have access to
//               premium content 🎉
//             </Text>
            
//             {/* Show countdown if redirecting automatically */}
//             {message && (
//               <Text fontSize={"sm"} color={"gray.600"}>
//                 Redirecting to profile in 3 seconds...
//               </Text>
//             )}
            
//             <Heading size={"4xl"} color={"green.500"}>
//               <RiCheckboxCircleFill />
//             </Heading>
//           </VStack>
//         </Box>

//         {/* Enhanced Go to Profile button */}
//         <Button 
//           onClick={handleGoToProfile} 
//           isLoading={loading} 
//           variant={"ghost"}
//           colorScheme="blue"
//         >
//           Go to Profile
//         </Button>

//         {/* Show reference id for debugging */}
//         {reference && (
//           <Heading size={"xs"} mt={"4"}>
//             Reference: {reference}
//           </Heading>
//         )}
//       </VStack>
//     </Container>
//   );
// };

// export default PaymentSuccess;


// ***********.

// import React, { useEffect } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Heading,
//   Text,
//   VStack,
//   Flex,
// } from "@chakra-ui/react";
// import { RiCheckboxCircleFill } from "react-icons/ri";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { paymentVerification, loadUser } from "../../redux/Actions/userActions.js";

// const PaymentSuccess = () => {
//   const [searchParams] = useSearchParams();
//   const reference = searchParams.get("session_id");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { loading, message, error } = useSelector(
//     (state) => state.subscription
//   );

//   // Verify payment on page load
//   useEffect(() => {
//     if (reference) {
//       dispatch(paymentVerification(reference));
//     }
//   }, [dispatch, reference]);

//   // Handle messages/errors from backend
//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch({ type: "clearError" });
//     }
//     if (message) {
//       toast.success(message);
//       dispatch({ type: "clearMessage" });
//       dispatch(loadUser());
//     }
//   }, [dispatch, error, message]);

//   // Auto-redirect after 3s
//   useEffect(() => {
//     if (message) {
//       const timer = setTimeout(() => {
//         navigate("/profile");
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [message, navigate]);

//   // Button handler to go to profile immediately
//   const handleGoToProfile = () => {
//     dispatch(loadUser()).then(() => {
//       navigate("/profile");
//     });
//   };

//   return (
//     <Container maxW="container.md" h="90vh" py={12}>
//       <VStack
//         spacing={8}
//         boxShadow="lg"
//         borderRadius="xl"
//         alignItems="center"
//         py={10}
//         px={8}
//         bg="white"
//       >
//         {/* Success Header */}
//         <Box
//           w="full"
//           py={4}
//           px={6}
//           bg="yellow.400"
//           borderTopRadius="xl"
//           textAlign="center"
//         >
//           <Heading fontSize={["xl", "2xl"]} color="black">
//             Payment Successful
//           </Heading>
//         </Box>

//         {/* Icon and message */}
//         <VStack spacing={4} textAlign="center" px={4}>
//           <RiCheckboxCircleFill size="5rem" color="green" />
//           <Heading size="md">🎉 Congratulations!</Heading>
//           <Text fontSize="md">
//             You are now a <b>Pro Member</b> and have access to all premium content.
//           </Text>

//           {reference && (
//             <Box
//               mt={4}
//               px={4}
//               py={2}
//               border="1px dashed gray"
//               borderRadius="md"
//               bg="gray.50"
//             >
//               <Text fontSize="sm" color="gray.700">
//                 Reference ID: {reference}
//               </Text>
//             </Box>
//           )}

//           {message && (
//             <Text fontSize="sm" color="gray.500">
//               Redirecting to profile in 3 seconds...
//             </Text>
//           )}
//         </VStack>

//         {/* Footer Button */}
//         <Flex w="full" justify="center">
//           <Button
//             onClick={handleGoToProfile}
//             isLoading={loading}
//             colorScheme="yellow"
//             size="lg"
//             borderRadius="xl"
//           >
//             Go to Profile
//           </Button>
//         </Flex>
//       </VStack>
//     </Container>
//   );
// };

// export default PaymentSuccess;

import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { paymentVerification, loadUser } from "../../redux/Actions/userActions.js";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("session_id");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, message, error } = useSelector(
    (state) => state.subscription
  );

  useEffect(() => {
    if (reference) {
      dispatch(paymentVerification(reference));
    }
  }, [dispatch, reference]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch(loadUser());
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        navigate("/profile");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, navigate]);

  const handleGoToProfile = () => {
    dispatch(loadUser()).then(() => {
      navigate("/profile");
    });
  };

  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Container
      maxW={{ base: "100%", md: "container.md" }}
      h="100vh"
      py={{ base: 8, md: 12 }}
      px={{ base: 4, md: 0 }}
    >
      <VStack
        spacing={6}
        boxShadow="lg"
        borderRadius="xl"
        alignItems="center"
        py={{ base: 6, md: 10 }}
        px={{ base: 4, md: 8 }}
        bg={cardBg}
        maxW="md"
        mx="auto"
        textAlign="center"
      >
        {/* Header */}
        <Box
          w="full"
          py={{ base: 3, md: 4 }}
          px={{ base: 2, md: 6 }}
          bg="yellow.400"
          borderTopRadius="xl"
          textAlign="center"
        >
          <Heading fontSize={{ base: "lg", md: "2xl" }} color="black">
            Payment Successful
          </Heading>
        </Box>

        {/* Icon + Text */}
        <VStack spacing={4} w="full" px={{ base: 2, md: 0 }}>
          <RiCheckboxCircleFill size="4rem" color="green" />
          <Heading size={{ base: "sm", md: "md" }}>🎉 Congratulations!</Heading>
          <Text fontSize={{ base: "sm", md: "md" }} textAlign="center" px={2}>
            You are now a <b>Pro Member</b> and have access to all premium content.
          </Text>

          {/* Reference ID Box - FIXED */}
          {reference && (
            <Box
              mt={2}
              px={{ base: 3, md: 4 }}
              py={2}
              border="1px dashed"
              borderColor="gray.300"
              borderRadius="md"
              bg="gray.50"
              w="full"
              maxW="100%"
              overflow="hidden"
            >
              <Text 
                fontSize={{ base: "xs", md: "sm" }} 
                color="gray.700"
                wordBreak="break-all"
                textAlign="center"
              >
                Reference ID: {reference}
              </Text>
            </Box>
          )}

          {/* Redirect Notice */}
          {message && (
            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500">
              Redirecting to profile in 3 seconds...
            </Text>
          )}
        </VStack>

        {/* Footer Button */}
        <Flex w="full" justify="center" px={{ base: 2, md: 0 }}>
          <Button
            onClick={handleGoToProfile}
            isLoading={loading}
            colorScheme="yellow"
            size={{ base: "md", md: "lg" }}
            borderRadius="xl"
            w={{ base: "full", md: "auto" }}
            minW={{ base: "auto", md: "200px" }}
          >
            Go to Profile
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;