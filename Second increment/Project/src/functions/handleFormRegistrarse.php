<?php 
    require("../includes/encript.php");
	require("../includes/database.php");

    $nombre = $_POST["nombre"];
    $mail = strtolower($_POST["email"]);
    $password = $encriptar($_POST["contrasena"]);

    $resultado = mysqli_query($db, "SELECT EXISTS (SELECT * FROM usuarios WHERE correo_electronico = '$mail');");
    $fila = mysqli_fetch_row($resultado);

    if ($fila[0] == "1") {  
        echo "El email ingresado ya existe dentro del sistema.";
    } else {
        if (mysqli_query($db, "INSERT INTO usuarios (nombre, correo_electronico, contrasena) VALUES ('$nombre', '$mail', '$password')")) {
            echo "Registro creado correctamente.";
        }
    }   

    mysqli_close($db);
?>
