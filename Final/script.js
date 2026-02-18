const words = ["Etiqueta", "Elemento", "Atributo", "HTML5", "Head", "Body", "Meta", "Title", "Script", "Link", "Style", "Div", "Span", "Header", "Footer", "Section", "Article", "Nav", "Main", "Aside", "H1", "Párrafo", "Imagen", "Enlace", "Anchor", "Lista", "Ol", "Ul", "Li", "Table", "Tr", "Td", "Th", "Form", "Input", "Button", "Label", "Checkbox", "Radio", "Submit", "Action", "Method", "Placeholder", "ID", "Class", "DOCTYPE", "Comentario", "HTML", "CSS", "JavaScript", "Frontend", "Web", "Navegador", "Layout", "Responsive", "Bootstrap", "Flexbox", "Grid", "Em", "Rem", "Pixel", "Viewport", "Inline", "Block", "Semántico", "Accesibilidad", "W3C", "Validación", "SEO", "Canvas", "Audio", "Video", "Source", "Favicon", "Charset", "UTF-8", "Background", "Color", "Fuente", "Bordes", "Padding", "Margen", "Width", "Height", "Position", "Display", "Overflow", "Z-index", "Hover", "Focus", "Active", "Media query", "Sitemap", "Anchor link", "Nombre", "Valor", "Cierre", "Autocierre"];
let currentWord;
let score = 0;
let time = 60;
let isPlaying = false;
let timer = null;

const wordDisplay = document.getElementById("word-display");
const inputField = document.getElementById("input-field");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time-remaining");

function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
}

function addToDOM() {
    currentWord = randomWords();
    wordDisplay.textContent = currentWord;
}

function updateScore() {
    score++;
    scoreDisplay.textContent = "Puntaje: " + score;
}

function updateTime() {
    if (time > 0) {
        time--;
        timeDisplay.textContent = "Tiempo: " + time;
    } else {
        clearInterval(timer);
        isPlaying = false;
        alert("¡Game Over! Tu puntaje fue de: " + score + " PPM");
    }
}

inputField.addEventListener("input", function() {
    if (isPlaying && inputField.value === currentWord) {
        addToDOM();
        updateScore();
        inputField.value = "";
        timeDisplay.textContent = "Tiempo: " + time;
    }
});

function startGame() {
    isPlaying = true;
    score = 0;
    time = 60;
    addToDOM();
    scoreDisplay.textContent = "Puntaje: " + score;
    timeDisplay.textContent = "Tiempo: " + time;
    inputField.value = "";
    inputField.focus();
    if (timer) clearInterval(timer);
    timer = setInterval(updateTime, 1000);
}

document.getElementById("start-button").addEventListener("click", startGame);