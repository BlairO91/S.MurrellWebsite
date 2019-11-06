<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailfrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = /*"Shalik's email that's not GMAIL"*/;
  $headers = "From: ".$mailFrom;
  $txt = "You have recieved an e-mail from ".$name.".\n\n".$message;

  /* Need include error handling */

  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailSend");
}
