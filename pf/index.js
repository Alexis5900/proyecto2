// Función para crear una pregunta
const crearPregunta = (texto, opciones) => ({
    texto,
    opciones,
    resultados: {} // Objeto para almacenar los votos
});

// Función para agregar un voto
const agregarVoto = (pregunta, opcion) => {
    if (pregunta.opciones.includes(opcion)) {
        pregunta.resultados[opcion] = (pregunta.resultados[opcion] || 0) + 1;
    } else {
        console.log("Opción no válida.");
    }
};

// Función para mostrar los resultados de una pregunta
const mostrarResultados = (pregunta) => {
    console.log(`Resultados para: "${pregunta.texto}"`);
    pregunta.opciones.forEach(opcion => {
        console.log(`${opcion}: ${pregunta.resultados[opcion] || 0} votos`);
    });
};

// Función para validar que haya al menos 8 preguntas
const validarPreguntas = (preguntas) => {
    let numeroPregunta = preguntas.length + 1;
    while (preguntas.length < 8) {
        console.log("La encuesta debe tener al menos 8 preguntas.");
        const texto = prompt(`Ingrese el texto de la pregunta Número ${numeroPregunta++}:`);
        const opciones = prompt("Ingrese las opciones separadas por comas:").split(",");
        preguntas.push(crearPregunta(texto, opciones.map(opcion => opcion.trim())));
    }
};

// Función para ejecutar la encuesta
const ejecutarEncuesta = (preguntas) => {
    validarPreguntas(preguntas);
    preguntas.forEach(pregunta => {
        const opcion = prompt(`Pregunta: ${pregunta.texto}\nOpciones: ${pregunta.opciones.join(", ")}`);
        agregarVoto(pregunta, opcion);
    });
};

// Función para mostrar los resultados de todas las preguntas
const mostrarResultadosEncuesta = (preguntas) => {
    console.log("Resultados finales de la encuesta:");
    preguntas.forEach(mostrarResultados);
};

// Ejemplo de uso
const preguntas = [];
validarPreguntas(preguntas);
ejecutarEncuesta(preguntas);
mostrarResultadosEncuesta(preguntas);
