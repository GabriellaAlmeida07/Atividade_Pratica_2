"use client";

import CardProduto from "@/components/CardProduto";
import { ProdutoProps } from "@/entities/entities";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [produtos, setProdutos] = useState<ProdutoProps[]>([]);

    const router = useRouter();

    // Pega os produtos cadastrados no banco de dados através da rota
    // /api/produtos com método GET
    useEffect(() => {
        async function carregarProdutos() {
            try {
                setLoading(true);
                const res = await fetch("/api/produtos");
                const data = await res.json();
                setProdutos(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        carregarProdutos();
    }, []);

    return (
        <main className="min-h-screen bg-linear-to-b from-[#141216] via-[#17141b] to-black text-zinc-100">
            {/* Header */}
            <header className="sticky top-0 z-20 bg-[#1a171d]/80 border-b border-pink-700/20">
                <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col gap-1">
                    <h1
                        style={{ fontFamily: "var(--font-grenze)" }}
                        className="text-4xl text-pink-200 tracking-widest"
                    >
                        Poções & Soluções
                    </h1>

                    <h2 className="text-lg text-zinc-400 tracking-wide">
                        Painel da Administradora
                    </h2>
                </div>
            </header>

            {/* Seção principal */}
            <section className="max-w-7xl mx-auto px-8 py-10">
                {/* Loading enquanto os produtos são trazidos do bd */}
                {loading ? (
                    <div className="flex items-center justify-center py-10">
                        <FaSpinner className="animate-spin text-pink-300 text-4xl" />
                    </div>
                ) : (
                    <div>
                        <div className="mb-10">
                            <h2
                                style={{ fontFamily: "var(--font-grenze)" }}
                                className="text-4xl text-pink-200 tracking-wider"
                            >
                                Suas poções
                            </h2>

                            <div className="mt-3 h-0.5 w-52 bg-linear-to-r from-pink-300 via-amber-200 to-transparent"></div>

                            <p className="text-zinc-400 text-lg mt-4">
                                Gerencie as poções da sua loja.
                            </p>
                        </div>

                        {/* Botão para adicionar novo produto */}
                        <button
                            onClick={() => router.push("/CadastroPocao")}
                            className="mb-10 text-lg cursor-pointer relative w-full max-w-4xl py-4 flex items-center justify-center gap-2 bg-[#1a171d] border border-pink-900/30 text-pink-200 hover:bg-[#221c25] transition"
                        >
                            <IoAdd size={30} />
                            Adicionar nova poção
                        </button>

                        {/* Cards dos produtos */}
                        <div className="flex flex-col gap-8">
                            {produtos.map((p, i) => (
                                <CardProduto
                                    key={i}
                                    id={p.id}
                                    nome={p.nome}
                                    img_url={p.img_url}
                                    descricao={p.descricao}
                                    preco={p.preco}
                                    tipo="vendedor"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}
