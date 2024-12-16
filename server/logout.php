<?php

session_start();

// Function to log out the user
function logout() {
    // Perform any additional cleanup or logging out logic
    session_destroy();
}

// Call the logout function
logout();

// Redirect to the home page or login page
header("Location: /index.html");
exit();

?>
