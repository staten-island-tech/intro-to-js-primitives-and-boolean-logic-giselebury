/* let string = 'I am a string';
let sentence = 'Hello Angel ' + 'and Vicky';
let combine = string + sentence */
/* 
let student = 'Sandra';
let student2 = 'Gia';
let courseName = 'AP CSP';
let teacherName = 'Whalen';
let sentence = 
    student +
     ' and ' + 
     student2 +
      ' are taking ' +
       courseName +
        ' with ' +
         teacherName;

// use back tics next to 1, doesn't need spaces
let betterSentence = `${student} and ${student2} are taking ${courseName} with ${teacherName} next year`; */

///Numbers and Integers
/* let year = 2020;
let nextYear = year + 1;
let past = year / 2;
let future = year * 2;

 */

 ///Booleans
/*  let trueStatement = true; */
 
 /////Null and undefined
 //let richard;

 //Boolean Logic or if/else
 //let age = 17;
 //let baoSquared = 'Bao Bao';
 //console.log(baoSquared === 'bao Bao');
 //console.log(age == '17');
/* 
 let age = 19;
 if(age < 18){
     console.log('you are a child');
 } else if(age == 18){
     console.log('happy birth');
 } else{
     console.log('you are over 18');
 }
 */

 //red, green, yellow
/* let light = 'yellow';
 if(light === 'green'){
     console.log('go');
 } else if(light === 'yellow'){
     console.log('caution!');
 } else{
     console.log('stop');
 }
  */


 //Kristy and Bao Bao are making coffee. If one of them is lactose intolerant than
//they should get milk and almond milk. If both of them are lactose intolerant then
//they will only get almond milk. Otherwise they will only get milk for their coffee.
/* let kristyIntolerant = true;
let baoBaoIntolerant = false;

if(kristyIntolerant === true && baoBaoIntolerant === true){
    console.log('get almond milk')
} else if(kristyIntolerant === true || baoBaoIntolerant === true){
    console.log('get milk and almond milk')
} else{
    console.log('get milk')
}

//cupcake challenge
let temperature = 71;

if(temperature < 68){
    console.log('temperature is too cold');
} else if(temperature >= 68 && temperature <= 72){
    console.log('temperature is perfect');
} else if(temperature >= 73 && temperature <= 76){
    console.log('temprature is warm');
} else {
    console.log('temperature is too hot');
} */

/* function test() {
    console.log('Im a function');
}
test();
 */

/*  const add = function(x,y){  ///cannot redefine const 
    return x + y;   //return ends the function
 }

console.log(add(10,20)); */

/* const hello = function(){
    console.log('Hello');
};
const bye = function(){
    console.log('Bye');
};
const hiBye = function(){
    hello();
    bye();
    hello();
    bye();
};
hiBye(); */

//const name = 'Thurushi'; // global variable or global space

/* function displayName(){
    const name = 'Kelly';  //local or function scope, call variable in function
    function sun(){
        const name2 = 'Jacob';
        console.log(name2); //innter function has access to outer function
    }
    return sun();
}
displayName(); */

/* function displayName(){
    const name = 'Kelly';  
    function sun(){
        console.log(name); 
    }
    return sun;
}
const myFunc = displayName();
myFunc();
//closure */

///Arrays

/* const names = ['Aarthi', 'Vicky', 'Vincent', 'Doyle', 'Kelly'];
names.forEach(el => console.log(el)); */

/* ///spread operator
const numbers = [1, 2, 3];
const add = function(x, y, z){
    return x + y + z;
};
console.log(add(...numbers)); */
/* 
let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa",
"Richard"];
//Using the above array filter out all students whose names contain
//less than 5 characters
const newArr = students.filter(students => students.length > 5);
console.log(newArr);

//Using the above array check to see if the array “includes” “junshen”
const includes = students.includes('junshen');
console.log(includes);
//Write a seperate function to check if “Alan” or “Savva” were included
//in “some” of the array
const some = (students) => students === 'Alan' || 'Savva';
console.log(students.some(some));
//USE MDN to find the appropriate array methods */

///objects
/* const Riya = {
    name : 'Riya',
    dob: 2003,
    graduted: false,
    age: function() {
        console.log(this);
        return 2020 - this.dob;
    }
};
 */
//with an arrow function: =>, don't need to use return

/* const homer = {
    name: 'Homer',
    age: 32,
    family:{
        wife:{
            name: 'Marge',
            age: 32,
        },
        son:{
            name: 'Bart',
            age: 10
        }
    },
    pets: ['cat', 'dog']
};

homer.family.daughter = {
    name: 'Lisa',
    age: 8
}; */

///destructuring
const Riya = {
    name : 'Riya',
    dob: 2003,
    graduted: false,
    age: function() {
        console.log(this);
        return 2020 - this.dob;
    }
};

/* const { name,age } = Riya; */

/* const Angel = Riya; /// this is anot a COPY it is a reference to
Angel.name = 'Angel'; */

const Angel = {}
Angel.dob = Riya.dob;