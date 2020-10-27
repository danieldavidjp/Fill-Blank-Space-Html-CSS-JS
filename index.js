

var cont = 0;
var errCont = 0;
$(document).ready(function() {
  // show submit button *only* when all
  // .required fields have a value
  //
  var checkRequired = function() {
    var allValid = true;   // assume we're ready

    $('.require').each(
      function() {
        if (this.value.trim() === "") {
          // fail as soon as we hit an empty field
          allValid = false;
          return false;    // this ends the each() loop
        }
      }
    );

    $('#submit_button').toggle(allValid);
  }

  $('.required').bind('keyup change blur', checkRequired);
  
  checkRequired();  // start off in a correct state
  var form = document.querySelector('form');
    form.addEventListener('change', function() {
    checkRequired();
});
});
function submit001() {
    b = input001.value;
    c = input002.value;
    d = input003.value;
    e = input004.value;
    f = input005.value;
    g = input006.value;
    if(errCont<1){
    if (b == "modelo" || b == "Modelo") {
        input001.value = b;
        check001.innerHTML = "<text class=button002>" + "✔" + "</text>";
        document.getElementById("input001").style.color="green";
        cont++;
    } else {
        input001.value = b;
        check001.innerHTML = "<text class=button002>" + "✖" + "</text>";
        document.getElementById("input001").value = "";
    }

    if (c == "Sistemas" || c == "sistemas") {
        input002.value = c;
        check002.innerHTML = "<text class=button002>" + "✔" + "</text>";
        document.getElementById("input002").style.color="green";
        cont++;
    } else {
        input002.value = c;
        check002.innerHTML = "<text class=button002>" + "✖" + "</text>";
        document.getElementById("input002").value = "";
    }

    if (d == "sistema" || d == "Sistema") {
        input003.value = d;
        check003.innerHTML = "<text class=button002>" + "✔" + "</text>";
        document.getElementById("input003").style.color="green";
        cont++;
    } else {
        input003.value = d;
        check003.innerHTML = "<text class=button002>" + "✖" + "</text>";
        document.getElementById("input003").value = "";
    }

    if (e == "Procesos" || e == "procesos") {
        input004.value = e;
        check004.innerHTML = "<text class=button002>" + "✔" + "</text>";
        document.getElementById("input004").style.color="green";
        cont++;
    } else {
        input004.value = e;
        check004.innerHTML = "<text class=button002>" + "✖" + "</text>";
        document.getElementById("input004").value = "";
    }

    if (f == "Arquitecturas" || f == "arquitecturas") {
        input005.value = f;
        check005.innerHTML = "<text class=button002>" + "✔" + "</text>";
        document.getElementById("input005").style.color="green";
        cont++;
    } else {
        input005.value = f;
        check005.innerHTML = "<text class=button002>" + "✖" + "</text>";
        document.getElementById("input005").value = "";
    }
    if (g == "Distribuidos" || g == "distribuidos") {
        input006.value = g;
        check006.innerHTML = "<text class=button002>" + "✔" + "</text>";
        document.getElementById("input006").style.color="green";
        cont++;
    } else {
        input006.value = g;
        check006.innerHTML = "<text class=button002>" + "✖" + "</text>";
        document.getElementById("input006").value = "";
    }

    if (cont == 6) {
        message001.innerHTML = "¡Felicitaciones! Haz logrado organizar correctamente cada uno de los términos y así recordar la definición de la arquitectura multiprocesador. Sigue estudiando para ser cada vez mejor.";
        disappear001.innerHTML = "";
        reload001.innerHTML = "<div id=center001><button class=button001 onclick=repeat001()>Repetir</button></div>";
    }else{

        message001.innerHTML = "Tienes errores, Intentalo de Nuevo, Tienes 1 intento"
        errCont++;
    }
} else{

    document.getElementById("frame001").innerHTML = "Estudia una vez más la arquitectura procesador e inténtalo de nuevo";
}
}

    function repeat001() {
        location.reload();
}