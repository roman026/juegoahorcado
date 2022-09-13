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

var palSelect = "";

let Victoria = 0;
let count = 0;
/* var palabra; */
var rand;

const categoria = () => {
  /*   var palabra; */
  var palabra = $categoria.value;
  opccion = eval(palabra);
  rand = [Math.floor(Math.random() * opccion.length)];
  palSelect = opccion[rand][0].toUpperCase();
  ayuda = opccion[rand][1];
};
const blocker = () => {
  let letterButtons = document.querySelectorAll(".letra");

  letterButtons.forEach((button) => {
    button.disabled = true;
    console.log(button);
  });
};
function pista() {
  document.getElementById("ayuda").innerHTML = ayuda;
}
function oculta() {
  displayItem = palSelect.replace(/./g, '<span class="oculta">_</span>');
  $palabraOculta.innerHTML = displayItem;
}

/* function botonesLetras(a, z) {
  document.getElementById("abcdario").innerHTML = "";
  let i = a.charCodeAt(0),
    j = z.charCodeAt(0);
  let letra = "";
  for (; i <= j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML +=
      "<button value='" +
      letra +
      "' onclick='intento(\"" +
      letra +
      "\")' class='letra' id='" +
      letra +
      "'>" +
      letra +
      "</button>";

    if (i == 110) {
      document.getElementById("abcdario").innerHTML +=
        "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='Ñ'>Ñ</button>";
    }
    if (i == 122) {
      document.getElementById("abcdario").innerHTML +=
        "<button value=' ' onclick='intento(\" \")' class='letra' id=' '>__</button>";
    }
  }
}
 */
const empezar = () => {
  Victoria = 0;
  count = 0;
  $palabraOculta.innerHTML = "";
  /*  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = ""; */
  //For creating letter buttons
  for (let i = 97; i < 125; i++) {
    let button = document.createElement("button");
    //Number to ASCII[A-Z]
    button.innerText = String.fromCharCode(i).toUpperCase();
    button.classList.add("letra");
    if (i == 123) {
      button = document.createElement("button");
      button.classList.add("letra");
      button.innerText = "Ñ";
      console.log(button);
    }
    if (i == 124) {
      button = document.createElement("button");
      button.classList.add("letra");
      button.innerText = " ";
      console.log(button);
    }

    //character button click
    button.addEventListener("click", () => {
      let charArray = palSelect.split("");
      let guion = document.getElementsByClassName("oculta");

      //if array contains clciked value replace the matched dash with letter else dram on canvas
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          //if character in array is same as clicked button
          if (char === button.innerText) {
            //replace dash with letter
            guion[index].innerText = char;
            $acierto.innerHTML = "¡Muy Bien!";
            $acierto.className += "acierto verde";
            //increment counter

            Victoria += 1;
            //if winCount equals word lenfth
            if (Victoria == charArray.length) {
              $msgFinal.innerHTML = `😀 😎 GANASTE !!<br> La palabra era<br> <hr>${palSelect}`;
              $msgFinal.className += "zoom-in verde";
              //block all buttons
              blocker();
            }
          }
        });
      } else {
        //Mensaje de falla
        $mal.innerHTML = "¡Fallaste!";
        $mal.className += "acierto rojo";

        count += 1;
        //for drawing man
        drawMan(count);
        //Count==6 because head,body,left arm, right arm,left leg,right leg
        if (count == 7) {
          $msgFinal.innerHTML = `🙁 PERDISTE !!<br> La palabra era<br> <hr>${palSelect}`;
          $msgFinal.className += "zoom-in rojo";
          blocker();
        }
      }
      //disable clicked button
      button.disabled = true;
      setTimeout(function () {
        $acierto.className = "";
        $mal.className = "";
      }, 800);
    });

    abcdario.append(button);
  }

  categoria();
  //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
  let { ahorca } = canvas();
  //initialDrawing would draw the frame
  ahorca();
};
const drawMan = (count) => {
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

$btnAyuda.onclick = async () => {
  pista();
};
$btnInicio.onclick = async () => {
  $inicio.style.display = "none";
  $juego.style.display = "block";
  empezar();
  oculta();
};
$btnDesistir.onclick = async () => {
  location.reload();
  $inicio.style.display = "block";
  $juego.style.display = "none";
};

$btnNuevo.onclick = () => {
  location.reload($inicio);
};
