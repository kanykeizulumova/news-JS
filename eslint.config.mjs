import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        ignores: ["dist/**", "node_modules/**", "webpack*.js", "eslint.config.*"],
    },
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2020,
            },
        },
        plugins: {
            prettier: prettierPlugin,
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            "prettier/prettier": ["error", { endOfLine: "auto" }],
            "no-debugger": "off",
            "no-console": "off",
            "class-methods-use-this": "off",
            "@typescript-eslint/no-explicit-any": "error",
        },
    },
    eslintConfigPrettier,
];