<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace YOUR_MAILCHIMP_LIST_ID with your actual Mailchimp List ID
    $list_id = "320561";

    // Replace YOUR_API_KEY with your actual Mailchimp API key
    $api_key = "afde591d1f1c6fcdd088a954af27851b-us21";

    $email = $_POST["email"];

    // Mailchimp API endpoint
    $api_endpoint = "https://us21.api.mailchimp.com/3.0/lists/$list_id/members";

    // Prepare data to be sent
    $data = array(
        'email_address' => $email,
        'status' => 'subscribed', // or 'pending'
    );

    $json_data = json_encode($data);

    // Setup cURL
    $ch = curl_init($api_endpoint);
    curl_setopt($ch, CURLOPT_USERPWD, "user:$api_key");
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);

    // Execute the cURL request
    $result = curl_exec($ch);

    // Close cURL session
    curl_close($ch);

    // Handle the Mailchimp API response
    $response = json_decode($result, true);

    if ($response['status'] == 'subscribed') {
        // Successfully subscribed
        echo "Thank you for subscribing!";
    } else {
        // Subscription failed
        echo "Subscription failed. Please try again.";
    }
}
?>
