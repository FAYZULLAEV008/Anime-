// Smooth scroll to sections when navigation items are clicked
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        const headerHeight = document.querySelector('header').offsetHeight; // Get the dynamic header height
        window.scrollTo({
            top: targetSection.offsetTop - headerHeight, // Adjust for header height dynamically
            behavior: 'smooth'
        });
    });
});

// Auto-play next video functionality
const videos = document.querySelectorAll('video');
videos.forEach((video, index) => {
    video.addEventListener('ended', () => {
        const nextVideo = videos[index + 1];
        if (nextVideo) {
            nextVideo.play(); // Play the next video automatically when the current one ends
        }
    });
});

// Highlight active section in the navigation bar on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

// Function to highlight active section and navigation link during scroll
window.addEventListener('scroll', () => {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60; // Account for the header height dynamically
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Highlight the active navigation link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Optional: Add an 'active' class to highlight the clicked navigation item
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});
