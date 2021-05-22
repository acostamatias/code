// Función para mostrar el modal y reproducir el video al hacer click en la miniatura
document.querySelector('.video').addEventListener('click', () => {
  document.querySelector('.modal').className = 'modal mostrar'
  document.querySelector('.video-mp4').play()
})

// Función para cerrar el modal y pausar el video al hacer click en el icono de la X
document.querySelector('.cerrar').addEventListener('click', () => {
  document.querySelector('.modal').className = 'modal ocultar'
  document.querySelector('.video-mp4').pause()
})
