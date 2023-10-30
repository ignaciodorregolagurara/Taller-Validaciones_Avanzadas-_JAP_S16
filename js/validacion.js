let impNombre = document.getElementById("nombre");
let impApellido = document.getElementById("apellido");
let impEmail = document.getElementById("email");
let impContra1 = document.getElementById("password1");
let impContra2 = document.getElementById("password2");
/* */
let btnRegistro = document.getElementById("btnRegistrarme");
const chkTerminos = document.getElementById("terminos");
const divTerminosError = document.getElementById("divTerminosError");
const btnAbrirTerminos = document.getElementById("btnTerminos")
/* */
let divNombre = document.getElementById("divNombre");
let divApellido = document.getElementById("divApellido");
let divContra1 = document.getElementById("divContra1");
let divContra2 = document.getElementById("divContra2");
let divEmail = document.getElementById("divEmail");
/* */

/* 
Ningún campo puede estar vacío
El Email debe tener un formato valido
La contraseña debe tener al menos 6 caracteres
Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales
Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio" (en este caso dentro de un moda
*/

document.addEventListener("DOMContentLoaded", function () {
    btnRegistro.addEventListener("click", function () {
        let valorNombre = impNombre.value;
        let valorApellido = impApellido.value;
        let valorContra1 = impContra1.value;
        let valorContra2 = impContra2.value;
        /* */

        if (valorNombre == "") {
            impNombre.classList.remove("is-valid");
            impNombre.classList.add("is-invalid");
            let AUXcontenedorNom = document.createElement("div");
            AUXcontenedorNom.classList.add("invalid-feedback");
            AUXcontenedorNom.innerHTML = "Debe ingresar un nombre";
            divNombre.appendChild(AUXcontenedorNom);
            if (divNombre.children.length > 3) {
                AUXcontenedorNom.classList.add("d-none");
            }
        } else {
            impNombre.classList.remove("is-invalid");
            impNombre.classList.add("is-valid");
        }

        if (valorApellido == "") {
            impApellido.classList.add("is-invalid");
            impApellido.classList.remove("is-valid");
            let AUXcontenedorApe = document.createElement("div");
            AUXcontenedorApe.classList.add("invalid-feedback");
            AUXcontenedorApe.innerHTML = "Debe ingresar un apellido";
            divApellido.appendChild(AUXcontenedorApe);
            if (divApellido.children.length > 3) {
                AUXcontenedorApe.classList.add("d-none");
            }
        } else {
            impApellido.classList.add("is-valid");
            impApellido.classList.remove("is-invalid");
        }

        const existeError = divContra1.querySelector(".invalid-feedback");
        if (existeError) {
            divContra1.removeChild(existeError);
        }
    
        if (valorContra1 == "") {
            impContra1.classList.add("is-invalid");
            impContra1.classList.remove("is-valid");
            let AUXcontenedorCon1 = document.createElement("div");
            AUXcontenedorCon1.classList.add("invalid-feedback");
            AUXcontenedorCon1.innerHTML = "Debe Ingresar una contraseña";
            divContra1.appendChild(AUXcontenedorCon1);
        } else if (valorContra1.length < 6) {
            impContra1.classList.add("is-invalid");
            impContra1.classList.remove("is-valid");
            let AUXcontenedorCon1 = document.createElement("div");
            AUXcontenedorCon1.classList.add("invalid-feedback");
            AUXcontenedorCon1.innerHTML = "La contraseña debe tener al menos 6 caracteres";
            divContra1.appendChild(AUXcontenedorCon1);
        } else {
            impContra1.classList.add("is-valid");
            impContra1.classList.remove("is-invalid");
            }
        

        if (valorContra2 == "") {
            impContra2.classList.remove("is-valid");
            impContra2.classList.add("is-invalid");
            let AUXcontenedorContra2 = document.createElement("div");
            AUXcontenedorContra2.classList.add("invalid-feedback");
            AUXcontenedorContra2.innerHTML = "Debe ingresar una contraseña";
            divContra2.appendChild(AUXcontenedorContra2);
            if (divContra2.children.length > 3) {
                AUXcontenedorContra2.classList.add("d-none");
            }
        } else {
            impContra2.classList.remove("is-invalid");
            impContra2.classList.add("is-valid");
        }


        if (valorContra1 !== valorContra2) {
            impContra1.classList.add("is-invalid");
            impContra2.classList.add("is-invalid");
            let AUXcontenedorValidContras = document.createElement("div");
            AUXcontenedorValidContras.classList.add("invalid-feedback");
            AUXcontenedorValidContras.innerHTML = "Las contraseñas no coinciden";
            divContra2.appendChild(AUXcontenedorValidContras);
            if (divContra2.children.length > 4) {
                AUXcontenedorValidContras.classList.add("d-none");
            }
        } 
        

        let valorEmail = impEmail.value.trim(); 
        let emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (valorEmail !== "" && emailValido.test(valorEmail)) {
            impEmail.classList.add("is-valid");
            impEmail.classList.remove("is-invalid");
        } else {
            impEmail.classList.remove("is-valid");
            impEmail.classList.add("is-invalid");
        }
        
            if (!chkTerminos.checked) {
                chkTerminos.classList.add("is-invalid");
                btnAbrirTerminos.classList.add("is-invalid");
                divTerminosError.style.display = "block";
            } else {
                chkTerminos.classList.remove("is-invalid");
                btnAbrirTerminos.classList.remove("is-invalid");
                divTerminosError.style.display = "none";
            }
    });
});

