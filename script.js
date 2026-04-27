// 1. ACTUALIZA ESTA VARIABLE con la última URL que has copiado de Google
const scriptURL = 'https://script.google.com/macros/s/AKfycbyQ7sI0tR_AB7KrxRaJUTFSyFDm0WneMuY_9io5_XWcFbhZX9UPm9GOrun-lE6cN32Irw/exec'

const form = document.forms['mi-formulario']

form.addEventListener('submit', e => {
  e.preventDefault()
  
  const botonEnvio = form.querySelector('button[type="submit"]')
  
  // Bloqueamos el botón y ponemos el cursor de prohibido
  botonEnvio.disabled = true
  botonEnvio.innerText = "Procesando envío..."
  botonEnvio.style.cursor = "not-allowed" 
  botonEnvio.style.opacity = "0.7"

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        // Mensaje de éxito
        alert("¡Solicitud enviada! El equipo de Ethernet Solutions se pondrá en contacto cuanto antes.")
        
        // Restablecemos el botón para que vuelva a la normalidad
        botonEnvio.disabled = false
        botonEnvio.innerText = "Enviar Datos al Servidor"
        botonEnvio.style.cursor = "pointer"
        botonEnvio.style.opacity = "1"
        
        form.reset() 
    })
    .catch(error => {
        console.error('Error!', error.message)
        alert("Error al conectar con Google. Revisa la URL del script.")
        
        botonEnvio.disabled = false
        botonEnvio.innerText = "Reintentar Envío"
        botonEnvio.style.cursor = "pointer"
        botonEnvio.style.opacity = "1"
    })
})
