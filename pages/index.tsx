import Pregunta from "../componentes/pregunta";
import Opciones from "../componentes/opciones";
import Footer from "../componentes/footer";
import { UI } from "@/lib/classUsuarioInterfase";
import { useState } from "react";

function Index() {
  const [ui, setUI] = useState(new UI());
  const [txtPreg, setTxtPreg] = useState(ui.showPregunta());
  const [opciones, setOpciones] = useState(ui.showOpciones());

  const actualizar = () => {
    if (ui.cuestionario.isEnded()) {
      setTxtPreg(ui.showScores().toString());
      setOpciones([]);
      console.log("finalizo");
    } else {
      setTxtPreg(ui.showPregunta());
      setOpciones(ui.showOpciones());
    }
  };

  return (
    <div className="quiz">
      <h1>Cuestionario</h1>
      <hr />
      <Pregunta texto={txtPreg} />
      <Opciones
        opciones={opciones}
        cuestionario={ui.cuestionario}
        actualizar={actualizar}
      />
      <hr />
      <Footer texto={ui.showProgress()} />
    </div>
  );
}

export default Index;
