$(document).ready(function() {
    $('#mySubmit').on('click', MostrarDatos );
});

function MostrarDatos() {
    var nombre = $("#nombre").val();
    var apellidos = $("#apellidos").val();
    var edad = $("#edad").val();
    var fechaNacimiento = $("#fechaNacimiento").val();
    var usuario = $("#usuario").val();
    var psw = $("#psw").val();

    alert(
        "nombre: " + nombre + '\n' +
        "apellido: " + apellidos + '\n' +
        "edad: " + edad + '\n' +
        "fechaNacimiento: " + fechaNacimiento + '\n' +
        "usuario: " + usuario + '\n' +
        "psw: " + psw + '\n'

    );            

}