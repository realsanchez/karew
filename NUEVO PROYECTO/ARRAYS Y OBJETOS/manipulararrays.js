// Creamos una lista (array) con 4 elementos: tres strings y un número
const lista=["hola", "como", "estas", 3];

// Mostramos en consola la lista completa
console.log(lista)

// Cambiamos el valor del primer elemento (posición 0) a "pamela"
lista[0]="pamela";

// Mostramos la lista actualizada
console.log(lista);

// Cambiamos el valor del primer elemento a una cadena vacía ("")
lista[0]="";

// Mostramos la lista con el primer elemento vacío
console.log(lista);

// Borramos el primer elemento, pero OJO: deja un "hueco" (undefined) en esa posición
delete lista[0];

// Mostramos la lista con el hueco
console.log(lista);

// Añadimos al final del array el texto "holi"
lista.push("holi");

// Mostramos la lista con el nuevo elemento al final
console.log(lista);

// Quitamos el último elemento del array
lista.pop();

// Mostramos la lista después de quitar el último elemento
console.log(lista);

// Usamos splice para eliminar 1 elemento a partir de la posición 0 (el primero)
lista.splice(0, 1);

// Mostramos la lista después de eliminar el primer elemento
console.log(lista);

// Usamos splice para eliminar 1 elemento a partir de la posición 1
lista.splice(1, 1);

// Mostramos la lista después de eliminar ese elemento
console.log(lista);

// Añadimos "hola de nuevo" al inicio del array
lista.unshift("hola de nuevo");

// Mostramos la lista con el nuevo elemento al principio
console.log(lista);

// Quitamos el primer elemento del array
lista.shift();

// Mostramos la lista final después de quitar el primero
console.log(lista);
// Mostramos en consola el objeto "cocina" (debe existir previamente)
console.log(cocina);
//////////////////////////
// Agregamos una nueva propiedad llamada "tamaño" al objeto "cocina"
// y le asignamos un array con varios valores
cocina.tamaño = ["20cm", "35cm", "12cm", "16"];

// Mostramos en consola el objeto "cocina" ya con la nueva propiedad "tamaño"
console.log(cocina);

// Borramos la propiedad "ingredientes" del objeto "cocina"
delete cocina.ingredientes;
// Mostramos en consola el objeto "cocina" sin la propiedad "ingredientes"
console.log(cocina);

///////////////////////////////
// Creamos una variable llamada "texto" que contiene un texto con formato JSON (aunque está mal escrito)
// OJO: este JSON tiene errores de sintaxis (usa ":" en lugar de comas para separar los pares clave-valor)
let texto = '{"tamañp" :"10m" :  "peso": "5kg" : "cantidad" : "5" }';

// Intentamos convertir el texto JSON a un objeto de JavaScript usando JSON.parse()
// Esto dará error por el formato incorrecto del JSON
let jsonTraducido = JSON.parse(texto);

// Mostramos en consola el objeto resultante de la conversión (si funcionara)
console.log(jsonTraducido);

// Convertimos el objeto "jsonTraducido" de nuevo a texto JSON y lo mostramos
console.log(JSON.stringify(jsonTraducido));
