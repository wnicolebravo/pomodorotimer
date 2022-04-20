const iniciar = document.getElementById("start");
const limpiar = document.getElementById("reset");
const pausar = document.getElementById("pause");

const wm = document.getElementById("w.minutes");
const ws = document.getElementById ("w.seconds");

const bm = document.getElementById ("b.minutes");
const bs = document.getElementById ("b.seconds")


//
let startTimer;

start.addEventListener("click", function(){
    if (startTimer === undefined){
        startTimer = setInterval (timer, 1000)
    }else {
        alert ("El tiempo esta corriendo!");
    }
})

reset.addEventListener ("click", function (){
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById("counter").innerText = 0 ;
    pauseInterval()
    startTimer = undefined;
})

pause.addEventListener ("click", function(){
    pauseInterval ()
    startTimer = undefined;
})

function pauseInterval (){
    clearInterval (startTimer);

}

// Conteo del tiempo de trabajo//

 function timer (){
    if (ws.innerText !=0){
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText ==0 ){
        ws.innerText = 59;
        wm.innerText --;
    }
  }

  //Conteo de tiempo de descanso//
  if(wm.innerText ==0 && ws.innerText ==0){
      if (bs.innerText !=0){
          bs.innerText--;
      }else if (bm.innerText !=0 && bs.innerText ==0){
          bs.innerText = 59;
          bm.innerText --;
      }


  //Incrementacion del contador cuando complete un ciclo//

 if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
    wm.innerText = 25;
    ws.innerText =  "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById("counter").innerText++;
  }
}

