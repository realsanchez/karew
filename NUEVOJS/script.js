/*document.addEventListener('DOMContentLoaded', ()=>{
    console.log("hola")
})  document hace referencia al html, 
addEventListener es un metodo que escucha un evento, 
en este caso el evento es DOMContentLoaded 
que se dispara cuando el html ha sido completamente cargado y parseado,
 la funcion flecha es la que se ejecuta cuando el evento se dispara */

 /*const constate=0;//el valor 0 no cambiara nunca
    let variable=0;//el valor podemos cambiarlo cuando nos de la gana
    let numero=0;
    let caracter="letra";
    let verdadero=true;
    let falso=false;
    const arreglos=['pera','manzana', 8, true, caracter]
    const objetos={
        altura:'10m',
        cantidad:10,
    }


})*/
/*document.addEventListener('DOMContentLoaded', ()=>{
    //acciones
    
    const email=document.getElementById('email');
    const textarea=document.getElementById('textarea');
    const contraseña=document.getElementById('contraseña');
    const enviar=document.getElementById('enviar');
    const body=document.getElementsByTagName('body');
    const desaparecer=document.getElementById('exampleFormControlTextarea1');
    enviar.addEventListener('click', ()=>{
        body[0].style.backgroundColor="#ff0000ff";
        
        email.style.backgroundColor="#00dc00ff";
        

    })
})*/
document.addEventListener('DOMContentLoaded', () => {
  const emailazul = document.getElementById('azul');
  const emailverde = document.getElementById('verde');
  const emailrojo = document.getElementById('rojo');
  const emailamarillo = document.getElementById('amarillo');

  // ✅ Función para resetear los botones (fuera de los listeners)
  function resetBotones() {
    emailazul.style.backgroundColor = '';
    emailazul.style.width = '100px';
    emailazul.style.height = '40px';
    emailazul.value = 'Enviar';

    emailverde.style.backgroundColor = '';
    emailverde.style.width = '100px';
    emailverde.style.height = '40px';
    emailverde.value = 'Enviar';

    emailrojo.style.backgroundColor = '';
    emailrojo.style.width = '100px';
    emailrojo.style.height = '40px';
    emailrojo.value = 'Enviar';

    emailamarillo.style.backgroundColor = '';
    emailamarillo.style.width = '100px';
    emailamarillo.style.height = '40px';
    emailamarillo.value = 'Enviar';
  }

  // ✅ Listeners de cada botón
  emailazul.addEventListener('click', () => {
    resetBotones();
    document.body.style.backgroundColor = '#1100ff';
    emailazul.style.backgroundColor = "rgba(156, 16, 16, 1)";
    emailazul.style.width = "450px";
    emailazul.style.height = "220px";
    emailazul.value = "Enviado";
  });

  emailrojo.addEventListener('click', () => {
    resetBotones();
    document.body.style.backgroundColor = '#b80000ff';
    emailrojo.style.backgroundColor = "rgba(0, 98, 118, 1)";
    emailrojo.style.width = "450px";
    emailrojo.style.height = "220px";
    emailrojo.value = "Enviado";
  });

  emailamarillo.addEventListener('click', () => {
    resetBotones();
    document.body.style.backgroundColor = '#ffff00';
    emailamarillo.style.backgroundColor = "rgba(22, 1, 19, 1)";
    emailamarillo.style.width = "450px";
    emailamarillo.style.height = "220px";
    emailamarillo.value = "Enviado";
  });

  emailverde.addEventListener('click', () => {
    resetBotones();
    document.body.style.backgroundColor = '#00dc00';
    emailverde.style.backgroundColor = "rgba(231, 98, 191, 1)";
    emailverde.style.width = "450px";
    emailverde.style.height = "220px";
    emailverde.value = "Enviado";
  });
});