import { VStack, Text, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Loader = () => {
  return (
    <VStack
      h="100vh"
      justifyContent="center"
      alignItems="center"
      spacing={10}
      bgGradient="linear(to-b, blackAlpha.900, blackAlpha.800)"
    >
      {/* Outer Pulsing Circle */}
      <MotionBox
        w="120px"
        h="120px"
        rounded="full"
        border="6px solid"
        borderColor="yellow.400"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        shadow="0 0 30px rgba(255, 215, 0, 0.7)"
      >
        {/* Inner Rotating Circle */}
        <MotionBox
          w="60px"
          h="60px"
          rounded="full"
          border="4px dashed"
          borderColor="yellow.300"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </MotionBox>

      {/* App Branding */}
      <MotionText
        fontSize="3xl"
        fontWeight="extrabold"
        bgGradient="linear(to-r, yellow.400, yellow.200)"
        bgClip="text"
        letterSpacing="widest"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        CourseBundler
      </MotionText>

      {/* Dynamic Loading Dots */}
      <MotionText
        fontSize="lg"
        color="yellow.300"
        fontWeight="medium"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        Loading<span className="dots">...</span>
      </MotionText>
    </VStack>
  );
};

export default Loader;
