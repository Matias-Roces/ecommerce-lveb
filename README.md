# E-Commerce en React + Vite para CoderHouse

El siguiente proyecto es una SPA que simula el front de un *E-Commerce* para el curso de React de la casa de estudios **CoderHouse**.

## Descripción de la aplicación

La tienda **La Vie Est Belle - Fragancias** es una tienda ubicada a una cuadra de la estación de tren *Temperley*, partido de *Lomas de Zamora*. Se solicitó una **SPA** donde los clientes puedan acceder a las fotos y la información de los productos, de manera tal que los clientes puedan dejar preparado su pedido mediante un carrito de compras para retirar en tienda, o para que se coordine algun tipo de envío de la compra. La SPA consta de *componentes fijos* y *componentes dinámicos*, que permiten una navegación fluida. Se utiliza la **base de datos de Firebase** para el almacenamiento de la información de los productos y de las compras realizadas.

### Componentes fijos:

#### Header

La app web consta de una barra de navegación responsiva que tiene:
* El brand de marca que sirve como hipervinculo para volver a la pagina inicial. 
* Un dropdown para filtrar los productos por categorías
* El acceso al carrito de compras.

#### Footer

También consta de un footer que permite volver al inicio, buscar el comercio en el mapa y acceder a las redes sociales de la tienda. 

### Componentes dinámicos

#### Productos

Este es el componente por defecto al abrir la SPA. Debajo de la barra de navegación aparecerán los productos disponibles para la compra con un boton *Ver detalle*. Dicho botón abre un nuevo componente donde se puede obtener la información del producto con su descripción.

#### Detalle del producto

Este componente muestra todos los datos del producto y añade un componente botonera que permite elegir la cantidad de productos que se desea enviar al carrito, un botón de enviar al carrito dicho producto, y otro para volver al componente inicial. 

#### Carrito de compras

Dentro de este componente se detallarán los productos que se desean comprar y ademas:
* Precio por unidad
* Subtotal por producto
* Total de la compra

Las ediciones posibles dentro de la compra son:
* Poder eliminar un producto no deseado en la compra
* Vaciar el carrito de compras completo 

Al intentar efectuar la compra se pide mediante un **formulario** los datos del comprador, cuyos datos se guardan en una base de datos para que el dueño de la tienda se ponga en contacto con el comprador, generando un ID de compra único. 

### Base de datos

La base de datos utilizada es la de Firebase, cuyo formato es no SQL. Se utilizan tan solo dos colecciones y un storage propio de la base de datos para las imagenes. Una de las colecciones se utiliza para el almacenamiento de los productos, y la otra, para el almacenamiento de las compras.

### GIF de navegación

![Alt text](<public/La Vie Est Belle - Fragancias.gif>)