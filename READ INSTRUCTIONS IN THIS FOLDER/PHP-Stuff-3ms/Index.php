<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    include 'connectDB.php';
    $objDB = new connectDB;
    $conn = $objDB->connect();

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "POST":
            $user = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO studenttable users(studentID, studentName, studentClass, studentPicture) VALUES(null, :studentName, :studentClass, studentPicture)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':studentName', $user->studentName);
            $stmt->bindParam(':studentClass', $user->studentClass);
            $stmt->bindParam(':studentPicture', $user->studentPicture);
            if($stmt->execute()){
                $response = ['status' => 1, 'message' => 'Recorded'];
            }
            else{
                $response = ['status' => 0, 'message' => 'Recording failed'];
            }
            break;
    }
?>
