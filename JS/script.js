

function formulario(form) {
    var primerValor = Number(form.numero1.value);
    var segundoValor = Number(form.numero2.value);
    var resultado = primerValor + segundoValor;
    if(resultado === Number(form.suma.value)){
        alert("No sos un robot!!!");
    } else{
        alert("Sos un robot 🤖")
    }
}

