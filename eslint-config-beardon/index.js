module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "sourceType": "script",
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "impliedStrict": false,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "arrow-parens": [
            "error",
            "always"
        ],
        "brace-style": [
            "error",
            "stroustrup"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "max-len": [
            "off"
        ],
        "newline-per-chained-call": [
            "off"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "strict": [
            "error",
            "global"
        ]
    }
};
