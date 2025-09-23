import React, { useEffect } from "react";
import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { paymentVerification } from "../../redux/Actions/userActions.js"; 

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { loading, error, message } = useSelector((state) => state.payment);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    if (sessionId) {
      dispatch(paymentVerification(sessionId));
    }
  }, [dispatch, searchParams]);

  useEffect(() => {
    if (error) {
      console.error("Payment verification failed:", error);
      navigate("/paymentfail");
    }
  }, [error, navigate]);

  return (
    <Container h={"90vh"} padding={"16"}>
      <Heading my={"8"} textAlign={"center"}>
        You have Pro Pack
      </Heading>

      <VStack boxShadow={"lg"} borderRadius={"lg"} alignItems={"center"} pb={"16"}>
        <Box
          p={"4"}
          backgroundColor={"yellow.400"}
          w={"full"}
          css={{ borderRadius: "8px 8px 0 0" }}
        >
          <Text color={"black"}>Payment Success</Text>
        </Box>

        <Box p={"4"}>
          <VStack mt={"8"} textAlign={"center"} px={"8"} spacing={"8"}>
            <Text>
              Congratulations you are a pro member. You now have access to premium content.
            </Text>
            <Heading size={"4xl"}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>

        <Link to={"/profile"}>
          <Button variant={"ghost"} isLoading={loading}>
            Go to profile
          </Button>
        </Link>

        <Heading size={"xs"}>
          Reference: {searchParams.get("session_id")}
        </Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
