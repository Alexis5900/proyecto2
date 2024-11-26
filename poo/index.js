// Clase Pregunta
class Pregunta {
    constructor(texto, opciones) {
        this.texto = texto;
        this.opciones = opciones;
        this.resultados = {}; // Objeto para almacenar los votos
    }

    agregarVoto(opcion) {
        if (this.opciones.includes(opcion)) {
            this.resultados[opcion] = (this.resultados[opcion] || 0) + 1;
        } else {
            console.log("Opción no válida.");
        }
    }

    mostrarResultados() {
        console.log(`Resultados para: "${this.texto}"`);
        this.opciones.forEach(opcion => {
            console.log(`${opcion}: ${this.resultados[opcion] || 0} votos`);
        });
    }
}

// Clase Encuesta
class Encuesta {
    constructor() {
        this.preguntas = [];
    }

    agregarPregunta(pregunta) {
        this.preguntas.push(pregunta);
    }

    crearPreguntaDinamica(numero) {
        const texto = prompt(`Ingrese el texto de la pregunta Número ${numero}:`);
        const opciones = prompt("Ingrese las opciones separadas por comas:").split(",");
        this.agregarPregunta(new Pregunta(texto, opciones.map(opcion => opcion.trim())));
    }

    validarPreguntas() {
        let numeroPregunta = this.preguntas.length + 1;
        while (this.preguntas.length < 8) {
            console.log("La encuesta debe tener al menos 8 preguntas.");
            this.crearPreguntaDinamica(numeroPregunta++);
        }
    }

    ejecutar() {
        this.validarPreguntas();
        this.preguntas.forEach(pregunta => {
            const opcion = prompt(`Pregunta: ${pregunta.texto}\nOpciones: ${pregunta.opciones.join(", ")}`);
            pregunta.agregarVoto(opcion);
        });
    }

    mostrarResultados() {
        console.log("Resultados finales de la encuesta:");
        this.preguntas.forEach(pregunta => pregunta.mostrarResultados());
    }
}

// Ejemplo de uso
const encuesta = new Encuesta();
encuesta.crearPreguntaDinamica(1); // Número de pregunta inicial
encuesta.ejecutar();
encuesta.mostrarResultados();
