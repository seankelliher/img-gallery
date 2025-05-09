import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import stylistic from "@stylistic/eslint-plugin";

export default [
    {
        languageOptions: {
            globals: globals.browser
        },
        plugins: {
            "@stylistic": stylistic
        },
        rules: {
            "no-unused-vars": "error",
            "no-undef": "error",
            "@stylistic/indent": ["error", 4],
            "@stylistic/linebreak-style": ["error", "unix"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/comma-dangle": ["error", "never"]
        }
    },
    pluginJs.configs.recommended,
    ...pluginVue.configs["flat/essential"]
];