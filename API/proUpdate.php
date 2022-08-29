<?php
include_once "./connection.php";

$id = $_REQUEST['id'];
$quan = $_REQUEST['quan'];
$user = $_REQUEST['user'];

$sql = "UPDATE cart SET quantity= $quan WHERE pro_id=$id AND usr_id=$user;";

mysqli_query($conn, $sql);

$conn->close();