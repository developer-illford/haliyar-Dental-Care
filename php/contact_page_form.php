<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $dentist = htmlspecialchars($_POST['dentist']);
    $date = htmlspecialchars($_POST['date']);

    // Validate phone number format
    if (!preg_match("/^\d{10}$/", $phone)) {
        echo "<script>alert('Invalid phone number format.');</script>";
        echo "<script>window.location.href = '../contact.html';</script>";
        exit;
    }

    // Validate date format (assuming date is in YYYY-MM-DD format)
    if (!preg_match("/^\d{4}-\d{2}-\d{2}$/", $date)) {
        echo "<script>alert('Invalid date format.');</script>";
        echo "<script>window.location.href = '../contact.html';</script>";
        exit;
    }

    // Compose email message
    $to = "manastom670@gmail.com";
    $subject = "Dentist Appointment Request";
    $message = "Name: $name\n";
    $message .= "Phone Number: $phone\n";
    $message .= "Dentist: $dentist\n";
    $message .= "Date: $date\n";

    // Additional headers
    $headers = "From: $name\r\n";
    $headers .= "Reply-To: $name <$phone>\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        header('Location: ../thankyou.html');
    } else {
        header('Location: ../oops.html');
    }
}
?>