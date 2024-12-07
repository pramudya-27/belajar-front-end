const user = {
    name : 'Dio', 
    age : 25,
    address : {
        street : 'Jln. H Selong',
        city : 'Jakarta'
    }
}

console.log(user.name); // Menggunakan dot
console.log(user['address'].street); // Menggunakan bracket'])

const {name, age, address} = user;
console.log(name); // Menggunakan destructuring
