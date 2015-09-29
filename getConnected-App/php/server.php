<?php


	if($_GET['serveruser'] == "admin")
	{ 
		http_response_code(200);
	}
	else
	{
		http_response_code(404);
	}


exit;
?>