/*Requerimientos */
/*
1.- La aplicación debe tener una interfaz que permita al usuario ingresar un mensaje y seleccionar un destinatario.
2.- La aplicación debe utilizar Promesas para manejar la lógica del envío de mensajes.
3.- Cuando el usuario envíe un mensaje, la Promesa debe cumplirse y mostrar una notificación indicando que el mensaje ha sido enviado.
4.- Después de que se envíe un mensaje, la Promesa debe rechazarse si el usuario intenta enviar otro mensaje y mostrar una advertencia que indique que no se puede enviar otro mensaje.
5.- La Promesa debe manejar correctamente la situación en la que un usuario intente enviar múltiples mensajes, cumpliendo con la regla de permitir solo un mensaje a la vez.
6.- La interfaz de usuario debe proporcionar una forma clara para que el usuario ingrese un mensaje y seleccione un destinatario.
7.- La aplicación debe tener un comportamiento predecible y consistente en términos de cómo maneja las Promesas y muestra las notificaciones y advertencias.
8.- La aplicación debe funcionar correctamente y cumplir con todos los requisitos establecidos.*/

// Constantes y variables
const mensaje = document.getElementById("mensaje");
const destinatario = document.getElementById("destinatario");
const btnEnviar = document.querySelector("form button");
const success = document.getElementById("verde");
const wrong = document.getElementById("rojo");
let isSending = false; // Variable para rastrear si se está enviando un mensaje

// Función para mostrar la notificación de éxito
const mostrarExito = (mensaje) => {
  success.innerHTML = mensaje;
  success.classList.add("show");
  setTimeout(() => {
    success.classList.remove("show");
  }, 3000);
};

// Función para mostrar la notificación de error
const mostrarError = (mensaje) => {
  wrong.innerHTML = mensaje;
  wrong.classList.add("show");
  setTimeout(() => {
    wrong.classList.remove("show");
  }, 3000);
};

// Función para enviar el mensaje
const enviarMensaje = () => {
  return new Promise((resolve, reject) => {
    if (isSending) {
      reject("Ya has enviado un mensaje. No puedes enviar otro.");
    } else if (mensaje.value === "" || destinatario.value === "") {
      reject("No se puede enviar el mensaje");
    } else {
      isSending = true; // Marcar como enviando mensaje

      // Simular el envío del mensaje (aquí puedes agregar la lógica de envío real)
      setTimeout(() => {
        resolve("Mensaje enviado");
      }, 2000);
    }
  });
};

// Evento al enviar el formulario
btnEnviar.addEventListener("click", (event) => {
  event.preventDefault(); // Evitar el envío del formulario

  enviarMensaje()
    .then((res) => {
      mostrarExito(res);

      // Restablecer los campos y el estado de envío después de 3 segundos
      setTimeout(() => {
        mensaje.value = "";
        destinatario.value = "";
        isSending = false;
      }, 3000);
    })
    .catch((err) => {
      mostrarError(err);
    });
});
