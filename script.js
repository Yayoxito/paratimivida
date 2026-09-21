const loveButton = document.getElementById("loveButton");
const letter = document.getElementById("letter");
const closeButton = document.getElementById("closeButton");
const heartsContainer = document.getElementById("hearts");

loveButton.addEventListener("click", () => {

    letter.classList.add("show");

    // Crear corazones
    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.classList.add("little-heart");
            heart.textContent = Math.random() > 0.5 ? "💛" : "❤️";

            heart.style.left = `${40 + Math.random() * 20}%`;
            heart.style.bottom = "35%";
            heart.style.setProperty("--x", Math.random());

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 2000);

        }, i * 80);
    }
});

closeButton.addEventListener("click", () => {
    letter.classList.remove("show");
});

letter.addEventListener("click", (event) => {

    if (event.target === letter) {
        letter.classList.remove("show");
    }

});