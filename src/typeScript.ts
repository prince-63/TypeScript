/**
 * declaring varibale in typescript
 */
// var a: number = 10;
// var userName: string = "Rajesh";
// let userStatus: boolean = true;
// let userAge: any = 30;

/**
 * enum: 
 * 1. enum is a keyword
 * 2. enum is used to declare a group of named constant
 */
// enum Status {
//     Active = 1,
//     InActive = 2,
//     Pending = 3
// }

// interface User {
//     id?: number;
//     name?: string;
//     age?: number;
//     status?: Status;
// }

// let userOne: User = {
//     id: 1,
//     name: "Rajesh",
//     age: 30,
//     status: Status.InActive
// }

/**
 * declaring interface in typescript
 */

// interface User {
//     id?: number;
//     name?: string;
//     age?: number;
//     status?: boolean;
// }

// let userOne: User = {
//     id: 1,
//     name: "Rajesh",
//     age: 30,
//     status: true
// }

// // write a comment
// function getUser(user: User): User {
//     const obj: User = {
//         id: 1,
//         name: "prince",
//         age: 18,
//         status: true
//     }
//     return obj;
// }

// const user: User = getUser(userOne);


/**
 * generics types
 */

// interface Contact {
//     id: number;
//     name: string;
// }

// interface infoUser {
//     id: number;
//     name: string;
//     printName?<infoUser>(): infoUser;
// }

// function clone<T, T1>(source: T1): T {
//     return Object.apply({}, source);
// }

// function printName<T>(){
//     return Object.apply({});
// }

// const a: Contact = { id: 1, name: "Prince" };

// const b = clone<Contact, infoUser>(a);

/**
 * Type assertion
 * 1. type assertion is a way to tell compiler about the type of a variable
 * 2. type assertion is like type casting in other languages
 * 3. type assertion is used when we know more about a type than typescript does
 * 4. type assertion is purely you telling the compiler that you know about the types
 * 5. type assertion does not change the type of the variable at runtime
 */

// type Age = number;

// let age: Age = 30;

// type User = {
//     id: number;
//     name: string;
//     age: number;
//     status: boolean;
// };

// let user: User = {
//     id: 1,
//     name: "John",
//     age: 30,
//     status: true
// };

