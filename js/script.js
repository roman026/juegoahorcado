const $btnInicio = document.getElementById("btnIniciar"),
  $btnAgregarPalabra = document.getElementById("btnAgregarPalabra"),
  $btnNuevo = document.getElementById("btnNuevo"),
  $btnDesistir = document.getElementById("btnDesistir"),
  $palabraOculta = document.getElementById("palabraOculta"),
  $btnAyuda = document.getElementById("btnAyuda"),
  $inicio = document.getElementById("inicio"),
  $categoria = document.getElementById("categoria"),
  $mal = document.getElementById("mal"),
  $acierto = document.getElementById("acierto"),
  $msgFinal = document.getElementById("msg-final"),
  $juego = document.getElementById("juego");
const ctx = document.getElementById("canvas").getContext("2d");

var palSelect = "";
let Victoria = 0;
let count = 0;

const categoria = () => {
  var palabra = $categoria.value;
  opccion = eval(palabra);
  rand = [Math.floor(Math.random() * opccion.length)];
  palSelect = opccion[rand][0].toUpperCase();
  ayuda = opccion[rand][1];
};
const desbloquear = () => {
  let letterButtons = document.querySelectorAll(".letra");

  letterButtons.forEach((button) => {
    button.disabled = false;
  });
};
const blocker = () => {
  let letterButtons = document.querySelectorAll(".letra");

  letterButtons.forEach((button) => {
    button.disabled = true;
  });
};
function pista() {
  document.getElementById("ayuda").innerHTML = ayuda;
}
function oculta() {
  displayItem = palSelect.replace(/./g, '<span class="oculta">_</span>');
  $palabraOculta.innerHTML = displayItem;
}

function generarAbcdario() {
  for (let i = 97; i < 123; i++) {
    let button = document.createElement("button");
    //se genera el abecedario
    button.innerText = String.fromCharCode(i).toUpperCase();
    button.classList.add("letra");
    abcdario.append(button);

    if (i == 110) {
      button = document.createElement("button");
      button.classList.add("letra");
      button.innerText = "Ñ";
      abcdario.append(button);
    }
    if (i == 122) {
      button = document.createElement("button");
      button.classList.add("letra");
      button.innerText = "-";
      abcdario.append(button);
    }
  }
}

const empezar = () => {
  Victoria = 0;
  count = 0;
  $palabraOculta.innerHTML = "";
  let letra = document.querySelectorAll(".letra");

  letra.forEach((button) => {
    button.addEventListener("click", () => {
      let charArray = palSelect.split("");
      let guion = document.getElementsByClassName("oculta");

      //si el contenido del array es clikeado correctamente o sino se pinta el hombre en el canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //si verifica si el caracter del array es el clikeado
          if (char === button.innerText) {
            //se remplaza lo guines por la letra
            guion[index].innerText = char;
            $acierto.innerHTML = "¡Muy Bien!";
            $acierto.className += "acierto verde";
            //se incrementa el contador de vistoria

            Victoria += 1;
            //si la longitud de es igual a victoria gano
            if (Victoria == charArray.length) {
              $msgFinal.innerHTML = `😀 😎 GANASTE !!<br> La palabra era<br> <hr>${palSelect}`;
              $msgFinal.className = "zoom-in verde";
              //se llama a la funcion para bloquear todos los botones
              blocker();
            }
          }
        });
      } else {
        //Mensaje de fallaste
        $mal.innerHTML = "¡Fallaste!";
        $mal.className += "acierto rojo";

        count += 1;
        //se llama a la funcion dibujar hombre
        dibujarHombre(count);
        //si el contador es igual a 7 se da el mensaje de que ha perdido
        if (count == 7) {
          $msgFinal.innerHTML = `🙁 PERDISTE !!<br> La palabra era<br> <hr>${palSelect}`;
          $msgFinal.className = "zoom-in rojo";
          blocker();
        }
      }
      //se deshabilita el boton clikeado
      button.disabled = true;
      setTimeout(function () {
        $acierto.className = "";
        $mal.className = "";
      }, 800);
    });
  });
  categoria();
  //se llama al cancas
  let { ahorca } = canvas();
  // se inicia con la escena de la ahorca
  ahorca();
};

const dibujarHombre = (count) => {
  let { soga, cabeza, cuerpo, brazo_izq, brazo_der, pierna_izq, pierna_der } =
    canvas();
  switch (count) {
    case 1:
      soga();
      break;
    case 2:
      cabeza();
      break;
    case 3:
      cuerpo();
      break;
    case 4:
      brazo_izq();
      break;
    case 5:
      brazo_der();
      break;
    case 6:
      pierna_izq();
      break;
    case 7:
      pierna_der();
      break;
    default:
      break;
  }
};

$btnInicio.onclick = async () => {
  $inicio.style.display = "none";
  $juego.style.display = "block";
  generarAbcdario();
  empezar();
  oculta();
};
$btnNuevo.onclick = () => {
  document.getElementById("ayuda").innerHTML = "";
  ctx.clearRect(0, 0, 560, 600);
  Victoria = 0;
  count = 0;
  let { ahorca } = canvas();
  ahorca();
  categoria();
  oculta();
  desbloquear();
  $msgFinal.className = "hide";
};
$btnDesistir.onclick = async () => {
  location.reload();
  $inicio.style.display = "block";
  $juego.style.display = "none";
};
$btnAyuda.onclick = async () => {
  pista();
};
