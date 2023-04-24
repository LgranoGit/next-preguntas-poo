export default class Pregunta {
  texto: string;
  opciones: string[];
  respuesta: string;
  constructor(texto: string, opciones: string[], respuesta: string) {
    this.texto = texto;
    this.opciones = opciones;
    this.respuesta = respuesta;
  }

  respuestaCorrecta(opcion: string): boolean {
    console.log("respuestaCorrecta",opcion, this.respuesta)
    return opcion === this.respuesta;
  }
}


