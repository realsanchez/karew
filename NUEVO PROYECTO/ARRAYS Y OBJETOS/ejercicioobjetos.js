const datos={
    nombre:"Tony",
    apellido:"Losada",
    correo:"email@1234",
    password:"12345678",
    telefono:"666000777",
    username:"Titojuanjo",
    edad:"44"
}

const slector = document.getElementById("selector");
const valor = document.getElementById("valor");
 valor.textContent = datos[selector.value];
 selector.addEventListener("change", function(){
    valor.textContent = datos[selector.value];
 });


 const cocina={
  vitro:true ,
  ingredientes:["salmon" , "cebolla", "patata", "huevos"],
  cacharros:["olla" , "plato", "sarten" , "paellera"],
  cocineros:[1, 2, 3, 4, 5]
  
 };
 const vitro = document.getElementById("vitro");
 const ingredientes = document.getElementById("ingredientes");
 const cacharros = document.getElementById("cacharros");
 const cocineros = document.getElementById("cocineros");
 const press = document.getElementById("press");
 vitro.textContent = cocina[cocina.vitro]
 ingredientes.textContent = cocina[cocina.ingredientes];
 cacharros.textContent = cocina[cocina.cocineros];
 cocineros.textContent = cocina[cocina.cocineros];


 press.addEventListener("click", function (){
 ingredientes.textContent = "INGREDIENTE . " + cocina.ingredientes[Math.floor(Math.random()* cocina.ingredientes.length)];
 cacharros.textContent = "CACHARRO : " + cocina.cacharros[Math.floor(Math.random()* cocina.cacharros.length)];
 cocineros.textContent = "NUMERO DE COCINEROS :" + cocina.cocineros[Math.floor(Math.random()*cocina.cocineros.length)];
 vitro.textContent = cocina.vitro;
 });

 console.log(cocina.cacharros);
 cocina.cacharros[0]= "secuoya";
 console.log(cocina.cacharros);
 cocina.cacharros.splice(1,1);
 console.log(cocina.cacharros);
 cocina.cacharros.push("franky");
 console.log(cocina.cacharros);
 ////////////////
 console.log(cocina);
 cocina.tamaño = ["20cm", "35cm", "12cm", "16"];
 console.log(cocina);
 delete cocina.ingredientes;
 console.log(cocina);