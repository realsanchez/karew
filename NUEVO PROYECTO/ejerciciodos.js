document.addEventListener("DOMContentLoaded", function () {

    const frase = [" HOLA ", " MUNDO ", " ESTAMOS ", " PROGRAMANDO ", " EN ", " DIRECTO "];

    concatenar.addEventListener("click", function () {
        
        resultado.textContent = frase + frase.length;
        resultado_dos.style.display = "none";
        resultado.style.display = "block";


    });
    const palabras = [" EN ", "VERDAD  ", " NO ", " HACEMOS ", " NAH "];
    
    let resultado_dos = document.getElementById("resultado_dos");
    concatenar_dos.addEventListener("click", function () {
        
        resultado_dos.textContent = palabras + palabras.length;
        resultado.style.display = "none";
        resultado_dos.style.display = "block";
    })
});
