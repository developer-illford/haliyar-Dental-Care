<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $date = htmlspecialchars($_POST['date']);
    $time = htmlspecialchars($_POST['time']);

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

    // Validate name
    if (empty($name)) {
        echo "<script>alert('Name cannot be empty.');</script>";
        echo "<script>window.location.href = '../contact.html';</script>";
        exit;
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email format.');</script>";
        echo "<script>window.location.href = '../contact.html';</script>";
        exit;
    }

    // Validate time format (assuming time is in HH:MM format)
    if (!preg_match("/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/", $time)) {
        echo "<script>alert('Invalid time format.');</script>";
        echo "<script>window.location.href = '../contact.html';</script>";
        exit;
    }

    // Compose email message
    $to = "manastom670@gmail.com";
    $subject = "Appointment Request";
    $message = "Name: $name\n";
    $message .= "Phone Number: $phone\n";
    $message .= "Email Address: $email\n";
    $message .= "Date: $date\n";
    $message .= "Time: $time\n";

    // Additional headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your appointment request has been submitted successfully. We will contact you shortly.";
    } else {
        echo "Failed to send appointment request. Please try again later.";
    }
}
?>
