module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },

  parserOptions: {
    sourceType: "module",
    "ecmaVersion": 2020
  },

  extends: "eslint:recommended",

  ignorePatterns: [
    "types/*.*"
  ],

  // For the full list of rules, see: http://eslint.org/docs/rules/
  rules: {
    complexity: [2, 55],
    "max-statements": [2, 115],
    "no-unreachable": 1,
    "no-useless-escape": 0,

    "no-console": 0,
    // To flag presence of console.log without breaking linting:
    //"no-console": ["warn", { allow: ["warn", "error"] }],

    "require-jsdoc": ["error", {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false
        }
    }],
    "valid-jsdoc": [2, {
      requireReturnDescription: false,
      requireReturn: false,
      requireParamDescription: false,
      requireReturnType: true
    }],
    "guard-for-in": 1,
  },
}
