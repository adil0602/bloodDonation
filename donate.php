<?php
$name=$_POST['name'];
$emailid=$_POST['emailid'];
$phone=$_POST['phone'];
$address=$_POST['address'];
$blood=$_POST['blood'];
$age=$_POST['age'];
$date=$_POST['date'];
$gender=$_POST['gender'];

$conn=new mysqli('localhost','root','','donateform');

if($conn->connect_error){
    die("Connection failed" .$con->connect_error);
}else{
    $stmt=$conn->prepare("insert into donateform(name,emailid,phone,address,blood,age,date,gender)
    values (?,?,?,?,?,?,?,?)");
    $stmt->bind_param("ssisssss",$name,$emailid,$phone,$address,$blood,$age,$date,$gender);
    $stmt->execute();
    echo"Form Submitted succesfully....";
    $stmt->close();
    $conn->close();
     $link="<script>window.location.href=('index.html')</script>";
    echo $link;
   
}


?>