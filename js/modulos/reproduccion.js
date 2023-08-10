window.addEventListener('DOMContentLoaded'), () => {
    // Obtener todos los elementos de video
    const videos = document.querySelectorAll('video');
    
    // Ocultar los controles de todos los elementos de video
    videos.forEach(video => {
       video.removeAttribute('controls');
    });
}