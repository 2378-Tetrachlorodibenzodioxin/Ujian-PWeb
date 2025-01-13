<?php
header('Content-Type: application/json');
require_once '../operations.php';

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        echo json_encode(getPublishers());
        break;
    
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $result = addPublisher($data);
        echo json_encode(['success' => $result]);
        break;

    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $result = updatePublisher($data);
        echo json_encode(['success' => $result]);
        break;

    case 'DELETE':
        $pub_ID = $_GET['pub_ID'];
        $result = deletePublisher($pub_ID);
        echo json_encode(['success' => $result]);
        break;
}
?>