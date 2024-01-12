module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  rules: {
    '@typescript-eslint/no-unused-expressions': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
