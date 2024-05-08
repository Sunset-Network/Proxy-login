let username = "sunset"; // edit txt in "" to change username
let password = "sunset"; // edit txt in "" to change password

document.getElementById("submitbtn").onclick = function(){
    let usernameInput = document.getElementById("usernameinpt").value; 
    let passwordInput = document.getElementById("passwordinpt").value; 
    
    if (usernameInput === username && passwordInput === password){
        window.location.replace("index.html"); // link to wtv page u want the succseful login to go to
    } else {
        // Handle incorrect username or password here
        alert("Incorrect username or password"); // alert msg
    }
}