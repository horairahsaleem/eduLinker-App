
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


import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
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

  return (
    <Container h="90vh" py={12}>
      <Heading my={8} textAlign="center" fontSize={["2xl", "3xl"]} color="yellow.500">
        You are now a Pro Member
      </Heading>

      <VStack
        spacing={6}
        boxShadow="md"
        borderRadius="lg"
        alignItems="center"
        py={10}
        px={6}
        bg="white"
        maxW="lg"
        mx="auto"
      >
        {/* Success Header */}
        <Box
          w="full"
          py={4}
          px={6}
          bg="yellow.400"
          textAlign="center"
          borderRadius="md"
        >
          <Text fontWeight="bold" fontSize="lg" color="black">
            Payment Successful
          </Text>
        </Box>

        {/* Success Body */}
        <VStack spacing={5} textAlign="center">
          <Text fontSize="md">
            🎉 Congratulations! Your payment was successful and you now have full
            access to all premium content.
          </Text>

          <Heading size="4xl" color="green.500">
            <RiCheckboxCircleFill />
          </Heading>

          {reference && (
            <Box
              px={4}
              py={2}
              bg="gray.100"
              borderRadius="md"
              border="1px dashed"
              borderColor="gray.300"
            >
              <Text fontSize="sm" color="gray.700">
                Reference ID: {reference}
              </Text>
            </Box>
          )}

          {message && (
            <Text fontSize="sm" color="gray.600">
              Redirecting to profile in 3 seconds...
            </Text>
          )}
        </VStack>

        {/* Go to Profile Button */}
        <Button
          onClick={handleGoToProfile}
          isLoading={loading}
          variant="solid"
          colorScheme="yellow"
          w="full"
        >
          Go to Profile Now
        </Button>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
