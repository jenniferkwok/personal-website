<?php
if($_POST["message"]) {
    mail("jenwkwok@gmail.com", "Form to email message", $_POST["message"], "From: jk@web.site");
}
?>