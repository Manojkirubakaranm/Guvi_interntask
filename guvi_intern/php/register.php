<?php
$host         = "localhost";
$username     = "root";
$password     = "";
$dbname       = "organization";
$result = 0;

$conn = new mysqli($host, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection to database failed: " . $conn->connect_error);
}

$Uname  = $_POST['username'];
$email  = $_POST['email'];
$password  = $_POST['password'];

if(!$Uname||!$email||!$password){
    $result = 2;
}
elseif(!strpos($email,"@")||!strpos($email,".")){
    $result =3;
}
else{
    $sql    = "insert into users (name,email,password) values ('".$Uname."', '".$email."', '".$password."') ";

    if($conn->query($sql)) {
        $result = 1;
    }
}

echo $result;
$conn->close();


?>
