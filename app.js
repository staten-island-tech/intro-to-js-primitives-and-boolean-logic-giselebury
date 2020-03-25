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
let light = 'yellow';
 if(light == 'green'){
     console.log('go');
 } else if(light == 'yellow'){
     console.log('caution!');
 } else{
     console.log('stop');
 }
 


 //Kristy and Bao Bao are making coffee. If one of them is lactose intolerant than
//they should get milk and almond milk. If both of them are lactose intolerant then
//they will only get almond milk. Otherwise they will only get milk for their coffee.
let kristyIntolerant = true;
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
} else if(temperature > 76){
    console.log('temperature is too hot');
}