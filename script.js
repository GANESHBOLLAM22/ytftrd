document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple alert for demonstration
    alert(`Thank you for your message, ${name}!`);

    // Reset the form
    this.reset();
});
