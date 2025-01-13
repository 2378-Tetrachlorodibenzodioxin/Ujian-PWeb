<?php
require_once 'config.php';

// Book Operations
function addBook($data) {
    global $pdo;
    try {
        $sql = "INSERT INTO book (ID_Buku, judul, pengarang, harga, ketersediaan, pub_ID) 
                VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        return $stmt->execute([
            $data['ID_Buku'],
            $data['judul'],
            $data['pengarang'],
            $data['harga'],
            $data['ketersediaan'],
            $data['pub_ID']
        ]);
    } catch(PDOException $e) {
        return false;
    }
}

function getBooks() {
    global $pdo;
    try {
        $stmt = $pdo->query("SELECT * FROM book");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch(PDOException $e) {
        return [];
    }
}

// Additional Book Operations
function updateBook($data) {
    global $pdo;
    try {
        $sql = "UPDATE book SET 
                judul = :judul,
                pengarang = :pengarang,
                harga = :harga,
                ketersediaan = :ketersediaan,
                pub_ID = :pub_ID 
                WHERE ID_Buku = :ID_Buku";
        
        $stmt = $pdo->prepare($sql);
        $result = $stmt->execute([
            ':judul' => $data['judul'],
            ':pengarang' => $data['pengarang'],
            ':harga' => $data['harga'],
            ':ketersediaan' => $data['ketersediaan'],
            ':pub_ID' => $data['pub_ID'],
            ':ID_Buku' => $data['ID_Buku']
        ]);

        error_log("Update result: " . ($result ? "success" : "failed"));
        return $result;
    } catch(PDOException $e) {
        error_log("Error updating book: " . $e->getMessage());
        return false;
    }
}

function deleteBook($ID_Buku) {
    global $pdo;
    try {
        // Log untuk debugging
        error_log("Attempting to delete book ID: " . $ID_Buku);
        
        $sql = "DELETE FROM book WHERE ID_Buku = :id";
        $stmt = $pdo->prepare($sql);
        $result = $stmt->execute([':id' => $ID_Buku]);
        
        // Log hasil
        error_log("Delete result: " . ($result ? "success" : "failed"));
        
        return $result;
    } catch(PDOException $e) {
        error_log("Error deleting book: " . $e->getMessage());
        return false;
    }
}

// Member Operations
function addMember($data) {
    global $pdo;
    try {
        $sql = "INSERT INTO anggota (memb_ID, memb_Name, address, memb_Type, memb_Info, expiry_date) 
                VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        return $stmt->execute([
            $data['memb_ID'],
            $data['memb_Name'],
            $data['address'],
            $data['memb_Type'],
            $data['memb_Info'],
            $data['expiry_date']
        ]);
    } catch(PDOException $e) {
        return false;
    }
}

// Additional Member Operations
function updateMember($data) {
    global $pdo;
    try {
        $sql = "UPDATE anggota SET memb_Name = ?, address = ?, memb_Type = ?, 
                memb_Info = ?, expiry_date = ? WHERE memb_ID = ?";
        $stmt = $pdo->prepare($sql);
        return $stmt->execute([
            $data['memb_Name'],
            $data['address'],
            $data['memb_Type'],
            $data['memb_Info'],
            $data['expiry_date'],
            $data['memb_ID']
        ]);
    } catch(PDOException $e) {
        return false;
    }
}

function deleteMember($memb_ID) {
    global $pdo;
    try {
        $sql = "DELETE FROM anggota WHERE memb_ID = ?";
        $stmt = $pdo->prepare($sql);
        return $stmt->execute([$memb_ID]);
    } catch(PDOException $e) {
        return false;
    }
}

function getMembers() {
    global $pdo;
    try {
        $stmt = $pdo->query("SELECT * FROM anggota");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch(PDOException $e) {
        return [];
    }
}

// Publisher Operations
function addPublisher($data) {
    global $pdo;
    try {
        $sql = "INSERT INTO publisher (pub_ID, name, address) VALUES (?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        return $stmt->execute([
            $data['pub_ID'],
            $data['name'],
            $data['address']
        ]);
    } catch(PDOException $e) {
        return false;
    }
}

function getPublishers() {
    global $pdo;
    try {
        $stmt = $pdo->query("SELECT * FROM publisher");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch(PDOException $e) {
        return [];
    }
}

// Additional Publisher Operations
function updatePublisher($data) {
    global $pdo;
    try {
        $sql = "UPDATE publisher SET name = ?, address = ? WHERE pub_ID = ?";
        $stmt = $pdo->prepare($sql);
        return $stmt->execute([
            $data['name'],
            $data['address'],
            $data['pub_ID']
        ]);
    } catch(PDOException $e) {
        return false;
    }
}

function deletePublisher($pub_ID) {
    global $pdo;
    try {
        $sql = "DELETE FROM publisher WHERE pub_ID = ?";
        $stmt = $pdo->prepare($sql);
        return $stmt->execute([$pub_ID]);
    } catch(PDOException $e) {
        return false;
    }
}

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
} catch(PDOException $e) {
    error_log("Connection failed: " . $e->getMessage());
    die("Connection failed: " . $e->getMessage());
}
?>