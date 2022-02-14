# JavaScript Programming Fundamentals

## **Introduction**

JavaScript is a high level programming language that can run on the browser. It is one of the core technologies of the world wide web alongside HTML and CSS. It allows web developers to create dynamic content that responds to user behavior. 

In its early days, JavaScript was very limited and rough around the edges since its original purpose was to be a simple scripting language for the browser, but over the years it has matured and today it is the most popular programming language in the world and it is used in various fields such as web development, mobile development, desktop development, artificial intelligence, etc.

## **First Steps**

To add JavaScript to an HTML document, we use the **\<script\>** tag:
```HTML
<script>
    alert('Hello World!');
</script>
```

We can write JavaScript inside the **\<script\>** tag as shown above but the alternative and recommended way is to write JavaScript in an external file and link it to our document:

```HTML
<script src='index.js'></script>
```

_**Note:** It is best practice to always use **\<script\>** tags at the end of the **\<body\>** tag so that JavaScript code executes only after the document has finished loading._

To display a message dialog to the user, we use the `alert(message)` function:

```JavaScript
alert('Hello World!');
```

To display a message dialog to the user with an input field, we use the `prompt(message)` function. The user's input will be stored in a variable:

```JavaScript
var age = prompt('How old are you ?');
```

To display a confirmation dialog to the user, we use the `confirm()` function. The user's choice will be stored in a variable:

```JavaScript
var confirm = confirm('Do you want to save your changes ?');
```

## **Variables & Types**

Variables in JavaScript are dynamically typed, which means we don't need to specify the type of the variable when declaring it; it will store any value of any type. There are three ways to declare variables:

```JavaScript
const firstName = 'John'; /* ES6 */
```

```JavaScript
var age = 23;
```

```JavaScript
let isStudent = false; /* ES6 */
```

**`var`** and **`let`** are used to declare variables and we'll discuss the difference between them later, whereas **`const`** is used to declare constants.

_**Note:** ES6 (ECMAScript 6) is a JavaScript standard release that introduced great improvements to the language and a lot of new features It is the standard release that revolutionized the way we write JavaScript. Throughout this guide, any features that were introduced in ES6 or later releases will be indicated as such._

Now that we have declared and initialized variables, let's display them. We will use the JavaScript console that's provided with every web browser:

```JavaScript
console.log(firstName);

console.log(age);

console.log(isStudent);
```

The preceding lines will print the variables to the console.

Besides printing simple messages, you can print errors and warnings to the console:

```JavaScript
console.error('This is an error message!');
```

```JavaScript
console.warn('This is a warning!');
```

Variables can store values of various types. Let's see what types the JavaScript language offers:
* **number**: Denotes numberic values.
* **string**: Denotes textual values.
* **boolean**: Denotes boolean values.
* **undefined**: Denotes a variable that was declared but never assigned to.
* **null**: Denotes a variable that was assigned the value `null`.

These are the basic primitive types of the language. Let's declare a variable and see them in practice:

```JavaScript
let myVariable;

console.log(typeof myVariable); // --> undefined

myVariable = 'John';
console.log(typeof myVariable); // --> string

myVariable = 23;
console.log(typeof myVariable); // --> number

myVariable = true;
console.log(typeof myVariable); // --> boolean

/* undefined can be assigned to a variable explicitly */
myVariable = undefined; 
console.log(typeof myVariable); // --> undefined

myVariable = null;
console.log(typeof myVariable); // --> object (it shows object but the type is still null)
```

We declared a variable and assigned it values of different types, then we printed the result of the **`typeof`** operator which returns the type of a variable.

Just like in other programming languages, variables in JavaScript can be converted to other types:

* **String -> Number:**

    ```JavaScript
    const day = '23';

    console.log(typeof day); // --> string
    console.log(day); // --> 23

    const dayNumber = Number(day);

    console.log(typeof dayNumber); // --> number
    console.log(dayNumber); // --> 23
    ```

* **Number -> String:**

    ```JavaScript
    const year = 2022;

    console.log(typeof year); // --> number
    console.log(year); // --> 2022

    const yearString = String(year);

    console.log(typeof yearString); // --> string
    console.log(yearString); // --> 2022
    ```

* **Boolean -> Number:**

    ```JavaScript
    const on = true;
    const off = false;

    console.log(typeof on); // --> boolean
    console.log(on); // --> true
    console.log(typeof off); // --> boolean
    console.log(off); // --> false

    const onNumber = Number(on);
    const offNumber = Number(off);

    console.log(typeof onNumber); // --> number
    console.log(onNumber); // --> 1
    console.log(typeof offNumber); // --> number
    console.log(offNumber); // --> 0
    ```

* **Boolean -> String:**

    ```JavaScript
    const isMarried = false;

    console.log(typeof isMarried); // --> boolean
    console.log(isMarried); // --> false

    const isMarriedString = String(isMarried);

    console.log(typeof isMarriedString); // --> string
    console.log(isMarriedString); // --> false
    ```
    
Conversion from other types to `Boolean` is a bit weird (welcome to JavaScript). There are what we call **truthy** values which are values that return `true` when converted to `Boolean` and **falsy** values which return false when converted to `Boolean`. For a list of these values, check out the following links:

[Truthy Values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

[Falsy Values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

* **Number -> Boolean:**

    ```JavaScript
    let x = 0;

    console.log(typeof x); // --> number
    console.log(x); // --> 0

    let xBoolean = Boolean(x);

    console.log(typeof xBoolean); // --> boolean
    console.log(xBoolean); // --> false
    ```

    ```JavaScript
    x = -1000;

    console.log(typeof x); // --> number
    console.log(x); // --> -1000

    xBoolean = Boolean(x);

    console.log(typeof xBoolean); // --> boolean
    console.log(xBoolean); // --> true
    ```

    ```JavaScript
    x = 500;

    console.log(typeof x); // --> number
    console.log(x); // --> 500

    xBoolean = Boolean(x);

    console.log(typeof xBoolean); // --> boolean
    console.log(xBoolean); // --> true
    ```

* **String -> Boolean:**

    ```JavaScript
    let text = '';
    
    console.log(typeof text); // --> string
    console.log(text); // --> 

    let textBoolean = Boolean(text);

    console.log(typeof textBoolean); // --> boolean
    console.log(textBoolean); // --> false
    ```

    ```JavaScript
    text = 'true';
    
    console.log(typeof text); // --> string
    console.log(text); // --> true

    textBoolean = Boolean(text);

    console.log(typeof textBoolean); // --> boolean
    console.log(textBoolean); // --> true
    ```

    ```JavaScript
    text = 'false';
    
    console.log(typeof text); // --> string
    console.log(text); // --> false

    textBoolean = Boolean(text);

    console.log(typeof textBoolean); // --> boolean
    console.log(textBoolean); // --> true
    ```
    ```JavaScript
    text = 'Hello World!';
    
    console.log(typeof text); // --> string
    console.log(text); // --> Hello World!

    textBoolean = Boolean(text);

    console.log(typeof textBoolean); // --> boolean
    console.log(textBoolean); // --> true
    ```

Now that we've learned about types and type conversion, we need to learn about the **regular equality operator (==)**. If the regular equality operator is used on operands of different types, JavaScript will perform a type conversion to make them the same type then it will proceed to compare their values. Consider the following cases:

```JavaScript
let regularComparison = (false == 0);
console.log(regularComparison); // --> true
```

```JavaScript
regularComparison = ("0" == 0);
console.log(regularComparison); // --> true
```

```JavaScript
regularComparison = ("200" == 200);
console.log(regularComparison); // --> true
```

To avoid the weird behavior and confusion caused by the regular equality operator (==), use the **strict equality operator (===)** instead. This operator doesn't perform any type conversion and will return `false` when the operands have different types:

```JavaScript
let strictComparison = (false === 0);
console.log(strictComparison); // --> false
```

```JavaScript
strictComparison = ("0" === 0);
console.log(strictComparison); // --> false
```

```JavaScript
strictComparison = ("200" === 200);
console.log(strictComparison); // --> false
```

## **String Manipulation**

Strings in JavaScript can be enclosed in single quotes or double quotes:

* **Single Quotes:**
```JavaScript
console.log('Hello World!');
```

* **Double Quotes:**
```JavaScript
console.log("Hello World!");
```

Variables can be included in strings using basic string concatenation or template literals:

* **String concatenation:**

```JavaScript
const clubName = 'GDSC';
const schoolName = 'ENICarthage';
console.log("We are students of " + schoolName + " and our club's name is " + clubName); 

// --> We are students of ENICarthage and our club's name is GDSC
```

* **Template Literals (ES6):**

```JavaScript
console.log(`We are students of ${schoolName} and our club's name is ${clubName}`); 

// --> We are students of ENICarthage and our club's name is GDSC
```

To get the length of a string, we use the length property:

```JavaScript
const country = 'Tunisia';
console.log(country.length); // --> 7
```

JavaScript offers various utility methods for string manipulation:

* **.toUpperCase():** Transforms the string to upper case.

    ```JavaScript
    let fact = 'The earth is round.';
    console.log(fact.toUpperCase()); // --> THE EARTH IS ROUND.
    ```

* **.toLowerCase():** Transforms the string to lower case.

    ```JavaScript
    fact = 'THE SUN RISES FROM THE EAST.';
    console.log(fact.toLowerCase()); // --> The sun rises from the east.
    ```

* **.indexOf(searchString):** Searches for *searchString* inside the string. Returns the index of the first occurence if found and -1 otherwise.

    ```JavaScript
    const error = 'Login Failed! Please Verify Your Credentials.';
    console.log(error.indexOf('Failed')); // --> 6
    console.log(error.indexOf('What')); // --> -1
    ```

* **.substring(indexStart, indexEnd):** Returns a new string containing characters from *indexStart* to *indexEnd* (the character at *indexEnd* is not included).

    ```JavaScript
    const warning = 'Warning! You Only Have One Remaining Login Attempt.';
    console.log(warning.substring(0, 7)); // --> Warning
    ```

* **.split(seperator):** Splits the string by *seperator* into multiple parts. Returns an array containing the parts.

    ```JavaScript
    const query = 'name=john;email=john@gmail.com;age=40';
    console.log(query.split(';')); // --> ['name=john', 'email=john@gmail.com', 'age=40']
    ```

* **.replaceAll(searchString, replacementString):** Replaces all occurences of *searchString* in the string with *replacementString*.

    ```JavaScript
    const info = 'My name is John, my friend is also called John.';
    console.log(info.replaceAll('John', 'Bob'));
    // --> My name is Bob, my friend is also called Bob.
    ```

## **Arrays**

Arrays in JavaScript can be declared in two ways:

```JavaScript
const arr = new Array(1, 15, 30);
```

```JavaScript
const arr = [1, 15, 30];
```

The second one is more commonly used.

Contrary to other programming languages, arrays in JavaScript can store values of different types:

```JavaScript
const arr = [1, 'Hello', false, { name: 'Dave', address: 'Los Angeles' }];
```

Elements of an array can be accessed and modified by their indexes and like many programming languages, array indexes start with 0:

```JavaScript
const arr = ['Karim', 'Mohamed', 'Chaima', 'Jamel', 'Samira'];
console.log(arr[0]); // --> Karim

arr[0] = 'Iheb';
console.log(arr[0]) // --> Iheb
```

To get the size of an array, we use the length property:

```JavaScript
let countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
console.log(countries.length); // --> 5
```

JavaScript offers various utility methods for array manipulation:

* **.push(value):** Adds *value* at the end of the array.

    ```JavaScript
    countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
    countries.push('Italy');
    console.log(countries);

    // --> ['Tunisia', 'USA', 'Russia', 'Egypt', 'China', 'Italy']
    ```

* **.pop():** Removes the last element of the array.

    ```JavaScript
    countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
    countries.pop();
    console.log(countries);

    // --> ['Tunisia', 'USA', 'Russia', 'Egypt']
    ```

* **.unshift(value):** Adds *value* at the start of the array.

    ```JavaScript
    countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
    countries.unshift('Italy');
    console.log(countries);

    // --> ['Italy', 'Tunisia', 'USA', 'Russia', 'Egypt', 'China']
    ```

* **.shift():** Removes the first element of the array.

    ```JavaScript
    countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
    countries.shift();
    console.log(countries);

    // --> ['USA', 'Russia', 'Egypt', 'China']
    ```

* **.indexOf(element):** Searches for *element* inside the array. Returns the index of the first occurence if found and -1 otherwise.

    ```JavaScript
    countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
    console.log(countries.indexOf('USA')); // --> 1
    console.log(countries.indexOf('Turkey')); // --> -1
    ```

* **.splice(indexStart, deleteCount, item1, ..., itemN):** Deletes *deleteCount* items from the array starting from *indexStart* and replaces them with *item1, ..., itemN*. If *item1, ..., itemN* are not specified, only the deletion takes place.

    ```JavaScript
    countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
    countries.splice(1, 2, 'Lebanon', 'Kuwait');
    console.log(countries);

    // --> ['Tunisia', 'Lebanon', 'Kuwait', 'Egypt', 'China']

    countries.splice(2, 2);
    console.log(countries);

    // --> ['Tunisia', 'Lebanon', 'China']
    ```

* **.sort():** Sorts the elements of the array in ascending order of ASCII characters.

    ```JavaScript
    countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
    countries.sort();
    console.log(countries);

    // --> ['China', 'Egypt', 'Russia', 'Tunisia', 'USA']
    ```

* **.reverse():** Reverses the elements of the array.

    ```JavaScript
    countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
    countries.reverse();
    console.log(countries);

    // --> ['China', 'Egypt', 'Russia', 'USA', 'Tunisia']
    ```

* **.join(separator):** Creates and returns a new string by concatenating all of the elements in the array and seperating them by *seperator*.

    ```JavaScript
    const todo = ['Take out the trash ', ' Clean the room ', ' Do the laundry'];
    const todoString = todo.join('-');
    console.log(todoString);

    // --> Take out the trash - Clean the room - Do the laundry
    ```

## **Functions**

Functions in JavaScript can be declared in 2 ways:

* **Function decalaration:**

```JavaScript
function func() {}
```

* **Function expression:**

```JavaScript
const func = function() {} // const/let can be used too
```

A function can take multiple parameters and can have a return value:

```JavaScript
function add(num1, num2) {
    return num1 + num2;
}

console.log(add(5, 3)); // --> 8
```

Besides regular functions, JavaScript offers **Arrow Function Expressions** which were introduced in **ES6**, they're almost identical to normal functions except for some particularities which are out of the scope of this guide. 

Below are the various ways we can write arrow function expressions:

* **Multiple Parameters + Multiple Instructions:** 
    
    If the arrow function has multiple parameters, they must be enclosed in parantheses `()`.
    
    If the arrow function has multiple instruction lines, they must be enclosed in curly braces `{}`.

    ```JavaScript
    const substract = (num1, num2) => {
        const result = num1 - num2;
        return result;
    }

    console.log(substract(10, 3)); // --> 7
    ```

* **Single Parameter:** 
    
    If the arrow function has a single parameter, the parantheses `()` can be removed.

    ```JavaScript
    const toUpper = text => {
        const result = text.toUpperCase();
        return result;
    }

    console.log(toUpper('hello there!')); // --> HELLO THERE!
    ```

* **Single Instruction:** 
    
    If the arrow function has a single instruction line, the curly braces `{}` can be removed. If the instruction is a `return` statement, the `return` keyword can be removed too.

    ```JavaScript
    const log = text => console.log(text);

    log('JavaScript Functions.'); // --> JavaScript Functions.
    ```

    ```JavaScript
    const multiply = (num1, num2) => num1 * num2;

    console.log(multiply(7, 6)); // --> 48
    ```

## **Objects**

Objects in JavaScript are simply a combination of properties and methods:

```JavaScript
const person = {
    // Properties
    firstName: 'John',
    lastName: 'Doe',
    age: 40,
    hobbies: ['Gaming', 'Reading', 'Powerlifting'],

    // Methods
    eat: function(){
        console.log('I am eating.');
    },
    drink: function(){
        console.log('I am drinking.');
    },
    sleep: function(){
        console.log('I am sleeping.');
    }
}
```

_**Note:** The syntax inside the brackets `{}` is called an **Object Literal** and it creates an object and assigns it to `person`._

**ES6** introduced a new syntax to declare methods inside an object literal:

```JavaScript
const person = {
    // Properties
    . . .

    // Methods (ES6)
    eat(){
        console.log('I am eating.');
    },
    drink(){
        console.log('I am drinking.');
    },
    sleep(){
        console.log('I am sleeping.');
    }
}
```

To access and modify the properties of an object, we can use dot notation or bracket notation:

* **Dot Notation:**

    ```JavaScript
    console.log(person.firstName); // --> John

    person.firstName = 'Jane';

    console.log(person.firstName); // --> Jane
    ```

    ```JavaScript
    person.eat(); // --> I am eating.

    person.eat = function(){
        console.log('I am eating a large pizza.');
    }

    person.eat(); // --> I am eating a large pizza.
    ```

* **Bracket Notation:**

    ```JavaScript
    console.log(person['firstName']); // --> John

    person['firstName'] = 'Jane';

    console.log(person['firstName']); // --> Jane
    ```

    ```JavaScript
    person['eat'](); // --> I am eating.

    person['eat'] = function(){
        console.log('I am eating a large pizza.');
    }

    person['eat'](); // --> I am eating a large pizza.
    ```

Another feature that's offered by JavaScript object literals is **getters** and **setters**. These are methods in the object that are accessed like properties:
* **Getters:** When accessed in a reading context (we try to read their value), they are executed and their return value will be used.
* **Setters:** When accessed in a setting context (we try to set their value), they receive a *value* parameter which is the value we're trying to set and they are executed.

```JavaScript
const anotherPerson = {
    firstName: 'Mark',
    lastName: 'Smith',
    age: 22,
    hobbies: ['Reading', 'Hiking'],

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    },

    eat: function(){
        console.log('I am eating.');
    },
    drink: function(){
        console.log('I am drinking.');
    },
    sleep: function(){
        console.log('I am sleeping.');
    }
}
```

```JavaScript
console.log(anotherPerson.fullName); // --> Mark Smith

anotherPerson.fullName = 'Bob Thompson';

console.log(anotherPerson.fullName); // --> Bob Thompson

console.log(anotherPerson.firstName); // --> Bob

console.log(anotherPerson.lastName); // --> Thompson
```

## **Conditionals**

Conditionals in JavaScript are similar to C-Family programming languages, the constructs that enable conditional behavior are the **if..else** statement and the **switch** statement.

The **if..else** statement executes a code block only if the condition is verified:

```JavaScript
if(condition){
    ...
}
else if(condition){ // Optional
    ...
}
else { // Optional
    ...
}
```

Example:

```JavaScript
const age = 19;

if(age >= 18){
    console.log('You are an adult.');
}
else {
    console.log('You are not an adult.');
}

// --> You are an adult.
```

The **switch** statement takes an expression. The value of the expression is compared with the values of multiple cases and the code of the first matching case is executed (the **break** keyword must be used so the following cases' code doesn't get executed). If none of the cases match, the default case's code will be executed:

```JavaScript
switch(expression){
    case value1:
        . . .
        break;

    case value2:
        . . .
        break;

    case value3:
        . . .
        break;

    default:
        . . .
}
```

Example:

```JavaScript
const accountType = 'Admin';

switch(accountType){
    case 'User':
        console.log('You are a user.');
        break;

    case 'Moderator':
        console.log('You are a moderator.');
        break;

    case 'Admin':
        console.log('You are an admin.');
        break;
}

// --> You are an admin.
```

Conditional assignments in JavaScript can be executed using the ternary operator:

```JavaScript
const grade = 15;
let comment;

/*
if(grade > 10){
    comment = "Good grade.";
}
else {
    comment = "Bad grade.";
}
*/

// The above can be shortened to:

comment = (grade > 10) ? "Good grade." : "Bad grade.";

console.log(comment); // --> Good grade.
```

## **Primitive & Reference Values**
Now that we've learned about variables, types, arrays, objects and functions, we're going to dive into a critical concept in JavaScript.

Values of primitive types (number, string, boolean, undefined, null) are called **primitive values** and values of reference types (such as arrays, functions and objects) are called **reference values**.

Whenever we assign a variable that holds a primitive value to another variable, a copy of the primitive value will be created and assigned to the variable:

```JavaScript
let x = 10;
let y = x;

console.log(x); // --> 10
console.log(y); // --> 10
```

After copying, if we change one of the variables, it will have no effect on the other since it has a different copy:

```JavaScript
x = 50;

console.log(x); // --> 50
console.log(y); // --> 10
```

Whenever we assign a variable that holds a reference value to another variable, both variables will point to the same reference value:

```JavaScript
let firstArray = [5, 16, 'Hello', false];
let secondArray = firstArray;

console.log(firstArray); // --> [5, 16, 'Hello', false]
console.log(secondArray); // --> [5, 16, 'Hello', false]
```

```JavaScript
let firstObject = {
    fullName: 'John Doe',
    age: 30
};
let secondObject = firstObject;


console.log(firstObject); // --> { fullName: 'John Doe', age: 30 }
console.log(secondObject); // --> { fullName: 'John Doe', age: 30 }
```

If the reference value is modified using one of the variables, the changes will be reflected on the other variable too:

```JavaScript
firstArray[0] = 1000;

console.log(firstArray); // --> [1000, 16, 'Hello', false]
console.log(secondArray); // --> [1000, 16, 'Hello', false]
```

```JavaScript
firstObject.fullName = 'Mark Smith';

console.log(firstObject); // --> { fullName: 'Mark Smith', age: 30 }
console.log(secondObject); // --> { fullName: 'Mark Smith', age: 30 }
```

We need to be aware of this difference in behavior between primitive values and reference values when we're working with functions. Functions create copies of the parameters that they receive, this will have no effect when we're passing in primitive values but we need to be careful when we're passing in reference values because modifying the copies inside the function will also modify the original value:

```JavaScript
let numbers = [123, -150, 88, 30];
console.log(numbers); // --> [123, -150, 88, 30]

function changeNumber(param){
    param[1] = 300;
}

changeNumber(numbers);
console.log(numbers); // --> [123, 300, 88, 30]
```

```JavaScript
let person = {
    fullName: 'Dean',
    age: 45
}
console.log(person); // --> { fullName: 'Dean', age: 45 }

function changeName(param){
    param.fullName = 'Brian';
}

changeName(person);
console.log(person); // --> { fullName: 'Brian', age: 45 }
```

## **Loops**

Loops in JavaScript are also similar to C-Family languages, there are multiple constructs that enable loops: 

* **While Loop:** Will execute the code as long as the condition evaluates to `true`.

    ```JavaScript
    while(condition){
        ...
    }
    ```

    Example:

    ```JavaScript
    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }

    // --> 0 1 2 3 4 5 6 7 8 9
    ```

* **Do..while Loop:** Will execute the code as long as the condition evaluates to `true`, but it will execute it at least once before checking the condition.

    ```JavaScript
    do {
        ...
    }
    while(condition);
    ```

    Example:

    ```JavaScript
    let j = 0;
    do {
        console.log(j);
        j++;
    }
    while (j < 10);

    // --> 0 1 2 3 4 5 6 7 8 9
    ```

* **For Loop:** Will execute the code as long as the condition evaluates to `true`. The initialization section is executed once at the beginning, then the condition is checked, then the code block is executed if the condition evaluates to `true`, then the incrementation section is executed and the process is repeated until the condition no longer evaluates to `true`.

    ```JavaScript
    for(initialization; condition; incrementation){
        ...
    }
    ```

    Example:

    ```JavaScript
    for (let k = 0; k < 10; k++) {
        console.log(k);
    }

    // --> 0 1 2 3 4 5 6 7 8 9
    ```

* **For..in Loop:** This loop is specific to JavaScript and enables easy iteration over object properties. On each iteration, we get the key of a property and we can access its value using bracket notation.

    ```JavaScript
    const car = {
        make: 'Cheverolet',
        model: 'Camaro',
        color: 'Blue',
        isUsed: false
    }

    for(let key in car){
        console.log(key);
    }

    /*
        make
        model
        color
        isUsed
    */

    for(let key in car){
        console.log(`${key} : ${car[key]}`);
    }

    /*
        make: Cheverolet
        model: Camaro
        color: Blue
        isUsed: false
    */
    ```

* **For..of Loop (ES6):** This loop is specific to JavaScript and it enables easy iteration over array values.

    ```JavaScript
    const countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];

    for(let country of countries){
        console.log(country);
    }

    /*
        Tunisia
        USA
        Russia
        Egypt
        China
    */
    ```

## **Higher Order Array Methods**

Now that we've learned about functions, loops and conditionals, let's look into some more useful utility methods for arrays. These methods take in a function as a parameter which will be executed on each element of the array and provide a result (arrow function expressions are useful here because they're less verbose):

* **.forEach(function):** Executes the provided function on each element of the array.

    ```JavaScript
    let numbers = [100, 50, -25, 17];

    numbers.forEach(number => console.log(number));

    /*
        100
        50
        -25
        17
    */
    ```

* **.map(function):** Executes the provided function on each element of the array and returns a new array where the elements are mapped to the return values.

    ```JavaScript
    numbers = [12, 75, 31, 16];

    const newNumbers = numbers.map(number => number * 100);

    // We use the previously mentioned forEach() method to display the elements of the new array.
    newNumbers.forEach(newNumber => console.log(newNumber));

    /*
        1200
        7500
        3100
        1600
    */
    ```

* **.filter(function):** Executes the provided function on each element of the array and returns a new array that only keeps elements that meet a condition (they have a return value of `true`). 

    ```JavaScript
    numbers = [20, 17, 73, 84];

    const evenNumbers = numbers.filter(number => number % 2 === 0);

    // We use the previously mentioned forEach() method to display the elements of the new array.
    evenNumbers.forEach(newNumber => console.log(newNumber));

    /*
        20
        84
    */
    ```

* **.find(function) (ES6):** Executes the provided function on elements of the array and stops when it finds an element that meets a condition (it have a return value of `true`). If an element is found it is returned otherwise it returns `undefined`.

    ```JavaScript
    let countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
    console.log(countries.find(country => country === 'USA')); // --> USA
    console.log(countries.find(country => country.length === 5)); // --> Egypt
    ```

* **.findIndex(function) (ES6):** Same as `.find(function)` but instead returns the index of the element if it is found and -1 otherwise.

    ```JavaScript
    countries = ['Tunisia', 'USA', 'Russia', 'Egypt', 'China'];
    console.log(countries.findIndex(country => country === 'USA')); // --> 1
    console.log(countries.findIndex(country => country.length === 5)); // --> 3
    ```

## **Date Manipulation**

Date manipulation in JavaScript is done using the `Date` class.

To get the current date, simply create an object of the `Date` class or call the static method `Date.now()`:

```JavaScript
let currentDate = new Date();
```

```JavaScript
let currentDate = Date.now();
```

```JavaScript
console.log(currentDate);

// --> Sat Feb 12 2022 23:39:25 GMT+0100 (Central European Standard Time) 
```

We get a specific date using its string representation by passing it into the constructor or the `Date.parse()` static method *(this is discouraged due to inconsistencies between browsers, use a JavaScript date library instead)*:

```JavaScript
let dateVariable = new Date('2022-02-10');
```

```JavaScript
let dateVariable = Date.parse('2022-02-10');
```

```JavaScript
console.log(dateVariable);

// --> Thu Feb 10 2022 01:00:00 GMT+0100 (Central European Standard Time)
```

The created object contains all information related to the current date such as the day, month and year. Date information can be accessed using the following methods: 

* **.getFullYear():** Returns the full year.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    console.log(currentDate.getFullYear()); // --> 2022
    ```

* **.getMonth():** Returns the month (numbered from 0 to 11).

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    console.log(currentDate.getMonth()); // --> 1
    ```

* **.getDate():** Returns the day of the month.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    console.log(currentDate.getDate()); // --> 12
    ```

* **.getDay():** Returns the day of the week (numbered from 0 to 6).

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    console.log(currentDate.getDay()); // --> 5
    ```

* **.getHours():** Returns the hours.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    console.log(currentDate.getHours()); // --> 23
    ```

* **.getMinutes():** Returns the minutes.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    console.log(currentDate.getMinutes()); // --> 39
    ```

* **.getSeconds():** Returns the seconds.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    console.log(currentDate.getSeconds()); // --> 25
    ```

Date properties can also be modified using the following methods:

* **.setFullYear():** Sets the full year.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    currentDate.setFullYear(2000);
    console.log(currentDate.getFullYear()); // --> 2000
    ```

* **.setMonth():** Sets the month (numbered from 0 to 11).

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    currentDate.setMonth(8);
    console.log(currentDate.getMonth()); // --> 8
    ```

* **.setDate():** Sets the day of the month.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    currentDate.setDate(25);
    console.log(currentDate.getDate()); // --> 25
    ```

* **.setHours():** Sets the hours.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    currentDate.setHours(14);
    console.log(currentDate.getHours()); // --> 14
    ```

* **.setMinutes():** Sets the minutes.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    currentDate.setMinutes(35);
    console.log(currentDate.getMinutes()); // --> 35
    ```

* **.setSeconds():** Sets the seconds.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    currentDate.setSeconds(50);
    console.log(currentDate.getSeconds()); // --> 50
    ```

The string representation of a date object can be generated using a plethora of methods, some of which are:

* **.toString():** Returns the string representation of a date object.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    console.log(currentDate.toString());

    // --> Sat Feb 12 2022 23:39:25 GMT+0100 (Central European Standard Time)
    ```

* **.toUTCString():** Returns the string representation of a date object in the UTC timezone.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    console.log(currentDate.toUTCString());

    // --> Sat, 12 Feb 2022 22:39:25 GMT
    ```

* **.toLocaleString(locale, options):** Returns the string representation of a date object in the format of the specified *locale*.

    ```JavaScript
    // currentDate is 12/02/2022 23:39:25

    console.log(currentDate.toLocaleString('en-US'));

    // --> 2/12/2022, 11:39:25 PM
    ```

## **Math Operations**
Mathematical operations in JavaScript can be executed using the methods and properties provided by the `Math` object. Some of the provided methods are:

* **Math.round(number):** Rounds the value of *number* to the nearest integer.
    ```JavaScript
    let number = 0.75;

    console.log(Math.round(number)); // --> 1
    ```

* **Math.ceil(number):** Returns the largest integer greater than or equal to *number*.
    ```JavaScript
    number = 15.4;

    console.log(Math.ceil(number)); // --> 16
    ```

* **Math.floor(number):** Returns the largest integer less than or equal to *number*.
    ```JavaScript
    number = 62.18;

    console.log(Math.floor(number)); // --> 62
    ```

* **Math.pow(number, p):** Returns *number* raised to the power of *p*.
    ```JavaScript
    number = 3;

    console.log(Math.pow(number, 3)); // --> 27
    ```

* **Math.sqrt(number):** Returns the square root of *number*.
    ```JavaScript
    number = 81;

    console.log(Math.sqrt(number)); // --> 9
    ```

* **Math.abs(number):** Returns the absolute value of *number*.
    ```JavaScript
    number = -155;

    console.log(Math.abs(number)); // --> 155
    ```

* **Math.random():** Returns a pseudo random number between 0 and 1.
    ```JavaScript
    console.log(Math.random()); // --> 0.6786144103536063
    ```

Some of the provided properties are:

* **Math.PI:** Denotes the constant pi.

    ```JavaScript
    console.log(Math.PI); // --> 3.141592653589793
    ```

* **Math.E:** Denotes Euler's constant.

    ```JavaScript
    console.log(Math.E); // --> 2.718281828459045
    ```

## **Classes (ES6)**

We've already learned how to create objects using object literals in JavaScript, but classes offer a more efficient way to create objects that share the same structure (blueprint).

Suppose we are working on an internal employee management application for a company and we want to create an object for each employee:

```JavaScript
const employees = [];

employees.push({
    firstName: 'John',
    lastName: 'Doe',
    role: 'Manager'
});

employees.push({
    firstName: 'Jane',
    lastName: 'Doe',
    role: 'Developer'
});

.
.
.

employees.push({
    firstName: 'Mark',
    lastName: 'Jackson',
    role: 'Recruiter'
});
```

As you can see, creating the objects using object literals is not efficient, especially if the number of employees is large or if we need to store a lot of information about each employee, and here's where classes come in to save the day. Basically, we're going to create a blueprint for an employee and then generate objects from that blueprint:

```JavaScript
class Employee {
    constructor(firstName, lastName, role){
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
}

const employees = [];

employees.push(new Employee('John', 'Doe', 'Manager'));
employees.push(new Employee('Jane', 'Doe', 'Developer'));
employees.push(new Employee('Mark', 'Jackson', 'Recruiter'));
```

As you can see, our code is now much cleaner.

Now that we've discovered the utility of classes, let's go step by step and understand how to create them.

We use the `class` keyword to declare a class followed by the class name:

```JavaScript
class Employee {

}
```

Then we add a `constructor` which is the function that's going to get executed when we instantiate an object, it will create the object and set its properties. The constructor takes in parameters and sets the properties' values using the `this` keyword which refers to the newly created object. 

```JavaScript
class Employee {
    constructor(firstName, lastName, role){
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }
}
```

Now to create objects from the class, we use the `new` keyword followed by the class name and we pass in the parameters that are expected by the `constructor` function. 

```JavaScript
const john = new Employee('John', 'Doe', 'Manager');
```

We can also add methods to the class definition:

```JavaScript
class Employee {
    constructor(firstName, lastName, role){
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }

    checkIn(){
        console.log(`${this.firstName} ${this.lastName} has checked in.`);
    }

    checkOut(){
        console.log(`${this.firstName} ${this.lastName} has checked out.`);
    }
}
```

As we said, the `this` keyword inside the methods refers to the object instance.

Objects generated from classes can be manipulated the same way we did earlier:

```JavaScript
const jane = new Employee('Jane', 'Doe', 'Developer');
console.log(jane.lastName); // --> Doe

jane.lastName = 'Smith';
console.log(jane.lastName); // --> Smith
```

Classes can have `static` properties, which are properties that belong to the class, not to a specific object, they're also called **class properties**. 

Let's modify the Employee class to include a `static` property *nbEmployees* that's initialized at 0 and we increment it by 1 in the constructor, the constructor will be called each time we create an object so *nbEmployees* will hold the total number of employees:

```JavaScript
class Employee {
    static nbEmployees = 0;

    constructor(firstName, lastName, role){
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        Employee.nbEmployees++;
    }

    checkIn(){
        console.log(`${this.firstName} ${this.lastName} has checked in.`);
    }

    checkOut(){
        console.log(`${this.firstName} ${this.lastName} has checked out.`);
    }
}
```

_**Note:** We access `static` properties using the class name._

```JavaScript
const john = new Employee('John', 'Doe', 'Manager');
const jane = new Employee('Jane', 'Doe', 'Developer');

console.log(Employee.nbEmployees); // --> 2
```

In addition to `static` properties, we can also define `static` methods which are methods that belong to the class, they're also called **class methods**:

```JavaScript
class Employee {
    static nbEmployees = 0;

    static codeOfConduct(){
        console.log('All employees must be respectful to each other.');
    }

    constructor(firstName, lastName, role){
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        Employee.nbEmployees++;
    }

    checkIn(){
        console.log(`${this.firstName} ${this.lastName} has checked in.`);
    }

    checkOut(){
        console.log(`${this.firstName} ${this.lastName} has checked out.`);
    }
}
```

_**Note:** We access `static` methods using the class name._

```JavaScript
console.log(Employee.codeOfConduct());
// --> All employees must be respectful to each other.
```

We can also use **getters** and **setters** inside the class definition:

```JavaScript
class Employee {
    static nbEmployees = 0;

    static codeOfConduct(){
        console.log('All employees must be respectful to each other.');
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

    constructor(firstName, lastName, role){
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        Employee.nbEmployees++;
    }

    checkIn(){
        console.log(`${this.firstName} ${this.lastName} has checked in.`);
    }

    checkOut(){
        console.log(`${this.firstName} ${this.lastName} has checked out.`);
    }
}
```

```JavaScript
const manager = new Employee('John', 'Doe', 'Manager');

console.log(manager.fullName); // --> John Doe

manager.fullName = 'Jake Smith';

console.log(manager.fullName); // --> Jake Smith

console.log(manager.firstName); // --> Jake

console.log(manager.lastName); // --> Smith
```

## **Inheritance (ES6)**

Classes are very useful constructs, we've seen how they allow us to define blueprints from which we can generate objects. Now we'll explore a very powerful feature of JavaScript which is **inheritance**. 

Suppose we're creating an application for a high school and we need to define classes for students, teachers and supervisors:

```JavaScript
class Student {
    constructor(identityCardNumber, firstName, lastName, average){
        this.identityCardNumber = identityCardNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.average = average;
    }

    salute(){
        console.log(`Hello, I am ${this.firstName} ${this.lastName}.`);
    }

    study(){
        console.log('I am studying.');
    }
}

class Teacher {
    constructor(identityCardNumber, firstName, lastName, subject){
        this.identityCardNumber = identityCardNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
    }

    salute(){
        console.log(`Hello, I am ${this.firstName} ${this.lastName}.`);
    }

    teach(){
        console.log('I am teaching.');
    }
}

class Supervisor {
    constructor(identityCardNumber, firstName, lastName, shift){
        this.identityCardNumber = identityCardNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.shift = shift;
    }

    salute(){
        console.log(`Hello, I am ${this.firstName} ${this.lastName}.`);
    }

    supervise(){
        console.log('I am supervising.');
    }
}
```

Notice that the classes share properties and methods and we're repeating ourselves a lot which is bad practice in coding, here's where inheritance comes in, we can create a **super** class that's going to contain the shared properties and methods and then the **sub** classes will **inherit** from the **super** class and they will have access to all of its properties and methods.

If we think about the situation from a logical perspective, students, teachers and supervisors are all people and the properties they share are properties that any person can have. So we will create a **super** class called Person:

```JavaScript
class Person {
    constructor(identityCardNumber, firstName, lastName){
        this.identityCardNumber = identityCardNumber;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    salute(){
        console.log(`Hello, I am ${this.firstName} ${this.lastName}.`);
    }
}
```

Now to make the other classes **inherit** from this class, we use the `extends` keyword on class declarations:

```JavaScript
class Student extends Person {
    constructor(identityCardNumber, firstName, lastName, average){
        ...
    }

    study(){
        console.log('I am studying.');
    }
}

class Teacher extends Person {
    constructor(identityCardNumber, firstName, lastName, subject){
        ...
    }

    teach(){
        console.log('I am teaching.');
    }
}

class Supervisor extends Person {
    constructor(identityCardNumber, firstName, lastName, role){
        ...
    }

    supervise(){
        console.log('I am supervising.');
    }
}
```

Now we need a way to pass the values of identityCardNumber, firstName and lastName to the **super** class. To achieve that, inside the constructors of the **sub** classes we must start by calling the **super** class constructor using the `super` keyword and passing it the parameters that it expects:

```JavaScript
class Student extends Person {
    constructor(identityCardNumber, firstName, lastName, average){
        super(identityCardNumber, firstName, lastName);
        this.average = average;
    }

    study(){
        console.log('I am studying.');
    }
}

class Teacher extends Person {
    constructor(identityCardNumber, firstName, lastName, subject){
        super(identityCardNumber, firstName, lastName);
        this.subject = subject;
    }

    teach(){
        console.log('I am teaching.');
    }
}

class Supervisor extends Person {
    constructor(identityCardNumber, firstName, lastName, role){
        super(identityCardNumber, firstName, lastName);
        this.role = role;
    }

    supervise(){
        console.log('I am supervising.');
    }
}
```

Now let's put one of our classes to use:

```JavaScript
const jerry = new Teacher(64932487, 'Jerry', 'Doe', 'Physics');


console.log(jerry.identityCardNumber); // --> 64932487
console.log(jerry.firstName); // --> Jerry
console.log(jerry.lastName); // --> Doe
console.log(jerry.subject); // --> 12

jerry.salute(); // --> Hello, I am Jerry Doe.
jarry.teach(); // --> I am studying.
```

As you can see, the object we created contains all the properties from the `Teacher` class and the `Person` class that it **inherits** from. 

Inheritance has much more complex use cases but the basic premise is the same, we have a **super** class and **sub** classes that **inherit** all its properties and methods.

Properties and methods in the **super** class can be **overridden** in the **sub** classes. In the following example we override the `salute()` method in the `Student` **sub** class:

```JavaScript
class Student extends Person {
    constructor(identityCardNumber, firstName, lastName, average){
        super(identityCardNumber, firstName, lastName);
        this.average = average;
    }

    study(){
        console.log('I am studying.');
    }

    salute(){
        console.log(`Hello, I am ${this.firstName} ${this.lastname} and I am a student.`);
    }
}
```

Now when we create a `Student` object and call the `salute()` method, the implementation defined in the `Student` class is the one that gets executed because it overrode the **super** class implementation:

```JavaScript
const luke = new Student(68932157, 'Luke', 'Stoltman', 15);

luke.salute(); // --> Hello, I am Luke Stoltman and I am a student.
```

## **Constructor Functions & Prototypes**

I hate to break it to you, but the syntax we used above to create classes is just an illusion. Yes, in fact, under the hood JavaScript has no such thing as classes like other programming languages because it is a **prototype-based** programming language. 

In JavaScript, object oriented programming is done using **prototypes** and **constructor functions** but since so many programmers are more familiar with class based object orientation, class based syntax was introduced in **ES6** which made writing object oriented code in JavaScript much easier, but it is just **syntactic sugar** that aims to make programmers' lives easier and everything under the hood is still done with **prototypes** and **constructor functions**.

Don't worry, you can just use the class based syntax and write object oriented code similar to other languages, but I believe as a JavaScript developer you must at least be aware of the intricacies of the language.

Since this is an advanced JavaScript topic, we won't dive too deep and we'll just look at a basic example of **prototype-based object orientation**.

Let's retake the example of the `Employee` class:

```JavaScript
class Employee {
    constructor(firstName, lastName, role){
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
    }

    checkIn(){
        console.log(`${this.firstName} ${this.lastName} has checked in.`);
    }

    checkOut(){
        console.log(`${this.firstName} ${this.lastName} has checked out.`);
    }
}
```

In **prototype-based object orientation**, objects are generated from a **constructor function** that has the class name and does the same thing that the constructor of the class does, it creates a new object and sets its properties. So the above class's constructor would be replaced with the following **constructor function**:

```JavaScript
function Employee(firstName, lastName, role){
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
}
```

Each **constructor function** has its own **prototype** which is a JavaScript object that serves as a lookup object that stores the properties and methods shared by the created objects. If we try to access a property or a method inside an object but the object doesn't have it, the object will lookup the **prototype** to see if it has it.

So let's set the methods inside the **constructor function**'s **prototype**:

```JavaScript
Employee.prototype.checkIn = function(){
    console.log(`${this.firstName} ${this.lastName} has checked in.`);
}

Employee.prototype.checkOut = function(){
    console.log(`${this.firstName} ${this.lastName} has checked out.`);
}
```

Now we can create objects from the **constructor function** just like we did with the class based syntax:

```JavaScript
const john = new Employee('John', 'Doe', 'Manager');

john.checkIn(); // --> John Doe has checked in.
john.checkOut(); // --> John Doe has checked out.
```

The `checkIn()` and `checkOut` methods are not part of the created objects, when we tried to access them, the objects did a lookup on the prototype to see if it has them and it did so they were executed.

## **Clarifications**

* **`var` vs `let`**:

    `var` and `let` are both used to declare variables that can have their values changed over time. The difference between them is: 

    `var` is **function scoped** which means a variable declared with `var` only exists within the function it was declared in and if it wasn't declared inside any function, it will exist globally.

    ```JavaScript
    function displayRandom(){
        var rand = Math.random();
        console.log(rand);

        // rand only exists within this function.
    }

    // rand doesn't exist here.
    ```

    `let` is **block scoped**, which means a variable declared with `let` only exists within the block it was declared in and if it wasn't declared inside any block, it will exist globally. (A block is a bunch of code enclosed in brackets `{}`).

    ```JavaScript
    for(let i = 0; i < 10; i++){
        console.log(i);

        // i only exists within this block.
    }

    // i doesn't exist here.
    ```

## **Conslusion**

Over the years, JavaScript has grown to be a powerful and versatile language that is widely used by developers in a plethora of fields despite its rough origins. And with each new ES standard, it just keeps getting better. 

This was a gentle introduction to JavaScript programming in which we laid the foundation and learned the fundamentals of the language. It is by no means an exhaustive guide, but it serves as a solid first step into the JavaScript world.