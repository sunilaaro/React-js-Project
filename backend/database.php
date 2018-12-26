<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST,PUT, DELETE');
header("Access-Control-Allow-Headers: X-Requested-With");

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'svdemo');
 
/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>