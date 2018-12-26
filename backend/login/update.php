<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$data = json_decode(file_get_contents('php://input'), true);

// echo '<pre/>';
// print_r($data['data']);
// die;
/* Attempt MySQL server connection. Assuming you are running MySQL*/
include('../database.php');
//echo 'Hi check';exit;
$id = $data['data']['id'];
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
$sql = "UPDATE sbusers SET Name='$name',Email='$email',Username='$username', Password='$param_password' WHERE id=".$id;
//die($sql);
if(mysqli_query($link,$sql)){
    echo "Records Updated successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 

}else{
    echo "Please try again";
}
?>