import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(
    Convidado: Partial<Convidado>
): Convidado {
    const erros = validarConvidado(Convidado);
  
    if (erros.length > 0) {
      throw new Error(erros.join("\n"));
    }

    const qtdeAcompanhantes = Convidado.qtdeAcompanhantes ?? 0;
    const temAcompanhantes = Convidado.possuiAcompanhantes && 
    Convidado.confirmado && qtdeAcompanhantes > 0;

        const convidadoAtualizado = {
            ...Convidado,
            qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
            possuiAcompanhantes: temAcompanhantes,
    };

    return convidadoAtualizado as Convidado;
}