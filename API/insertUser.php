<?php
include_once "./connection.php";

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$pass = $_REQUEST['pass'];
$mobile = $_REQUEST['mobile'];
$birth = $_REQUEST['birth'];



$sql = "INSERT INTO user(user_name, user_email, user_pass, user_mobile, user_birth) VALUES('$name', '$email', '$pass', '$mobile', '$birth')";

mysqli_query($conn,$sql);

$conn->close();
