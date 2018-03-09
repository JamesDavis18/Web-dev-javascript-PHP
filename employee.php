<?php
//connect to the mysql
$db = @mysql_connect('localhost', 'root', 'usbw')
	or die("Could not connect Database");
@mysql_select_db('test_db', $db) or die("could not select database");

//database query
$sql = @mysql_query("select firstname, lastname from employee");

$rows = array();
while ($r = mysql_fetch_assoc($sql)) {
	$rows[] = $r;
}
//echo result as JSON
echo json_encode($rows);
?>