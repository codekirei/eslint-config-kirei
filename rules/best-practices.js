'use strict'

module.exports = {
  'accessor-pairs': 0,
  'array-callback-return': 2,
  'block-scoped-var': 2,
  'complexity': [0, 11],
  'consistent-return': 2,
  'curly': [2, 'multi-line'],
  'default-case': 2,
  'dot-location': 0,
  'dot-notation': [2, { allowKeywords: true }],
  'eqeqeq': [2, 'allow-null'],
  'guard-for-in': 2,
  'no-alert': 1,
  'no-caller': 2,
  'no-case-declarations': 2,
  'no-div-regex': 0,
  'no-else-return': 2,
  'no-empty-function': [2, {
    allow: [
      'functions',
      'arrowFunctions',
    ],
  }],
  'no-empty-pattern': 2,
  'no-eq-null': 0,
  'no-eval': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-label': 2,
  'no-fallthrough': 2,
  'no-floating-decimal': 2,
  'no-implicit-coercion': 0,
  'no-implicit-globals': 0,
  'no-implied-eval': 2,
  'no-invalid-this': 0,
  'no-iterator': 2,
  'no-labels': [2, {
    allowLoop: false,
    allowSwitch: false,
  }],
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-magic-numbers': [0, {
    ignore: [],
    ignoreArrayIndexes: true,
    enforceConst: true,
    detectObjects: false,
  }],
  'no-multi-spaces': 2,
  'no-multi-str': 2,
  'no-native-reassign': 2,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-wrappers': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-param-reassign': [2, { props: true }],
  'no-process-env': 0,
  'no-proto': 2,
  'no-redeclare': 2,
  'no-return-assign': 2,
  'no-script-url': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-throw-literal': 2,
  'no-unmodified-loop-condition': 0,
  'no-unused-expressions': 2,
  'no-unused-labels': 2,
  'no-useless-call': 0,
  'no-useless-concat': 2,
  'no-useless-escape': 2,
  'no-void': 0,
  'no-warning-comments': 0,
  'no-with': 2,
  'radix': 2,
  'vars-on-top': 2,
  'wrap-iife': [2, 'outside'],
  'yoda': 2,
}
