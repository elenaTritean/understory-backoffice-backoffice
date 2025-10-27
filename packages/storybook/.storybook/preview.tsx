import type { Preview } from 'storybook';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from 'storybook/blocks';
import { themeDecorator } from './themeDecorator'; // make sure this file exists

// Default global settings
const DEFAULT_THEME = 'backofficebackoffice';
const DEFAULT_COLOR_MODE = 'light';

const preview: Preview = {
  tags: ['autodocs'],

  parameters: {
    backgrounds: { disable: true },
    layout: 'fullscreen',

    options: {
      storySort: {
        order: ['Introduction', 'Color tokens', 'Components'],
        includeNames: true,
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    actions: { argTypesRegex: '^on.*' },

    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },

    a11y: {
      test: 'error',
    },
  },

  globalTypes: {
    theme: {
      description: 'Select app theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['backofficebackoffice'],
        dynamicTitle: true,
      },
    },
    colorMode: {
      description: 'Select light or dark color mode',
      toolbar: {
        title: 'Color mode',
        icon: 'mirror',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: DEFAULT_THEME,
    colorMode: DEFAULT_COLOR_MODE,
  },

  decorators: [themeDecorator],
};

export default preview;