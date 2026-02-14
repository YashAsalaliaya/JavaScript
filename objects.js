// Objects vs Array
// Objects when you want to show all data based on one entity (ek j entity mate all data jota hoy) (ex. one user data)
// Array -- when you want to show entity (ex. all users)
// let user_data = [{name:"abc1", email: "test@gmail.com"}, {name:"def"}, {name "abc1"}, {name: "ABC"}]I


// create
// varabile = {}
// key: value --> key-value sturcture
let user = {
    name: "Test",
    email: "test@gmail.com",
    roll_no: 70
};

// access (dot vs square notation)
// variable_name.key;
user.name;
user.email;

 
// user.first-name;
// variable_name['key'];
// user['name']
// user[name]
let demo = "name";
user [demo]; 
// --> convert into name (demo = 'name') --> output: abc

// Nesting and Deep Access
const user1 = {
    name :"test",
    address: {
        city: "Surat",
        pin: 395009,
        locations: {
            lat: 24.2,
            lng: 77.4,
        },
    },
    email: "test@gmail.com",
}; // -- nested object
user1.address.locations.lat; // --> Deep Access
// user1.address.location.lng;

// object destructuring:
let { lat, lng } = user1.address.locations;
let { lat: locations} = user1.address.locations;
// destructure and resume variable name 

let demo1 = {
    first_name: "Demo",
    last_name: "User",
    age: 45,
    email: "demo@user.com"
};

// Looping
// for (variable name in object_name){}
for (const key in demo1) {
    console.log(key);
    // obj.key --> not working
    console.log(demo1[key]);
    // console.log(key, ":", demo1[key]) -- log whole object
}

// Copying objects : Spred, object.assign, deep clone
// Spred
// let user_data = {...demo};
let user_data = {gender: "Male", ...demo}  // add key-value and copy object
// Use case: State update
// const user = {
//  name: "Amit",
//  age: 30
// };

// const updatedUser = {
//  ...user,
//  age: 31
// };

// console.log(updatedUser);

// object.assing -- copy and add keys-value
let user_data_assign = Object.assign({}, demo); // - nothing will be add just copy
let user_data_assign1 = Object.assign({phone_number:7894567894}, demo); // - add and copy
// Use case: Default settings + user settings merge
// const defaultSettings = {
// theme: "light",
// language: "en"
// };

// const userSettings = {
// theme: "dark"
// };

// const finalSettings = object.assign({}, defaultSettings, userSettingsd);
// console.log(finalSettings);

// object.assign vs spred
// Object.assign() -- Method -- Es5 old version, less used 
// Spred -- oprator -- state updated, most used in react application ,clean code,