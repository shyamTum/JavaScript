<?php

$handle = fopen("profiles.txt", "a");

foreach($_POST as $variable => $value) {

   fwrite($handle, $value);

   fwrite($handle, "\n");

}

fwrite($handle, "\n");

fclose($handle);

exit;

?>