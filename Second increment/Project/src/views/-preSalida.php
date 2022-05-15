<?php 

	require("../includes/cabecera.php"); 
	require("../includes/database.php");

	$resultado = mysqli_query($db, "SELECT area FROM areas");
	$fila = mysqli_fetch_all($resultado);
?>

<body class="bg-gris-claro">


</body>
</html>