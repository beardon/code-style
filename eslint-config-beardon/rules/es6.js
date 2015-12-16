module.exports = {
    'env': {
        'es6': true
    },
    'ecmaFeatures': {
        'arrowFunctions': true,
        'blockBindings': true,
        'classes': true,
        'defaultParams': true,
        'destructuring': true,
        'forOf': true,
        'generators': true,
        'modules': true,
        'objectLiteralComputedProperties': true,
        'objectLiteralDuplicateProperties': false,
        'objectLiteralShorthandMethods': true,
        'objectLiteralShorthandProperties': true,
        'restParams': true,
        'spread': true,
        'superInFunctions': true,
        'templateStrings': true,
        'jsx': true
    },
    'rules': {
        // require braces in arrow function body
        'arrow-body-style': [2, 'as-needed'],
        // require parens in arrow function arguments
        'arrow-parens': [2, "always"],
        // require space before/after arrow function's arrow
        'arrow-spacing': [2, { 'before': true, 'after': true }],
        // verify super() callings in constructors
        'constructor-super': 0,
        // enforce the spacing around the * in generator functions
        'generator-star-spacing': 0,
        // disallow arrow functions where a condition is expected
        'no-arrow-condition': 0,
        // disallow modifying variables of class declarations
        'no-class-assign': 2,
        // disallow modifying variables that are declared using const
        'no-const-assign': 2,
        // disallow duplicate name in class members
        'no-dupe-class-members': 2,
        // disallow to use this/super before super() calling in constructors.
        'no-this-before-super': 2,
        // require let or const instead of var
        'no-var': 2,
        // require method and property shorthand syntax for object literals
        'object-shorthand': [2, 'always'],
        // suggest using arrow functions as callbacks
        'prefer-arrow-callback': 0,
        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': 2,
        // suggest using Reflect methods where applicable
        'prefer-reflect': 2,
        // suggest using the spread operator instead of .apply()
        'prefer-spread': 1,
        // suggest using template literals instead of strings concatenation
        'prefer-template': 2,
        // disallow generator functions that do not have yield
        'require-yield': 0,

        // babel will handle this
        'strict': 0
    }
};
