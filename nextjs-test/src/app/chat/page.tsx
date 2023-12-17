'use client';

import {
  Container,
  Stack,
  Group,
  Card,
  Text,
  TextInput,
  Button,
} from '@mantine/core';
import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Container size="xs">
      <Stack>
        {messages.map((message) => (
          <Card key={message.id}>
            <Text>
              {message.role === 'user' ? 'User: ' : 'AI: '}
              {message.content}
            </Text>
          </Card>
        ))}

        <form onSubmit={handleSubmit}>
          <Group>
            <TextInput
              className="flex-1"
              value={input}
              onChange={handleInputChange}
            />

            <Button type="submit">Send</Button>
          </Group>
        </form>
      </Stack>
    </Container>
  );
}
