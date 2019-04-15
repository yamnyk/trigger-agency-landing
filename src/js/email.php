<?php
if($_POST){
    $message = $_POST['message'];

    mail("denvradiy@gmail.com", "ЗАКАЗ ИНДИВИДУАЛЬНОЙ КОНСУЛЬТАЦИИ" .$message);
}
?>