import Pregunta from "./classPregunta";

export class Cuestionario {
  puntos = 0;
  preguntaIdx = 0;
  preguntas: Pregunta[];

  constructor(preguntas: Pregunta[]) {
    this.preguntas = preguntas;
  }

  getPreguntaIndex(): Pregunta {
    return this.preguntas[this.preguntaIdx];
  }

  isEnded(): boolean {
    return this.preguntas.length === this.preguntaIdx;
  }

  responder(respuesta: string): void {
    if (this.getPreguntaIndex().respuestaCorrecta(respuesta)) {
      this.puntos++;
    }
    this.preguntaIdx++;
  }
}
