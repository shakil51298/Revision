const Products = [{
        id: 541,
        name: 'laptop',
        price: 500
    },
    {
        id: 514,
        name: 'phone',
        price: 200
    },
    {
        id: 5140,
        name: 'tablate',
        price: 250
    },
    {
        id: 54,
        name: 'watch',
        price: 200
    }
];

// array: map
const Names = Products.map(productName => productName.name);
const Prices = Products.map(productPrice => productPrice.price);
const Pids = Products.map(productId => {
    return productId.id; //if write multiline then i should specially write return
});
console.log('names:', Names);
console.log('Prices:', Prices);
console.log('pid:', Pids);

// array : forEach
Products.forEach(product => console.log('name', product.name));
Products.forEach(product => console.log('price:', product.price));
Products.forEach(product => console.log('id:', product.id));


// filter:

const cheaper = Products.filter(product => product.price < 400); //who compleate the condition;
const remaining = Products.filter(product => product.id != 5140); //who compleate the condition;
console.log('Cheaper: ',cheaper);
console.log('remaining: ',remaining);

//find 

const hasWatch = Products.find(product => product.name === 'watch');
console.log('has: ',hasWatch);


// reduce

// includes

// push/ pop/ leagth/ indexOf