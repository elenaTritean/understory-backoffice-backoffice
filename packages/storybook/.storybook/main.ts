// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from "path";
const require = createRequire(import.meta.url);
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
    getAbsolutePath("@storybook/addon-vitest"),
    getAbsolutePath("storybook-addon-designs")
  ],
  docs: {
    defaultName: "Documentation",
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  staticDirs: ["../assets"],
};
export default config;