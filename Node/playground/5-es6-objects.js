//Object property shorthand

const name = "Phillip"
const userAge = 19

const user = {
    name,
    age: userAge,
    location: "Fremont, California"
}

//console.log(user)


//Object Destructuring

const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
}


// //const label = product.label
// //const stock = product.stock

// const {label:productLabel, stock, rating=5} = product 
// console.log(productLabel)
// console.log(stock)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)