import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import mochaPlugin from "eslint-plugin-mocha";
import eslintConfigPrettier from "eslint-config-prettier";
import tsEslintParser from "@typescript-eslint/parser";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    languageOptions: {
      globals: globals.browser,
      parser: tsEslintParser,
    },
  },
  pluginJs.configs.recommended,
  mochaPlugin.configs.recommended,
  ...tsEslint.configs.recommended,
  ...tsEslint.configs.stylistic,
  {
    ignores: ["*.d.ts", "node_modules", "dist", "scripts"],
  },
  {
    rules: {
      "no-console": 2,
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          caughtErrors: "none", // Add this line to ignore unused variables in catch blocks
        },
      ],
      "mocha/no-exclusive-tests": "error",
      "mocha/no-mocha-arrows": "off",
      "mocha/no-setup-in-describe": "off",
      "mocha/no-async-describe": "off",
      "mocha/max-top-level-suites": "off",
      "mocha/no-top-level-hooks": "off",
    },
  },
  {
    plugins: {
      tsEslint,
    },
    files: ["**/*.test.ts", "**/*.test.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-empty-function": "off",
    },
  },
  eslintConfigPrettier,
];
