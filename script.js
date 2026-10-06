/* =====================================================
   PROFESSIONAL PORTFOLIO WEBSITE JAVASCRIPT

   Features:
   - Mobile Navigation
   - Typing Effect
   - Scroll Animations
   - Active Menu Highlight
   - Header Effects
   - Form Validation

===================================================== */


/* ================= MOBILE MENU ================= */


const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector("nav");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    menuBtn.querySelector("i").classList.toggle("fa-times");

});



/* Close mobile menu after clicking link */


const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.querySelector("i")
        .classList.remove("fa-times");

    });

});



/* ================= TYPING EFFECT ================= */


const typingText = document.getElementById("typing");


const words = [

    "AWS Cloud Enthusiast",

    "Full Stack Developer",

    "Python Developer",

    "Cloud Engineer"

];


let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;



function typeEffect(){


    let currentWord = words[wordIndex];


    if(isDeleting){

        typingText.textContent =
        currentWord.substring(0,charIndex--);

    }

    else{

        typingText.textContent =
        currentWord.substring(0,charIndex++);

    }



    if(!isDeleting && charIndex === currentWord.length){


        isDeleting = true;

        setTimeout(typeEffect,1500);

    }


    else if(isDeleting && charIndex === 0){


        isDeleting = false;


        wordIndex++;


        if(wordIndex === words.length){

            wordIndex = 0;

        }


        setTimeout(typeEffect,500);


    }


    else{


        setTimeout(typeEffect,100);

    }

}


typeEffect();





/* ================= HEADER SCROLL EFFECT ================= */


const header = document.querySelector("header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 100){

        header.style.background =
        "rgba(8,27,41,0.95)";

    }

    else{


        header.style.background =
        "rgba(8,27,41,0.85)";

    }


});





/* ================= ACTIVE NAVIGATION ================= */


const sections = document.querySelectorAll("section");



window.addEventListener("scroll",()=>{


    let current = "";



    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 150;


        const sectionHeight =
        section.clientHeight;



        if(
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ){

            current =
            section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }


    });



});






/* ================= SCROLL REVEAL ANIMATION ================= */


const revealElements =
document.querySelectorAll(
".card, .project-card, .timeline-item, .cert-card, .about-container"
);



const revealOnScroll = ()=>{


    revealElements.forEach(element=>{


        const elementTop =
        element.getBoundingClientRect().top;


        const windowHeight =
        window.innerHeight;



        if(elementTop < windowHeight - 100){


            element.style.opacity="1";

            element.style.transform=
            "translateY(0)";


        }


    });


};



window.addEventListener(
"scroll",
revealOnScroll
);



/* Initial animation setup */


revealElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform=
    "translateY(50px)";

    element.style.transition=
    "all 0.6s ease";


});







/* ================= CONTACT FORM VALIDATION ================= */


const form =
document.querySelector("form");



form.addEventListener("submit",(event)=>{


    event.preventDefault();



    const inputs =
    form.querySelectorAll(
    "input, textarea"
    );



    let valid = true;



    inputs.forEach(input=>{


        if(input.value.trim()===""){


            valid=false;


            input.style.border =
            "2px solid red";


        }


        else{


            input.style.border =
            "2px solid #00abf0";


        }


    });




    if(valid){


        alert(
        "Thank you! Your message has been received."
        );


        form.reset();


    }


    else{


        alert(
        "Please fill all fields."
        );


    }



});






/* ================= BACK TO TOP BUTTON ================= */


const backTop =
document.createElement("button");


backTop.innerHTML =
"↑";


backTop.className =
"back-top";



document.body.appendChild(backTop);



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 500){


        backTop.style.display =
        "block";


    }

    else{


        backTop.style.display =
        "none";


    }


});



backTop.addEventListener(
"click",
()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});







/* ================= CURRENT YEAR ================= */


const year =
new Date().getFullYear();



const footer =
document.querySelector("footer p");



if(footer){


    footer.innerHTML =
    `© ${year} Sri Abhinaya Racharla. All Rights Reserved.`;

}
s