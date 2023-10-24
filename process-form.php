<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Basic validation can be added here.
    // For example, validate the email format.

    $to = "hammadalam115@gmail.com";  // Your email address.
    $subject = "New Review from $name";
    $text = "Name: $name\nEmail: $email\nMessage: $message";

    mail($to, $subject, $message);

    // Optionally, you can send a response back to the user.
    echo "Thank you for your review!";
}
?>
