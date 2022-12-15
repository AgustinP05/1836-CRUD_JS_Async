//Este archivo  se encargará de establecer la comunicacion con el servidor, recibir la respuesta, y convertirlo a json.

/*//Funcion original de listaClientes
const listaClientes = () => {//Cuando se llame a esta funcion, se generará lo siguiente.
  const promise = new Promise((resolve, reject) => {//(*10) La const promise va a ser igual lo que nos regresa la nueva instancia de Promise. Y no vamos a esperar a que se termine de ejecutar para poder seguir ejecutando nuestro demás código.
    const http = new XMLHttpRequest();//(*1) //vamos a generar un nuevo XMLHttpRequest para poder justamente tener la conexión con nuestro back end, nuestra API.
    http.open("GET", "http://localhost:3000/perfil");//(*2)JS se encarga de la tarea de traer la informacion con el metodo "GET". Nos conectamos con la URL para mas tarde  enviar la peticion al servidor de esa URL. El envío se hace despues con el .send()

    http.send(); //(*3) Enviar peticion

    http.onload = () => {//(*4)
      const response = JSON.parse(http.response);//(*8)Recibimos el texto de respuesta (.response) del XMLHttpRequest creado (http) y lo transformamos a JS para usarlo. En otras palabras, convertimos la respuesta de http que obtuvimos luego del .send(), para poder obtener un objeto con la informacion. 
      if (http.status >= 400) {//(*11) Verificacion del estado de la llamada HTTP. Y se rechazará o no la informacion del 'response'.
        reject(response);
      } else {
        resolve(response);
      }
    };
  });
  return promise;//Devolver el resultado de la promise hacia afuera. 
};
*/

//(*14)La funcion listaClientes() en una linea con Fetch API:
 //Explicacion de la linea:
 //El fetch() nos conecta con la url y esta nos devuelve una promesa. Una vez que se complete esa promesa, entonces (.then), la vamos a recibir en la funcion y la vamos a tranformar al formato json (.json()). 
 //Una vez que se transforme a json, vamos a tener acceso a 'data' que lo tenemos en el listaClientes().then() del archivo.
 const listaClientes = () =>{
  return fetch("http://localhost:3000/perfil").then(respuesta =>{return respuesta.json()});
}
//----------------

//(*16)Funcion que reciba la informacion (por parametro) y la envíe a la API(fetch con POST). La exportamos abajo
const crearCliente = (nombre, email)=>{//(*16.1)
  return fetch("http://localhost:3000/perfil",{//(*16.3)
    method:"POST",
    headers:{"Content-Type": "application/json"},
    body:JSON.stringify({nombre,email,id: uuid.v4()})//(*16.2) El id
  })
}
//---------------------------------


//Quiero exportar un objeto que contenga funciones:
export const clientServices = {
  listaClientes,//La funcion con la respuesta con la informacion de la lista
  crearCliente, //(*16) La exportamos a registro-controller.js
};
//La exportamos hacia client-controller.js para llamar a este objeto en la listaClientes().fetch().



