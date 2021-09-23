/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active












//I'll select all sections by using querySelectorAll method and store it into an array then loop on it, append an anchor reflect to it and we know that using documentFragment is for the performance.
//creating a <li> element inside the fragment then finally appent it in the ul by using its ID to reach it.
//we put the class menu__link for the anchors to call its style from css file. 
const secs = document.querySelectorAll('section');
const navbarcontainer = document.createDocumentFragment();

for (let i = 0; i<secs.length; i++){
    const nav_li = document.createElement('li');
    nav_li.innerHTML = `<a class = "menu__link" href = '#${secs[i].getAttribute('id')}'>${secs[i].getAttribute('data-nav')}</a>`;
    navbarcontainer.appendChild(nav_li);
}
const navigation_bar = document.getElementById('navbar__list');
navigation_bar.appendChild(navbarcontainer);

//now I will make a show to the section which is viewed by the user.
//I will use addEventListener method to have an function to do when scroll event happen.
//getBoundryClientRect method is very important to 
//getBoundryClientRect method is very important to specify the psition of the section from the whole portview!
//I will select all links and specifies the linkes which has its active section and give them the class 'activation' which make them active and give them a color, Of course that will happen when the condition is true which says that the section is in the portview in the screen!. 
const active_menu = document.querySelectorAll('.menu__link');
let numberOfSections =  secs.length;

document.addEventListener('scroll', function(){
    for (let i = 0; i < numberOfSections; i++){
                let sec = secs[ i ] ;
            if (sec.getBoundingClientRect().top < (window.innerHeight * 49/ 100)  && sec.getBoundingClientRect().bottom > (window.innerHeight * 49/ 100) ){
                if (!sec.classList.contains('your-active-class')){
                sec.classList.add('your-active-class'); 
                active_menu[i].classList.add('activation');
            }
        }       else if (sec.classList.contains ('your-active-class')){
                sec.classList.remove('your-active-class');
                active_menu[i].classList.remove('activation');
        }
    }});

//make scroll smoother to from section to another
let count = active_menu.length;
for (let i = 0; i < count; i++){
    active_menu[i].addEventListener('click', function scrollToSection(event){
        event.preventDefault();
        secs[i].scrollIntoView({behavior: 'smooth', block: 'center'}); 
    }); 
}; 




