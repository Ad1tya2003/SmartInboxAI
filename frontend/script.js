


// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the Google sign-in button by its ID
    const signinButtonGoogle = document.getElementById('signin-btn-google');
    
    // Add a click event listener to the Google sign-in button
    signinButtonGoogle.addEventListener('click', function() {
        // Redirect to the Google sign-in page
        window.location.href = 'https://reachin-box-assignment.onrender.com/auth/google';
    });

    // Get the Microsoft sign-in button by its ID
    const signinButtonMicrosoft = document.getElementById('signin-btn-ms');
    
    // Add a click event listener to the Microsoft sign-in button
    signinButtonMicrosoft.addEventListener('click', function() {
        // Redirect to the Microsoft sign-in page
        window.location.href = 'https://reachinbox-assignment-4rf9.onrender.com/signin';
    });
});
