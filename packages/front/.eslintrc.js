module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],

        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        indent: 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-indent': ['error', 4],
        'linebreak-style': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'operator-linebreak': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'jsx-quotes': ['error', 'prefer-double'],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.tsx'],
            },
        ],
        'prettier/prettier': 'off',
        'object-curly-newline': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
            },
        ],
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'info'],
            },
        ],
        'max-len': [
            'warn',
            {
                code: 120,
            },
        ],

        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/prefer-default-export': 'off',
        'no-unused-expressions': 'off',
        'react/prop-types': 'off',
        'import/no-named-as-default': 0,
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx','.js','.jsx', '.native.js'],
            },
        },
    },
};
