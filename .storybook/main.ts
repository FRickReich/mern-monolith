import type { StorybookConfig } from "@storybook/react-webpack5";
import webpack from 'webpack';

const config: StorybookConfig = {
  stories: ["../src/frontend/**/*.mdx", "../src/frontend/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (storybookConfig: webpack.Configuration) => {
    // Find and remove the existing rule that handles CSS
    const cssRuleIndex = storybookConfig.module?.rules.findIndex(rule => {
      if (rule.test instanceof RegExp) {
        return rule.test.test('.css');
      }
      return false;
    });

    if (cssRuleIndex !== undefined && cssRuleIndex !== -1) {
      storybookConfig.module?.rules.splice(cssRuleIndex, 1);
    }

    // Add SCSS support
    storybookConfig.module?.rules.push(
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    );

    // Return the updated Storybook webpack configuration
    return storybookConfig;
  },
};
export default config;
