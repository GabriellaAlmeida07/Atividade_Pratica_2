"use client";

import { useState } from "react";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { ProdutoProps } from "@/entities/entities";
import { FaSpinner } from "react-icons/fa";
import { toast } from "sonner";

export default function CadastroPocao() {
    const initialProduto: ProdutoProps = {
        nome: "",
        img_url: "",
        descricao: "",
        preco: 0,
    };

    const [loading, setLoading] = useState(false);
    const [produto, setProduto] = useState<ProdutoProps>(initialProduto);
    const [precoTexto, setPrecoTexto] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setLoading(true);

            const formData = new FormData();

            formData.append("nome", produto.nome);
            formData.append("descricao", produto.descricao);
            formData.append("img_url", produto.img_url);
            formData.append("preco", String(produto.preco));

            const res = await fetch("/api/produtos", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error);

            toast.success("Poção cadastrada com sucesso!", {
                style: {
                    background: "#12251a",
                    color: "#d1fae5",
                    border: "1px solid #22c55e",
                },
            });
        } catch (error) {
            console.error(error);
            toast.error("Erro ao cadastrar poção");
        } finally {
            setLoading(false);
            setPrecoTexto("");
            setTimeout(() => {
                setProduto(initialProduto);
            }, 1200);
        }
    };

    const inputStyle = `
        w-full
        bg-[#18131c]
        border
        border-pink-900/30
        text-zinc-100
        placeholder:text-zinc-500
        rounded-lg
        px-4
        py-3
        outline-none
        transition
        focus:border-pink-400
        focus:shadow-[0_0_15px_rgba(244,114,182,.18)]
    `;

    return (
        <main className="min-h-screen bg-linear-to-br from-[#09070b] via-[#120d15] to-black flex items-center justify-center p-6">
            <div
                className="
                    relative
                    w-full
                    max-w-2xl
                    bg-linear-to-br
                    from-[#121015]
                    via-[#18131c]
                    to-black
                    border
                    border-pink-900/30
                    shadow-[0_0_50px_rgba(244,114,182,.08)]
                    p-8
                "
                style={{
                    clipPath:
                        "polygon(4% 0%,96% 0%,100% 10%,98% 88%,94% 100%,6% 100%,0% 88%,2% 10%)",
                }}
            >
                {/* Botão voltar */}
                <Link
                    href="/"
                    className="
                        absolute
                        top-6
                        left-6
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-sm
                        bg-pink-900/20
                        border
                        border-pink-300/30
                        text-pink-100
                        hover:border-pink-200/60
                        transition
                    "
                >
                    <IoArrowBackOutline size={18} />
                    Voltar
                </Link>

                {/* Título */}
                <div className="text-center mb-10 mt-10">
                    <h1
                        style={{ fontFamily: "var(--font-grenze)" }}
                        className="text-5xl text-pink-200 tracking-widest"
                    >
                        Nova Poção
                    </h1>

                    <p className="text-zinc-400 mt-2">
                        Adicione uma nova poção à sua loja
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-pink-100">Nome da Poção</label>
                        <input
                            required
                            type="text"
                            name="nome"
                            value={produto.nome}
                            onChange={(e) =>
                                setProduto({ ...produto, nome: e.target.value })
                            }
                            className={inputStyle}
                            placeholder="Ex: Poção da juventude"
                        />
                    </div>

                    <div>
                        <label className="text-pink-100">Descrição</label>
                        <textarea
                            required
                            name="descricao"
                            value={produto.descricao}
                            onChange={(e) =>
                                setProduto({
                                    ...produto,
                                    descricao: e.target.value,
                                })
                            }
                            className={`${inputStyle} h-28 resize-none`}
                            placeholder="Conte mais sobre essa poção..."
                        />
                    </div>

                    <div>
                        <label className="text-pink-100">Preço (R$)</label>
                        <input
                            required
                            type="text"
                            value={precoTexto}
                            onChange={(e) => {
                                const apenasNumeros = e.target.value.replace(
                                    /\D/g,
                                    ""
                                );

                                const valor = Number(apenasNumeros) / 100;

                                setProduto({
                                    ...produto,
                                    preco: valor,
                                });

                                setPrecoTexto(
                                    valor.toLocaleString("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    })
                                );
                            }}
                            className={inputStyle}
                            placeholder="R$ 0,00"
                        />
                    </div>

                    <div>
                        <label className="text-pink-100">Foto da Poção</label>
                        <input
                            type="text"
                            value={produto.img_url}
                            onChange={(e) =>
                                setProduto({
                                    ...produto,
                                    img_url: e.target.value,
                                })
                            }
                            className={inputStyle}
                            placeholder="Cole a URL da imagem"
                        />
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full
                            py-3
                            mt-4
                            cursor-pointer
                            bg-linear-to-b from-pink-400/20 to-pink-900/30
                            border border-pink-300/30
                            rounded-sm
                            text-pink-100
                            font-semibold
                            hover:scale-[1.02]
                            hover:border-pink-200/60
                            transition
                            flex
                            items-center
                            justify-center
                            gap-2
                            disabled:opacity-60
                        "
                    >
                        {loading ? (
                            <>
                                <FaSpinner className="animate-spin" />
                                Salvando...
                            </>
                        ) : (
                            "Salvar Poção"
                        )}
                    </button>
                </form>
            </div>
        </main>
    );
}
