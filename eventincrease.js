// event-tracking.js

// Get all navigation links
const navigationLinks = document.querySelectorAll(".nav-list a");

// Loop through each navigation link
navigationLinks.forEach((link, index) => {
    link.addEventListener("click", function() {
        for (let i = 0; i < 100000; i++) {
            gtag('event', 'navigation_click', {
                'event_label': link.textContent + '_' + i,
            });
        }
    });
});
