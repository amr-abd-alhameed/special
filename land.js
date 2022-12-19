    // chec if there is a color in local storage
    let mainColor=localStorage.getItem("colorOption");
    if (mainColor !== null){
        document.documentElement.style.setProperty("--main-color",mainColor);
         // remove active class form colors list 
        document.querySelectorAll(".colorsList li").forEach((ele) => {

            ele.classList.remove("activeColor");
            
        // add active class for element that dataset === colorOption (local storage value)
         if (ele.dataset.color === mainColor) {
            // add active class
            ele.classList.add("activeColor");
        };
        });

    };
   
   // catching toggleMenu setting 
let toggleMenu = document.querySelector(".icon");
toggleMenu.onclick=function(){

    // add class fa-spin for rotation
    this.classList.toggle("fa-spin");

    // add class open for previwe the menu of setting
    document.querySelector(".settingBox").classList.toggle("open");

    };

// Change identity and colors
let chossenColor =document.querySelectorAll(".colorsList li");

// loop on itmes that we have choosen
chossenColor.forEach(li=>{

    // click on every color of list
    li.addEventListener("click",(e)=>{


        // set color in root color
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);

        // set color in local storage
        localStorage.setItem("colorOption",e.target.dataset.color);

        handleActive(e);
    }) ;   
});

// random background option
let backgroundOption = true ;

// make variable to control interval
let backgroundInterval ;

// chec if there is in local storge background item
let backgroundBackgroundItem = localStorage.getItem("backgroundOption");
// chec if random background of local storage is not empty
if (backgroundBackgroundItem !== null){
    console.log("no emptu")
}

//switch random background option
let chossenBackground =document.querySelectorAll(".setting button");
// loop on all background images
chossenBackground.forEach(button=>{

    // click on every button         
    button.addEventListener("click",(e)=>{
    
        // remove active class form all buttons
        handleActive(e); 
        

        if (e.target.dataset.background === "yes") {
                backgroundOption =true ;
                randomizeOption ()
                localStorage.setItem("backgroundOption",true);
        }else {
                backgroundOption =false ;
                clearInterval(backgroundInterval);
                localStorage.setItem("backgroundOption",false);

        }

    }) ;   
});


let perface = document.querySelector(".perface");
let imageArray = [ "01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];



// function to randomize img

function randomizeOption (){

    if (backgroundOption === true){

backgroundInterval = setInterval( ()=>{

            let randomNumber = Math.floor(Math.random() * imageArray.length);
            perface.style.backgroundImage='url("images/' +imageArray[randomNumber] + '")';
            
        },10000);
    }
};
randomizeOption ()

// skills selector
let skills = document. querySelector(".skill");

window.onscroll= function (){
     // skills offset top
let skillOffset=skills.offsetTop;

    // sills outter height 
    let skillsOutter = skills.offsetHeight;

    // window height
    let windowHeight =window.innerHeight;

    // window scroll top
    let windowScroll = window.pageYOffset;

    if (windowScroll > skillOffset + skillsOutter -windowHeight) {
        // sellect all elements to do loop
        let allSpans = document.querySelectorAll(".skill .skillBox span");

        allSpans.forEach(span => {
            span.style.width=span.dataset.prograss;
        });
    }
};

// creat popup with the image
let popup = document.querySelectorAll(".imagesBox img");
popup.forEach(img => {
    img.addEventListener("click",(e)=> {

        // Creat overlay Element
        let overlay = document.createElement("div");

        // Add class for overlay
        overlay.className = "popup-overlay";

        // Appent overlay to the body
        document.body.appendChild(overlay);

        // Creat the popup box
        let popupBox=document.createElement("div");

        // Add class for overlay
         popupBox.className = "popup-box";

         if (img.alt !== null) {

            let imageHeading = document.createElement("h3");
            let imageText = document.createTextNode(img.alt);
            imageHeading.appendChild(imageText);
            popupBox.appendChild(imageHeading);
        }

         // create image popup
         let imagePopup = document.createElement("img");

        // set src for image
        imagePopup.src = img.src;
        
        // Add image to popup box 
        popupBox.appendChild(imagePopup);

        // Add popup box to page
        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");
        let buttonText = document.createTextNode("x");
        closeButton.className = "close";
        closeButton.appendChild(buttonText);
        popupBox.appendChild(closeButton);
    })
});

document.addEventListener("click", function (e) {

    if (e.target.className == "close") {
        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
    }
});

// select elements 
const bullets = document.querySelectorAll(".navBullets .bullet");

// bullets.forEach(bullet => {

// bullet.addEventListener("click",(e) => {

// document.querySelector(e.target.dataset.section).scrollIntoView({
//     behavior:"smooth"
// });
// });
// });

// select links 
const links = document.querySelectorAll("nav ul li a");

// links.forEach(link => {

// link.addEventListener("click",(e) => {
// e.preventDefault();
// document.querySelector(e.target.dataset.section).scrollIntoView({
//     behavior:"smooth"
// });
// });
// });

function scrollTo (element) {
    element.forEach(ele => {

        ele.addEventListener("click",(e) => {
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:"smooth"
        });
        });
        });
};

scrollTo(bullets);
scrollTo(links);

// function handle active class
function handleActive (ev) {

            // remove active class form all children 
            ev.target.parentElement.querySelectorAll(".activeColor").forEach((ele) => {

                ele.classList.remove("activeColor");
            });
            
            // add active class on target
            ev.target.classList.add("activeColor");
}

// show or hide bullets 
let bulletsvisiblity = document.querySelectorAll(".ShowBullets button");
let navvy=document.querySelector(".navBullets");

// let's check about localstorage 
let bulletItemStrorage = localStorage.getItem("bullet_option");
if (bulletItemStrorage !== null) {

    bulletsvisiblity.forEach(button => {
        button.classList.remove("activeColor");
    });

    if (bulletItemStrorage === "block"){
        navvy.style.display="block";
        document.querySelector(".setting .ShowBullets .yes").classList.add("activeColor");
    } else {
        navvy.style.display="none";
         document.querySelector(".setting .ShowBullets .no").classList.add("activeColor");
    };
};

bulletsvisiblity.forEach((b) => {

    b.addEventListener("click",(e)=> {
        if (e.target.dataset.display == "show") {
            navvy.style.display="block";
            localStorage.setItem("bullet_option","block");
        } else {
            navvy.style.display="none";
            localStorage.setItem("bullet_option","none");
        }
    })
});
document.querySelector(".reset_option").onclick = function () {
localStorage.clear();
// localStorage.remove("bullet_option");
// localStorage.remove("backgroundOption");
// localStorage.remove("colorOption");
// localStorage.remove("bullets_option");
window.location.reload();
};

// toggle menu 
let button = document.querySelector(".header .navIcon");
let list = document.querySelector(".header .ll");
button.onclick = function (e) {
    e.stopPropagation();
    list.classList.toggle("toggleMenu");
    list.classList.toggle("open");

};

// Click  Outside the menu and toggle button
document.addEventListener("click",(e)=> {

     if (e.target !== button && e.target !== list) {

        // check Menu is open or not 
        if (list.classList.contains("open")) {
            list.classList.toggle("toggleMenu");
            list.classList.toggle("open");
            }

    }


});
list.onclick = function (e) {
    e.stopPropagation();
}
