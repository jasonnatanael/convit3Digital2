import Image from "next/image";

export interface EstatisticaProps {
    texto: string;
    valor: any;
    imagem: string;
}

export default function Estatistica(props: EstatisticaProps) {
    return (
        <div className="flex items-center bg-zinc-800 rounded-lg px-6 py-2.5 gap-5">
            <div>
                <span>{props.texto}</span>
                <span>{props.valor}</span>
            </div>
            <Image src={props.imagem} width={80} height={80} alt="icone" />
        </div>
    );
}