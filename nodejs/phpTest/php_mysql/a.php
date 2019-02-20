<?php 
echo "Hello World!"; 
	//连库、择库、设定字符集
	$con = mysqli_connect('127.0.0.1', 'root', 'root');
	if($con){
        echo "ok";
    }else{
        echo "error";    
    }
?> 