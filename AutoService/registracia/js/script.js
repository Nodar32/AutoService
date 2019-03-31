// смена авторизации на регистрацию
var registr = document.querySelector(".registr");
var login = document.querySelector(".login");
var front = document.querySelector(".front");
var back = document.querySelector(".back");
registr.onclick = function () {
    front.style.transform = "rotateY(180deg)";
    back.style.transform = "rotateY(360deg)";

}
login.onclick = function () {
    front.style.transform = "rotateY(0deg)";
    back.style.transform = "rotateY(180deg)";

}
// Получение доступа к полям ввода и кнопкам входа/регистрации
var textbox = document.querySelectorAll(".textbox");
var submit = document.querySelectorAll(".submit");
// Активация кнопки авторизации
setInterval(function(){
    var emailValue = textbox[0].value;
    var passwordValue = textbox[1].value;
    if(emailValue!='' && passwordValue!='')
    {
        submit[0].style.backgroundColor="red";
        submit[0].style.cursor="pointer";
        submit[0].removeAttribute("disabled");
    }
    
    else if(emailValue=='' || passwordValue=='')
    {
        submit[0].style.backgroundColor="#ccc";
    }
    


}, 1000)
// Активация кнопки регистрации
setInterval(function(){
    var regemailValue = textbox[2].value;
    var regpasswordValue = textbox[3].value;
    var regforgotpasswordValue = textbox[4].value;
    if(regemailValue!='' && regpasswordValue!='' && regforgotpasswordValue!='')
    {
        submit[1].style.backgroundColor="red";
        submit[1].style.cursor="pointer";
        submit[1].removeAttribute("disabled");
    }
    
    else if(regemailValue!=='' || regpasswordValue=='' || regforgotpasswordValue=='')
    {
        submit[1].style.backgroundColor="#ccc";
    
    }


}, 1000)
