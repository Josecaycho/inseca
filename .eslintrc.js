module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    // 'no-console': 0
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    // 'single': 1
    // 'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }]
    // 'vue/valid-v-slot': ['warn', { allowModifiers: true }],
    // curly: ['error', 'multi'],
    // indent: ['warn', 2],
    // 'array-callback-return': ['off', { allowImplicit: true }],
    // 'no-return-assign': ['off'],
    // 'no-unused-expressions': ['off', { allowShortCircuit: true, allowTernary: true }],
    // 'no-sequences': ['off'],
    // 'no-undef': 'warn',
    // // Regex
    // 'no-useless-escape': ['off'],
    // 'no-unused-vars': ['off'],
    // 'vue/script-setup-uses-vars': ['off'],
    // 'import/no-named-as-default': 0
  }
}
