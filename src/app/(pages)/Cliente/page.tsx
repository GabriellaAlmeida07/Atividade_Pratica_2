"use client";

import CardProduto from "@/components/CardProduto";
import { ProdutoProps } from "@/entities/entities";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { IoAdd, IoMenu } from "react-icons/io5";

export default function HomeCliente() {
    const [loading, setLoading] = useState(false);
    const [produtos, setProdutos] = useState<ProdutoProps[]>([]);
    const caixaRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);

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

    // Fecha a exibição da opção de ver mais sobre a loja
    useEffect(() => {
        if (!isOpen) return;
        function handleCliqueFora(event: MouseEvent) {
            if (
                caixaRef.current &&
                !caixaRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleCliqueFora);
        return () => {
            document.removeEventListener("mousedown", handleCliqueFora);
        };
    }, [isOpen]);

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

                        <h2 className="text-lg text-zinc-400 tracking-wide">
                            Painel do Cliente
                        </h2>
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-pink-200 cursor-pointer hover:text-pink-100 transition"
                        >
                            <IoMenu size={28} />
                        </button>

                        {isOpen && (
                            <div
                                ref={caixaRef}
                                className={
                                    "absolute right-0 mt-3 w-64 p-4 rounded-lg bg-[#1a171d] border border-pink-900/30 text-sm text-zinc-300 shadow-[0_0_25px_rgba(244,114,182,.12)] transition-all duration-200"
                                }
                            >
                                <p
                                    style={{ fontFamily: "var(--font-grenze)" }}
                                    className="text-pink-200  text-xl font-semibold mb-2"
                                >
                                    Sobre a loja
                                </p>

                                <p className="text-zinc-400 text-base leading-relaxed">
                                    Bem-vindo à Poções & Soluções. Aqui você
                                    encontra poções mágicas autorais.
                                </p>

                                <Link
                                    href="/sobre"
                                    className="block mt-3 text-center py-2 rounded-md bg-pink-900/20 border border-pink-300/30 text-pink-100 hover:border-pink-200/60 transition"
                                >
                                    Saber mais
                                </Link>
                            </div>
                        )}
                    </div>
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
                                Poções Disponíveis
                            </h2>

                            <div className="mt-3 h-0.5 w-52 bg-linear-to-r from-pink-300 via-amber-200 to-transparent"></div>

                            <p className="text-zinc-400 text-lg mt-4">
                                Escolha sua poção e se surpreenda.
                            </p>
                        </div>

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
                                    tipo="cliente"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}
