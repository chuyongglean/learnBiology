<?php
// This is a sample user authentication file.
// It provides placeholder functions for user registration and login.

include_once 'db_connection.php';

/**
 * Registers a new user.
 * In a real application, you'd handle form data passed via POST.
 */
function registerUser($fullname, $email, $password) {
    global $conn;
    
    // Hash password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $fullname, $email, $hashed_password);
    
    if ($stmt->execute()) {
        error_log("New user registered successfully: " . $email);
        return true;
    } else {
        error_log("Error during registration: " . $stmt->error);
        return false;
    }
}

/**
 * Logs a user in.
 * In a real application, you'd handle form data passed via POST.
 */
function loginUser($email, $password) {
    global $conn;

    $stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashed_password);
        $stmt->fetch();
        if (password_verify($password, $hashed_password)) {
            error_log("User logged in successfully: " . $email);
            // Here you would typically start a session
            return true;
        }
    }
    
    error_log("Login failed for user: " . $email);
    return false;
}
?>