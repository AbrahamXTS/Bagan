<?php 
    require("../includes/encript.php");
	require("../includes/database.php");

    $mail = strtolower($_POST["email"]);
    $password = $_POST["contrasena"];

    $resultado = mysqli_query($db, "SELECT EXISTS (SELECT * FROM usuarios WHERE correo_electronico = '$mail');");
    $fila = mysqli_fetch_row($resultado);

    if ($fila[0] == "1") {  
        $datos = mysqli_query($db, "SELECT contrasena FROM usuarios WHERE correo_electronico = '$mail'");
        $row = $datos->fetch_assoc();
    
        if ($password == $desencriptar($row['contrasena'])) {
            echo "Inicio de sesión correcto.";
        } else {
            echo "Los datos ingresados son incorrectos.";
        }
    } else {
        echo "El usuario ingresado no existe.";
    }

    mysqli_close($db);
?>