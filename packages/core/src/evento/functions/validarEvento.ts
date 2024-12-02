import Evento from "../model/Evento";

export default function validarEvento(evento: Partial<Evento>): string[] {
    const erros: string[] = [];

    if (!evento.alias) {
        erros.push("Alias do evento é obrigatório.");
    }    
    if (!evento.nome) {
        erros.push("Nome do evento é obrigatório.");
    }

    if (!evento.data) {
        erros.push("Data do evento é obrigatória.");
    }

    if (!evento.local) {
        erros.push("Local é obrigatório.");
    }

    if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
        erros.push("Publico Esperado é obrigatório.");
    }

    if (!evento.imagem) {
        erros.push("Imagem do evento é obrigatória.");
    }

    return erros;
}
