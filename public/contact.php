<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once "vendor/autoload.php";

function sanitize_my_email($field) {
    $field = filter_var($field, FILTER_SANITIZE_EMAIL);
    if (filter_var($field, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }
}

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);

$mail = new PHPMailer(true);

//Enable SMTP debugging.
$mail->SMTPDebug = 3;                               
//Set PHPMailer to use SMTP.
$mail->isSMTP();            
//Set SMTP host name                          
$mail->Host = "smtp.gmail.com";
//Set this to true if SMTP host requires authentication to send email
$mail->SMTPAuth = true;                          
//Provide username and password     
$mail->Username = "???";                 
$mail->Password = "???";                           
//If SMTP requires TLS encryption then set it
$mail->SMTPSecure = "tls";                           
//Set TCP port to connect to
$mail->Port = 587;                                   

$mail->From = $data->email;
$mail->FromName = $data->name.' '.$data->surename;

$mail->addAddress('???', "Name");

$mail->isHTML(false);

$mail->Subject = 'Formularz strony od '.$data->name.' '.$data->surename;
$mail->Body = $data->message;
//$mail->AltBody = "This is the plain text version of the email content";

$secure_check = sanitize_my_email($data->email);
if ($secure_check == false) {
    echo "Invalid input";
	http_response_code(400);
} else { //send email 
    try {
		$mail->send();
		echo "Message has been sent successfully";
	} catch (Exception $e) {
		echo "Mailer Error: " . $mail->ErrorInfo;
		http_response_code(500);
	}
}
?>