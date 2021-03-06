<img src="img/titulo.png">

Guía para la sesión práctica del equipo Bagan explicado con peras y manzanas para poder aprobar la materia.

#### Pasaremos de esto: 

<img src="img/vistaIncial.png">

#### A esto: 

<img src="img/vistaTerminada.png">

## ¡IMPORTANTE!

Antes de comenzar es necesario diferenciar dos conceptos que suelen confundirse con regularidad ya que los estaremos utilizando con frecuencia durante la sesión.

#### Padding y Margin 

**Padding**: El área de padding es el espacio entre el contenido del elemento y su borde

<img src="img/padding.png">

**Margin**: Es el espacio entre un elemento y los elementos adyacentes

<img src="img/margin.png">

### 1. Body

**body**: Para las pantallas de escritorio usaremos la etiqueta **pt-14** que nos incluirá un padding top equivalente a 40 px y un padding en x de 36 todo ello con ayuda del media querie `lg`. 

Como mencionamos anteriormente, Tailwind está basado en first mobile, por lo tanto, los estilos que apliquemos sin media queries, serán directamente aplicados a la vista mobile. Utilizaremos un padding top de 10 y un padding x de 3 que será la mejor opción para dispositivos móviles.

#### Resultado del elemento Body:

```js
<body class="pt-10 lg:pt-14 px-3 lg:px-36">
```

### 2. Nav 

Dentro de la barra de navegación encontramos el nombre de la empresa y los elementos necesarios para navegar por la página.

**nav**: Centraremos todos los elementos verticalmente y daremos un espaciado entre los elementos hijos con las etiquetas **flex items-center justify-between**

#### Resultado del elemento nav:
```js
<nav class="flex items-center justify-between">
```

**p**: Al nombre de la empresa le daremos un tamaño de 2xl, estará en negritas y le pondremos un color índigo con las etiquetas **text-2xl  font-bold text-indigo-800**

#### Resultado del elemento p:
```js
<p class="text-2xl text-indigo-800 font-bold">Vircares</p>
```

**div**: Nuestra barra de navegación se ocultará cuando la pantalla sea para la de un dispositivo móvil y utilizaremos **hidden** para lograr esto; mientras que para pantallas mayores la posicionaremos de manera horizontal con un espaciado entre sí de 8 con las etiquetas **md:flex md:gap-8**

#### Resultado del elemento div:
```js
<div class="hidden md:flex md:gap-8">
```

#### Resultado final del Nav:
```js
<nav class="flex items-center justify-between">
    <p class="text-2xl text-indigo-800 font-bold">Vircares</p>
    <div class="hidden md:flex md:gap-8">
      <a href="/">Inicio</a>
      <a href="#">Encuentra tu doctor</a>
      <a href="#">Nuestra app</a>
      <a href="#">Testimonios</a>        
      <a href="#">Acerca de nosotros</a>
    </div>
</nav>
```

### 3. Main

**Main**: Tendrá un margin top de tamaño 48 px y lo haremos posible con la etiqueta **mt-12** y para pantallas más grandes utilizaremos un media query con un margin top de 112 px **md:mt-28**.

Cuando tenemos varios elementos que necesitamos modificar de manera tanto vertical y horizontal utilizamos grid en vez de flex y en este caso utilizamos **grid grid-cols-1 md:grid-cols-2**.

#### Resultado del elemento main
```js
<main class="mt-12 md:mt-28 grid grid-cols-1 md:grid-cols-2">
```

**div**: Nuestro contenedor se compone del título, descripción y botón; necesitamos el estilo flex pero dirigido a las columnas para poder ordenarlos y alinearlos al centro con un espaciado de ocho y lo logramos con las etiquetas **flex flex-col gap-8 justify-center**.

#### Resultado del elemento div:
```js
<div class="flex flex-col gap-8 justify-center">
```

**h1**: Nuestro título tendrá un tamaño de 36 px y estará en negritas y por ello utilizamos los estilos **text-4xl font-bold**.

#### Resultado del elemento h1:
```js
<h1 class="text-4xl font-bold leading-tight">Asistencia médica virtual para ti!</h1>
```

**p**: Nuestro párrafo tendrá un tamaño de 18 px y será de color gris gracias a las etiquetas **text-lg text-gray-500**

#### Resultado del elemento p:

```js
<p class="text-lg text-gray-500">
  Vircares brinda atención médica progresiva y asequible
  en dispositivos móviles y en línea
  para todo el mundo.
</p>
```

**a**: Nuestro botón tendrá el texto color blanco y centrado; mientras que la estructura será de color indigo, con bordes de 24 px y con un padding personalizado y se logra con los siguientes estilos **text-white text-center bg-indigo-800 rounded-3xl py-2.5 md:w-40**
 
#### Resultado del elemento a:

```js
<a href="#" class ="text-white text-center bg-indigo-800 rounded-3xl py-2.5 md:w-40">Consulta hoy</a>
```

**img**: Nuestra imagen tendrá un padding top de 64 px para pantallas de celulares **pt-16** y de 0 px para pantallas más grandes **md:pt-0**

#### Resultado del elemento img:

```js
<img src="https://abrahamespinosa.mx/img/healthcare.svg" class="pt-16 md:pt-0"/>
```
### Resultado Final:

```js
<body class="pt-10 lg:pt-14 px-3 lg:px-36">
  <nav class="flex items-center justify-between">
    <p class="text-2xl text-indigo-800 font-bold">Vircares</p>
    <div class="hidden md:flex md:gap-8">
      <a href="/">Inicio</a*>
      <a href="#">Encuentra tu doctor</a*>
      <a href="#">Nuestra app</a*>
      <a href="#">Testimonios</a*>        
      <a href="#">Acerca de nosotros</a>
    </div>
  </nav>
  
  <main class="mt-12 md:mt-28 grid grid-cols-1 md:grid-cols-2">
    <div class="flex flex-col gap-8 justify-center">
      <h1 class="text-4xl font-bold leading-tight">Asistencia médica virtual para ti!</h1>
      <p class="text-lg text-gray-500">
        Vircares brinda atención médica progresiva y asequible
        en dispositivos móviles y en línea
        para todo el mundo.
      </p>
      <a href="#" class ="text-white text-center bg-indigo-800 rounded-3xl py-2.5 md:w-40">Consulta hoy</a>
    </div>
    <img src="https://abrahamespinosa.mx/img/healthcare.svg" class="pt-16 md:pt-0"/>
  </main>
</body>
```