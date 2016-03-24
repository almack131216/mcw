<?php

if($_REQUEST['ctrlSQL']) $ctrlSQL = $_REQUEST['ctrlSQL'];

include('sql.php');
include('config.php');

$db = new DB();

$data = $db->qryFire();

echo json_encode($data);