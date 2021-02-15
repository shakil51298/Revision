// destructuring
const numbers = [54, 92];
const [x, y] = [54, 92];
// const x = numbers[0];
// const y = numbers[1];
console.log(x, y);


const names = ['shakil', 'azad', 'shazzad', 'shakib'];
const [firstPerson, secondPerson] = names;
console.log('firstPerson: ', firstPerson, ',', 'secondPerson: ', secondPerson);


// return inside an Array
function boxify(num1) {
    return [num1, num1 + 5]
}
const box = boxify(8);
console.log(box);

const [box1, box2] = boxify(8);
console.log(box1, box2);




// Object Destructuring

const products = {
    name: 'laptop',
    price: 25
}
const {
    id,
    name,
    price
} = {
    id: 5,
    name: 'laptop',
    price: 25
}
console.log(id, name, price);


// create object shortCut

const one = 25;
const two = 35;
const obj = {
    one: one,
    two: two
};
console.log(obj); //same

const object = {
    one,
    two
}
console.log(object); // same


//  three dots ...              if need to add new element in decleared array
const fruits = ['mango', 'banana','pinapple'];
const fruitsList = [...fruits,'orange'];
console.log(fruitsList);


fruits.push(56);
console.log(fruits);