/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  env: {
    node: true
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': ['error', { disallowVueBuiltInComponents: true }]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
