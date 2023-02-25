window.onload = iniciar;

function iniciar() {
    document.getElementById('send').addEventListener('click', validate, false);
}

function validar_nombre() {
    var elemento = document.getElementById('nombre');
    if (elemento.value == '') {
        alert('El campo nombre no puede estar vacío')
        return false
    }
    return true;
}
function validar_apellido() {
  var elemento = document.getElementById('apellido');
  if (elemento.value == '') {
      alert('El campo apellido no puede estar vacío')
      return false
  }
  return true; 
}

function validar_telefono() {
    var elemento = document.getElementById('telefono');
    if (elemento.value == '') {
        alert('El campo telefono no puede estar vacío')
        return false
    }
    return true;
}

function validar_mail(){
    var elemento = document.getElementById('email'); 
	var re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(elemento.value)){
		alert('Email: ' + elemento.value + '   --> no es valido');
        return false
	}
    return true
	}

  function validar_fechaNacimiento() {
    var elemento = document.getElementById('fecha');
    if (elemento.value == '') {
        alert('La fecha de nacimiento no puede estar vacío')
        return false
    }
    return true; 
}

function validar_domicilio() {
  var elemento = document.getElementById('domicilio');
  if (elemento.value == '') {
      alert('El campo domicilio no puede estar vacío')
      return false
  }
  return true; 
}

function validate(e) {
    if (validar_nombre() && validar_apellido() && validar_telefono() && validar_mail() && validar_fechaNacimiento() && validar_domicilio ()  && confirm
    ('Formulario correcto, desea enviar?')) {
        return true;
    } else{
        e.preventDefault();
        return false
    }
}