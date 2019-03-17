<?php

// Define some constants
define( "RECIPIENT_NAME2", "YOUR_NAME_HERE" );
define( "RECIPIENT_EMAIL2", "YOUR_EMAIL_HERE" );
define( "EMAIL_SUBJECT", "$subject2" );

// Read the form values
$success = false;
$senderfirstName = isset( $_POST['senderfirstName'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['senderfirstName'] ) : "";
$senderlastName = isset( $_POST['senderlastName'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['senderlastName'] ) : "";
$senderEmail2 = isset( $_POST['senderEmail2'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['senderEmail2'] ) : "";
$subject2 = isset( $_POST['subject2'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['subject2'] ) : "";
$message2 = isset( $_POST['message2'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message2'] ) : "";
$phone = isset( $_POST['phone'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['phone'] ) : "";

// If all values exist, send the email
if ( $senderfirstName && $senderEmail2 && $message2 ) {
  $recipient = RECIPIENT_NAME2 . " <" . RECIPIENT_EMAIL2 . ">";
  $headers = "From: " . $senderfirstName . " <" . $senderEmail2 . ">";
  $success = mail( $recipient, $phone , $subject2 , $message2, $headers );
}

// Return an appropriate response to the browser
if ( isset($_GET["ajax"]) ) {
  echo $success ? "success" : "error";
} else {
?>
<html>
  <head>
    <title>Thanks!</title>
  </head>
  <body>
  <?php if ( $success ) echo "<p>Thanks for sending your message! We'll get back to you shortly.</p>" ?>
  <?php if ( !$success ) echo "<p>There was a problem sending your message. Please try again.</p>" ?>
  <p>Click your browser's Back button to return to the page.</p>
  </body>
</html>
<?php
}
?>