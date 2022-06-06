<?php 
	class connectDB {
		private $server = 'localhost';
		private $dbname = 'studentdatabase';
		private $user = 'root';
		private $pass = 'rootpassword';

		public function connect() {
			try {
				$conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, 'admin', 'admin123');
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conn;
			} catch (\Exception $e) {
				echo "Database Error: " . $e->getMessage();
			}
		}
		
	}
 ?>