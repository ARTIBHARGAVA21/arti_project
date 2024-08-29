document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');

    // Hide all alerts initially
    successAlert.style.display = 'none';
    errorAlert.style.display = 'none';

    if (name === "" || email === "" || message === "") {
        errorAlert.textContent = "All fields are required.";
        errorAlert.style.display = 'block';
        return;
    }

    if (!validateEmail(email)) {
        errorAlert.textContent = "Please enter a valid email address.";
        errorAlert.style.display = 'block';
        return;
    }

    // Simulate AJAX form submission
    successAlert.style.display = 'block';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}