# Note Taker

## Descrição
O Note Taker Node é uma aplicação de notas simples construída com Node.js. Ele permite que os usuários criem, leiam e excluam notas através de uma interface amigável.


## Instruções de Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/raulblummertz/note-taker-node.git

2. Navegue até o diretório do projeto:

   ```bash
   cd note-taker-node

3. Instale as dependências:

   ```bash
   npm install

## Uso

Para iniciar o servidor, use o comando a seguir:
  `npm start`
  
O servidor estará rodando em http://localhost:3000. Acesse esse endereço no seu navegador para utilizar a aplicação de notas.

## Endpoints da API
- **GET /notes**: Retorna todas as notas.
- **POST /notes**: Cria uma nova nota.
- **DELETE /notes/**: Deleta uma nota pelo ID.
