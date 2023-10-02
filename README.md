## TypeScript

#### Declaring Variables

```typescript
var a: number = 10;
var userName: string = "Rajesh";
let userStatus: boolean = true;
let userAge: any = 30;
```

In this section, we see examples of how to declare variables in TypeScript. The `var` keyword is used to declare a variable with a specific type, while the `let` keyword is used to declare a variable with an inferred type. The `any` keyword can be used to declare a variable that can hold any type of value.

#### Declaring Interfaces

```typescript
interface User {
    id?: number;
    name?: string;
    age?: number;
    status?: boolean;
}

let userOne: User = {
    id: 1,
    name: "Rajesh",
    age: 30,
    status: true,
};

function getUser(user: User): User {
    const obj: User = {
        id: 1,
        name: "prince",
        age: 18,
        status: true,
    };
    return obj;
}

const user: User = getUser(userOne);
```

-   The interface is called User and defines the shape of an object with four optional properties: id, which is a number; name, which is a string; age, which is a number; and status, which is a boolean.

-   The userOne variable is an object of type User with four properties: id is 1, name is "Rajesh", age is 30, and status is true.

-   The getUser function takes an object of type User as an argument and returns a new object of type User. The new object has four properties: id is 1, name is "prince", age is 18, and status is true.

-   The user variable is assigned the result of calling the getUser function with userOne as the argument. This creates a new object of type User that is a copy of the object returned by the getUser function.

#### Generics Types

```typescript
interface Contact {
    id: number;
    name: string;
}

interface infoUser {
    id: number;
    name: string;
    printName?<infoUser>(): infoUser;
}

function clone<T, T1>(source: T1): T {
    return Object.apply({}, source);
}

function printName<T>() {
    return Object.apply({});
}

const a: Contact = { id: 1, name: "Prince" };

const b = clone<Contact, infoUser>(a);
```

_In this expample we are using generic types, and functions_

-   The first section defines two interfaces: Contact and infoUser. Each interface has two properties: id, which is a number, and name, which is a string. The infoUser interface also has a property called printName, which is a function that takes no arguments and returns an object of type infoUser.

-   The second section defines two functions: clone and printName. The clone function takes two generic types, T and T1, and an argument of type T1. It returns a new object of type T that is a copy of the input object. The printName function takes one generic type, T, and returns an empty object of type T.

-   The final section creates two variables: a and b. a is an object of type Contact with an id of 1 and a name of "Prince". b is the result of calling the clone function with a as the input object and Contact and infoUser as the generic types. This creates a new object of type infoUser that is a copy of a.

#### type keyword

the type keyword is used to define a new type alias. A type alias is a new name for an existing type, which can make code more readable and easier to maintain.

_Here's an example of how to use the type keyword in TypeScript:_

```typescript
type Age = number;

let age: Age = 30;
```

In this example, we define a new type alias called Age that is an alias for the number type. We then create a variable age of type Age and assign it the value 30.

_We can also use the type keyword to define more complex type aliases. For example:_

```typescript
type User = {
    id: number;
    name: string;
    age: number;
    status: boolean;
};

let user: User = {
    id: 1,
    name: "John",
    age: 30,
    status: true,
};
```

<p style="font-family: Calibri">
In this example, we define a new type alias called User that is an object with four properties: id, name, age, and status. We then create a variable user of type User and assign it an object with values for each of the properties.
</p>

#### keyof

keyof is a TypeScript operator that returns a union type of all the property names of a given type. It allows you to access the keys of an object type as a union type.

```typescript
type Person = {
    name: string;
    age: number;
    email: string;
};

type PersonKeys = keyof Person; // 'name' | 'age' | 'email'

function getProperty<T, K extends keyof T>(obj: T, key: K) {
return obj[key];
}

const person: Person = {
name: "John",
age: 30,
email: "john@example.com"
};

const name = getProperty(person, 'name'); // string
const age = getProperty(person, 'age'); // number
const email = getProperty(person, 'email'); // string

```

In this example, we define a Person type with properties name, age, and email. We also define a PersonKeys type that is a union of all the property names of Person.

Then, we define a getProperty function that takes an object obj of type T and a key key of type K extends keyof T. The function returns the value of the property with the given key from the object.

Finally, we define a person object of type Person, and use the getProperty function to get the values of the name, age, and email properties of person.

#### Record

Record is a utility type that allows you to create a type with specified keys and values.


```typescript
type Person = {
    name: string;
    age: number;
    email: string;
};

type PersonKeys = keyof Person; // 'name' | 'age' | 'email'

const people: Record<PersonKeys, string> = {
    name: "John",
    age: "30", // Error: Type 'string' is not assignable to type 'number'
    email: "john@example.com"
};
```

In this example, we define a Person type with properties name, age, and email. We also define a PersonKeys type that is a union of all the property names of Person. 

Then, we define a people object of type  `Record<PersonKeys, string>` This means that people has keys of type PersonKeys (i.e. 'name', 'age', and 'email'), and values of type string.

Note that when we try to assign a string value to the age property, TypeScript throws an error because the age property is defined as a number in the Person type.

#### ignore this
<style>*{font-family: Calibri;}</style>
