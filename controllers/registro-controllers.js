import { clientServices } from "../service/client-service.js";//Importamos funciones, en este caso queremos la del *16 (crearCliente()).

//(*15 ) Capturamos la informacion----------------------------------
const formulario = document.querySelector("[data-form]");//Para agarrar el formulario completo y guardarlo dentro de la variable 'formulario'

formulario.addEventListener("submit", (evento)=>{//Al darle click al submit del formulario, se ejecutará la arroe function
    evento.preventDefault();//Para prevenir el comportamiento normal del evento

    const nombre = document.querySelector("[data-nombre]").value;//Para agarrar nombre escrito en el input y guardarlo dentro de la variable 'nombre' 
    const email = document.querySelector("[data-email]").value;//Para agarrar el email escrito en el input y guardarlo dentro de la variable 'email'
    
    //(*16.4)llamada a la funcion crearCliente() importada del objeto clientServices
    clientServices.crearCliente(nombre,email).then((respuesta)=>{//(*16.5)
        window.location.href="../screens/registro_completado.html";
    }).catch((err) =>console.log(err));
    //----------------------------------
})
//--------------------------------------------------

