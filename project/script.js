document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu Toggle ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav ul');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
        });
    }

    // --- Programs Page Tab Functionality ---
    const tabButtons = document.querySelectorAll('.program-levels .tab-button');
    const programContents = document.querySelectorAll('.program-levels .program-content');

    if (tabButtons.length > 0 && programContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and content
                tabButtons.forEach(btn => btn.classList.remove('active'));
                programContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked button
                button.classList.add('active');

                // Show corresponding content
                const targetId = button.dataset.level; // THIS IS THE CRITICAL LINE FOR TAB MATCHING
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });

        // Optional: Ensure one tab is active on load if not explicitly set in HTML
        // This makes sure if no tab has 'active' in HTML, the first one defaults to active.
        const initiallyActiveButton = document.querySelector('.program-levels .tab-button.active');
        if (!initiallyActiveButton && tabButtons.length > 0) {
            tabButtons[0].click(); // Simulate a click on the first button
        }
    }


    // --- Password Strength Checker (for portal.html) ---
    const passwordField = document.getElementById('password');
    const strengthText = document.getElementById('strength-text');
    const strengthIndicator = document.getElementById('password-strength');

    if (passwordField && strengthText && strengthIndicator) {
        passwordField.addEventListener('input', () => {
            const password = passwordField.value;
            let strength = 0;
            let feedback = 'N/A';
            let color = '#ccc'; // Default color

            if (password.length > 0) {
                // Check length
                if (password.length >= 8) {
                    strength += 1;
                }
                // Check for uppercase letters
                if (/[A-Z]/.test(password)) {
                    strength += 1;
                }
                // Check for lowercase letters
                if (/[a-z]/.test(password)) {
                    strength += 1;
                }
                // Check for numbers
                if (/[0-9]/.test(password)) {
                    strength += 1;
                }
                // Check for special characters
                if (/[^A-Za-z0-9]/.test(password)) {
                    strength += 1;
                }

                // Determine strength level based on score
                if (strength <= 2) {
                    feedback = 'Weak';
                    color = '#f44336'; // Red
                } else if (strength <= 4) {
                    feedback = 'Medium';
                    color = '#ff9800'; // Orange
                } else {
                    feedback = 'Strong';
                    color = '#4CAF50'; // Green
                }
            }

            strengthText.textContent = feedback;
            strengthIndicator.style.backgroundColor = color;
            strengthIndicator.style.color = '#fff'; // White text for better contrast
        });
    }

    // --- Form Submission Feedback (for contact.html - conceptual) ---
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            // In a real application, you would send this data to a server
            // For this project, we'll just simulate a successful submission.
            formStatus.textContent = 'Message sent successfully! We will get back to you soon.';
            formStatus.style.color = '#4CAF50'; // Green text
            contactForm.reset(); // Clear the form
            
            // Optionally, hide the status after a few seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        });
    }

    // --- Admissions Form Submission (for admissions.html - conceptual) ---
    const admissionForm = document.querySelector('.admission-form');
    if (admissionForm) {
        admissionForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission

            // In a real application, this data would be sent to a server.
            // For this project, we'll just show an alert.
            alert('Application submitted successfully! Please check your email for confirmation.');
            admissionForm.reset(); // Clear the form
        });
    }
});