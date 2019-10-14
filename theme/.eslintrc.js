module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'space-in-parens': ['error', 'always'],
    'array-bracket-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-infix-ops': [2],
    'space-unary-ops': [
      1,
      {
        words: true,
        nonwords: true
      }
    ],
    'spaced-comment': [2, 'always'],
    'arrow-spacing': [2]
  }
};
