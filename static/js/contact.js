document.getElementById('contact-form').addEventListener('submit', function(e) {
    const phoneInput = document.getElementById('inputTel');
    const phoneErrorMessage = document.getElementById('tel-error-message');
    const phoneValue = phoneInput.value.trim();

    const nameInput = document.getElementById("inputName");
    const nameErrorMessage = document.getElementById("name-error-message");
    const nameValue = nameInput.value.trim();
   

    const phoneRegex = /^\d{10}$/;

    const textRegex = /^[a-zA-Z\s]+$/;

    if (!phoneRegex.test(phoneValue)) {
        phoneErrorMessage.style.display = 'block';
        phoneInput.classList.add("contact-input-invalid");
        e.preventDefault();
    } else {
        phoneErrorMessage.style.display = 'none';
    }

    if(!textRegex.test(nameValue)) {
        nameErrorMessage.style.display = 'block';
        nameInput.classList.add("contact-input-invalid");
        e.preventDefault();

    } else {
        nameErrorMessage.style.display = 'none';
    }

  });

