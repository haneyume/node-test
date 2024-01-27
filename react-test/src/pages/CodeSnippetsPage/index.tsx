import { Tabs, Stack, Title } from '@mantine/core';
import { CodeHighlight } from '@mantine/code-highlight';

import {
  codeImportMaintine,
  codeImportReactRouter,
  codeImportContext,
} from './codesImport';

import {
  codeReduxSelect,
  codeReduxSelectAndDispatch,
  codeReduxQuery,
  codeReduxQueryAndMutate,
} from './codesRedux';

import {
  codeReduxAsyncThunk,
  codeReduxSliceInteractingWithAsyncThunk,
} from './codesReduxAsyncThunk';

import {
  codeReduxQuery as codeReduxQuery_,
  codeReduxSliceInteractingWithQuery,
} from './codesReduxQuery';

export const CodeSnippetsPage = () => {
  return (
    <Tabs defaultValue="0">
      <Tabs.List>
        <Tabs.Tab value="0">Useful Imports</Tabs.Tab>
        <Tabs.Tab value="1">Redux</Tabs.Tab>
        <Tabs.Tab value="2">Redux AsyncThunk</Tabs.Tab>
        <Tabs.Tab value="3">Redux Query</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="0" pt="xs">
        <Stack>
          <Title order={3}>Import Maintine</Title>
          <CodeHighlight code={codeImportMaintine} language="tsx" />

          <Title order={3}>Import React Router</Title>
          <CodeHighlight code={codeImportReactRouter} language="tsx" />

          <Title order={3}>Import Context</Title>
          <CodeHighlight code={codeImportContext} language="tsx" />
        </Stack>
      </Tabs.Panel>

      <Tabs.Panel value="1" pt="xs">
        <Stack>
          <Title order={3}>Redux Select</Title>
          <CodeHighlight code={codeReduxSelect} language="tsx" />

          <Title order={3}>Redux Select and Dispatch</Title>
          <CodeHighlight code={codeReduxSelectAndDispatch} language="tsx" />

          <Title order={3}>Redux Query</Title>
          <CodeHighlight code={codeReduxQuery} language="tsx" />

          <Title order={3}>Redux Query and Mutate</Title>
          <CodeHighlight code={codeReduxQueryAndMutate} language="tsx" />
        </Stack>
      </Tabs.Panel>

      <Tabs.Panel value="2" pt="xs">
        <Stack>
          <Title order={3}>Redux AsyncThunk</Title>
          <CodeHighlight code={codeReduxAsyncThunk} language="tsx" />

          <Title order={3}>Redux Slice Interacting with AsyncThunk</Title>
          <CodeHighlight
            code={codeReduxSliceInteractingWithAsyncThunk}
            language="tsx"
          />
        </Stack>
      </Tabs.Panel>

      <Tabs.Panel value="3" pt="xs">
        <Stack>
          <Title order={3}>Redux Query</Title>
          <CodeHighlight code={codeReduxQuery_} language="tsx" />

          <Title order={3}>Redux Slice Interacting with Query</Title>
          <CodeHighlight
            code={codeReduxSliceInteractingWithQuery}
            language="tsx"
          />
        </Stack>
      </Tabs.Panel>
    </Tabs>
  );
};
