import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
    {
        ignores: ["dist/**", "generated/**", "node_modules/**", "coverage/**"],
    },

    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ["src/**/*.ts", "src/**/*.js"],

        languageOptions: {
            globals: globals.node,
        },

        rules: {
            "no-console": "warn",
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                    fixStyle: "separate-type-imports",
                },
            ],
        },
    },
);
