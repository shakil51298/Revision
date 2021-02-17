//JSON
const person = {
    name: 'Abdul Kuddus',
    age: 25,
    salary: 2656666,
    fatherName: 'shakil khan'
}

// console.log(JSON.stringify(person)); //object convert to json

// API fetch
// fetch('url')
//     .then(res => res.json)
//     .then(data => console.log(data));

//JSON convert back and fort
const data = JSON.stringify(person);    // parse json
const dataParsedd = JSON.parse(data);
console.log(dataParsedd.name);




//local Storage

localStorage.setItem('userId', 1245) 
localStorage.setItem('name',JSON.stringify(person))


//  season Storage

const storedPerson = localStorage.getItem('name')
const parsedValue = JSON.parse(storedPerson) 
console.log(parsedValue.name)

const keys = Object.keys(parsedValue);// get keys
console.log(keys);

const values = Object.values(parsedValue) // get values of object keys
console.log(values);