let numSquares = 6;
let colors = randomColors(numSquares);

const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

const easyBtn = document.getElementById("easy");
const hardBtn = document.getElementById("hard");
const resetBtn = document.getElementById("reset");

// Inicializar botones de dificultad
easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    reset();
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    reset();
});

resetBtn.addEventListener("click", reset);

function reset() {
    colors = randomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    showMessage(""); // Limpia el mensaje
    resetBtn.textContent = "Cambiar colores";

    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = `rgb(${colors[i]})`;
            squares[i].style.pointerEvents = "auto";
        } else {
            squares[i].style.display = "none";
        }
    }
}

// Asignar colores y eventos a los cuadrados
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor !== pickedColor) {
            this.style.backgroundColor = "#c4dafa";
            showMessage("incorrecto");
        } else {
            showMessage("Correcto", this.style.backgroundColor);
            resetBtn.textContent = "Jugar de nuevo";
            // Opcional: deshabilitar los cuadrados después de ganar
            for (let j = 0; j < squares.length; j++) {
                squares[j].style.pointerEvents = "none";
            }
        }
    });
}

// Función para elegir color ganador
function pickColor() {
    return `rgb(${colors[Math.floor(Math.random() * colors.length)]})`;
}

function randomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        arr.push(`${r}, ${g}, ${b}`);
    }
    return arr;
}

function showMessage(msg, color = "") {
    const message = document.getElementById("message");
    message.textContent = msg;
    if (msg === "Correcto" && color) {
        message.style.color = color;
    } else {
        message.style.color = "#ff4081";
    }
}

// Inicializa el juego al cargar
reset();