emailjs.init("253YpfjlT8Zz_9bb7");
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
const inputEmail = document.getElementById("email");
const inputTelefono = document.getElementById("telefono");
const inputMensaje = document.getElementById("mensaje");
const mensajeSalida= document.getElementById("mensaje-salida");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTel = /^\+?[0-9]{8,15}$/;


formulario.addEventListener("submit",function(e){
    e.preventDefault();
    if(inputNombre.value.trim()===""){
        mensajeSalida.textContent ="Ingrese su nombre";
        mensajeSalida.style.color = "red";
    }
    else if(inputEmail.value.trim()===""){
        mensajeSalida.textContent ="Ingrese su email";
        mensajeSalida.style.color = "red";
    }
    else if(!regexEmail.test(inputEmail.value.trim())){
        mensajeSalida.textContent ="Formato invalido de Email"
        mensajeSalida.style.color ="red";
    }
    else if(inputTelefono.value.trim()===""){
        mensajeSalida.textContent ="Ingrese su telefono";
        mensajeSalida.style.color = "red";
    }
    else if(!regexTel.test(inputTelefono.value.trim())){
        mensajeSalida.textContent ="Formato invalido de telefono"
        mensajeSalida.style.color ="red";

    }
    else if(inputMensaje.value.trim()===""){
        mensajeSalida.textContent ="Ingrese su mensaje";
        mensajeSalida.style.color = "red";
    }
    else{
        mensajeSalida.textContent ="Mensaje enviado";
        mensajeSalida.style.color = "green";
    emailjs.sendForm('service_g8u43hr', 'template_i15gxeb', this)
        .then(() => {
             alert('Correo enviado');
            this.reset();
     })
        .catch((err) => {
            alert('Error al enviar el correo.');
            console.error('EmailJS Error:', err);
     });
    }
 
});