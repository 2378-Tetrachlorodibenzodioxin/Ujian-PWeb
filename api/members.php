<?php
header('Content-Type: application/json');
require_once '../operations.php';

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        echo json_encode(getMembers());
        break;
    
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $result = addMember($data);
        echo json_encode(['success' => $result]);
        break;

    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $result = updateMember($data);
        echo json_encode(['success' => $result]);
        break;

    case 'DELETE':
        $memb_ID = $_GET['memb_ID'];
        $result = deleteMember($memb_ID);
        echo json_encode(['success' => $result]);
        break;
}
?>