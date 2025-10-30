document.addEventListener("DOMContentLoaded", function(){

const ListaN = ["pepito", "paco", "pedro", "luis", "maria", "lucia"];
    const nombre = document.getElementById("nombre");
    const random = document.getElementById("random");
    let index = 0;
    random.addEventListener("click", () => {
        index=Math.floor(Math.random() * ListaN.length);
        nombre.textContent=ListaN[index]
    })




})


//ARRAYS--
document.addEventListener("DOMContentLoaded", function () {
    const ListaF = ["platano", "fresa", "piña", "melon", "sandia", "melocoton", "papaya", "pitaya", "uva", "pera"];
    const fruta = document.getElementById("fruta");
    const press1 = document.getElementById("press1");
    let resultado = 0;
    press1.addEventListener("click", function () {
        let resultado = Math.floor(Math.random() * ListaF.length);
        fruta.textContent = ListaF[resultado];
    });



});

document.addEventListener("DOMContentLoaded", function () {
    const ListaX = ["nube", "montaña", "robot", "caramelo", "guitarra", "planeta", "mariposa", "fantasma", "cohete", "tormenta"];
    const ListaY = ["sol", "luna", "estrella", "río", "bosque", "arena", "cascada", "viento", "nieve", "relámpago"];
    const array1 = document.getElementById("array1");
    const array2 = document.getElementById("array2");
    const press2 = document.getElementById("press2");
    const concatenar = document.getElementById("concatenar");
    let resultado_dos = 0;
    let resultado_tres = 0;
    press2.addEventListener("click", function () {
        resultado_dos = Math.floor(Math.random() * ListaX.length);
        resultado_tres = Math.floor(Math.random() * ListaY.length);
        array1.textContent = ListaX[resultado_dos] + " ";
        array2.textContent = ListaY[resultado_tres];
        let longitud = ListaX[resultado_dos] + ListaY[resultado_tres];
        concatenar.textContent = longitud.length;

    })


})

