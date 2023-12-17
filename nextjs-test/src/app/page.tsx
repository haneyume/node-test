import { Container, Stack, TextInput, Button } from '@mantine/core';

export default function Home() {
  return (
    <Container size="xs">
      <Stack>
        <TextInput label="First name" />
        <TextInput label="Last name" />

        {/* <Button variant="light" onClick={() => getVersion()}>
          Submit
        </Button> */}
      </Stack>

      <form action={getVersion}>
        <button type="submit">Add to Cart</button>
      </form>
    </Container>
  );
}

async function getVersion() {
  'use server';

  console.log('getVersion');

  return '1.0.0';
}
