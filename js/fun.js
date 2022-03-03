
const allLession = ["Bern-Dütsch", "The Whistle Language", "Click Language", 
"Chewbaca", "Mime Language", "Sign Language", "Horse Whispering", "Telepathic Communication",
"Dog Language", "Martian", "Reto Romanisch", "Gang-Signs"

];
window.scrollTo({ top: 0, behavior: 'smooth' });

var audio = new Audio("/prr2.mp3");
      audio.play();

function SetStorage()
{
    localStorage.setItem("un", document.getElementById("usrnm").value);
    localStorage.setItem("pw", document.getElementById("pwd").value);
    localStorage.setItem("frst", document.getElementById("frstnm").value);
    localStorage.setItem("fmly", document.getElementById("fmlynm").value);
    localStorage.setItem("fulladrs", document.getElementById("adrs").value);
    localStorage.setItem("tel", document.getElementById("tel").value);
    localStorage.setItem("email", document.getElementById("email").value);

    

};


function GoToBookingPage(lessonNumber)
{
    console.log(lessonNumber);
    localStorage.setItem("lesson", lessonNumber);
    window.history.pushState({urlPath:'/booking.html'},null,'/booking.html');
    location.reload();
    
};


function CheckStorage()
{
    if(localStorage.getItem("un") !== null)
    {
        GetFromStorage();
    }
};

//Login Page - Get Storage
function GetFromStorage()
{

    username  = localStorage.getItem("un");
    password = localStorage.getItem("pw");

};


//Booking Page On Send Input

function SendInput()
{
    var telefonNumber = document.getElementById("tel").value;
    var emailadress = document.getElementById("email").value;
    var password = document.getElementById("pwd").value;
    var confirmpassword = document.getElementById("confirmpwd").value;
    var requiredEmail = null;
    var requiredTel = null;
    var emailStatus = null;
    var telStatus = null;
    var quickEmailCheck = telefonNumber.toString().startsWith("07");
    SetStorage();
    if(emailadress !== null)
    {

        requiredEmail = true;
    }
    else
    {

        requiredEmail = false;
        alert("You have not yet entered an email address!")

    }

    if(telefonNumber !== null)
    {

        requiredTel = true;
    }
    else
    {

        requiredTel = false;
        alert("You have not yet entered an telefon number!")

    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailadress) == true)
    {
        emailStatus = true;
        
        
    }
    else
    {
        alert("You have entered an invalid email address!")
        emailStatus = false;

    }
    console.log(emailStatus);
    
    if(quickEmailCheck === true)
    {
        
        telStatus= true;
       
    }
    else
    {
        alert("You have entered an invalid telefon number! It must begin with 00417 or 07")
        telStatus = false;

    }
    console.log(telStatus);
    if(confirmpassword == password && emailStatus === true && telStatus === true && requiredEmail === true && requiredTel === true)
    {
        
        
        window.history.pushState(null,null,'confirm.html');
    }
    else
    {

        alert("Password are not the same");
    }

 

};


function SendConfirm()
{

    var toggleConfetti = localStorage.setItem("showconf", true);
    
    console.log(toggleConfetti);
    //alert("Booking confirmed");
    window.history.pushState(null,null,'index.html');
    

 

};

function LoadBookingPage()
{
    document.getElementById("lessons").selectedIndex = localStorage.getItem("lesson");
    document.getElementById("usrnm").value = localStorage.getItem("un");
    document.getElementById("frstnm").value = localStorage.getItem("frst");
    document.getElementById("fmlynm").value = localStorage.getItem("fmly");
    document.getElementById("adrs").value = localStorage.getItem("fulladrs");
    document.getElementById("tel").value = localStorage.getItem("tel");
    document.getElementById("email").value = localStorage.getItem("email");

}


//Confirm Page - Load All Fields
function LoadConfirmPage()
{
    var LessonNumber = localStorage.getItem("lesson");
    document.getElementById("conf_lesson").innerText = "Lesson: " + allLession[LessonNumber];
    document.getElementById("conf_usrnm").innerText = "Username: " + localStorage.getItem("un");
    document.getElementById("conf_frstname").innerText = "First Name: " + localStorage.getItem("frst");
    document.getElementById("conf_fmlynm").innerText = "Family Name: " + localStorage.getItem("fmly");
    document.getElementById("conf_fulladress").innerText = "Full Adress: " + localStorage.getItem("fulladrs");
    document.getElementById("conf_tel").innerText = "Telefon Nr: " + localStorage.getItem("tel");
    document.getElementById("conf_email").innerText = "E-Mail: " + localStorage.getItem("email");
   

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


 
