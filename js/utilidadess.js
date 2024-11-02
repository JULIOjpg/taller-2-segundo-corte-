function convertirAPesos() {
    var dolares = document.getElementById("Dolares").value
    var dolar = parseFloat(dolares)
    var valorDolar = 4416.0
    var conversion = dolar * valorDolar
    document.getElementById("PesosColombianos").value = conversion
}

function convertirAFahrenheit() {
    var graCelcius = document.getElementById("Celcius").value
    var celcius = parseFloat(graCelcius)
    var cambioDeGrados = celcius * 9 / 5 + 32
    document.getElementById("Fahrenheit").value = cambioDeGrados
}


function añadirEmpleado() {

    const codigo = document.getElementById("codigo").value
    const nombre = document.getElementById("nombre").value

    if (codigo && nombre) {

        const table = document.getElementById("Tablaempleado")
        const newRow = table.insertRow()

        const cellCodigo = newRow.insertCell(0)
        const cellNombre = newRow.insertCell(1)

        cellCodigo.textContent = codigo
        cellNombre.textContent = nombre


    } else {
        alert("por favor complete el formulario")
    }
}

function visibilidadDeTexto(element) {
    const parrafo = element.previousElementSibling;
    
    if (parrafo.style.display === "none") {
        parrafo.style.display = "block";
        element.textContent = "Ocultar contenidos";
    } else {
        parrafo.style.display = "none";
        element.textContent = "Mostrar contenidos";
    }
}


document.addEventListener('mousemove', (event) => {
    const navigatorCoords = document.getElementById('navigatorCoords');
    const pageCoords = document.getElementById('pageCoords');

    navigatorCoords.textContent = `Navegador: [ ${event.clientX}, ${event.clientY}]`;

    pageCoords.textContent = `Página: [${event.pageX}, ${event.pageY}]`;
});


document.addEventListener('keydown', (event) => {
    const char = document.getElementById('char');
    const code = document.getElementById('code');

    char.textContent = `Carácter: [${event.key}]`;
    code.textContent = `Código: [${event.keyCode}]`;
});
