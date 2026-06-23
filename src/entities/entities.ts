export type ProdutoProps = {
    id?: number;
    nome: string;
    descricao: string,
    img_url: string;
    preco: number;

    tipo?: "vendedor" | "cliente"; // Para saber o tipo de usuário "logado" ao chamar o CardProduto
};