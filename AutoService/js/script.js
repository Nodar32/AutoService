/*Создаем переменные для работы с выпадающим меню */
var navbg = document.querySelector("#navbar");
var show = document.querySelector("#showMenu");
var hide = document.querySelector("#hideMenu");
/*дейсвие при нажатии кнопки показа меню */
show.onclick = function()
{
    navbar.style.display="block";
    show.style.display="none";
    hide.style.display="block";
}
/* дейсвие при нажатии на кнопку скрытия меню */
hide.onclick = function()
{
    navbar.style.display="none";
    hide.style.display="none";
    show.style.display="block";
}
/* Автослайдер */
var remSlider = document.querySelectorAll("#remSlider img");
var b = 0;
var k = 1;
var translate = 850;
setInterval(() => {
    if (k == 1) {
        for (f = 0; f < remSlider.length; f++) {
            remSlider[f].style.transform = "translateX(-" + translate + "px)";
        }
        translate = translate + 850;
        b = b + 1;
        if (b == remSlider.length - 1) {
            k = 2;

        }

    }
    else if (k == 2) {
        translate = translate - 850;
        for (f = remSlider.length - 1; f >= 0; f--) {
            remSlider[f].style.transform = "translateX(-" + translate + "px)";
        }
        b = b - 1;
        if (b < 0) {
            for (f = remSlider.length - 1; f >= 0; f--) {
                remSlider[f].style.transform = "translateX(-" + translate + "px)";
            }
            k = 1;
        }


    }
}, 4000);



/* информационный слайдер */
var infoSlider = document.querySelectorAll(".infoSlider"); /* Доступ к дивам с информацией */
var avatarList = document.querySelectorAll(".avatarList img"); /* Доступ к аватаркам */
var prevAvatar = document.querySelector("#prevAvatar"); /* Доступ к кнопке перехода на след. аватар */
var nextAvatar = document.querySelector("#nextAvatar"); /* Доступ к кнопке перехода на пред. аватар */

/*  задаем внешний вид первого аватара */
avatarList[0].style.outline = "2px solid red";
avatarList[0].style.opacity = "1";
infoSlider[0].style.display = "block";
var h = 0;
/* Действие при нажатии кнопки пред. аватара */
prevAvatar.onclick = function () {
    infoSlider[h].style.display = "none";
    avatarList[h].style.outline = "none";
    avatarList[h].style.opacity = "0.3";
    h = h - 1;
    if (h < 0) {
        h = infoSlider.length - 1;
    }
    infoSlider[h].style.display = "block";
    avatarList[h].style.outline = "2px solid red";
    avatarList[h].style.opacity = "1";
}
/* Действие при нажатии кнопки след. аватара*/
nextAvatar.onclick = function () {
    infoSlider[h].style.display = "none";
    avatarList[h].style.outline = "none";
    avatarList[h].style.opacity = "0.3";
    h = h + 1;
    if (h >= infoSlider.length) {
        h = 0;
    }
    infoSlider[h].style.display = "block";
    avatarList[h].style.outline = "2px solid red";
    avatarList[h].style.opacity = "1";

}
/* Прелоадер */
var body = document.querySelector("body");
var header = document.querySelector("header");
body.onload = function () {
    setTimeout(function () {
        header.style.top = "-100vh";
        header.style.opacity = "0.5";
    }, 400);

}





/* Кнопка вверх */
var vverx = document.querySelector("#vverx");

var marsec = document.querySelector("#marsec");
var home = document.querySelector("#home");

marsec.onmouseover = function () {
    vverx.style.opacity = "1";
    vverx.style.width = "70px";
    vverx.style.height = "60px";
    vverx.style.cursor = "pointer";

}

home.onmouseover = function () {
    vverx.style.opacity = "0";
    vverx.style.height = "5px";
    vverx.style.width = "70px";
}
vverx.onclick = function () {
    vverx.style.opacity = "0";
    vverx.style.height = "5px";
    vverx.style.width = "70px";
    vverx.style.cursor = "default";
}




/* Окно формы */
var zakaz = document.querySelector("#zakaz");
var otpravit = document.querySelector("form button");
var imgForm = document.querySelector(".pered1 img")
var imgClose = document.querySelector("form img")
var wrapper1 = document.querySelector(".wrapper1");
var pered1 = document.querySelector(".pered1");
var zad1 = document.querySelector(".zad1");
zakaz.onclick = function () {
    wrapper1.style.display = "block";
    setTimeout(() => {
        imgForm.style.height = "170px";
        imgForm.style.width = "240px";
    }, 4);
    setTimeout(() => {
        pered1.style.transform = "rotateY(180deg)";
        zad1.style.transform = "rotateY(360deg)";
    }, 400);


}
imgClose.onclick = function () {
    pered1.style.transform = "rotateY(360deg)";
    zad1.style.transform = "rotateY(180deg)";
    setTimeout(() => {
        imgForm.style.height = "2px";
        imgForm.style.width = "2px";
    }, 600);


}

/* счетчик */
var schetchik = document.querySelector("#schetchik");
var value = 0;
var time = setInterval(() => {
    value = value + 250;
    schetchik.innerHTML = value + "+";

    if (value == 10000)
        clearInterval(time);
}, 50)

 /* подсветка пунктов по секциям 

var sekcii = document.querySelectorAll(".podsvetka");
var punkti = document.querySelectorAll("#navbar li");

sekcii[0].onmouseover = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[0].style.color="red";
    
}
sekcii[1].onmouseover = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[1].style.color="red";
    
}
sekcii[2].onmouseover = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[2].style.color="red";
    
}
sekcii[3].onmouseover = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[3].style.color="red";
    
}
sekcii[4].onmouseover = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[4].style.color="red";
    
}
sekcii[5].onmouseover = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[5].style.color="red";
    
} 

punkti[0].onclick = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[0].style.color="red";

}
punkti[1].onclick = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[1].style.color="red";

}
punkti[2].onclick = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[2].style.color="red";

}
punkti[3].onclick = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[3].style.color="red";

}
punkti[4].onclick = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[4].style.color="red";

}
punkti[5].onclick = function () {
    for(var c=0;c<punkti.length;c++)
    punkti[c].style.color="white";
    punkti[5].style.color="red";

}
*/
