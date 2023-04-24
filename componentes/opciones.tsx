import Boton from "./boton";
import { Cuestionario } from "../lib/classCuestionario";

function Opciones({
  opciones,
  cuestionario,
  actualizar,
}: {
  opciones: string[];
  cuestionario: Cuestionario;
  actualizar: () => void;
}) {
  return (
    <div>
      {opciones.map((opc, idx) => (
        <Boton
          key={idx}
          texto={opc}
          fnResponder={() => cuestionario.responder(opc)}
          actualizar={() => actualizar()}
        />
      ))}
    </div>
  );
}

export default Opciones;
