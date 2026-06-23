import { ProdutoProps } from "@/entities/entities";
import { Produto } from "@/models/produto.model";

export class ProdutoController {

    async cadastrarProduto(data: ProdutoProps) {
        return await Produto.create({
            nome: data.nome,
            preco: data.preco,
            descricao: data.descricao,
            img_url: data.img_url,
        });

    }

    async findAllProdutos() {
        return await Produto.findAll();
    }

    async findById(id: number) {
        return await Produto.findByPk(id);
    }

    async delete(id: number) {
        const linhasDeletadas = await Produto.destroy({
            where: { id: Number(id) },
        });

        if (linhasDeletadas === 0) {
            throw new Error("Produto não encontrado.");
        }

        return { message: "Poção excluída com sucesso!" };
    }

}