// Importar la función crearTablas desde funcionesAvanzadas.js
import { crearTablas } from "./funcionesAvanzadas.js";

// Agregar un evento al botón al cargarse el DOM
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("crearTablas").addEventListener("click", crearTablas);
});

function leerDatos(id) {
    try {
        let valor = document.getElementById(id).value; // Obtener el valor del input

        // Validar que el valor sea  mayor que 0
        if (isNaN(valor) || valor <= 0) {
            throw new Error("El valor debe ser un número mayor a 0.");
        }

        return parseInt(valor); 
    } catch (error) {
        alert(error.message); 
        return null; 
    }
}


export { leerDatos };
