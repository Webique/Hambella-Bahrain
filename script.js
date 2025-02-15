// Smooth scrolling for menu links
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu a').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) { // Only smooth scroll for section IDs
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
            }
        });
    });



    // Scroll-triggered animations for sections
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active'); // Add active class
                }
            });
        },
        { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    // Add hidden class to all sections initially
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.add('hidden');
        observer.observe(section);
    });

    // Smooth appearance for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.classList.add('active');
        }, 500);
    }
});

// Handle logo navigation
document.addEventListener('DOMContentLoaded', () => {
    const logoLink = document.querySelector('.logo-link');

    logoLink.addEventListener('click', (event) => {
        if (window.location.pathname.includes('index.html')) {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.location.href = 'index.html';
        }
    });
});

// Mobile Menu Full Page Behavior
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Toggle menu visibility
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
        }
    });

    // Close menu when clicking a menu link
    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll(".menu-item");
    const popupModal = document.getElementById("popup-modal");
    const popupImage = document.getElementById("popup-image");
    const popupItemName = document.getElementById("popup-item-name");
    const popupItemPrice = document.getElementById("popup-item-price"); // Price Element
    const closeButton = document.querySelector(".close-button");

    // Function to show pop-up
    function showPopup(item) {
        const imageSrc = item.querySelector("img").src;
        const itemName = item.querySelector(".item-name").textContent;
        const itemPrice = item.querySelector(".item-price") ? item.querySelector(".item-price").textContent : ""; // Get price if exists

        popupImage.src = imageSrc;
        popupItemName.textContent = itemName;
        popupItemPrice.textContent = itemPrice; // Add price to pop-up

        popupModal.classList.add("show");
    }

    // Add event listener to each menu item
    menuItems.forEach(item => {
        item.addEventListener("click", () => showPopup(item));
    });

    // Close modal when clicking outside the content
    popupModal.addEventListener("click", () => {
        popupModal.classList.remove("show");
    });

    // Prevent closing when clicking inside content
    document.querySelector(".popup-content").addEventListener("click", (event) => {
        event.stopPropagation();
    });

    // Close modal when clicking the close button
    closeButton.addEventListener("click", () => {
        popupModal.classList.remove("show");
    });
});
