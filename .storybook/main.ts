import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config) {
    const { default: tailwindcss } = await import('@tailwindcss/postcss');
    const { default: autoprefixer } = await import('autoprefixer');

    config.css = {
      ...config.css,
      postcss: {
        plugins: [tailwindcss(), autoprefixer()]
      }
    };

    return config;
  }
};
export default config;
