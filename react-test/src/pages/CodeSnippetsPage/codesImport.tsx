export const codeImportMaintine = `import { Stack, TextInput, ActionIcon } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

export const TestComponent = () => {
  return (
    <Stack>
      <ActionIcon onClick={() => {}}>
        <IconSettings />
      </ActionIcon>

      <TextInput />
    </Stack>
  );
};
`;

export const codeImportReactRouter = `import { useNavigate } from 'react-router-dom';

import { Stack, Button } from '@mantine/core';

export const TestComponent = () => {
  const navigate = useNavigate();

  return (
    <Stack>
      <Button onClick={() => navigate('/')}>
        Navigate to home
      </Button>
    </Stack>
  );
};
`;

export const codeImportContext = `import { useContext } from 'react';

import { Stack, Button } from '@mantine/core';

import { AppContext } from './AppContext';

export const TestComponent = () => {
  const appContext = useContext(AppContext);

  return (
    <Stack>
      <Button onClick={() => appContext.setTheme('dark')}>
        Set dark theme
      </Button>
    </Stack>
  );
};
`;
