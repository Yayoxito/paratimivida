const intro = document.getElementById("intro");
const main = document.getElementById("main");

const startButton = document.getElementById("startButton");

const letterButton = document.getElementById("letterButton");
const letterOverlay = document.getElementById("letter");
const closeButton = document.getElementById("closeButton");

const heartsContainer = document.getElementById("hearts");


/* =========================================
   ENTRAR AL JARDÍN
========================================= */

startButton.addEventListener("click", () => {

    // Ocultar pantalla de inicio
    intro.classList.add("hidden");

    // Mostrar jardín
    setTimeout(() => {
        main.classList.add("visible");
    }, 500);

    // Lanzar algunos corazones
    setTimeout(() => {
        createHearts(15);
    }, 2200);

});


/* =========================================
   ABRIR CARTA
========================================= */

letterButton.addEventListener("click", () => {

    letterOverlay.classList.add("show");

    // Muchos corazones al abrir la carta
    createHearts(35);

});


/* =========================================
   CERRAR CARTA
========================================= */

closeButton.addEventListener("click", () => {

    letterOverlay.classList.remove("show");

});


/* =========================================
   CERRAR HACIENDO CLICK FUERA
========================================= */

letterOverlay.addEventListener("click", (event) => {

    if (event.target === letterOverlay) {

        letterOverlay.classList.remove("show");

    }

});


/* =========================================
   CREAR CORAZONES
========================================= */

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.classList.add("little-heart");

            // Diferentes corazones
            const hearts = [
                "💛",
                "💛",
                "💛",
                "❤️",
                "✨"
            ];

            heart.textContent =
                hearts[Math.floor(Math.random() * hearts.length)];

            // Posición inicial
            heart.style.left =
                `${35 + Math.random() * 30}%`;

            heart.style.bottom =
                `${20 + Math.random() * 25}%`;

            // Movimiento aleatorio
            heart.style.setProperty(
                "--random-x",
                Math.random()
            );

            // Tamaño aleatorio
            heart.style.fontSize =
                `${18 + Math.random() * 20}px`;

            heartsContainer.appendChild(heart);


            // Eliminar después de la animación
            setTimeout(() => {

                heart.remove();

            }, 2600);

        }, i * 80);

    }

}


/* =========================================
   EFECTO DE CORAZÓN AL TOCAR LA PANTALLA
========================================= */

document.addEventListener("click", (event) => {

    // No crear corazones dentro de la carta
    if (
        event.target.closest(".letter") ||
        event.target === closeButton
    ) {
        return;
    }

    // Solo después de abrir el jardín
    if (!main.classList.contains("visible")) {
        return;
    }

    const heart = document.createElement("div");

    heart.classList.add("little-heart");

    heart.textContent = "💛";

    heart.style.left = `${event.clientX}px`;
    heart.style.top = `${event.clientY}px`;

    heart.style.setProperty(
        "--random-x",
        Math.random()
    );

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 2600);

});