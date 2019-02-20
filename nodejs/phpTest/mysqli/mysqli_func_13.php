<?php
//1.连接
$link=mysqli_connect('localhost','root','root','test') or die('Connect Error:'.mysqli_connect_errno().":".mysqli_connect_error());

//2.设置编码方式
mysqli_set_charset($link,'UTF8');
$sql="INSERT user(username,password,age) VALUES(?,?,?);";
//准备执行一个 SQL 语句。
$stmt=mysqli_prepare($link, $sql);//可以用这个mysqli_stmt_init($link);
$username='test123';
$password='test123';
$age=123;
// 绑定参数
mysqli_stmt_bind_param($stmt, 'ssi',$username,$password,$age);
// 执行查询
$res=mysqli_stmt_execute($stmt);

$username='test1234';
$password='test1234';
$age=44;
mysqli_stmt_bind_param($stmt, 'ssi',$username,$password,$age);
$res=mysqli_stmt_execute($stmt);

mysqli_close($link);






