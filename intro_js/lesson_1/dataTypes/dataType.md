# Types of Data Types

- Primitive types
- Dynamic types

## Primitive data types

- string
- number
- boolean
- nullable
- Symbol

## Strings

what are Strings: zero or more characters written inside quotes.
example of strings.

- 'single quotes'--> 13 characters
- "double quotes" --> 13 characters
- "" --> 0 character is the same as '' --> 0 character

## JavaScript Variables

variable: a named storage location that holds a value which can be changed during the progams execution.
It is used to *store data values*

JS uses the keywords *var*, *let* and *const*. to declare variables.
An Equal Sign is used to *assign values* to variables

looks at the examples below:

```js
let foodType = "vegetables";
let maximumAge= "30";
```

in the above example foodType and maximumAge is defined as a variables. then asigned (given) their values eg "vegetables" and "30" respectively.

### JavaScript Operators

JS uses *arithmetic operations* (+ - * /) to compute values.
example `"firstName" + "lastName"`

## JavaScript Keywords

Javascript *keywords* are used to identify actions to be performed
the **let** keyword tells the browser to create variables that can be changed
while **const** keyword tells the browser to create a variable that is constant
we also have *var* keyword but is outdated because it have some side-effects

```js
let firstName, lastName;
firstName = "Mary";
lastName = "John"
```

### JavaScript Expressions

An expression is a combination of keyword, variables, operators and value.
The combination of these equal to what we call expression because it produces a value.
eg "Mary" + " " + "John", evalutes to "Mary John"

--

JavaScript is Case sensitive, all javaScript identifiers are *case sensitive*.
this means Js does not interpret *Let* or *LET* as the keyword *let*

### JavaScript and Camel Case

historically, Programmers have used different ways of joining multiple words into one variable name:
type of case

- Underscore: mostly used in python eg **first_name**.
- Upper Camel or Pascal Case: eg **FirstName**.
- Lower or Camel Case: eg *lastName*

JavaScript programmers tend to use camel case that starts with a lowercase letter:
eg firstName, masterCard, myFood.

### Exercise

What is the a corrent syntax for assigning a value to a variable

- x : "hi"
- x = "hi"
- x == "hi"
- x -> "hi"

which one is Not a legal variable name in Js?

- FirstName
- $FirstName
- _FirstName
- -FirstName
- firstName

JavaScript variable names are case in-sensitive, Meaning name is the  same as NAME.

- true or false

JavaScript keyword *let* is used to declare a constant variable?

- true or false

What type of case does JavaScript developer uses?

what type of case does Python developer uses?

write 4 Expressions with the operator **+**.

## Escape Characters

Because strings must be written within quotes, JavaScript will misunderstand this string:

```js
let text = "We are the so-called "vikings" from the north.";
```

The String will be chopped to "we are the so-called".

to solve this problem, you can use an **backslash escape character**.