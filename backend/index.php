<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$data = json_decode(file_get_contents('php://input'), true);

//echo '<pre/>';
//print_r($data['data']['name']);

/* Attempt MySQL server connection. Assuming you are running MySQL*/
include('database.php');
$name = $data['data']['name'];
$email = $data['data']['email'];
$username = $data['data']['username'];
$password = $data['data']['password'];
$param_password = password_hash($password, PASSWORD_DEFAULT);
//echo $name;
/*$name='sunil';
$email='sunil@gmail.com';
$username='usersunil';
$password='sunil';*/

if(isset($data['data']['email'])){
// Attempt insert query execution
$sql = "INSERT INTO sbusers (Name,Email,Username,Password) VALUES ('$name','$email','$username','$param_password')";
if(mysqli_query($link,$sql)){
    echo "Records added successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysql_error();
}
 

}
?>