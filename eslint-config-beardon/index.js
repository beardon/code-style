module.exports = {
    'extends': [
        'eslint-config-beardon/rules/best-practices',
        'eslint-config-beardon/rules/node',
        'eslint-config-beardon/rules/possible-errors',
        'eslint-config-beardon/rules/strict',
        'eslint-config-beardon/rules/style',
        'eslint-config-beardon/rules/variables'
    ].map(require.resolve),
    'env': {
        'browser': true,
        'node': true
    },
    'ecmaFeatures': {},
    'globals': {},
    'rules': {}
};
