// NOTA DE AVISO
console.warn(`El "console.log" solicitado en el trabajo práctico se disparará cada vez que se presione en el menú "hamburguesa"`);

// A - EVENTO ONCLICK DISPARADOR DEL CONSOLE.LOG
// APARICIÓN DEL MENÚ OCULTO Y "MUTACIÓN" DEL MENÚ HAMBURGUESA
const btnHamb = document.querySelector(".menu-hamburguesa"),
  menuOculto = document.querySelector(".nav-oculto");
btnHamb.addEventListener("click", () => {
  menuOculto.classList.toggle("despliegueMenu");
  btnHamb.classList.toggle("mutacion-menu-hamburguesa");
  if (menuOculto.classList.contains("despliegueMenu")) {
    console.log("Acabás de desplegar el menú de navegación")
  } else {
    console.log("Ocultaste el menú de navegación");
  }
});

// B - EVENTO ONSUBMIT
if (document.querySelector(".iniciar-sesion")) {
  const inicioDeSesion = document.querySelector(".iniciar-sesion"),
    crearCuenta = document.querySelector(".crear-cuenta");
  inicioDeSesion.addEventListener("submit", () =>
    alert(
      "Los datos han sido enviados correct... ah, no, aún no sé como se hace eso XD"
    )
  );
  crearCuenta.addEventListener("submit", () =>
    alert(
      "Los datos han sido enviados correct... ah, no, aún no sé como se hace eso XD"
    )
  );
}

// C - EVENTO ONFOCUS PARA EL CAMPO E-MAIL
if (document.querySelector(".campo-de-registro")) {
  const inputEMail = document.querySelector(".campo-e-mail");
  inputEMail.addEventListener("focus", () => {
    inputEMail.setAttribute("placeholder", "Ej: sarlanga@qwerty.com");
  });
}

// D - EVENTO ONBLUR PARA CAMPO "NOMBRE COMPLETO"
if (document.querySelector(".campo-de-registro")) {
  const campoDeNombreCompleto = document.querySelector(".nombre-completo");
  campoDeNombreCompleto.addEventListener("blur", () => {
    const valorDeNombreCompleto = campoDeNombreCompleto.value;
    if (valorDeNombreCompleto === "") {
      console.log(
        'No se ha ingresado ningún dato en el campo "Nombre completo"'
      );
    }
  });
}

// E & G - COLORACIÓN Y TAMAÑO DEL TÍTULO
if (document.querySelector("h1")) {
  const tituloH1 = document.querySelector("h1");
  tituloH1.style.color = "yellow";
  tituloH1.style.fontSize = "30px";
}

// F - COLOR DE FONDO
const cuerpoDelDoc = document.querySelector("body");
cuerpoDelDoc.style.backgroundColor = "var(--fondo-body)";


// H - TAMAÑO DEL SUBTÍTULO
if (document.querySelector(".subtitulo")) {
  const subt = document.querySelector(".subtitulo");
  subt.style.fontSize = "23px";
}

// I - COLORACION DE ETIQUETAS LABEL
if (document.querySelector("label")) {
  const labelTags = document.querySelectorAll("label");
  labelTags.forEach((label) => {
    label.style.color = "var(--rufous)";
  });
}

// EJERCICIO 3 - CONSUMO DE API
let endPoint = 'https://swapi.dev/api/people/?format=json'

fetch(endPoint)
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    if (document.querySelector('#datos-de-la-api')) {
      let divParaHTML = document.querySelector("#datos-de-la-api"),
        resultados = Object.values(datos.results);
    
        resultados.slice(0, 10).forEach((personaje) => {
        divParaHTML.innerHTML += '<p id="nombre-personaje">Nombre: ' + personaje.name + '.</p><p id="fecha-nac-personaje">Fecha de nacimiento: ' + personaje.birth_year + '</p><br>'
      });
    }
  })

// CÓDIGOS NO SOLICITADOS PERO DE FUNCIONALIDAD PARA EL SITIO WEB


// CAMBIO DE FORMULARIO
if (document.querySelector(".cambio-de-form")) {
  const disparadorDeCambioDeForm = document.querySelector(".cambio-de-form"),
    regresoDeForm = document.querySelector(".cambio-a-iniciar-sesion"),
    formIniciarSesion = document.querySelector(".contenedor-iniciar-sesion"),
    formCrearCuenta = document.querySelector(".contenedor-crear-cuenta");

  disparadorDeCambioDeForm.addEventListener("click", () => {
    formIniciarSesion.classList.add("desplazar-form-inicio-de-sesion");
    formCrearCuenta.classList.add("desplazar-form-crear-cuenta");
  });

  regresoDeForm.addEventListener("click", () => {
    formIniciarSesion.classList.remove("desplazar-form-inicio-de-sesion");
    formCrearCuenta.classList.remove("desplazar-form-crear-cuenta");
  });
}

// ESTABLECER FECHA MÁXIMA DE NACIMIENTO

if (document.querySelector("#fecha-de-nac")) {
  let fechaActual = new Date(),
    inputDeFechaDeNac = document.querySelector("#fecha-de-nac"),
    YYYY = fechaActual.getFullYear() - 18,
    MM = fechaActual.getMonth(),
    DD = fechaActual.getDate()
  if (MM < 10) {
    MM = '0' + MM
  }
  if (DD < 10) {
    DD = '0' + DD;
  }

  let fechaMinimaDeNac = YYYY + '-' + MM + '-' + DD

  inputDeFechaDeNac.setAttribute("max", fechaMinimaDeNac)
}