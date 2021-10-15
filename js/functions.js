
//Prompt user for username and update element #greet with input
function promptUser(){
    let userName = prompt("Insert username: ");
    let userGreet = "Hello " + userName;
    document.getElementById("greet").innerHTML = userGreet;
}