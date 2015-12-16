module.exports = {
    'parser': 'babel-eslint',
    'extends': [
        'eslint-config-beardon/index',
        'eslint-config-beardon/rules/es6'
    ].map(require.resolve),
    'env': {
        'browser': true,
        'node': true
    },
    'ecmaFeatures': {},
    'globals': {},
    'rules': {}
};
