<?php
if($_POST){
    $message = $_POST['message'];

    mail("info@trigger.com.ua", "ЗАКАЗ ИНДИВИДУАЛЬНОЙ КОНСУЛЬТАЦИИ", $message);
}
?>