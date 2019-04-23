<?php
if($_POST){
    $message = $_POST['message'];

    mail("yamnyk.vlog@gmail.com", "ЗАКАЗ ИНДИВИДУАЛЬНОЙ КОНСУЛЬТАЦИИ", $message);
}
?>