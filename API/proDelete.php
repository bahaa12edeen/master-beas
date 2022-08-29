<?php
include_once "./connection.php";

$id = $_REQUEST['id'];
// $user = $_REQUEST['user'];

$sql = "DELETE FROM cart WHERE cart_id =$id;";

mysqli_query($conn, $sql);

$conn->close();