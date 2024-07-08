var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var users = [
    { name: "Ed", role: "admin", id: 1 },
    { name: "Pedro", role: "admin", id: 2 },
    { name: "Oscar", role: "admin", id: 3 },
    { name: "Lupe", role: "guest", id: 4 },
    { name: "Marco", role: "guest", id: 5 },
];
//Pregunta 1.2
var getAdmins = function (users, role) {
    return users.filter(function (user) { return user.role === role; });
};
var adminList = getAdmins(users, "admin");
console.log(adminList);
var person1 = {
    name: "Ed",
    age: 30,
};
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered");
    };
    return Person;
}());
var ed = new Person(1, "Ed Chávez");
//Pregunta 2.2
var combineObjects = function (Object1, Object2) { return (__assign(__assign({}, Object1), Object2)); };
var object1 = { name: "ed", age: 30 };
var Object2 = { sex: "male", havePets: true };
var newCombinedObject = combineObjects(object1, Object2);
console.log(newCombinedObject);
