<?php
include_once "./connection.php";

$user_id = $_REQUEST['user_id'];
$total = $_REQUEST['total'];

$sql1 = "INSERT INTO bill(user_id, bill_total) VALUES('$user_id', '$total')";
mysqli_query($conn,$sql1);

/* ***************************** */
$sql2 = "SELECT bill_id FROM bill WHERE user_id=$user_id ORDER BY bill_id DESC;";
$sqlRun = mysqli_query($conn,$sql2);
$numRow = mysqli_num_rows($sqlRun);

$row = mysqli_fetch_assoc($sqlRun);
// echo ($row["bill_id"]);

/* ***************************** */
$bill_id = $row['bill_id'];
$pro_idB = $_REQUEST['pro_id'];
$quanB = $_REQUEST['quan'];

$pro_idB = explode(",", $pro_idB);
$quanB = explode(",", $quanB );

    $order = "";
    array_map('show_Spanish', $a, $b);
    $pro_idB.map(($el) => {
      $order += "(";
      $order +=
      $el +
        ", " +
        el.quantity;
      $order += ")";
      if (el.cart_id != pro[pro.length - 1].cart_id) $order += ", ";

print_r($pro_id);

// $sql3 = "INSERT INTO `order`(bill_id, pro_id, quantity) VALUES('$bill_id','$pro_id', '$quan');";
// mysqli_query($conn,$sql3);

$conn->close();