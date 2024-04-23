function generarCarta() {
    const rut = document.getElementById('rut').value;
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const profesion = document.getElementById('profesion').value;
    const motivacion = document.getElementById('motivacion').value;
  
    const cartaTexto = `
      **Datos Personales:**
  
      * RUT: ${rut}
      * Nombre: ${nombre} ${apellidoPaterno} ${apellidoMaterno}
      * Fecha de Nacimiento: ${fechaNacimiento}
      * Edad: ${edad} años
      * Género: ${genero}
      * Email: ${email}
      * Celular: ${celular}
      * Profesión: ${profesion}
  
      **Motivación para Postular:**
  
      ${motivacion}
  
      **Atentamente,**
  
      ${nombre} ${apellidoPaterno} ${apellidoMaterno}
   `;
  
    return cartaTexto;
}
function generarCarta() {
    const cartaGenerada = generarCarta();
    const cartaTextarea = document.getElementById('carta');
    cartaTextarea.value = cartaGenerada;
}
function validarRut(rut) {
    // Expresión regular para validar el formato del RUT chileno
    const rutRegex = /^[0-9]{1,8}-[0-kK]{1}$/;
    return rutRegex.test(rut);
  }
  
  function validarNombre(nombre) {
    // Validar longitud del nombre (entre 3 y 20 caracteres)
    const nombreLargo = nombre.length >= 3 && nombre.length <= 20;
    // Validar que solo contenga letras, espacios y guiones
    const nombreValido = /^[a-zA-Z\s-]+$/.test(nombre);
    return nombreLargo && nombreValido;
  }
    
function validarFormulario() {
    const rut = document.getElementById('rut').value;
    const nombre = document.getElementById('nombre').value;
    const apellidoPaterno = document.getElementById('apellidoPaterno').value;
    const apellidoMaterno = document.getElementById('apellidoMaterno').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const profesion = document.getElementById('profesion').value;
    const motivacion = document.getElementById('motivacion').value;

    let isValid = true;
  
    if (!validarRut(rut)) {
      mostrarError('rut', 'Formato de RUT inválido');
      isValid = false;
    } else {
      ocultarError('rut');
    }
  
    if (!validarNombre(nombre)) {
      mostrarError('nombre', 'Nombre inválido (entre 3 y 20 caracteres)');
      isValid = false;
    } else {
      ocultarError('nombre');
    }
  
    if (!isValid) {
      return false;
    }
    return true;
  }
  
  function mostrarError(campo, mensaje) {
    const errorElement = document.getElementById(`${campo}-error`);
    errorElement.textContent = mensaje;
    errorElement.style.display = 'block';
  }
  
  function ocultarError(campo) {
    const errorElement = document.getElementById(`${campo}-error`);
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}
function generarCarta() {
    if (validarFormulario()) {
    }
}