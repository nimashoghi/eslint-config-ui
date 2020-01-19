const reactRules = {
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/prop-types": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-wrap-multilines": "off",
}

const importRules = {
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
}

module.exports = {
    extends: ["eslint-config-react-native-wcandillon"],
    plugins: ["react-hooks"],
    rules: {
        ...reactRules,
        ...importRules,
    },
}
