function crearTablas() {
    let filas = document.getElementById("filas").value;
    let columnas = document.getElementById("columnas").value;

    // Aqui se va a aalidar si los valores son válidos
    if (filas <= 0 || columnas <= 0 || isNaN(filas) || isNaN(columnas)) {
        alert("Por favor, ingresa un número mayor a 0 en ambos campos.");
        return;
    }

    //Se va a convertir a entero los numeros, use chatgpt en esta instruccion por que me daba un error 
    filas = parseInt(filas);
    columnas = parseInt(columnas);
    const contenedor = document.getElementById("tabla");
    contenedor.innerHTML = "";

    // Crear la tabla usando DOM
    const tabla = document.createElement("table");
    tabla.setAttribute("border", "1");

    for (let x = 0; x < filas; x++) {
        const fila = document.createElement("tr"); // Crear fila
        for (let y = 0; y < columnas; y++) {
            const columna = document.createElement("td"); // Aqui se crea la  columna
            columna.textContent = ""; // 
            fila.appendChild(columna); // Aqui se agrega columna a la fila
        }
        tabla.appendChild(fila); // Aqui se agrega fila a la tabla
    }

    contenedor.appendChild(tabla);
}

export { crearTablas };
