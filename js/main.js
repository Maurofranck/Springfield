const formulario = document.getElementById('formulario-contacto');
const mensajeDiv = document.getElementById('alerta-formulario');

if (formulario) {
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); 
        
        if (formulario.checkValidity()) {
            mensajeDiv.classList.remove('d-none', 'alert-danger');
            mensajeDiv.classList.add('alert-success');
            mensajeDiv.textContent = '¡Gracias! Tu mensaje fue enviado correctamente. Nos contactaremos a la brevedad.';
            
            formulario.reset();
        } else {
            mensajeDiv.classList.remove('d-none', 'alert-success');
            mensajeDiv.classList.add('alert-danger');
            mensajeDiv.textContent = 'Por favor, completá todos los campos obligatorios (*).';
        }
    });
}

const botonModo = document.getElementById('boton-oscuro');

if (botonModo) {
    botonModo.addEventListener('click', () => {
        document.body.classList.toggle('oscuro');

        if (document.body.classList.contains('oscuro')) {
            botonModo.textContent = '☀️ Modo claro';
        } else {
            botonModo.textContent = '🌙 Modo oscuro';
        }
    });
}