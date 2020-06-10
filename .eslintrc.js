// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  env: {
    es6: true,
    node: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  // plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'warn',
      {
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        proseWrap: 'never',
        printWidth: 120
        // overrides: []
      }
    ],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': 'off',
    quotes: [1, 'single']
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.ts']
      }
    }
  }
};
