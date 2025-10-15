/* Contact form submission */

(function(){
    emailjs.init({
        publicKey: "k1f6UTkMZEuGaMroA",
    });
})();

const form = document.getElementById('contact-form');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const serviceID = "service_zr7icl1";
    const templateID = "template_zltpx3i";

    emailjs.sendForm(serviceID, templateID, this).then(() => {
        alert("Message sent successfully!");
        form.reset();
    }).catch((error) => {
        console.log("Error", error);
        alert("Failed to send message. Please try again later.");
    });
});

/*Current Year */
document.getElementById("year").innerHTML = new Date().getFullYear();

/* Loader */
const loaderContainer = document.querySelector(".loader-container");
const pageContent = document.querySelector("#page-content");

window.addEventListener("load", () => {
    loaderContainer.classList.add("hidden");
    pageContent.classList.add("visible");
});

/* Navigation Toggle*/
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

/*Navigation links activeness for click*/
const activeLinks = document.querySelectorAll(".nav-links a");

activeLinks.forEach(link => {
    link.addEventListener("click", function () {
        activeLinks.forEach(l => {
            l.classList.remove("active");
            this.classList.add("active");
        });
    });
});

/* Navigation links activeness for scrolls */
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        activeLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});


/* Smooth Scroll */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo ({
                    top: target.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });
});

/*Text Animation*/
const roles = ['Software Engineer', 'Fullstack Developer'];

let mainTimeline = gsap.timeline({
    repeat: -1
});

roles.forEach(role => {
    let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 6
    });

    textTimeline.to('#typewriter', {
        text: role,
        duration: 1
    });

    mainTimeline.add(textTimeline);
})

let cursorTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: .8
});

cursorTimeline.to('#cursor', {
    opacity: 1,
    duration: 0
}).to('#cursor', {
    opacity: 0,
    duration: 0,
    delay: .8
})