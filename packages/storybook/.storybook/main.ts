import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from "path";
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config:StorybookConfig = {  
  stories: [
    '../pages/**/*.mdx',
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],


  
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest")
  ],
  docs: {
    defaultName: "Documentation",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  staticDirs: ["../src/assets"],
};
export default config;