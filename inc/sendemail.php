<?php

    $to = "imkanikagarg@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $msg = $_POST['message'];
    $headers = "From: $from";
    $subject = "You have a message from your Template";
    $body = "Here is the message:\n\n".$msg;

    // $fields = array();
    // $fields{"name"}    = "Name";
    // $fields{"email"}    = "Email";
    // $fields{"message"}   = "Message";
    

    // $body = "Here is the message you got:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);
    header("Location: /");
?>