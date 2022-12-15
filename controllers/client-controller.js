//Este archivo se encarga de la Interaccion JS con HTML

import { clientServices } from "../service/client-service.js";

const crearNuevaLinea = (nombre, email) => {//(*5)
    const linea = document.createElement("tr"); //Creamos la etiqueta para crear la fila en HTML y abajo en la variable declarada como 'contenido' está la plantilla de su contenido HTML. Recordar usar comas invertidas (backticks) para poner dentro el codigo HTML.
    const contenido = `
      <td class="td" data-td>
        ${nombre}
      </td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html"
              class="simple-button simple-button--edit"
            >
              Editar
            </a>
          </li>
          <li>
            <button class="simple-button simple-button--delete" type="button">
              Eliminar
            </button>
          </li>
        </ul>
      </td>
    `;
    linea.innerHTML = contenido; //A la linea (el tr), le ingresamos el contenido HTML escrito en la variable siguiente. El cual las variables nombre e email serán dinámicas.
    return linea;//Retornar/mandar hacia afuera la linea. Esta informacion queremos que se muestre en el tbody [data-table].
};
  
const table = document.querySelector("[data-table]");//(*6) Tomamos el data-atributte del tbody, para mostrar el contenido HTML de la funcion crearNuevaLinea().

clientServices
  .listaClientes().then((data) => { //(*12)
    data.forEach((perfil) => {//(*7) Crear dinamicamente el contenido HTML y CSS de acuerdo a la informacion recibida por el servidor.
      const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
      table.appendChild(nuevaLinea);
    });
    
  })
  .catch((error) => alert("Ocurrió un error"));//(*13)

