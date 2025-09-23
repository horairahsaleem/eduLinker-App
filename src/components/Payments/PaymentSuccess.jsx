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
// import { Link, useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { paymentVerification } from "../../redux/Actions/userActions.js";
// import { loadUser } from "../../redux/Actions/userActions.js";

// const PaymentSuccess = () => {
//   const [searchParams] = useSearchParams();
//   const reference = searchParams.get("session_id"); // ✅ Stripe session_id
//   const dispatch = useDispatch();

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
//             <Heading size={"4xl"} color={"green.500"}>
//               <RiCheckboxCircleFill />
//             </Heading>
//           </VStack>
//         </Box>

//         <Link to={"/profile"}>
//           <Button isLoading={loading} variant={"ghost"}>
//             Go to Profile
//           </Button>
//         </Link>

//         {/* show reference id for debugging */}
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
// src/components/Payments/PaymentSuccess.jsx
import React, { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

// <-- adjust import path if your file lives elsewhere -->
import { paymentVerification } from "../../redux/Actions/userActions.js";
import { loadUser } from "../../redux/Actions/userActions.js";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectTimerRef = useRef(null);

  // safe selector (avoid destructuring from undefined)
  const subscriptionState = useSelector((state) => state.subscription || {});
  const { loading, message, error } = subscriptionState;

  // 1) Trigger payment verification once on mount (when sessionId present)
  useEffect(() => {
    if (sessionId) {
      dispatch(paymentVerification(sessionId));
    }
    // only run on mount / sessionId change
  }, [dispatch, sessionId]);

  // 2) Handle error messages from verification
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      // Optionally redirect to fail page:
      // navigate("/paymentfail");
    }
  }, [dispatch, error]);

  // 3) On successful verification (message set):
  //    - show toast
  //    - refresh user (loadUser)
  //    - auto-redirect after short delay
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });

      // Refresh currently-logged-in user so Profile will show updated subscription status
      dispatch(loadUser());

      // Auto-redirect after a short delay so user can read success
      redirectTimerRef.current = setTimeout(() => {
        navigate("/profile");
      }, 1800); // 1.8s - tweak if you want longer/shorter
    }

    return () => {
      // cleanup timer if component unmounts or message changes
      if (redirectTimerRef.current) {
        clearTimeout(redirectTimerRef.current);
        redirectTimerRef.current = null;
      }
    };
  }, [dispatch, message, navigate]);

  return (
    <Container h={"90vh"} padding={"16"}>
      <Heading my={"8"} textAlign={"center"}>
        {message ? "Subscription Activated" : "Processing Payment"}
      </Heading>

      <VStack
        boxShadow={"lg"}
        borderRadius={"lg"}
        alignItems={"center"}
        pb={"16"}
        spacing={6}
      >
        <Box
          p={"4"}
          backgroundColor={"yellow.400"}
          w={"full"}
          css={{ borderRadius: "8px 8px 0 0" }}
          textAlign="center"
        >
          <Text color={"black"}>
            {message ? "Payment Success" : "Verifying Payment..."}
          </Text>
        </Box>

        <Box p={"4"} textAlign="center" width="100%">
          <VStack mt={"4"} px={"8"} spacing={"6"}>
            {message ? (
              <>
                <Text>
                  Congratulations — your subscription is active. You now have access
                  to premium content 🎉
                </Text>
                <Heading size={"4xl"} color={"green.500"}>
                  <RiCheckboxCircleFill />
                </Heading>
              </>
            ) : (
              <>
                <Text>
                  We are verifying your payment with Stripe. This usually takes a
                  few seconds.
                </Text>
                <Spinner size="xl" />
              </>
            )}
          </VStack>
        </Box>

        {/* Show Go to Profile button when verification succeeded (message exists).
            If still verifying, show a disabled informative button. */}
        {message ? (
          <Button
            onClick={() => {
              // Ensure user data has been requested and then navigate.
              // loadUser has already been dispatched above; navigate immediately.
              navigate("/profile");
            }}
            colorScheme="yellow"
          >
            Go to Profile
          </Button>
        ) : (
          <Button isLoading variant="ghost" disabled>
            Redirecting to Profile...
          </Button>
        )}

        {/* show reference id for debugging */}
        {sessionId && (
          <Heading size={"xs"} mt={"4"}>
            Reference: {sessionId}
          </Heading>
        )}
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
