//OBJETOS--


/*const objeto = {
    nombre: "JAVI SANCHEZ"
}
console.log("EL NOMBRE ES", objeto.nombre);

const nombres_clase = {
    nombre1: "Fernando",
    nombre2: "Alonso",
    nombre3: "Pamela",
    nombre4: "Javi S",
    nombre5: "Dani",
    nombre6: "Andres",
    nombre7: "Lucia",
    nombre8: "May",
    nombre9: "Halet",
    nombre10: "Juanma",
    nombre11: "Samu",
    nombre12: "Gustavo",
    nombre13: "Edouard",
    nombre14: "Elena",
    nombre15: "Maria"
    
}
let variable="nombre14";
console.log("El nombre que buscamos es", nombres_clase[variable]);

/////////////////////////////////////////////////
const datos = {
    nombre: "Tony",
    apellido: "Losada",
    email: "losada@hotmail.zxc",
    password: "12345678",
    direccion: "c/falsa 123",
    nickname: "Titojuanjo"

}
console.log( "nombre", datos.nombre);
console.log("apellido" ,datos.apellido);
console.log("email" ,datos.email);
console.log("passwprd",datos.password);
console.log("direccion" ,datos.direccion);
console.log("nickname", datos.nickname);

/////////////////////////////////////////

const objeto2 = {
    color: "naranjaaaaaa",
    textura: "tal",
    otra: "kdfhkasjdf"

}
// let variable="color";
// console.log("el objeto es: ", objeto.color)
const selector = document.getElementById("selector");
const valor = document.getElementById("valor");
valor.textContent = objeto[selector.value];
console.log(selector.value)
selector.addEventListener("change", () => {
    valor.textContent = objeto[selector.value];
  

})*/

// Creamos un objeto llamado "objeto1"
// Es como una cajita que guarda información con nombres (propiedades) y sus valores
const objeto1 = {
    color: "naranjaaaaaa",
    textura: "tal",
    otra: "kdfhkasjdf"
};

// Guardamos el <body> del HTML (la parte principal de la página)
// para poder cambiarle el color de fondo más adelante
const body = document.body;

// Guardamos en una variable el elemento <select> que tiene el id="selector"
// Este es el menú desplegable que el usuario usa para elegir algo
const selector = document.getElementById("selector");

// Guardamos en otra variable el elemento <p> (o lo que sea) con el id="valor"
// Aquí vamos a mostrar el texto correspondiente a lo que el usuario eligió
const valor = document.getElementById("valor");

// Creamos una lista de colores posibles para cambiar el fondo de la página
const Listacolores = ["red", "blue", "yellow", "green", "black", "white"];

// Mostramos por primera vez el valor del objeto correspondiente a lo que está seleccionado en el menú
// Por ejemplo, si el selector tiene "color" seleccionado, muestra "naranjaaaaaa"
valor.textContent = objeto1[selector.value];

// Mostramos en la consola qué valor está seleccionado al inicio
console.log(selector.value);

// Añadimos un "escuchador" (listener) para cuando el usuario cambie la opción del menú
selector.addEventListener("change", () => {
    // Cuando el usuario elige otra opción,
    // cambiamos el texto mostrado por el valor correspondiente del objeto
    valor.textContent = objeto1[selector.value];

    // Luego elegimos un color aleatorio de la lista y lo ponemos de fondo del body
    // Math.random() da un número entre 0 y 1
    // Lo multiplicamos por la cantidad de colores en la lista (Listacolores.length)
    // y con Math.floor() redondeamos hacia abajo para que sea un número entero
    // Así elegimos un color al azar de la lista
    body.style.backgroundColor = Listacolores[Math.floor(Math.random() * Listacolores.length)];
});
