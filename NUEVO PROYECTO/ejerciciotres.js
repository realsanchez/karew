// Esperamos a que toda la página esté cargada antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {

    // Buscamos el lugar en la página donde se mostrará la respuesta
    const solucion = document.getElementById("solucion");

    // Buscamos el botón que dice "RESPUESTA CORRECTA"
    const press = document.getElementById("press");

    // Buscamos el botón que dice "LONGITUD"
    const caracteres = document.getElementById("caracteres");

    // Buscamos el botón que dice "RESPUESTA ERRÓNEA"
    const press_uno = document.getElementById("press_uno");

    // Guardamos el texto que queremos mostrar cuando acierten
    let respuesta = "Elefante";

    // Guardamos el texto que queremos mostrar cuando se equivoquen
    let respuesta_erronea = "Cebolla";


    // 🟢 Cuando se hace clic en el botón "RESPUESTA CORRECTA"...
    press.addEventListener("click", function () {

        // Agregamos un espacio al final del texto (para separar si se repite)
        solucion.textContent += " ";

        // Escribimos la palabra correcta "Elefante" en el lugar de la respuesta
        solucion.textContent += respuesta;

        // Borramos la palabra equivocada "Cebolla" si estaba antes
        solucion.textContent = solucion.textContent.replaceAll("Cebolla", "");

        // Ahora en pantalla solo aparecerá "Elefante" (y se puede repetir si pulsas varias veces)
    });

    // 🔴 Cuando se hace clic en el botón "RESPUESTA ERRÓNEA"...
    press_uno.addEventListener("click", function () {

        // Agregamos un espacio al final del texto (para separar si se repite)
        solucion.textContent += " ";

        // Borramos la palabra correcta "Elefante" si estaba antes
        solucion.textContent = solucion.textContent.replaceAll("Elefante", "");

        // Mostramos en pantalla la palabra equivocada "Cebolla"
        solucion.textContent += respuesta_erronea;
    });

    // 📏 Cuando se hace clic en el botón "LONGITUD"...
    caracteres.addEventListener("click", function () {

        // Mostramos en pantalla cuántos caracteres tiene el texto que hay en "solucion"
        // Por ejemplo, si dice "Elefante", mostrará "8"
        longitud.textContent = solucion.textContent.length;

    });

});
