const whichFood = Money => {
    // let food;
    // if (Money > 100) {
    //     food = 'birryani'
    // } else {
    //     food = 'tea'
    // }
    // return food;

    //ternaray
    let food = Money > 100 ? 'biryani' : 'tea' // syntax  : condition ? true value : false value;
    return food;
};
const foods = whichFood(90);
console.log(foods);


// const ifActive = active => {
//     // if (active === true) {
//     //     user = "active";
//     // } else {
//     //     user = 'unactive';
//     // }
//     let user = active ? 'active' : 'inactive';
//     return user;
// }
// const activeOrNot = ifActive(true);
// console.log(user);

// const active = true;
// active ? displayTrure(console.log('active')) : hideUser(console.log('hide'));

// const check = displayTrure()
// console.log(active);


// string to number 
    const number  =  +'45'; // place a '+' sign before the string;
    // console.log(typeof(number));

// number to string 
const NumText = 45+''; // add a empty string(+'')  after the number;
console.log(typeof(NumText));


// optional value in funtion 
const add = (num1, num2= 5) =>{
    // num2= 5;
    return sum = num1 + num2;
}
const adds = add(5);
console.log(sum);