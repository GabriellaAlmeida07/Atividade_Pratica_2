"use client";

import { ProdutoProps } from "@/entities/entities";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { FaSpinner, FaTrash } from "react-icons/fa";

export default function CardProduto({
    id,
    nome,
    img_url,
    descricao,
    preco,
    tipo,
}: ProdutoProps) {
    const [loadingExclusao, setLoadingExclusao] = useState(false);
    const [comprado, setComprado] = useState(false);
    const [showConfirmacao, setShowConfirmacao] = useState(false);

    async function deletarProduto() {
        try {
            setLoadingExclusao(true);

            const response = await fetch(`/api/produtos/${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (response.ok) {
                toast.info("Poção excluída!", {
                    style: {
                        background: "#12251a",
                        color: "#d1fae5",
                        border: "1px solid #22c55e",
                    },
                });
                setTimeout(() => window.location.reload(), 1200);
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            toast.error("Erro ao conectar com o servidor");
        } finally {
            setLoadingExclusao(false);
            setShowConfirmacao(false);
        }
    }

    return (
        <main>
            <div
                className="
                    relative
                    w-full max-w-4xl
                    flex
                    overflow-hidden
                    bg-linear-to-br from-[#121015] via-[#241d2a] to-black
                    border border-pink-900/30
                    transition-all duration-300
                    hover:scale-[1.015]
                    hover:shadow-[0_0_40px_rgba(244,114,182,.12)]
                "
                style={{
                    clipPath:
                        "polygon(4% 0%,96% 0%,100% 10%,98% 88%,94% 100%,6% 100%,0% 88%,2% 10%)",
                }}
            >
                {/* Imagem */}
                <div className="flex items-center justify-center h-52 shrink-0 overflow-hidden border-r border-pink-900/20">
                    <Image
                        src={img_url}
                        alt={nome}
                        width={90}
                        height={90}
                        unoptimized
                        className="object-cover brightness-90 hover:scale-110 transition"
                    />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-1 justify-between px-8 py-6">
                    <div className="flex flex-col justify-center gap-4">
                        <h2
                            style={{ fontFamily: "var(--font-grenze)" }}
                            className="text-base md:text-4xl text-pink-200 tracking-widest"
                        >
                            {nome}
                        </h2>

                        <div className="w-28 h-0.5 bg-linear-to-r from-pink-300 to-transparent" />

                        <p className="text-xs md:text-xl text-zinc-400 max-w-xl leading-relaxed">
                            {descricao}
                        </p>

                        <p className="text-base md:text-2xl font-bold text-amber-200 tracking-wide">
                            R$ {preco.toFixed(2)}
                        </p>
                    </div>

                    {/* Botão de excluir produto caso o tipo seja vendedor, ou botão de compra se for cliente */}
                    <div className="ml-2 flex items-center">
                        {tipo === "cliente" ? (
                            <button
                                onClick={() => setComprado(true)}
                                className="
                                    px-7 py-3
                                    cursor-pointer
                                    bg-linear-to-b from-pink-400/20 to-pink-900/30
                                    border border-pink-300/30
                                    text-pink-100
                                    rounded-sm
                                    font-semibold
                                    hover:scale-105
                                    hover:border-pink-200/60
                                    transition
                                "
                            >
                                Comprar
                            </button>
                        ) : (
                            <button
                                onClick={() => setShowConfirmacao(true)}
                                className="
                                    cursor-pointer
                                    w-9 h-9
                                    md:w-13 md:h-13
                                    flex items-center justify-center
                                    bg-red-950/40
                                    rounded-xl
                                    border border-red-400/30 
                                    text-[#cecccc]
                                    hover:bg-red-900/60
                                    transition
                                "
                            >
                                <FaTrash className="w-5 h-5 md:w-7 md:h-7" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Confirmação de compra realizada */}
            {comprado && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-200">
                    <div className="relative bg-[#1a171d] border border-pink-900/30 rounded-lg p-8 w-1/2 py-10 overflow-hidden shadow-[0_0_30px_rgba(244,114,182,.12)]">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

                        <h2
                            style={{ fontFamily: "var(--font-grenze)" }}
                            className="text-2xl text-pink-200 text-center tracking-widest"
                        >
                            Poção adquirida com sucesso!
                        </h2>

                        <p className="text-zinc-400 text-center mt-4 leading-relaxed">
                            Você acaba de adquirir a poção{" "}
                            <span className="text-pink-300 font-semibold">
                                {nome}
                            </span>
                            
                        </p>

                        {/* Voltar */}
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={() => setComprado(false)}
                                className="
                                    px-6 py-2
                                    bg-linear-to-b from-pink-400/20 to-pink-900/30
                                    border border-pink-300/30
                                    text-pink-100
                                    rounded-sm
                                    hover:scale-105
                                    hover:border-pink-200/60
                                    transition
                                "
                            >
                                Continuar comprando
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirmação de exclusão do produto */}
            {showConfirmacao && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-200">
                    <div className="bg-[#1a171d] border border-pink-900/30 rounded-lg p-8 w-95">
                        <h2
                            style={{ fontFamily: "var(--font-grenze)" }}
                            className=" text-xl text-pink-200 text-center"
                        >
                            Excluir Poção
                        </h2>

                        <p className="text-zinc-400 text-center mt-4">
                            Deseja realmente excluir este item?
                        </p>

                        <div className="flex gap-4 mt-8">
                            <button
                                onClick={() => setShowConfirmacao(false)}
                                className="flex-1 py-2 bg-zinc-700 hover:bg-zinc-600"
                            >
                                Cancelar
                            </button>

                            <button
                                onClick={deletarProduto}
                                disabled={loadingExclusao}
                                className="flex-1 py-2 bg-red-700 hover:bg-red-600 flex items-center justify-center gap-2"
                            >
                                {loadingExclusao ? (
                                    <>
                                        <FaSpinner className="animate-spin" />
                                        Excluindo...
                                    </>
                                ) : (
                                    "Excluir"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
