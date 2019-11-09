console.log("test")

//get input 
    // length: 8-128
    // confirms: special, numbers, lowercase, uppercase
var characters =[];//initialize empty array
var pwdNumbers =[];
var pwdLowercase =[];
var pwdUppercase =[];
console.log("1",characters)





function generatePassword () {

    console.log("generatePassword")
    var passLength= prompt("How long is your password gonna be?")//TODO: input validation
console.log("passLength",passLength)
console.log( typeof passLength)//TODO change string to number parseInt()

if (passLength < 8) {
    alert("Password length must be at least 8 characters long");
}
else if (passLength > 128) {
    alert("Password length cannot be longer than 128 characters"); 
}

console.log("passLength " + passLength)

if(passLength){
    var special= confirm("do you want special characters?");//return boolean
        if(special){
            // add special characters to the character array
            var specialChars=["!", "@", "<", ">", "$", "?", "&", "*", "%"];
            characters= characters.concat(specialChars);
        }
        console.log("2",characters)
        //numbers
        var numbers= confirm("do you want numbers?");
        if(numbers){
            var addNumbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            pwdNumbers= pwdNumbers.concat(addNumbers);
        }
        //lowercase
        var lowercase= confirm("do you want lowercase letters?");
        if(lowercase){
            var addLowercase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            pwdLowercase= pwdLowercase.concat(addLowercase);
            console.log("1", pwdLowercase);
        }
        //uppercase
        var uppercase= confirm("do you want uppercase letters?");
        if(uppercase){
            var addUppercase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            pwdUppercase= pwdUppercase.concat(addUppercase);
            console.log("2", pwdUppercase);
        }
        //create the password
        let password=""
        // for loop for number of characters
        for(let i =0; i<passLength; i++){
            //get character from character array via random number
            let random= Math.floor(Math.random()*characters.length)
            console.log(random)
            console.log(characters[random])
            password+= characters[random]
            //password=password+ whatever

        }
        populateBox(password);

        }

}



console.log("password",password)

//copy to clipboard
function copyPassword(){
    
    document.getElementById("password").select();
    
    document.execCommand("Copy");
    
    alert("Password has been copied");

}

function populateBox(generatedPassword){
    var passwordBox = document.getElementById("password");
    console.log(passwordBox)
    passwordBox.innerHTML = generatedPassword
    
}