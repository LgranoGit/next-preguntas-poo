import { preguntas } from "@/datos/todasLasPreguntas";
import { Cuestionario } from "./classCuestionario";

export class UI {
  cuestionario: Cuestionario;
  constructor() {
    this.cuestionario = new Cuestionario(preguntas);
  }

  showPregunta(): string {
    if (this.cuestionario.preguntaIdx != this.cuestionario.preguntas.length) {
      return this.cuestionario.getPreguntaIndex().texto;
    }
    return "";
  }

  showOpciones() {
    if (this.cuestionario.preguntaIdx != this.cuestionario.preguntas.length) {
      return this.cuestionario.getPreguntaIndex().opciones;
    }
    return [];
  }

  showScores() {
    return `Obtuviste ${this.cuestionario.puntos} puntos de un total de ${this.cuestionario.preguntas.length}.`;
  }

  showProgress(): string {
    if (this.cuestionario.preguntaIdx != this.cuestionario.preguntas.length) {
      return `Pregunta ${this.cuestionario.preguntaIdx + 1} de ${
        this.cuestionario.preguntas.length
      }`;
    }else{return "";}
    
  }
}
