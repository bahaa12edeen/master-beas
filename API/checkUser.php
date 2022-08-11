<?php
include_once "./connection.php";

$email = $_REQUEST['email'];
$pass = $_REQUEST['pass'];

$sql = "SELECT user_id FROM user WHERE user_email = '$email' AND user_pass = '$pass'";

$sqlRun = mysqli_query($conn,$sql);
$result = $conn -> query($sql);
$row = $result -> fetch_assoc();

$resultcheck = mysqli_num_rows($sqlRun);
// echo "resultcheck: ".$resultcheck;
if ($resultcheck > 0) {
  echo $row['user_id'];
}else{
  echo "false";
}

$conn->close();