// elementi da selezionare
const bottone = document.querySelector(".fa-bars");
const bottone2 = document.querySelector(".fa-times");
const menu = document.querySelector(".hamburger-menu");


// click su bars e il menù appare
bottone.addEventListener("click", function(){
    menu.classList.add ("active");
});

// click sulla X e il menù scompare 
bottone2.addEventListener("click", function(){
    menu.classList.remove ("active");
});

