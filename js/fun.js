
const allLession = ["Bern-Dütsch", "The Whistle Language", "Click Language", "Chewbaca", "Mime Language", "Sign Language", "Horse Whispering"];

function SetStorage()
{
    localStorage.setItem("un", document.getElementById("usrnm").value);
    localStorage.setItem("pw", document.getElementById("pwd").value);
    localStorage.setItem("frst", document.getElementById("frstnm").value);
    localStorage.setItem("fmly", document.getElementById("fmlynm").value);
    localStorage.setItem("fulladrs", document.getElementById("adrs").value);
    localStorage.setItem("tel", document.getElementById("tel").value);
    localStorage.setItem("email", document.getElementById("email").value);


}

//Booking Page On Send Input

function SendInput()
{
  
    var password = document.getElementById("pwd").value;
    var confirmpassword = document.getElementById("confirmpwd").value;

    if(confirmpassword == password)
    {
        SetStorage();
        
        window.history.pushState(null,null,'confirm.html');
    }
    else
    {

        alert("Password are not the same");
    }

 

};

function SendConfirm()
{
    alert("Booking confirmed");

    window.history.pushState(null,null,'index.html');

 

};

//Login Page - Get Storage
function GetFromStorage()
{

    username  = localStorage.getItem("un");
    password = localStorage.getItem("pw");

};

//Confirm Page - Load All Fields
function LoadConfirmPage()
{
    document.getElementById("conf_usrnm").innerHTML = localStorage.getItem("un");
    document.getElementById("conf_pwd").innerHTML = localStorage.getItem("pw");
    document.getElementById("conf_frstname").innerHTML = localStorage.getItem("frst");
    document.getElementById("conf_fmlynm").innerHTML = localStorage.getItem("fmly");
    document.getElementById("conf_fulladress").innerHTML = localStorage.getItem("fulladrs");
    document.getElementById("conf_tel").innerHTML = localStorage.getItem("tel");
    document.getElementById("conf_email").innerHTML = localStorage.getItem("email");


}

//Login Page - Load Username
function LoadLoginPage()
{
    document.getElementById("log_usrnm").value = localStorage.getItem("un");


}

//Login - Check
function LogIn()
{
    CheckStorage();
    const log_username = document.getElementById("log_usrnm").value;
    const log_password = document.getElementById("log_pwd").value;
    
    if(log_username == username && log_password == password)
    {

        window.open('mainpage.html');

    
    }
    else if(log_username !== username)
    {

        alert("Wrong Username");

    }
    else if(log_password !== password)
    {

        alert("Wrong Password");

    }



};

//Check Storage on filled Input
function CheckStorage()
{
    if(localStorage.getItem("un") !== null)
    {
        GetFromStorage();
    }
};


