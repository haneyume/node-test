import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

import { theme } from '@/theme';

import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/tiptap/styles.css';

import '@/index.css';

import { AppReduxProvider, store } from '@/app-redux';

import { AppLayout } from './AppLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Katex } from './pages/Katex';
import { Mermaid } from './pages/Mermaid';
import { Spreadsheet } from './pages/Spreadsheet';
import { XArrowView } from './pages/XArrowView';
import { LottieView } from './pages/LottieView';
import { BlocklyView } from './pages/BlocklyView';
import { FrameComponent } from './pages/FrameComponent';
import { ZoomPanel } from './pages/ZoomPanel';
import { ArcherView } from './pages/ArcherView';
import { CodeSnippetsPage } from './pages/CodeSnippetsPage';

export const App = () => {
  return (
    <AppReduxProvider store={store}>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <ModalsProvider>
          <Notifications position="top-right" />

          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </AppReduxProvider>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'katex',
        element: <Katex />,
      },
      {
        path: 'mermaid',
        element: <Mermaid />,
      },
      {
        path: 'spreadsheet',
        element: <Spreadsheet />,
      },
      {
        path: 'xarrow',
        element: <XArrowView />,
      },
      {
        path: 'lottie',
        element: <LottieView />,
      },
      {
        path: 'blockly',
        element: <BlocklyView />,
      },
      {
        path: 'frame',
        element: <FrameComponent />,
      },
      {
        path: 'zoom',
        element: <ZoomPanel />,
      },
      {
        path: 'archer',
        element: <ArcherView />,
      },
      {
        path: 'code-snippets',
        element: <CodeSnippetsPage />,
      },
    ],
  },
]);
