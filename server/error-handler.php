<?php

// Function to handle errors
function handleError($errorMessage) {
    // Log the error
    logError($errorMessage);

    // Display a user-friendly error message
    echo "Oops! Something went wrong. Please try again later.";

    // You can customize the error page or redirect the user to a specific error page
}

// Function to log errors
function logError($errorMessage) {
    // Log the error to a file or database
    $errorLogFile = fopen("error.log", "a");
    fwrite($errorLogFile, date("Y-m-d H:i:s") . " - " . $errorMessage . PHP_EOL);
    fclose($errorLogFile);
}

?>
