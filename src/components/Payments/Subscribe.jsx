// // import React from 'react'
// // import{Button,Box , Container, Heading, Text, VStack} from '@chakra-ui/react'

// // const Subscribe = () => {
// //   return (
// //     <Container h={'90vh'} p='16'>
// //         <Heading children='Welcome' textAlign={'center'} my={'8'}/>
// //         <VStack boxShadow={'lg'} alignItems={'stretch'} borderRadius={'lg'} spacing={'0'}>
// //            <Box bg='yellow.400' p={'4'} css={{borderRadius: '8px 8px 0 0' }}>
// //             <Text color={'black'} children='Pro Pack- Rs500.00'/>
// //              </Box>
// //              <Box p={'4'}>
// //                 <VStack textAlign={'center'} mt={'4'} spacing={'8'} px={'8'}>
// //                 <Text  children='Join pro pack and get access to all  content'/>
// //                 <Heading size={'md'} children='Rs500.00 Only'/>


// //                 </VStack>
// //                 <Button my='8' w={'full'} colorScheme={'yellow'}>
// //                   Buy Now
// //                 </Button>


// //              </Box>
// //             <Box backgroundColor={'blackAlpha.600'} p={'4'} css={{borderRadius:'0 0 8px 8px'}}>
// //             <Heading color={'white '} size={'sm'}textTransform={'uppercase'}  children='100% refund at cancelation '/>
// //               <Text fontSize={'xs'}   color={'white'} children='Terms & Conditions Apply'/>
// //             </Box>
// //         </VStack>
// //     </Container>

// //   )
// // }

// // export default Subscribe


// // src/pages/Subscribe.jsximport React, { useEffect } from "react";
// import {
//   Box,
//   Button,
//   Container,
//   Heading,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import toast from "react-hot-toast";
// import { buySubscription } from "../../redux/Actions/userActions.js";

// const Subscribe = () => {
//   const dispatch = useDispatch();

//   const { loading, error } = useSelector((state) => state.subscription);

//   // 🔹 Handle error if creating checkout session fails
//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch({ type: "clearError" });
//     }
//   }, [error, dispatch]);

//   const handleBuySubscription = () => {
//     dispatch(buySubscription());
//   };

//   return (
//     <Container h={"90vh"} p="16">
//       <Heading textAlign={"center"} my={"8"}>
//         Welcome
//       </Heading>

//       <VStack
//         boxShadow={"lg"}
//         alignItems={"stretch"}
//         borderRadius={"lg"}
//         spacing={"0"}
//       >
//         {/* Plan Header */}
//         <Box bg="yellow.400" p={"4"} css={{ borderRadius: "8px 8px 0 0" }}>
//           <Text color={"black"}>Pro Pack - Rs500.00</Text>
//         </Box>

//         {/* Plan Body */}
//         <Box p={"4"}>
//           <VStack textAlign={"center"} mt={"4"} spacing={"8"} px={"8"}>
//             <Text>Join pro pack and get access to all content</Text>
//             <Heading size={"md"}>Rs500.00 Only</Heading>
//           </VStack>

//           <Button
//             my="8"
//             w={"full"}
//             colorScheme={"yellow"}
//             isLoading={loading}
//             onClick={handleBuySubscription}
//           >
//             Buy Now
//           </Button>
//         </Box>

//         {/* Plan Footer */}
//         <Box
//           backgroundColor={"blackAlpha.600"}
//           p={"4"}
//           css={{ borderRadius: "0 0 8px 8px" }}
//         >
//           <Heading
//             color={"white"}
//             size={"sm"}
//             textTransform={"uppercase"}
//           >
//             100% refund at cancellation
//           </Heading>
//           <Text fontSize={"xs"} color={"white"}>
//             Terms & Conditions Apply
//           </Text>
//         </Box>
//       </VStack>
//     </Container>
//   );
// };

// export default Subscribe;

import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { buySubscription } from "../../redux/Actions/userActions.js";

const Subscribe = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.subscription);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, dispatch]);

  const handleBuySubscription = () => {
    dispatch(buySubscription());
  };

  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Container h="90vh" py={12}>
      <Heading
        textAlign="center"
        mb={8}
        fontSize={["2xl", "3xl"]}
        color="yellow.500"
        textTransform="uppercase"
      >
        Upgrade to Pro
      </Heading>

      <VStack
        spacing={0}
        boxShadow="md"
        borderRadius="lg"
        overflow="hidden"
        bg={bgColor}
        maxW="md"
        mx="auto"
      >
        {/* Header */}
        <Box bg="yellow.400" py={4} px={6} w="full">
          <Text fontWeight="bold" color="black" fontSize="lg">
            Pro Pack – $ 100/year
          </Text>
        </Box>

        {/* Plan Body */}
        <Box py={8} px={6} textAlign="center">
          <VStack spacing={5}>
            <Text fontSize="md">
              Get full access to all premium content and features.
            </Text>
            <Heading size="md" color="yellow.500">
              Just  $100 / Year
            </Heading>
            <Button
              colorScheme="yellow"
              size="lg"
              w="full"
              onClick={handleBuySubscription}
              isLoading={loading}
              loadingText="Redirecting to Checkout..."
            >
              Buy Now
            </Button>
          </VStack>
        </Box>

        {/* Footer */}
        <Box bg="gray.700" py={4} px={6} w="full" textAlign="center">
          <Heading
            size="xs"
            color="white"
            textTransform="uppercase"
            mb={1}
          >
            100% Refund Guarantee
          </Heading>
          <Text fontSize="xs" color="gray.300">
            Cancel anytime within the year to get a full refund. T&Cs apply.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
