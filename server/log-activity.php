<?php

// Function to log activity
function logActivity($message) {
    // Log the activity to a file or database
    $logFile = fopen("activity.log", "a");
    fwrite($logFile, date("Y-m-d H:i:s") . " - " . $message . PHP_EOL);
    fclose($logFile);
}

// Example usage
logActivity("User accessed a protected resource.");

?>
