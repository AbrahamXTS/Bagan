# Encoding standard 

## Comments

+ Use `/** ... */` for multiline comments. Include a description, specification of types and values for all parameters and return values. 

    ```javascript
    /**
     * make() returns a new element
     * based on the passed-in tag name
     */
    function make(tag) {

      // ...

      return element;
    }
    ```
+ Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block. 

  ```javascript
    function getType() {
      console.log('fetching type...');

      // set the default type to 'no type'
      const type = this.type || 'no type';

      return type;
    }

    function getType() {
      // set the default type to 'no type'
      const type = this.type || 'no type';

      return type;
    }
    ```
## Whitespace 

+ Uses an indentation set by a tabulation 
    ```javascript
    function foo() {
    ∙∙∙∙let name;
    }
    ```
+ Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. 

    ```javascript
    if (isJedi) {
    fight();
    }

    function fight() {
    console.log('Swooosh!');
    }
    ```
## Functions and variables

+ Avoid single letter names. Be descriptive with your naming.
    ```javascript
    function query() {
      // ...
    }
    ```
+ Use camelCase when naming objects, functions, and instances.

    ```javascript
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```
+ Use PascalCase only when naming constructors or classes.
    ```javascript
    class User {
      constructor(options) {
        this.name = options.name;
      }
    }

    const good = new User({
      name: 'yup',
    });
+ If the property/method is a `boolean`, use `isVal()` or `hasVal()`. In general, use a verb at the beginning of a function name.

    ```javascript
    if (!dragon.hasAge()) {
      return false;
    }
    ```
