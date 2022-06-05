<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    include 'connectDB.php';
    $objDB = new connectDB;
    $conn = $objDB->connect();

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case "GET":
            $sql = "SELECT * FROM studenttable";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && is_numeric($path[3])) {
                $sql .= " WHERE studentID = :studentID";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':studentID', $path[3]);
                $stmt->execute();
                $users = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $conn->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }

        case "POST":
            $user = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO studenttable (studentName, studentClass, studentPicture) VALUES(:studentName, :studentClass, :studentPicture)";
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
        
        case "PUT":
            $user = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE studenttable SET studentName= :studentName, studentClass= :studentClass, studentPicture= :studentPicture,  WHERE studentID = :studentID";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':studentID', $user->studentID);
            $stmt->bindParam(':studentName', $user->studentName);
            $stmt->bindParam(':studentClass', $user->studentClass);
            $stmt->bindParam(':studentPicture', $user->studentPicture);
        
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
        case "DELETE":
            $sql = "DELETE FROM studenttable WHERE studentID = :studentID";
            $path = explode('/', $_SERVER['REQUEST_URI']);

            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':studentID', $path[3]);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
    }
?>
