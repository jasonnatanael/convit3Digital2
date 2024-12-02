//import Logo from "@/components/template/Logo";
import LogoGrande from "@/components/template/LogoGrande";
import Link from "next/link";

export default function Home() {
  return (
    <div 
      className="
        h-screen flex flex-col justify-center items-center gap-4	
        bg-[url('/background-elementos.svg')] bg-cover
      "
    >
      <div className="flex flex-col items-center gap-4">
        <LogoGrande />
        <p className="text-zinc-500 font-light w-96 leading-6 text-center select-none">
          Crie e gerencie seus <strong className="text-zinc-400">eventos</strong> de forma simples, eficiente e sem complicações.
        </p>
      </div>
      <Link href="/evento" className="botao azul text-lg uppercase">
      Crie o seu Evento
      </Link>
    </div>
  );
}
