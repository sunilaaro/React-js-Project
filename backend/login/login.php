<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$data = json_decode(file_get_contents('php://input'), true);

//print_r($data);exit;
// Initialize the session
session_start();
 
// Check if the user is already logged in, if yes then redirect him to welcome page
if(isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true){
    header("location: welcome.php");
    exit;
}
 
// Include config file
require_once "config.php";
 
// Define variables and initialize with empty values
$email = $password = "";
$email_err = $password_err = "";
 
// Processing form data when form is submitted
if($data['data']['email']){
  //echo 'hi';exit;
    // Check if username is empty
    if(empty(trim($data['data']['email']))){
        $email_err = "Please enter email.";
    } else{
        $email = trim($data['data']['email']);
    }
    //echo $data['data']['password'];
    // Check if password is empty
    if(empty(trim($data['data']['password']))){
        echo $password_err = "Please enter your password.";
    } else{
        $password = trim($data['data']['password']);
    }
    
    // Validate credentials
    if(empty($email_err) && empty($password_err)){
        // Prepare a select statement
        $sql = "SELECT id, Email, Username, Name, Password FROM sbusers WHERE Email = ?";
        
        if($stmt = mysqli_prepare($link, $sql)){
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "s", $param_email);
            
            // Set parameters
            $param_email = $email;
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)){
                // Store result
                mysqli_stmt_store_result($stmt);
                
                // Check if username exists, if yes then verify password
                if(mysqli_stmt_num_rows($stmt) == 1){                    
                    // Bind result variables
                    mysqli_stmt_bind_result($stmt, $id, $email,$username,$name, $hashed_password);
                    if(mysqli_stmt_fetch($stmt)){
                        if(password_verify($password, $hashed_password)){
                            // Password is correct, so start a new session
                            //session_start();
                            
                            // Store data in session variables
                            $_SESSION["loggedin"] = true;
                            $_SESSION["id"] = $id;
                            $_SESSION["name"] = $name;
                            $_SESSION["username"] = $username;
                            $_SESSION["password"] = $password;
                            $_SESSION["email"] = $email;        
                            $myObj = array("id"=>$id, "email"=>$email, "name"=>$name, "username"=>$username, "password"=>$password, "loggedin"=>true);                      
                            // $userData->id = $id;
                            // $userData->login = true;
                            // $userData->email = $email;
                            
                            $myJSON = json_encode($myObj);
                            
                            
                            echo $myJSON;

                           

                            
                            // Redirect user to welcome page
                            //header("location: welcome.php");
                        } else{
                            // Display an error message if password is not valid
                            echo $password_err = "{\"id\" : -1, \"error\" : \"The password you entered was not valid.\"}";
                        }
                    }
                } else{
                    // Display an error message if username doesn't exist
                    echo $email_err = "{\"id\" : -1, \"error\" : \"No account found with that username.\"}";
                }
            } else{
                echo "{\"id\": -1, \"error\" : Oops! Something went wrong. Please try again later.\"}";
            }
        }
        
        // Close statement
        mysqli_stmt_close($stmt);
    }
    
    // Close connection
    mysqli_close($link);
}
?>
 
