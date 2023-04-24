import Pregunta from "../lib/classPregunta";
import { datos } from "./datos";

export const preguntas = datos.map(
  (pregunta) =>
    new Pregunta(pregunta.pregunta, pregunta.opciones, pregunta.respuesta)
);
