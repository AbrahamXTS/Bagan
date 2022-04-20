<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8" />
	<title>CecatiApp | Inicio de sesión</title>
	<link href="../dist/output.css" rel="stylesheet" />
	<link rel="shortcut icon" href="img/logo.png" type="image/x-icon">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body>
	<header class="container text-center mx-auto md:mt-10">
		<img src="img/logo.png" alt="Logo" class="mx-auto mt-5 w-24 md:w-36 md:h-36">
		<h1 class="text-rojo font-bold text-4xl my-7">Inicio de sesión</h1>
		<h2 class="font-bold text-xl">¡Bienvenido de vuelta!</h2>
	</header>

	<main class="container mt-16 mx-auto xl:w-1/2">
		<!-- Cambiar la ruta -->
		<form class="flex flex-col mx-5" method="POST" action="./functions/handleFormLogin.php">
			<div class="w-full relative">
				<input class="w-full rounded-xl border-2 border-gris py-3 pl-12 my-3 placeholder-texto" type="email" name="email" placeholder="Ejemplo@dcfgt.cecati.com" />
				<svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D43031" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <rect x="3" y="5" width="18" height="14" rx="2" /> <polyline points="3 7 12 13 21 7" /> </svg>
			</div>
			<div class="w-full relative">
				<input class="w-full rounded-xl border-2 border-gris py-3 pl-12 pr-4 my-3 placeholder-texto" type="password" name="contrasena" placeholder="Contraseña" />
				<svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D43031" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="8" cy="15" r="4" /> <line x1="10.85" y1="12.15" x2="19" y2="4" /> <line x1="18" y1="5" x2="20" y2="7" /> <line x1="15" y1="8" x2="17" y2="10" /> </svg>
			</div>
			<!-- Implementar -->
			<button disabled class="text-rojo text-center mt-3 md:text-right">¿Olvidaste tu contraseña?</button>
			<input type="submit" class="rounded-lg p-3 bg-rojo cursor-pointer mt-16 mb-6 text-[white]" value="INICIAR SESIÓN">
			<!-- Cambiar la ruta -->
			<a href="./views/registrarse.php" class="text-center text-rojo mb-9">Registrar nueva cuenta</a>
		</form>
	</main>
</body>

</html>