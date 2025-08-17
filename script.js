function mostrarDatos() {
    const nombres = document.getElementById('nombres').value;
    const Apellidos = document.getElementById('Apellidos').value;
    const Telefono = document.getElementById('Telefono').value;
    const Correo = document.getElementById('Correo').value;
    const Fecha = document.getElementById('Fecha').value;
    const mensaje = document.getElementById('mensaje').value;

    alert('Datos ingresados: \n\nombres: ${nombres}\nApellidos: ${Apellidos}\nTelefono: ${Telefono}\nCorreo: ${Correo}\nFecha de nacimiento: ${fecha}\nmensaje: ${mensaje}');
}