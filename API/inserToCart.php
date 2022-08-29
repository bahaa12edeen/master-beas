<?php
include_once "./connection.php";

$id = $_REQUEST['id'];
$quan = $_REQUEST['quan'];
$user = $_REQUEST['user'];

$sql0 = "SELECT * FROM cart WHERE pro_id=$id AND usr_id=$user;";
$result2 = mysqli_query($conn, $sql0);
$resultcheck = mysqli_num_rows($result2);
$row3 = mysqli_fetch_assoc($result2);

if ($resultcheck > 0) {
  $increase = $quan + $row3['quantity'];
  $sql = "UPDATE cart SET quantity= $increase WHERE pro_id=$id AND usr_id=$user;";
} else {
  $sql = "INSERT INTO cart(pro_id, quantity, usr_id) VALUES('$id', '$quan', '$user')";
}
mysqli_query($conn, $sql);

$conn->close();
