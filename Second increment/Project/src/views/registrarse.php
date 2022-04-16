<?php require("../includes/cabecera.php"); ?>

<body>
    <header class="container text-center mx-auto md:mt-8">
		<img src="../img/logo.png" alt="Logo" class="mx-auto mt-5 w-24 md:w-36 md:h-36">
		<h1 class="text-rojo font-bold text-4xl my-7">Crear cuenta</h1>
	</header>

    <main class="container mt-14 mx-auto xl:w-1/2">
		<form class="flex flex-col mx-5" method="POST" action="../functions/handleFormRegistrarse.php">
        <div class="w-full relative">
				<input class="w-full rounded-xl border-2 border-gris py-3 pl-12 my-3 placeholder-texto" type="text" name="nombre" placeholder="Nombre" />
				<svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D43031" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="12" cy="7" r="4" /> <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /> </svg>
			</div>
			<div class="w-full relative">
				<input class="w-full rounded-xl border-2 border-gris py-3 pl-12 my-3 placeholder-texto" type="email" name="email" placeholder="Correo electrónico" />
				<svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D43031" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <rect x="3" y="5" width="18" height="14" rx="2" /> <polyline points="3 7 12 13 21 7" /> </svg>
			</div>
			<div class="w-full relative">
				<input class="w-full rounded-xl border-2 border-gris py-3 pl-12 pr-4 my-3 placeholder-texto" type="password" name="contrasena" placeholder="Contraseña" />
				<svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D43031" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="8" cy="15" r="4" /> <line x1="10.85" y1="12.15" x2="19" y2="4" /> <line x1="18" y1="5" x2="20" y2="7" /> <line x1="15" y1="8" x2="17" y2="10" /> </svg>
			</div>
            <!-- <div class="w-full relative">
				<input class="w-full rounded-xl border-2 border-gris py-3 pl-12 pr-4 my-3 placeholder-texto" type="password" name="confirmacion" placeholder="Confirmar contraseña" />
				<svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-2/4 -translate-y-2/4" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#D43031" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <circle cx="8" cy="15" r="4" /> <line x1="10.85" y1="12.15" x2="19" y2="4" /> <line x1="18" y1="5" x2="20" y2="7" /> <line x1="15" y1="8" x2="17" y2="10" /> </svg>
			</div> -->
			<input type="submit" class="rounded-lg p-3 bg-rojo cursor-pointer mt-16 mb-6 text-[white]" value="CREAR CUENTA">
			<!-- Cambiar ruta -->
			<a href="/src" class="text-center mb-9">¿Ya tienes una cuenta? <span class="text-rojo">Inicia sesión</span></a>
		</form>
	</main>
</body>

</html>