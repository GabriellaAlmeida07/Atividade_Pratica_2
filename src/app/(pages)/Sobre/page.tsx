"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import lojaImg from "@/assets/Loja.jpg";
import livro from "@/assets/Livro.png";
import annabelle from "@/assets/Annabelle.png";

export default function Sobre() {
    return (
        <main className="min-h-screen bg-linear-to-b from-[#141216] via-[#17141b] to-black text-zinc-100">
            {/* Header */}
            <header className="sticky top-0 z-20 bg-[#1a171d]/80 border-b border-pink-700/20 backdrop-blur">
                <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h1
                            style={{ fontFamily: "var(--font-grenze)" }}
                            className="text-4xl text-pink-200 tracking-widest"
                        >
                            Poções & Soluções
                        </h1>

                        <h2 className="text-lg text-zinc-400">Sobre a Loja</h2>
                    </div>

                    <Link
                        href="/Cliente"
                        className="flex items-center gap-2 text-pink-200 hover:text-pink-100 transition"
                    >
                        <FaArrowLeft size={24} />
                        Voltar
                    </Link>
                </div>
            </header>

            {/* Conteúdo */}
            <section className="max-w-7xl mx-auto px-8 py-14 space-y-24">
                <div className="flex flex-col items-center gap-8">
                    <Image
                        src={lojaImg}
                        alt="Loja"
                        width={1100}
                        height={500}
                        className="rounded-lg border border-pink-900/30 object-cover"
                    />

                    <div className="max-w-5xl text-center">
                        <h2
                            style={{ fontFamily: "var(--font-grenze)" }}
                            className="text-5xl text-pink-200 mb-6"
                        >
                            A História da Loja
                        </h2>

                        <p className="text-xl text-zinc-300 leading-9">
                            Fundada em{" "}
                            <span className="text-pink-300">1867</span>, a
                            Poções & Soluções nasceu pelas mãos dos alquimistas
                            da lendária família{" "}
                            <span className="text-pink-300">Merigold</span>,
                            reconhecida por dominar antigas artes mágicas e
                            preservar conhecimentos esquecidos pela maioria dos
                            feiticeiros. Durante mais de um século, a loja
                            tornou-se referência na fabricação de poções raras,
                            elixires curativos, essências encantadas e artefatos
                            utilizados por bruxos de todas as regiões do reino
                            mágico.
                        </p>
                    </div>
                </div>

                {/* Vendedora */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <Image
                        src={annabelle}
                        alt="Annabelle"
                        width={450}
                        height={550}
                        className="rounded-lg border border-pink-900/30"
                    />

                    <div>
                        <h2
                            style={{ fontFamily: "var(--font-grenze)" }}
                            className="text-4xl text-pink-200 mb-6"
                        >
                            Annabelle Merigold
                        </h2>

                        <p className="text-zinc-300 text-xl leading-9">
                            Atual proprietária da loja, Annabelle herdou os
                            conhecimentos de seus antepassados ainda muito
                            jovem. Conhecida por sua habilidade em preparar
                            poções extremamente complexas, ela mantém viva a
                            tradição da família Merigold, oferecendo produtos
                            preparados artesanalmente e supervisionando cada
                            nova fórmula criada dentro do laboratório da loja.
                        </p>
                    </div>
                </div>

                {/* Livro */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2
                            style={{ fontFamily: "var(--font-grenze)" }}
                            className="text-4xl text-pink-200 mb-6"
                        >
                            Grimório da Família
                        </h2>

                        <p className="text-zinc-300 text-xl leading-9">
                            Muito antes da fundação da loja, os Merigold
                            registravam todas as suas descobertas em um antigo
                            grimório. Diz a lenda que suas páginas nunca
                            terminam e que novos feitiços surgem apenas para
                            aqueles que demonstram verdadeira maestria na
                            alquimia. Até hoje o livro permanece protegido nos
                            cofres da Poções & Soluções, sendo consultado apenas
                            pelos mestres alquimistas da família.
                        </p>
                    </div>

                    <Image
                        src={livro}
                        alt="Livro"
                        width={450}
                        height={550}
                        className="rounded-lg border border-pink-900/30 justify-self-end"
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-20 border-t text-lg border-pink-900/30 bg-[#161218]">
                <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-10">
                    <div>
                        <h3
                            style={{ fontFamily: "var(--font-grenze)" }}
                            className="text-2xl text-pink-200 mb-4"
                        >
                            Poções & Soluções
                        </h3>

                        <p className="text-zinc-400">
                            Mais de 150 anos produzindo poções, elixires e
                            artefatos mágicos para a comunidade bruxa.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-pink-200 font-semibold mb-3">
                            Contato
                        </h3>

                        <p className="text-zinc-400">
                            magic@pocoesesolucoes.com
                        </p>

                        <p className="text-zinc-400">(99) 9999-9999</p>
                    </div>

                    <div>
                        <h3 className="text-pink-200 font-semibold mb-3">
                            Localização
                        </h3>

                        <p className="text-zinc-400">Beco da Última Saída</p>

                        <p className="text-zinc-400">
                            Distrito Industrial do Reino Mágico
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
