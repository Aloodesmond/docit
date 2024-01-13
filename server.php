<?php
include "dbconn.php";

//data insertion

if($_GET["action"] === "insertData") {
    if(!empty($_POST["docname"]) && !empty($_POST["doctype"]) && !empty($_POST["upname"]) && $_FILES["documents"] ["size"] = 0)

        {
            else{
                echo json_encode([
                    "statusCode" => 500,
                ])
            }
        }

}
?>