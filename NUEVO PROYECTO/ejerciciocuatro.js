document.addEventListener("DOMContentLoaded", function(){
    let resultado = document.getElementById("resultado");
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let boton = document.getElementById("boton");

  boton.addEventListener("click", function(){
  let valor1 = input1.value;
  let valor2 = input2.value;
  
  let comparacion = valor1 === valor2;
  resultado.textContent = comparacion;


  
  });
});

document.addEventListener("DOMContentLoaded", function(){
    let suma = document.getElementById("suma");
    let longitud = document.getElementById("longitud");
    let comparacion = document.getElementById("comparacion");
    let boton2 = document.getElementById("boton2");
    let input3 = document.getElementById("input3");
    let input4 = document.getElementById("input4");

    boton2.addEventListener("click" , function(){
    let valor3 = input3.value;
    let valor4 = input4.value;
    let resultadosuma = valor3 + " " + valor4;
    let resultadocomparacion =valor3 === valor4;
    let resultadolongitud = valor3+valor4;
    suma.textContent = resultadosuma;
    comparacion.textContent = resultadocomparacion;
    longitud.textContent = resultadolongitud.length;


    });
});