// Form submission handler
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Basic client-side validation (optional)
    if (email === "" || password === "") {
        document.getElementById('error-message').textContent = "Please fill in all fields.";
    } else {
        // TODO: Handle Firebase Authentication here
        console.log("Login attempt:", email, password);

        // Clear the error message
        document.getElementById('error-message').textContent = "";
    }
});

// Handle Google login button click
document.getElementById('google-login-btn').addEventListener('click', function() {
    // TODO: Integrate Google Login Authentication here
    console.log("Google login clicked");
});

// Handle Google signup button click
document.getElementById('google-signup-btn').addEventListener('click', function() {
    // TODO: Integrate Google Sign-Up Authentication here
    console.log("Google sign up clicked");
});

