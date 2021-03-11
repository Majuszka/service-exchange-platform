module.exports = {
  env: {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      "prettier/react",
      "react-app",
      "airbnb",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "object-curly-newline": "off",
      "comma-dangle": ["error", "never"],
      "linebreak-style": "off",
    },
  },
};
