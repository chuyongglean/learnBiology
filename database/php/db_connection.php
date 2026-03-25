<?php
// This is a sample database connection file.
// Replace with your actual database credentials.

$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "school_db";

// Create connection
try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }
    // In a real application, you would not echo this. It's for demonstration.
    error_log("PHP Database connection successful.");
} catch (Exception $e) {
    // In a real application, log this error securely and show a generic message to the user.
    error_log($e->getMessage());
    die("Could not connect to the database. Please try again later.");
}

// Note: This script should not output anything to the browser if included by other scripts.
?>