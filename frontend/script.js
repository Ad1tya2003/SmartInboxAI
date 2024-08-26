// document.addEventListener('DOMContentLoaded', function() {
//     const signinButton1 = document.getElementById('signin-btn-google');
  
//     signinButton1.addEventListener('click', function() {
      
//       window.location.href = 'https://reachin-box-assignment.onrender.com/auth/google';
//     });

//     const signinButton2 = document.getElementById('signin-btn-ms');
  
//     signinButton2.addEventListener('click', function() {
      
//     //   window.location.href = 'https://reachinbox-assignment-4rf9.onrender.com/signin';
//     });
//   });
// No JavaScript functionality needed based on the provided image
// But you can add event listeners for button clicks if needed



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
