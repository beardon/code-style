module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true,
		"mocha": true
	},
	"extends": "./index",
	"parserOptions": {
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"plugins": [
		"react"
	],
	"rules": {
		"import/extensions": [
			"error"
		],
		"import/no-extraneous-dependencies": [
			"off"
		],
		"import/no-unresolved": [
			"off"
		],
		"import/prefer-default-export": [
			"off"
		],
		"react/jsx-filename-extension": [
			"off"
		],
		"react/jsx-indent-props": [
			"error",
			4
		],
		"react/jsx-indent": [
			"error",
			4
		],
		"react/require-extension": [
			"off"
		]
	}
};
