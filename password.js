
//questions

var askQuestion0 = confirm("do you want a random password?");
var askQuestion1 = confirm("A password that include a uppercase?");
var askQuestion2 = confirm("A password that Include a number?");
var askQuestion3 = confirm("A password that include a lowerase?");
var askQuestion4= confirm("A password that Include a special character?");
var askQuestion5 = confirm("click on generate password");

// my variable 
var generatePassword = "0123456789!@#$%^&**()_-+[]:'.?ABCDEFGHIJKLMNOPKQRSTUVWXYZabcdefghijklmnopkqrstuvxwyz";


// my function
function generate() {
    var password='';
    for (var index = 1; index <= 10; index++) {
        var c = Math.floor((Math.random()*generatePassword.length)+0);
        password+= generatePassword.charAt(c);
    }
    alert(password);
    document.getElementById('pass').innerHTML=`<h1>Password: ${password}</h1>`; 
}
