document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Add click event listeners to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const buttonText = event.target.textContent.trim();
            console.log(`Button clicked: ${buttonText}`);
            // Add your button click logic here
        });
    });

    // Add hover effect to navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textDecoration = 'none';
        });
    });
});