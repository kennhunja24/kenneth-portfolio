// Form Validation Logic
document.addEventListener('DOMContentLoaded', function () {
    const contactForms = document.querySelectorAll('form[data-contact-form="true"]');

    contactForms.forEach(function (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let isValid = true;
            const formFields = contactForm.querySelectorAll('input, textarea');
            const errorMessages = contactForm.querySelectorAll('.error-message');
            errorMessages.forEach(message => message.textContent = '');

            formFields.forEach(field => {
                if ((field.type === 'text' || field.type === 'textarea') && field.value.trim() === '') {
                    isValid = false;
                    showError(field, 'This field is required.');
                }

                if (field.type === 'email' && !validateEmail(field.value)) {
                    isValid = false;
                    showError(field, 'Please enter a valid email address.');
                }

                if (field.type === 'tel' && !validatePhone(field.value)) {
                    isValid = false;
                    showError(field, 'Please enter a valid phone number.');
                }

                if (field.name === 'message' && field.value.length < 10) {
                    isValid = false;
                    showError(field, 'Message must be at least 10 characters long.');
                }
            });

            if (!isValid) {
                return;
            }

            const name = contactForm.querySelector('[name="name"]')?.value?.trim() || 'Unknown';
            const email = contactForm.querySelector('[name="email"]')?.value?.trim() || 'No email provided';
            const subject = contactForm.querySelector('[name="subject"]')?.value?.trim() || 'New contact message';
            const message = contactForm.querySelector('[name="message"]')?.value?.trim() || '';

            const whatsappText = `Hello Kenneth, I would like to connect.\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
            const whatsappUrl = `https://wa.me/254705033492?text=${encodeURIComponent(whatsappText)}`;
            const mailtoUrl = `mailto:hunjakenneth@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            window.location.href = mailtoUrl;
            contactForm.reset();
        });
    });

    function showError(field, message) {
        let errorElement = field.nextElementSibling;

        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('span');
            errorElement.classList.add('error-message');
            field.parentNode.appendChild(errorElement);
        }

        errorElement.textContent = message;
    }

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    }
});
