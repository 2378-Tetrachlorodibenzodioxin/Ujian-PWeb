<?php
header('Content-Type: application/json');
require_once '../operations.php';

$method = $_SERVER['REQUEST_METHOD'];
$response = ['success' => false, 'message' => ''];

switch($method) {
    case 'GET':
        if(isset($_GET['id'])) {
            $book = getBookById($_GET['id']);
            if($book) {
                echo json_encode($book);
            } else {
                http_response_code(404);
                echo json_encode(['message' => 'Book not found']);
            }
        } else {
            $books = getBooks();
            echo json_encode($books);
        }
        break;
    
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        if($data) {
            $result = updateBook($data);
            if($result) {
                $response['success'] = true;
                $response['message'] = 'Book updated successfully';
            } else {
                $response['message'] = 'Failed to update book';
                http_response_code(500);
            }
        } else {
            $response['message'] = 'Invalid data received';
            http_response_code(400);
        }
        echo json_encode($response);
        break;
}
?>