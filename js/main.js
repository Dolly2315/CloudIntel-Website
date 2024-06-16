// AOS
AOS.init();

//Scrool To Top Button

function scrollTop() {
    if ($(window).scrollTop() > 500) {
        $(".backtotopbtn").addClass("active");
    } else {
        $(".backtotopbtn").removeClass("active");
    }
}
$(function () {
    scrollTop();
    $(window).on("scroll", scrollTop);
    $(".backtotopbtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1);
        return false;
    });
});

// For Navbar

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav a');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const navLink = document.querySelector(`.navbar-nav a[href="#${entry.target.id}"]`);
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}, observerOptions);
sections.forEach(section => {
    observer.observe(section);
});

// AddsClass When Navbar Scrolls

document.addEventListener('DOMContentLoaded', function () {
    function updateNavbarClass() {
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('nav-bg-scroll');
        } else {
            navbar.classList.remove('nav-bg-scroll');
        }
    }
    window.addEventListener('scroll', updateNavbarClass);
    window.addEventListener('load', function () {
        updateNavbarClass();
    });
});

// Wait for the DOM content to be fully loaded before executing the code

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.nav-menu li a').forEach(link => link.addEventListener('click', e => {
        e.preventDefault();
        window.scroll({ top: document.getElementById(link.getAttribute('href').substr(1)).offsetTop - document.querySelector('.nav-bg').offsetHeight, behavior: 'smooth' });
    }));
});

// navbar toggler

$(document).ready(function () {
    $('.nav-menu a').on('click', function () {
        $('#navbarNav').offcanvas('hide');
    });
});

// Initialize-HeroSwiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

// CopyButton

document.getElementById("copyButton").addEventListener("click", e => {
    e.preventDefault();
    const c = document.querySelector(".api-key").innerText;
    navigator.clipboard.writeText(c).then(() => alert(`Content copied to clipboard!`)).catch(console.error);
});
