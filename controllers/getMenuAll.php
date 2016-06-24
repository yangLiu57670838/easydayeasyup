<?php
include 'connect.php';
$data = array();
$query = mysql_query("SELECT * FROM storemenu");
while ($rows = mysql_fetch_array($query))
{
    $data[] = $rows;
}

// print json_encode($data);
echo json_encode($data);

 mysql_close($link);

?>