function diaValido(dia, mes, anio) {//valida el dia
    var valido = true
    if (dia == null || dia == "") {
        valido = false
    }
    // Verificar febrero
    if (mes == 2) {
        if (dia <= 29) {
            if ((anio % 4 !== 0)) {
                if (dia > 28) {
                    valido = false;
                } else {
                    valido = true;
                }
            }
        }
    }

    // Verificar meses con 30 días
    if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) {
        valido = false;
    } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia <= 30) {
        valido = true;
    }

    // Verificar meses con 31 días
    if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && dia > 31) {
        valido = false;
    } else if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && dia <= 31) {
        valido = true;
    }

    return valido;
}

function validarNumfechas() {
    var dia = Number(document.getElementById("dia").value)
    var mes = Number(document.getElementById("mes").value)
    var anio = Number(document.getElementById("anio").value)
    var todoOk = true

    var fecha = new Date()
    var anioActual = fecha.getFullYear()
    var mesActual = fecha.getMonth()
    var diaActual = fecha.getDate()

    if (Number.isInteger(dia) && diaValido(dia, mes, anio) && dia < 31 && dia > 0) {//se pone la condicion de menor a 31 ya que no hay ningun mes con mas cantidad de dias
        document.getElementById("dia").style.borderColor = "green";
    } else {
        document.getElementById("dia").style.borderColor = "red";
        todoOk = false
    }
    if (Number.isInteger(mes) && mes >= 1 && mes <= 12) {
        document.getElementById("mes").style.borderColor = "green";
    } else {
        document.getElementById("mes").style.borderColor = "red"
        todoOk = false;
    }
    if (Number.isInteger(anio) && anio > 1900 && anio <= anioActual) {
        document.getElementById("anio").style.borderColor = "green";
    } else {
        document.getElementById("anio").style.borderColor = "red"
        todoOk = false;
    }
    //alert(anio+ " = "+anioActual +"/"+mes+ " = "+mesActual+"/"+dia +" =  "+diaActual)
    if (anio >= anioActual) {
        if (mes >= mesActual + 1) {
            if (dia >= diaActual) {
                document.getElementById("anio").style.borderColor = "red";
                document.getElementById("mes").style.borderColor = "red";
                document.getElementById("dia").style.borderColor = "red";
                todoOk = false;
            }
        } else if (mes == mesActual + 1 && dia >= diaActual + 2) {
            document.getElementById("anio").style.borderColor = "red";
            document.getElementById("mes").style.borderColor = "red";
            document.getElementById("dia").style.borderColor = "red";
            todoOk = false;
        }
    }
    return todoOk
}



function verificarArrobas(email) {
    var contador = 0;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == "@") {
            contador++;
        }
    }
    return contador ;
}
function emailValido(email) {
    // *validos: @gmail.com ,@hotmail.com,@yahoo.com,@outlook.com **ACLARACION no puse limitacion de que simbolos (aparte del @) se puede poner ya que no encontre nada en internet
    var valido;
    var e1 = email.indexOf("@gmail")
    var e2 = email.indexOf("@hotmail")
    var e3 = email.indexOf("@yahoo")
    var e4 = email.indexOf("@outlook")
    if (e1 > -1 || e2 > -1 || e3 > -1 || e4 > -1) {
        if (email.indexOf(".com") > -1) {
            valido = true
        } else {
            valido = false
        }

    } else {
        valido = false
    }

    var cantArrobas = verificarArrobas(email)
    if(cantArrobas>1){
        valido = false;
    }

    if (valido) {
        if (e1 > -1) {
            var resultado = email.replace("@gmail.com", "")
            if (resultado.length < 2 || resultado.length > 64) {
                valido = false
            }
        }
    }
    if (e2 > -1) {
        var resultado = email.replace("@hotmail.com", "");
        if (resultado.length < 2 || resultado.length > 64) {
            valido = false;
        }
    }
    if (e3 > -1) {
        var resultado = email.replace("@yahoo.com", "");
        if (resultado.length < 2 || resultado.length > 64) {
            valido = false;
        }
    }
    if (e4 > -1) {
        var resultado = email.replace("@outlook.com", "");
        if (resultado.length < 2 || resultado.length > 64) {
            valido = false;
        }
    }
   
    
    return valido
}





function datosObligatorios() {
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var email = document.getElementById("email").value
    var obraSocial = document.getElementById("obras_sociales").value
    var todoOkey = true

    if (nombre == "") {
        document.getElementById("nombre").style.borderColor = "red"
        document.getElementById("nombre").style.backgroundColor = "mistyrose"
        todoOkey = false
    } else {
        document.getElementById("nombre").style.borderColor = "green"
        document.getElementById("nombre").style.backgroundColor = "white"
    }

    if (apellido == "") {
        document.getElementById("apellido").style.borderColor = "red"
        document.getElementById("apellido").style.backgroundColor = "mistyrose"
        todoOkey = false
    } else {
        document.getElementById("apellido").style.borderColor = "green"
        document.getElementById("apellido").style.backgroundColor = "white"
    }

    if (email == "" || emailValido(email) == false) {
        document.getElementById("email").style.borderColor = "red"
        document.getElementById("email").style.backgroundColor = "mistyrose"
        todoOkey = false
    } else {
        document.getElementById("email").style.borderColor = "green"
        document.getElementById("email").style.backgroundColor = "white"
    }
    if (obraSocial == "") {
        document.getElementById("obras_sociales").style.borderColor = "red"
        document.getElementById("obras_sociales").style.backgroundColor = "mistyrose"
        todoOkey = false
    } else {
        document.getElementById("obras_sociales").style.borderColor = "green"
        document.getElementById("obras_sociales").style.backgroundColor = "white"
    }
    return todoOkey
}



function validar() {
    var estado0 = validarNumfechas();
    var estado1 = datosObligatorios();
   
    if (estado0 == 1 && estado1 == 1) {
        document.getElementById("observaciones").style.borderColor = "green";
        alert("¡Los datos se cargaron con éxito!");
    }
}


