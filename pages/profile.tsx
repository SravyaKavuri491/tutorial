import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Heading, Button, VStack, FormControl, FormLabel, Input, Flex, Alert, AlertIcon, CloseButton, useToast } from '@chakra-ui/react';

export default function Profile() {
  const router = useRouter();
  const toast = useToast();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [showSuccessPrompt, setShowSuccessPrompt] = useState(false);

  // Fetch user details when the component mounts
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('/api/profileuser', {
          credentials: 'include',
        });

        if (response.ok) {
          const user = await response.json();
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setEmail(user.email);
          setPhoneNumber(user.phoneNumber);
          setAddress(user.address);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  // Handle saving updated user details
  const handleSave = async () => {
    try {
      const response = await fetch('/api/updateuser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          address,
        }),
        credentials: 'include', // Include credentials for authentication
      });

      if (response.ok) {
        setShowSuccessPrompt(true);
        toast({
          title: 'Profile Updated',
          description: 'Your profile has been updated successfully.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        setTimeout(() => setShowSuccessPrompt(false), 3000);
      } else {
        console.error('Failed to update profile');
        toast({
          title: 'Error',
          description: 'Failed to update profile.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: 'Error',
        description: 'An error occurred while updating your profile.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="white" minH="100vh">
      {/* Title Bar */}
      <Flex bg="gray.800" p={4} justifyContent="space-between" alignItems="center">
        <Button onClick={() => router.push('/')} colorScheme="teal">
          Home
        </Button>
        <Flex>
          <Button onClick={() => router.push('/profile')} colorScheme="teal" mr={2}>
            Profile
          </Button>
          <Button onClick={() => router.push('/events')} colorScheme="teal" mr={2}>
            Events
          </Button>
          <Button onClick={() => router.push('/ghost-cursor')} colorScheme="teal" mr={2}>
            Ghost Cursor
          </Button>
          <Button onClick={() => router.push('/logout')} colorScheme="red">
            Logout
          </Button>
        </Flex>
      </Flex>

      {/* Profile Content */}
      <Box p={8}>
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          Profile
        </Heading>

        {/* Success Prompt */}
        {showSuccessPrompt && (
          <Alert status="success" mb={4}>
            <AlertIcon />
            Profile updated successfully!
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setShowSuccessPrompt(false)}
            />
          </Alert>
        )}

        <VStack spacing={4}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isDisabled // Email is not editable
            />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
          <Button onClick={handleSave} colorScheme="blue">
            Save Changes
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}