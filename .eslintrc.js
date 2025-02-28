module.exports = {
  extends: ['airbnb', 'plugin:security/recommended'],
  rules: {
    'security/detect-object-injection': 'error'
  },
  settings: {
    'import/resolver': {
      alias: { map: [['@', './src']] }
    }
  }
}
