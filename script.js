document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const sport = document.getElementById('sport').value;
    
    // Simple form validation
    if (name === '' || email === '' || sport === '') {
        document.getElementById('message').textContent = 'Please fill in all fields.';
    } else {
        document.getElementById('message').textContent = `Thank you for registering, ${name}! We will contact you at ${email} for ${sport} details.`;
        document.getElementById('registrationForm').reset();
    }
});
