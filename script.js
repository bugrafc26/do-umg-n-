function playMusic() {
    const music = document.getElementById("birthdayMusic");
    music.play();
}

// Konfeti animasyonu
const confettiContainer = document.querySelector(".confetti-container");
for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 3 + "s";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    confettiContainer.appendChild(confetti);
}

const confettiStyles = `
    .confetti {
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        background: red;
        opacity: 0.7;
        animation: confetti 5s linear infinite;
    }
`;
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = confettiStyles;
document.head.appendChild(styleSheet);
