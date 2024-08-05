import antfu from '@antfu/eslint-config'

export default antfu(
  {
    stylistic: {
      quotes: 'single',
      indent: 2,
    },
    vue: true,
    typescript: true,
    ignores: ['vite.config.ts.timestamp-1718764620692-2c80626dff0a7.mjs'],
  },
  {
    ignores: ['vite.config.ts.timestamp-1718764620692-2c80626dff0a7.mjs'],
    rules: {
      'vue/singleline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 3 },
        multiline: { max: 1 },
      }],
      'ts/ban-ts-comment': 'off',
      'vue/attribute-hyphenation': ['error', 'never'],
      'no-console': 'warn',
      'vue/no-side-effects-in-computed-properties': 'off',
      'unicorn/error-message': 'error',
      'antfu/curly': 'warn',
      'antfu/top-level-function': 'error',
      'camelcase': 'error',
      'style/brace-style': ['error', '1tbs'],
      'antfu/if-newline': 'off',
      'unused-imports/no-unused-vars': 'warn',
    },
  },
)
