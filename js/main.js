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

const fotoPlanta = document.getElementById('foto-planta');
let contadorClicks = 0;

if (fotoPlanta) {
    fotoPlanta.addEventListener('click', function() {
        contadorClicks++;
        if (contadorClicks === 3) {
            alert('¡DEJA DE CLICKEAR QUE EXPLOTA LA PLANTA! ☢️ (Atte: Sr. Burns)');
            contadorClicks = 0; // Reiniciamos el contador por si quieren volver a jugar
        }
    });
}

const contadorAccidentes = document.getElementById('contador-accidentes');
const btnAccidente = document.getElementById('btn-accidente');

if (contadorAccidentes && btnAccidente) {
    btnAccidente.addEventListener('click', function() {
        contadorAccidentes.textContent = '0';
        alert('Se ha reiniciado el contador de la Planta Nuclear. El Sr. Burns no estará contento.');
    });
}