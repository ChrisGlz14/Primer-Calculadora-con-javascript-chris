
const pantalla = document.querySelector(".pantalla")

const botones = document.querySelectorAll(".botones")  //selecciono todos los botones y se forma un array

const borrar = document.querySelector(".borrar-todo")

botones.forEach(boton => {
    boton.addEventListener ("click", () => {
        const apretarBoton = boton.textContent;

            if (boton.id === "c" ){                     //Si apreton c se borra todo y me imprime un 0 en pantalla.
                pantalla.textContent = "0";
                return;                                 // NOTA: acordarse de poner returns.
            }

            if (boton.id === "borrar") {
                if (pantalla.textContent.length === 1 || pantalla.textContent === "Syntax Error :(") { // en este if Con la propiedad lenght decimos que si existe 1 caracter nos devuelva un 0
                    pantalla.textContent = "0"
                    
                } else {
                    pantalla.textContent = pantalla.textContent.slice(0 , -1);
                }
            return;
        }
            if (boton.id === ("igual")) {                                                              // Al pulsar el boton igual intento ejecutar un eval.
                try {
                    pantalla.textContent = eval(pantalla.textContent);                                 
                } catch (error) {                                                                      // En caso de error se muestra en pantalla syntax error.
                    pantalla.textContent = "Syntax Error :("
                }
                return;
            }
             if (pantalla.textContent === "0" || pantalla.textContent === "Syntax Error :(") {         // si la pantalla esta en 0,

            pantalla.textContent = apretarBoton;                                                       // mostrá el boton apretado.

            } else {
            pantalla.textContent += apretarBoton;
            }
    }) 
}); 