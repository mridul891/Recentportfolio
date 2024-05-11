/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", () => { navMenu.classList.add("show-menu") })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => { navMenu.classList.remove("show-menu") })
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*==================== ACCORDION SKILLS ====================*/

const skillComponent = document.getElementsByClassName('skills__content'),
    skillHeaders = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillComponent.length; i++) {
        skillComponent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = "skills__content skills__open"
    }
}

skillHeaders.forEach((el) => { el.addEventListener('click', toggleSkills) })
/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove("qualification__active")
        })
        target.classList.add('qualification__active')

        tab.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swipper-pagination',
        clickable: true,
    },
})

/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'
const icontheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getcurrentTheme = () => document.body.classList.contains(darktheme) ? "dark" : "light"
const getcurrenticon = () => themeButton.classList.contains(icontheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darktheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](icontheme)
}
// Activate/deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(icontheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Gsap effect 
// gsap.from(".hello", {
//     ease: "",
//     color: "red",
//     duration: 1,
//     stagger: 1,
//     repeat: -1,
// })

const words = ["React Native", "Full Stack"]; // Array of words to cycle through
let currentIndex = 0; // Index to keep track of the current word

// Function to change the text with animation
function changeText() {
    gsap.to("#hello", {
        onComplete: updateText,
        opacity: 0,
        duration: 1,
        // ease: 'ease-out',
        stagger: 1,
    });
}

// Function to update the text content and restart animation
function updateText() {
    currentIndex = (currentIndex + 1) % words.length; // Move to the next word or loop back to the beginning
    document.getElementById("hello").textContent = words[currentIndex]; // Update text content
    gsap.to("#hello", { duration: 0.5, opacity: 1 }); // Fade in the new text
}

// Call the changeText function every 3 seconds
setInterval(changeText, 3000);





