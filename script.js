// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to my Crypto-LoFi Website!");

    // Example: Smooth scroll for anchor links
    const smoothScroll = (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    }

    // Add event listener to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}