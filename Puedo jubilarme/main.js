function verificarJubilacion() {
        const edad = parseInt(document.getElementById('edad').value);
        const genero = document.getElementById('genero').value;
        const resultado = document.getElementById('resultado');

        if (isNaN(edad) || edad <= 0 || !genero) {
            resultado.textContent = 'Por favor, ingrese una edad válida y seleccione un género.';
            resultado.style.color = 'red';
            return;
        }

        let edadRequerida ;
        let generoTexto ;

        if (genero === 'm') {
            edadRequerida = 65; 
            generoTexto = 'hombre';
        } else if (genero === 'f') { 
            edadRequerida = 60; 
            generoTexto = 'mujer';
        }

        if (edad >= edadRequerida) {
            resultado.textContent = `¡Felicidades! puedes jubilarte.`;
            resultado.style.color = 'green';
        } else {
            resultado.textContent = `Aún no puedes jubilarte. Como ${generoTexto} necesitas tener al menos ${edadRequerida} años.`;
            resultado.style.color = 'orange';
        }
        }