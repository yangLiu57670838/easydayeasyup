<?php

define('DB_NAME', 'edeu');
define('DB_USER', 'lhua196429');
define('DB_PASSWORD', 'Lhua196429');
//define('DB_HOST', 'localhost');
define('DB_HOST', '166.62.28.110');


//define('DB_NAME', 'internal');
//define('DB_USER', 'root');
//define('DB_PASSWORD', '');
//define('DB_HOST', 'localhost');

$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$link) {
die('Could not connect: ' . mysql_error());
}

$db_selected = mysql_select_db(DB_NAME, $link);

if (!$db_selected) {
die('Can\'t use ' . DB_NAME . ': ' . mysql_error());
}
?>
