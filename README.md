
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="Proyect.css">
        <title>Pomodoring</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300&display=swap" rel="stylesheet">
        


    </head>
    <body>
        <h1> POMODORO TIMER</h1>
        <div id="conteiner">
                <p id="work"class="label">Trabajo</p><p id="break"class="label">Recreo</p><p id="cycle"class="label">Ciclos</p>
            
            <!--work-->
            <div id="work-clock" class="timer">
                <p id="w.minutes">25</p> <p class="doblecol">:</p><p id="w.seconds">00</p>
            </div>

            <p id="counter" class="timer">0</p>

            <!--Break-->
            <div id="break-clock" class="timer">
                <p id="b.minutes">5</p> <p class="doblecol">:</p><p id="b.seconds">00</p>            
            </div>

            <button id="start" class="btn">Iniciar</button>
            <button id="pause" class="btn">Pausar</button>
            <button id="reset" class="btn">Limpiar</button>


        </div>


        <script src="proyect.js"></script>
    </body>
</html>
