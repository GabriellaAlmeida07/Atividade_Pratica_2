import { ProdutoController } from "@/controllers/produto.controller";

const controller = new ProdutoController();

type Params = {
    params: Promise<{ id: number }>;
};

// Essa rota é chamada na página administrativa da vendedora (/) ao clicar no botão de excluir
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