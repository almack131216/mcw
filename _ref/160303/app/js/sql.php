<?php
$commonFields = "id,name,detail_1 AS year,image_large";
$commonWhere = "status=1 AND image_large!=''";

if($ctrlSQL=="thisWeekCtrl"){
    $ctrlQuery = "SELECT $commonFields FROM `catalogue` WHERE $commonWhere AND category=3 ORDER BY upload_date DESC LIMIT 9";
}elseif($ctrlSQL=="forSaleCtrl"){
    $ctrlQuery = "SELECT $commonFields,price,LEFT(description,100) AS snippet FROM `catalogue` WHERE $commonWhere AND category=2 ORDER BY upload_date DESC LIMIT 3";
}elseif($ctrlSQL=="videosCtrl"){
    $ctrlQuery = "SELECT $commonFields FROM `catalogue` WHERE $commonWhere AND category=2 ORDER BY upload_date DESC LIMIT 4";
}