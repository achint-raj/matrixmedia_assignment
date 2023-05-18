document.getElementById("registrationform").addEventListener("submit", function(event){
    event.preventDefault();

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

registerUser(username,password);
this.reset();
})
function registerUser(username,password){
console.log("Registering user:", username, password);
}
