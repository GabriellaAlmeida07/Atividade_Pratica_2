# Como executar o projeto

Siga os passos abaixo para executar a aplicação localmente:

```bash
npm install
npm run dev
```

Após iniciar o servidor de desenvolvimento, a aplicação estará disponível em:

```
http://localhost:3000
```

# Guia de Navegação e Uso

Ao executar a aplicação, você será direcionado para a página inicial (`/`), que corresponde ao **painel administrativo da vendedora**. Nessa página é exibida a listagem de todas as poções cadastradas na loja.

As funcionalidades disponíveis nessa tela são:

* **Cadastrar uma nova poção**, clicando no botão **"+ Adicionar Nova Poção"**.
* **Excluir uma poção**, clicando no ícone de lixeira presente no card da poção desejada.

## Página do Cliente

Para acessar a visão do cliente, utilize a rota:

```
http://localhost:3000/Cliente
```

Nessa página é possível visualizar todas as poções disponíveis para compra e simular uma compra clicando no botão **Comprar** presente no card da poção desejada.

## Página "Sobre a Loja"

Para acessar a página de informações da loja, clique no ícone de menu (hambúrguer) localizado no canto superior direito do cabeçalho.

Você será direcionado para a rota:

```
http://localhost:3000/Sobre
```

Essa página apresenta:

* A história da loja **Poções & Soluções**;
* Uma imagem do interior da loja;
* Informações sobre a proprietária e alquimista **Annabelle**;
* A história do grimório utilizado pelos alquimistas da família responsável pela loja;
* Um rodapé contendo informações de contato e a localização da loja, situada no **Beco da Última Saída**.

# Características do Projeto

O projeto foi desenvolvido para atender aos requisitos propostos, contemplando:

* Interface responsiva;
* Design com temática sombria inspirada no universo de fantasia e magia;
* Fontes clássicas e sóbrias;
* Cadastro, listagem, exclusão e simulação de compra de poções;
