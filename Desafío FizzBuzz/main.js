    function fizzBuzz2(limit, fizz_num, buzz_num) {

    let resultado = [];

    for (let i = 1; i <= limit; i++) {
        if (i % fizz_num === 0 && i % buzz_num === 0) {
        resultado.push("Dulce de leche");
        } else if (i % fizz_num === 0) {
        resultado.push("Dulce");
        } else if (i % buzz_num === 0) {
        resultado.push("Leche");
        } else {
        resultado.push(i);
        }
    }

    return resultado.join(", ");


}

    function ejecutarFizzBuzz2() {
        const num1 = parseInt(document.getElementById('num1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const limit = parseInt(document.getElementById('limit').value);

        const resultado = fizzBuzz2(limit, num1, num2);
        document.getElementById("resultado").textContent = resultado;
    }
