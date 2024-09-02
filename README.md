# 🎙️ Podcast API

**Podcast API** é uma aplicação backend simples desenvolvida em TypeScript e Node.js, que fornece endpoints para listar e filtrar episódios de podcasts. O projeto utiliza um arquivo JSON como repositório de dados e foi estruturado seguindo boas práticas de organização de código, separando responsabilidades entre controladores, serviços e repositórios.

## 🚀 Funcionalidades

- **Listar Episódios:** Retorna uma lista de todos os episódios disponíveis.
- **Filtrar Episódios:** Permite filtrar episódios por nome do podcast.

## 🛠️ Tecnologias Utilizadas

- **Node.js:** Plataforma utilizada para executar JavaScript no backend.
- **TypeScript:** Linguagem utilizada para adicionar tipagem estática ao JavaScript, melhorando a segurança e a qualidade do código.
- **HTTP:** Protocolo utilizado para comunicação entre cliente e servidor.
- **fs e path:** Módulos nativos do Node.js usados para manipulação de arquivos e caminhos de diretórios.

## 📂 Estrutura do Projeto

- **controllers:** Contém os controladores que lidam com as requisições HTTP.
- **services:** Camada de serviços responsável pela lógica de negócios, como filtragem e listagem de episódios.
- **repositories:** Camada de repositório que gerencia o acesso aos dados (neste caso, um arquivo JSON).
- **models:** Define os modelos de dados utilizados no projeto.
- **utils:** Contém enums e outras utilidades usadas por diferentes partes da aplicação.

## 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Leonardobern10/podcast-api.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd podcast-api
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

## 🔍 Uso

Após iniciar o servidor, você pode acessar os seguintes endpoints:

- **Listar Episódios:** `GET /api/list`
- **Filtrar Episódios:** `GET /api/episode?p=<nome_do_podcast>`

Exemplo de uso:

```bash
curl http://localhost:3333/api/list
curl http://localhost:3333/api/episode?p=flow
```

## 📝 Contribuição

Se você deseja contribuir para este projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch com sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Adicionei uma nova feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato:

- **Email:** leonardo.bernardo2658@gmail.com
- **GitHub:** [seu-usuario](https://github.com/Leonardobern10)
- **LinkedIn**: [leonardo-bern](https://www.linkedin.com/in/leonardo-bern/)
