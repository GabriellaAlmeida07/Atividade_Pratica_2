import { NextResponse } from "next/server";
import { ProdutoController } from "@/controllers/produto.controller";

const controller = new ProdutoController();

type Params = {
    params: Promise<{ id: number }>;
};

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {

        const { id } = await params;

        const produto = await controller.findById(Number(id));

        if (!produto) {
            return NextResponse.json(
                { message: "Produto não encontrado." },
                { status: 404 }
            );
        }

        return NextResponse.json(produto);

    } catch (error) {

        return NextResponse.json(
            {
                message: "Erro ao buscar produto.",
                error: String(error),
            },
            { status: 500 }
        );

    }
}

// Essa rota é chamada na página administrativa (/) ao clicar no botão de excluir
export async function DELETE(req: Request, { params }: Params) {
    try {
        const { id } = await params;

        const resultado = await controller.delete(id);

        return Response.json(resultado, { status: 200 });
    } catch (error) {
        return Response.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Erro interno do servidor",
            },
            { status: 400 }
        );
    }
}