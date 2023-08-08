<?php

// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the password and blog content from the form data
    $password = $_POST["password"];
    $blogContent = $_POST["blogContent"];

    // Add your password verification logic here
    // For simplicity, let's assume the password is "password123"
    if ($password === "password123") {
        // The password is correct, store the blog content in a file
        $file = fopen("/data/blogs.txt", "a"); // Append mode
        fwrite($file, $blogContent . "\n");
        fclose($file);
        // You can also store the blog content in a database if you prefer

        // Return a success response
        echo json_encode(["success" => true]);
    } else {
        // Return an error response
        echo json_encode(["success" => false, "message" => "Incorrect password"]);
    }
} else {
    // Return an error response if the request method is not POST
    echo json_encode(["success" => false, "message" => "Invalid request"]);
}
?>
