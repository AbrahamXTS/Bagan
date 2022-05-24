<?php

require __DIR__ . '../../../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

$db = mysqli_connect($_ENV["DB_HOST"], $_ENV["DB_USER"], $_ENV["DB_PASSWORD"], $_ENV["DB_DATABASE"]);

if (!$db) {
    echo("Error en la conexión");
    exit; // Termina la ejecución del archivo si encuentra un error.
}

?>
