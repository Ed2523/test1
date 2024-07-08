//Pregunta 1.1
interface User {
  id: number;
  name: string;
  email?: string;
  role: "admin" | "user" | "guest";
}

const users: User[] = [
  { name: "Ed", role: "admin", id: 1 },
  { name: "Pedro", role: "admin", id: 2 },
  { name: "Oscar", role: "admin", id: 3 },
  { name: "Lupe", role: "guest", id: 4 },
  { name: "Marco", role: "guest", id: 5 },
];
//Pregunta 1.2
const getAdmins = (users: User[], role: "admin") => {
  return users.filter((user) => user.role === role);
};

const adminList = getAdmins(users, "admin");

console.log(adminList);

//Pregunta 2.1
/**
Types vs interfaces
 Both are used to specify the type of data of properties and methods of 
 an object, the main difference is that type can be used with primitive values, unions, tuples 
 and interfaces not
 */

//Type example
type PersonType = {
  name: string;
  age: number;
};

let person1: PersonType = {
  name: "Ed",
  age: 30,
};

//Interface example
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const ed = new Person(1, "Ed Chávez");

//Pregunta 2.2
const combineObjects = <T, U>(Object1: T, Object2: U): T & U => ({
  ...Object1,
  ...Object2,
});

let object1 = { name: "ed", age: 30 };
let Object2 = { sex: "male", havePets: true };

let newCombinedObject = combineObjects(object1, Object2);
console.log(newCombinedObject);
