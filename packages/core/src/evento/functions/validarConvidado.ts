import Convidado from "../model/Convidado";

export default function validarConvidado(
    convidado: Partial<Convidado>
): string[] {
    const erros: string[] = [];

    if (!convidado.nome) {
        erros.push("Nome do convidado é obrigatório.");
    }

    if (!convidado.email) {
        erros.push("Email do convidado é obrigatório.");
    }

    return erros;
}
