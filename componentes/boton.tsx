function Boton({
  texto,
  fnResponder,
  actualizar,
}: {
  texto: string;
  fnResponder: (arg: string) => void;
  actualizar: () => void;
}) {
  return (
    <button
      className="button"
      onClick={() => {
        fnResponder(texto);
        actualizar();
      }}
    >
      {texto}
    </button>
  );
}

export default Boton;
