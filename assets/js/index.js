function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var empresa = document.getElementById('empresa').value;
    var numeroContacto = document.getElementById('numeroContacto').value;
    var correoElectronico = document.getElementById('correoElectronico').value;

    if (nombre === '' || apellido === '' || empresa === '' || numeroContacto === '' || correoElectronico === '') {
      alert('Por favor, completa todos los campos.');
      return false;
    }

    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!correoElectronico.match(emailRegex)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return false;
    }

   
    var phoneRegex = /^[0-9]{10}$/;
    if (!numeroContacto.match(phoneRegex)) {
      alert('Por favor, ingresa un número de contacto válido de 10 dígitos.');
      return false;
    }

    return true;
  }



  

  const banner = document.getElementById('banner');
const images = [

  '/tablet-2/assets/img/agra-et4.png',
  '/tablet-2/assets/img/l10-banner.png',
  '/tablet-2/assets/img/banner-et8.png',
 
];
let currentIndex = 0;

function changeBackgroundImage() {
  banner.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length;
}

// Cambiar la imagen cada 5 segundos (5000 milisegundos)
setInterval(changeBackgroundImage, 4000);
