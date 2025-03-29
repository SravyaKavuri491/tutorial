import { Box, Heading, Text } from '@chakra-ui/react';

export default function ErrorPage() {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
      backgroundImage="url('/halloween.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box 
        bg="white" 
        p={8} 
        borderRadius="lg" 
        boxShadow="lg" 
        maxW="md" 
        w="full"
        textAlign="center"
      >
        <Heading 
          as="h1" 
          fontSize="2xl" 
          mb={4} 
          color="gray.800"
        >
          404 - Page Not Found
        </Heading>
        <Text color="gray.600">
          {`Oops! The page you're looking for doesn't exist.`}
        </Text>
      </Box>
    </Box>
  );
}
