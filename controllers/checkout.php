<?php
require_once('../js/phpmailer/PHPMailerAutoload.php');
require_once("../js/dompdf/dompdf_config.inc.php");
    
//$link = mysqli_connect("166.62.28.110", "lhua196429", "Lhua196429", "edeu");
//// Check connection
//if($link === false){
//    die("ERROR: Could not connect. " . mysqli_connect_error());
//}
//
//
//
//    $sql = "INSERT INTO orders ('price', 'status', 'table', 'printStatus') VALUES (2, 'test', 'test', 'test')";
//
//if(mysqli_query($link, $sql)){
//   
//    mysqli_close($link);
// } else{
//    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
//     mysqli_close($link);
//}   
//    
    
 $html =
      "<!DOCTYPE html>
<html lang=''>
<head>
    <style>
        body {
            font-family: 'Lato', Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.72222;
            color: #34495e;
            background-color: #fff;
        }
        .overview-tile {
            border: 2px solid #00cf85;
            border-radius: 6px;
            margin: 0px 10px;
        }
        .overview-title {
            height: 30px;
            background-color: #ecf0f1;
            padding: 5px 30px 15px 30px !important;
            color: #7f8c8d;
            font-size: 18px;
            font-weight: 700;
            border-radius: 6px;
        }
        .overview-title span{
            color: #7f8c8d;
            font-size: 18px;
            font-weight: 700;
        }
        .overview-content {
            margin: 15px 30px;
            color: #6e7a87;
        }
        .seprator {
            width: 97%;
            height: 2px;
            background-color: #ecf0f1;
            margin: 15px 10px;
        }
        .pageBreak {
            page-break-after:always;
        }
        label {
            display: block;
            font-weight: 700;
            line-height: 25px;
            font-size: 13px;
            max-width: 100%;
            margin-bottom: 5px;
        }
        span {
            font-weight: 300;
            font-size: 13px;
        }
        table {
            width:100%;
            page-break-inside: avoid;
        }
        td{
            width:50%;
        }
        * {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }
        section {
            display:block;
        }
        img {
            float:left;
            padding-top: 8px;
            padding-right: 5px;
        }
        .header-text {
            font-weight: bold;
            font-size : 20px;
            color: #7f8c8d;
            float : left;
            width: 550px;
            padding : 15px;
        }
        .header-logo {
            text-align : right;
            padding-left:35px;
        }
        @page { margin: 100px 30px 75 30px; }
        #header {
            position: fixed;
            left: 0px;
            top: -75px;
            right: 0px;
/*            height: 85px;*/
/*            padding-bottom:100px;*/
        }
        #footer { position: fixed;
            left: 0px;
            bottom: -100px;
            right: 0px;
            height: 100px;
            border-top: 3px solid #fff;
            font-size : 8pt;
            color: #7f8c8d;
            padding: 0px 15px;
        }
        p {
            line-height : 0.7;
        }
        hr {
            border: 0;
            height: 0;
            border-top: 1px solid #ecf0f1;
            border-bottom: 1px solid #ecf0f1;
        }
    </style>
</head>
<body>
    <div id='header'>
        <div class='header-text'>
            Booking Confirm
        </div>
        <div class='header-logo'>
           
        </div>
    </div>

    <section>
        <div class='container'>
            <div class='row'>
                <div class='col-md-12 column'>
                    <div class='row overview-tile'>
                        <div class='overview-content'>
                        <table>
                       <tr>
                       <td>Total price: 200</td>
                       </tr>
                        </table>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    </section>
</body>

</html>";   
    
    $time = date("Y-m-d-His");
    $dompdf = new DOMPDF();
    $dompdf->load_html($html);
    $dompdf->render();
    $output = $dompdf->output();
    $file_to_save = 'booking/'.$time.'.pdf';
    file_put_contents($file_to_save, $output);

 $smail = "yang.liu9@griffithuni.edu.au"; 
$subject = "Booking confirm";
$bodyem = "Hi,<br>Please find the attached file.<br>Thanks";
$fname = 'John';

$mail = new PHPMailer();
$mail->From      = 'ly_musictt@hotmail.com';
$mail->FromName  = 'Guang Zhou Lou Restaurant.';
$mail->Subject   =  $subject;
$mail->Body      = $bodyem;
$mail->addAddress($smail, $fname);
//$mail->AddBCC($smail);
//$mail->AddBCC($smail2);
$mail->isHTML(true); 
//$booking_attach = "upload/$fname-$mname-$lname-$time.pdf";
$booking_attach = 'booking/'.$time.'.pdf';   
//$tc_attach = "./tc/pdf/tc-$tcName.pdf";

    
$mail->AddAttachment($booking_attach);
//$mail->AddAttachment($tc_attach, "Booking-Terms-and-Conditions.pdf");

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
//    echo 'Message has been sent';
//    echo '<br>'.$tc_attach;
//    echo "Records added successfully.";
    header( 'Location: index.html' ) ;
    exit();
}
   



    
?>