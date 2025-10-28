

/*EJERCICIO 1 SUMA DE 2 NUMEROS EN EL CONSOLE -->*/
document.addEventListener("DOMContentLoaded", function () {

    let numero = 12;
    let numero_uno = 33;
    let resultado = numero + numero_uno;
    console.log(numero + " + " + numero_uno + " es " + resultado);


/*EECUACION DE SUMA Y MULTIPLICACION*/
    let numero_dos = 7;
    let numero_tres = 20;
    let numero_cuatro = 24;
    let resultado_dos = numero_dos + numero_tres * numero_cuatro;
    console.log(numero_dos + " + " + numero_tres + " * " + numero_cuatro + " es " + resultado_dos);
});

/*ECUACION REFLEJADA EN HTML*/
document.addEventListener("DOMContentLoaded", function () {
    let numero_uno = 12;
    let numero_dos = 33;
    let numero_tres = 45;
    let resultadofinal = 0;
    let counter = document.getElementById("resultadofinal");
    resultado.addEventListener("click", function () {
        counter.textContent = numero_uno + numero_dos * numero_tres;



    });
});
/*ECUACION EN HTML CON BOTONES*/
document.addEventListener("DOMContentLoaded", function () {

    let resultado_dos = 0
    let counter = document.getElementById("resultado_dos");
    
    sumar.addEventListener("click", function () {
         counter.textContent = resultado_dos++;
            });

    restar.addEventListener("click", function () {
        counter.textContent = resultado_dos--;
    });


    multiplicar.addEventListener("click", function () {
        counter.textContent = resultado_dos *= 2;

    });

    dividir.addEventListener("click", function () {
        counter.textContent = resultado_dos /= 2;
    });

    resetear.addEventListener("click", function () {
        counter.textContent = resultado_dos = 0;
    });
});

/*CONCATENACION DE PALABRAS*/
document.addEventListener("DOMContentLoaded", function () {

const char1=document.getElementById("char1").textContent;
const char2=document.getElementById("char2").textContent;
const char3=document.getElementById("char3").textContent;
const char4=document.getElementById("char4").textContent;
const char5=document.getElementById("char5").textContent;
const char6=document.getElementById("char6").textContent;
const char7=document.getElementById("char7").textContent;
const char8=document.getElementById("char8").textContent;
let frase=document.getElementById("frase");
concatenar.addEventListener("click", function(){
    frase.textContent+= char1 + " "+ char2 + " "+ char3+ " "+char4+" "+char5+" "+char6+" "+char7+" "+char8;
})
    });

    



