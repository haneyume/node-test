export const codeReduxSelect = `import { Stack, Text } from '@mantine/core';

import { useAppSelector, selectCurrentData } from '@/app-redux';

export const TestComponent = () => {
  const currentData = useAppSelector(selectCurrentData);

  return (
    <Stack>
      <Text>{currentData?.name}</Text>
    </Stack>
  );
};
`;

export const codeReduxSelectAndDispatch = `import { Stack, Text, Button } from '@mantine/core';

import {
  useAppDispatch,
  useAppSelector,
  updateOneData,
  selectCurrentData,
} from '@/app-redux';

export const TestComponent = () => {
  const dispatch = useAppDispatch();
  const currentData = useAppSelector(selectCurrentData);

  return (
    <Stack>
      <Text>{currentData?.name}</Text>

      <Button onClick={() => dispatch(updateOneData({ id: 'id', name: 'new name' }))}>
        Update data
      </Button>
    </Stack>
  );
};
`;

export const codeReduxQuery = `import { Stack, Text } from '@mantine/core';

import { useGetPostsQuery } from '@/app-redux';

export const TestComponent = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Stack>
      {data?.map((post) => (
        <Text key={post.id}>{post.content}</Text>
      ))}
    </Stack>
  );
};
`;

export const codeReduxQueryAndMutate = `import { Stack, Text, Button } from '@mantine/core';

import {
  useGetDataByIdQuery,
  useUpdateDataMutation,
} from '@/app-redux';

export const TestComponent = () => {
  const { data } = useGetDataByIdQuery('id', {
    skip: !id,
  });

  const [updateData] = useUpdateDataMutation();

  return (
    <Stack>
      <Text>{data?.name}</Text>

      <Button onClick={() => updateData({ id: 'id', name: 'new name' })}>
        Update data
      </Button>
    </Stack>
  );
};
`;
