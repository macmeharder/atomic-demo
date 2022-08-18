module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:effector/recommended",
    "plugin:effector/scope",
    "@feature-sliced",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "effector"],
  rules: {
    "import/no-internal-modules": "off",
    "react/react-in-jsx-scope": "off",
  },
};
