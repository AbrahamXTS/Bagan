<img src="img/tituloo.png">


Guía para la sesión práctica del equipo Bagan explicado con peras y manzanas para poder aprobar la materia.

#### Pasaremos de esto: 

<img src="img/vistaIncial.png">

#### A esto: 

<img src="img/vistaTerminada.png">

#### ¡IMPORTANTE!

Antes de comenzar es necesario diferenciar dos conceptos que suelen confundirse con regularidad ya que los estaremos utilizando con frecuencia durante la sesión.

#### Padding y Margin 

**Padding**: El área de padding es el espacio entre el contenido del elemento y su borde

<img src="img/padding.png">

**Margin**: Es el espacio entre un elemento y los elementos adyacentes

<img src="img/margin.png">


### 1. Body

**body**: Para las pantallas de escritorio usaremos la etiqueta **pt-10** que nos incluirá un padding top equivalente a 40 px. 

Para personalizar la estructura de nuestro página usaremos dos media queries; uno utilizara un padding top de 14 y un padding x de 3 y el otro solo necesita un padding x de 36 que será la mejor opción para dispositivos móviles.

#### Resultado del elemento Body:
<img src="img/Body.png" width="700">

### 2. Nav 

Dentro de la barra de navegación encontramos el nombre de la empresa y los elementos necesarios para navegar por la página.

**nav**: Centraremos todos los elementos y les daremos el espaciado correspondiente con las etiquetas **flex items-center justify-between**

#### Resultado del elemento nav:
<img src="img/navIndividual.png" width="700">

**p**: Al nombre de la empresa le daremos un tamaño de 2xl, estará en negritas y le pondremos un color índigo con las etiquetas **text-2xl  font-bold text-indigo-800**

#### Resultado del elemento p:
<img src="img/pNav.png" width="700">

**div**: Nuestra barra de navegación se ocultará cuando la pantalla sea para la de un dispositivo móvil y utilizaremos **hidden** para lograr esto; mientras que para pantallas mayores la posicionaremos de manera horizontal con un espaciado entre sí de 8 con las etiquetas **md:flex md:gap-8***

#### Resultado final del Nav:
<img src="img/Nav.png">

### 3. Main

**Main**: Tendrá un margin top para ordenadores de tamaño 48 px y lo haremos posible con la etiqueta **mt-12** y para pantallas más pequeñas utilizaremos un media query con un margin top de 112 px **md:mt-28**.

Cuando tenemos varios elementos que necesitamos modificar de manera tanto vertical y horizontal utilizamos grid en vez de flex y en este caso utilizamos **grid grid-cols-1 md:grid-cols-2**.


#### Resultado del elemento main:
<img src="img/main.png" width="700">


**div**: Nuestro contenedor se compone del título, descripción y botón; necesitamos el estilo flex pero dirigido a las columnas para poder ordenarlos y alinearlos al centro con un espaciado de ocho y lo logramos con las etiquetas **flex flex-col gap-8 justify-center**.

#### Resultado del elemento div:
<img src="img/divBody.png" width="700">

**h**: Nuestro título tendrá un tamaño de 36 px y estará en negritas y por ello utilizamos los estilos **text-4xl font-bold**.

#### Resultado del elemento h1:
<img src="img/h1.png" width="700">


**p**: Nuestro párrafo tendrá un tamaño de 18 px y será de color gris gracias a las etiquetas **text-lg text-gray-500**

#### Resultado del elemento p:
<img src="img/pMain.png" width="700">

**a**: Nuestro botón tendrá el texto color blanco y centrado; mientras que la estructura será de color indigo, con bordes de 24 px y con un padding personalizado y se logra con los siguientes estilos **text-white text-center bg-indigo-800 rounded-3xl py-2.5 md:w-40**
 
#### Resultado del elemento a:
<img src="img/aMain.png" width="700">

**img**: Nuestra imagen tendrá un padding top de 64 px **pt-16 md:pt-0**

#### Resultado del elemento img:
<img src="img/imgMain.png" width="700">

#### Resultado Final:
<img src="img/final.png">








