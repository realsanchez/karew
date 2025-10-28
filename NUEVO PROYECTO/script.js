document.addEventListener("DOMContentLoaded", function() {
    let boton_uno= document.getElementById("boton_uno");
    let boton_dos= document.getElementById("boton_dos");
    let boton_tres= document.getElementById("boton_tres");
    let boton_cuatro= document.getElementById("boton_cuatro");
    let boton_cinco= document.getElementById("boton_cinco");
    let boton_seis= document.getElementById("boton_seis");
    let boton_siete= document.getElementById("boton_siete");
    let boton_ocho= document.getElementById("boton_ocho");
    let botones= [boton_uno, boton_dos, boton_tres, boton_cuatro, boton_cinco, boton_seis, boton_siete, boton_ocho];
    
    function resetBotones() {
        document.body.style.backgroundImage = "";
        document.body.style.backgroundColor = "";


        boton_uno.style.backgroundColor = "";
        boton_uno.style.width="200px";
        boton_uno.style.height="200px";
        boton_uno.style.borderRadius="0px";
        boton_uno.value="Enviar";

        boton_dos.style.backgroundColor = "";
        boton_dos.style.width="200px";
        boton_dos.style.height="200px";
        boton_dos.style.borderRadius="0px";
        boton_dos.value="Enviar";

        boton_tres.style.backgroundColor = "";
        boton_tres.style.width="200px";
        boton_tres.style.height="200px";
        boton_tres.style.borderRadius="0px";
        boton_tres.value="Enviar";

        boton_cuatro.style.backgroundColor = "";
        boton_cuatro.style.width="200px";
        boton_cuatro.style.height="200px";
        boton_cuatro.style.borderRadius="0px";
        boton_cuatro.value="Enviar";

        boton_cinco.style.backgroundColor = "";
        boton_cinco.style.width="200px";
        boton_cinco.style.height="200px";
        boton_cinco.style.borderRadius="0px";
        boton_cinco.value="Enviar";

        boton_seis.style.backgroundColor = "";
        boton_seis.style.width="200px";
        boton_seis.style.height="200px";
        boton_seis.style.borderRadius="0px";
        boton_seis.value="Enviar";

        boton_siete.style.backgroundColor = "";
        boton_siete.style.width="200px";
        boton_siete.style.height="200px";
        boton_siete.style.borderRadius="0px";
        boton_siete.value="Enviar";

        boton_ocho.style.backgroundColor = "";
        boton_ocho.style.width="200px";
        boton_ocho.style.height="200px";
        boton_ocho.style.borderRadius="0px";
        boton_ocho.value="Enviar";

    }

  boton_uno.addEventListener("click", function() {
    resetBotones();
    botones[0].style.borderRadius="200px";
    botones[1].style.borderRadius="200px";
    botones[2].style.borderRadius="200px";
    botones[3].style.borderRadius="200px";
    botones[4].style.borderRadius="200px";
    botones[5].style.borderRadius="200px";
    botones[6].style.borderRadius="200px";
    botones[7].style.borderRadius="200px";



    });
    boton_dos.addEventListener("click", function() {
        resetBotones();
        document.body.style.backgroundColor = "red";


    });
    boton_tres.addEventListener("click", function() {
        resetBotones();
        document.body.style.backgroundImage='url(https://www.bing.com/th/id/OIP.C9OM13kvP_oV1tpxxP3YpQHaFs?w=228&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2)';
       document.body.style.backgroundRepeat = "no-repeat";     // no repetir la imagen
       document.body.style.backgroundSize = "cover";           // que cubra toda la pantalla
       document.body.style.backgroundPosition = "center center"; // centrada
       document.body.style.backgroundAttachment = "fixed";     // (opcional) que no se mueva al hacer scroll

    });
    boton_cuatro.addEventListener("click", function() {
        resetBotones();
        boton_cuatro.style.backgroundImage="url(https://www.bing.com/th/id/OIP.kII7VEl6BMnrjEsnEuKzyQHaEr?w=317&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2)";
        boton_cuatro.style.backgroundSize="cover";
        boton_cuatro.style.width="300px";
        boton_cuatro.style.height="300px";
        boton_cuatro.style.backgroundPosition="center center";
        boton_cuatro.value="";

      });
    boton_cinco.addEventListener("click", function() {
        resetBotones();
        boton_cuatro.style.backgroundImage="none";
    });
    boton_seis.addEventListener("click", function() {
        resetBotones();
        botones[0].style.fontFamily="italic";
        botones[1].style.fontFamily="italic";
        botones[2].style.fontFamily="italic";
        botones[3].style.fontFamily="italic";
        botones[4].style.fontFamily="italic";
        botones[5].style.fontFamily="italic";
        botones[6].style.fontFamily="italic";
        botones[7].style.fontFamily="italic";
    });
    boton_siete.addEventListener("click", function() {
        resetBotones();
        botones[0].style.backgroundColor="blue";
        botones[1].style.backgroundColor="blue";
        botones[2].style.backgroundColor="blue";
        botones[3].style.backgroundColor="blue";
        botones[4].style.backgroundColor="blue";
        botones[5].style.backgroundColor="blue";
        botones[6].style.backgroundColor="blue";
        botones[7].style.backgroundColor="blue";
    });
    boton_ocho.addEventListener("click", function() {
        resetBotones();
        botones[0].style.color= "rgba(224, 0, 112, 1)";
        botones[1].style.color= "rgba(224, 0, 112, 1)";
        botones[2].style.color= "rgba(224, 0, 112, 1)";
        botones[3].style.color= "rgba(224, 0, 112, 1)";
        botones[4].style.color= "rgba(224, 0, 112, 1)";
        botones[5].style.color= "rgba(224, 0, 112, 1)";
        botones[6].style.color= "rgba(224, 0, 112, 1)";
        botones[7].style.color= "rgba(224, 0, 112, 1)";
    });

        let counter=document.getElementById("contador");
    const suma=document.getElementById("sumar");
    const resta=document.getElementById("restar");
    const reset=document.getElementById("resetear");
    let contador=0;

    sumar.addEventListener("click", function() {
        counter.textContent=contador++;
    });

    restar.addEventListener("click", function() {
        counter.textContent=contador--;
    });
    reset.addEventListener("click", function() {
        contador=0;
        counter.textContent=contador;
    });




    });
    


