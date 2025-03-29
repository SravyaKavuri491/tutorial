import { Box, Heading, Text } from '@chakra-ui/react';

export default function ErrorPage() {
  return (
    <Box
      bgImage="url('/halloween.jpg')"
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
      <Box 
        bg="white" 
        p={8} 
        borderRadius="lg" 
        boxShadow="lg" 
        maxW="md" 
        w="full"
      >
        <Heading 
          as="h1" 
          size="xl" 
          mb={4}
          sx={{ '&': { color: 'gray.800' } }}
        >
          404 - Page Not Found
        </Heading>
        <Text color="gray.600">
          Oops! The page you are looking for doesn&apos;t exist.
        </Text>
      </Box>
    </Box>
  );
}
