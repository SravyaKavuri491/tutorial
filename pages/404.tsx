import { Box, Text } from '@chakra-ui/react'; // Removed Heading import
import Head from 'next/head';

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={4}
        bg="gray.100"
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
          {/* Replaced Heading with HTML h1 + Chakra styles */}
          <Text 
            as="h1"
            fontSize="2xl"
            fontWeight="bold"
            mb={4}
            color="gray.800"
          >
            404 - Page Not Found
          </Text>
          <Text color="gray.600">
            {`Oops! The page you're looking for doesn't exist.`}
          </Text>
        </Box>
      </Box>
    </>
  );
}
