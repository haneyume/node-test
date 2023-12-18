import { useEffect } from 'react';

import { Tabs, Stack, Title } from '@mantine/core';

import mermaid from 'mermaid';

export const Mermaid = () => {
  useEffect(() => {
    mermaid.startOnLoad = true;
    mermaid.contentLoaded();
  }, []);

  return (
    <Tabs defaultValue="0" p="md">
      <Tabs.List>
        <Tabs.Tab value="0">Diagrams</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="0" pt="xs">
        <Stack>
          <Title order={3}>APIs</Title>
          <pre className="mermaid">{diagramApis}</pre>
        </Stack>
      </Tabs.Panel>
    </Tabs>
  );
};

const diagramApis = `
graph LR
    A --- B
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner);
`;
