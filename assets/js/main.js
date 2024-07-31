$(document).ready(function(){
    $("#formulario").submit(function(evento){
        evento.preventDefault();
        $("#msg-nombre").html("")
        $("#msg-email").html("")
        $("#msg-asunto").html("")
        $("#msg-mensaje").html("")

        var nombre = $("#txt-nombre").val();
        var correo = $("#txt-correo").val();
        var asunto = $("#txt-asunto").val();
        var mensaje = $("#txt-mensaje").val();

        if(nombre == ""){
            return $("#msg-nombre").html("Ingrese su nombre Porfavor")
        }
        if(correo == ""){
            return $("#msg-email").html("Ingrese su correo Porfavor")
        }
        if(asunto == ""){
            return $("#msg-asunto").html("Ingrese el asunto Porfavor")
        }
        if(mensaje == ""){
            return $("#msg-mensaje").html("Ingrese su mensaje Porfavor")
        }




    })
})