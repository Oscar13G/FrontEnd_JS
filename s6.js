//Ejercicio 1 --> S6
//---------------------------------
/*
const Person = function (name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}

const john = new Person('John', 1990, 'Developer');
const mark = new Person('Mark', 1985, 'Teacher');
const jane = new Person('Jane', 1975, 'Designer');

console.log(john);
console.log(mark);
console.log(jane);
*/
//---------------------------------

//Ejercicio 2 --> S6
//---------------------------------
/*
const Person = function (name) {
    this.name = name;
}

const Developer = function (name, skills, yearsOfExperience) {
    Person.call(this, name);

    this.skills = skills;
    this.yearsOfExperience = yearsOfExperience;
}

const john = new Developer('John', 'JavaScript', 10);

console.log(john);
*/
//---------------------------------

//Ejercicio 3 --> S6
//---------------------------------
/*
const Person = function (name, birthYear, job) {
    this.name = name;
    this.birthYear = birthYear;
    this.job = job;
}
Person.prototype.calculateAge = function () {
    const today = new Date();
    const year = today.getFullYear();

    console.log(year - this.birthYear);
}
const john = new Person('John', 1990, 'Developer');
const mark = new Person('Mark', 1985, 'Teacher');
const jane = new Person('Jane', 1975, 'Designer');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john);
console.log(mark);
console.log(jane);
*/
//---------------------------------

//Reto 1 --> S6
//---------------------------------
/*
const Vec = function (x, y) {
    this.x = x;
    this.y = y;

    Vec.prototype.plus = function (vector) {
        let vecAns = new Vec(vector.x + this.x, vector.y + this.y);
        return vecAns;
    }
    Vec.prototype.minus = function (vector) {
        let vecAns = new Vec(this.x - vector.x, this.y - vector.y);
        return vecAns;
    }
    Vec.prototype.length = function () {
        let ans = 0;

        ans = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return ans;
    }
}
//  Pruebas
const vec1 = new Vec(1, 2);
const vec2 = new Vec(2, 3);

console.log(vec1.plus(vec2)); // Vec { x: 3, y: 5 }
console.log(vec1.minus(vec2)); // Vec { x: -1, y: -1 }
console.log(vec1.length()); // 2.23606797749979
*/
//---------------------------------

//Reto 2 --> S6
//---------------------------------
/*
const Group = function () {
    this.list = [];
}
Group.prototype.add = function(valor){
    if (this.has(valor) !== true)
        this.list.push(valor);
}
Group.prototype.has = function(valor){
    return this.list.includes(valor);
}
Group.from = function(array){
    let grupo = new Group();

    for (const valor of array)
        grupo.add(valor);
    return grupo;
}

//  Pruebas
const group = Group.from([1, 2, 3, 4, 5]);

console.log(group); // Group { members: [ 1, 2, 3, 4, 5 ] }
console.log(group.has(5)); // true
console.log(group.has(10)); // false
group.add(10);
console.log(group.has(10)); // true
*/
//---------------------------------

//Reto 3 --> S6
//---------------------------------
/*
const Triangle = function (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}
Triangle.prototype.getPerimeter = function(){
    return this.a + this.b + this.c;
}

const triangle = new Triangle(1, 2, 3);

console.log(triangle); // Triangle { a: 1, b: 2, c: 3 }
console.log(triangle.getPerimeter()); // 6 */
//---------------------------------