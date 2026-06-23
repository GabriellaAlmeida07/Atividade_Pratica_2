import { NextResponse } from "next/server";
import { ProdutoController } from "@/controllers/produto.controller";
import { initDB } from "@/models/dbconfig";
import { ProdutoProps } from "@/entities/entities";

const controller = new ProdutoController();

// Rota para cadastro de novo produto
export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const produtoData: ProdutoProps = {
            nome: formData.get("nome") as string,
            descricao: formData.get("descricao") as string,
            preco: Number(formData.get("preco")),
            img_url: formData.get("img_url") as string,
        };

        const produto = await controller.cadastrarProduto(produtoData);

        return NextResponse.json(
            {
                message: "Produto criado com sucesso!",
                produto,
            },
            { status: 201 }
        );

    } catch (error) {
        return NextResponse.json(
            {
                message: "Erro ao criar produto",
                error: String(error),
            },
            { status: 500 }
        );
    }
}

// Rota para pegar todos os produtos cadastrados
export async function GET() {
    try {
        await initDB(); // Garante a inicialização do banco com os produtos default

        const produtos = await controller.findAllProdutos();

        return NextResponse.json(produtos);
    } catch (error) {
        return NextResponse.json(
            {
                message: "Erro ao buscar produtos",
                error: String(error),
            },
            { status: 500 },
        );
    }
}
