<?php
$commonFields = "id,name,detail_1 AS year,image_large";
$snippetField = "LEFT(detail_5,100) AS snippet";//LEFT(description,100) AS snippet

$commonWhere = "status=1 AND image_large!=''";
$tablename = "catalogue";
if($_REQUEST['itemID']) $itemID = $_REQUEST['itemID'];

if($ctrlSQL=="block_1Ctrl"){
    $ctrlQuery = "SELECT $commonFields FROM $tablename WHERE $commonWhere AND category=3 ORDER BY upload_date DESC LIMIT 9";
}elseif($ctrlSQL=="block_2Ctrl"){
    $ctrlQuery = "SELECT id,name,detail_1 AS YouTubeID,image_large FROM $tablename WHERE status=1 AND category=7 ORDER BY upload_date DESC LIMIT 4";
}elseif($ctrlSQL=="block_3Ctrl"){
    $ctrlQuery = "SELECT $commonFields,price,$snippetField FROM $tablename WHERE $commonWhere AND category=2 ORDER BY upload_date DESC LIMIT 3";
}elseif($ctrlSQL=="portfolioCtrl"){
    $ctrlQuery = "SELECT $commonFields,$snippetField,category AS categoryID FROM $tablename WHERE $commonWhere AND category=6 ORDER BY upload_date DESC";
}elseif($ctrlSQL=="staffCtrl"){
    $ctrlQuery = "SELECT $commonFields,$snippetField,category AS categoryID FROM $tablename WHERE $commonWhere AND category=8 AND subcategory=14 ORDER BY upload_date DESC";
}elseif($ctrlSQL=="itemPreviewCtrl"){
    $ctrlQuery = "SELECT $commonFields,$snippetField FROM $tablename WHERE id=$itemID";
}elseif($ctrlSQL=="itemDetailsCtrl"){
    $ctrlQuery = "SELECT $commonFields,category AS categoryID,detail_5 as snippetFull, description FROM $tablename WHERE id=$itemID OR id_xtra=$itemID ORDER BY id ASC,position_initem ASC";
}