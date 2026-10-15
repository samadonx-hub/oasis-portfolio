// Contact Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                showMessage('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            // Here you would typically send the form data to a server
            // For now, we'll show a success message and open email client
            showMessage('Thank you for your message! Redirecting to email...', 'success');
            
            // Option 1: Open email client
            const subject = encodeURIComponent('Portfolio Contact Form');
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:Oasisbabym@gmail.com?subject=${subject}&body=${body}`;

            // Option 2: You can integrate with services like:
            // - Formspree (https://formspree.io/)
            // - EmailJS (https://www.emailjs.com/)
            // - Your own backend API

            // Reset form after a delay
            setTimeout(() => {
                contactForm.reset();
            }, 2000);
        });
    }

    function showMessage(text, type) {
        // Remove existing message if any
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const message = document.createElement('div');
        message.className = `form-message ${type}`;
        message.textContent = text;
        message.style.cssText = `
            padding: 15px;
            margin-top: 10px;
            border-radius: 10px;
            text-align: center;
            font-weight: 500;
            animation: fadeInUp 0.3s ease;
            ${type === 'success' 
                ? 'background: rgba(0, 212, 255, 0.2); color: #00d4ff; border: 1px solid #00d4ff;' 
                : 'background: rgba(255, 0, 0, 0.2); color: #ff4444; border: 1px solid #ff4444;'
            }
        `;

        // Insert message after form
        contactForm.appendChild(message);

        // Remove message after 5 seconds
        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                message.remove();
            }, 300);
        }, 5000);
    }
});

