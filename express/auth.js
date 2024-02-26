const bcrypt = require("bcrypt");
// // const saltRounds = 12;

function signup(username, email, password) {
    bcrypt.hash(password, 10, (err, hash) => {
        // console.log(hash);
        let user = {
            username,
            email,
            password : hash
        }
        console.log(user);
    });

}


function login(username, email, password) {
    let hash = '$2b$10$6lvvyh38u7zhoyPQTahchutwdSnJyd0N5P1EpLssOzw9bthFl8Zyy';
    let userName = 'ram';
    let userEmail = 'ram@gmail.com';
    bcrypt.compare(password, hash, (err, result) => {
        if(result && username == userName && email == userEmail) {
            console.log("Login successful");
        } else {
            console.log("Login Failed!");
        }
    });
}
module.exports = {
    signup,
    login
};
