// =========================
// TRANSICIÓN DEL VIDEO
// =========================

const video = document.getElementById("videoCumple");

if(video){

    video.addEventListener("ended", function(){

        const intro = document.getElementById("intro-video");

        // activa animación
        intro.classList.add("fade-out");

        // espera transición
        setTimeout(() => {

            intro.style.display = "none";

            document
            .getElementById("contenido-casilla")
            .classList.remove("oculto");

        }, 1200);

    });

}

// =========================
// BLOQUEO DE CASILLAS
// =========================

const casillas = document.querySelectorAll(".casilla");

const hoy = new Date();

hoy.setHours(0,0,0,0);

casillas.forEach(casilla => {

    const [year, month, day] = casilla.dataset.fecha.split("-").map(Number);
    const fechaCasilla = new Date(year, month - 1, day);
    
    fechaCasilla.setHours(0,0,0,0);

    if(hoy < fechaCasilla){

        casilla.addEventListener("click", function(event){

            event.preventDefault();

            alert("Aún no es tiempo de abrir esta casilla");

        });

    }

});