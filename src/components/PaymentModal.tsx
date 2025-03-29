import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Text,
} from '@chakra-ui/react';

export default function PaymentModal({ isOpen, onClose, event, onComplete }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent bg="white">
        <ModalHeader>Payment Details</ModalHeader>
        <ModalBody>
          <VStack spacing={4}>
            <Text fontWeight="bold">
              Amount to Pay: ${event.cost}
            </Text>

            {/* Card Number Field */}
            <FormControl>
              <FormLabel>Card Number</FormLabel>
              <Input placeholder="1234 5678 9012 3456" />
            </FormControl>

            {/* Expiry Date and CVV Fields */}
            <HStack>
              <FormControl>
                <FormLabel>Expiry Date</FormLabel>
                <Input placeholder="MM/YY" />
              </FormControl>

              <FormControl>
                <FormLabel>CVV</FormLabel>
                <Input placeholder="123" type="password" maxLength={3} />
              </FormControl>
            </HStack>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={onComplete}>
            Complete Payment
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}