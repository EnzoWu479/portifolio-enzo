# Meu Portfólio

Bem-vindo ao meu portfólio! Este site foi desenvolvido para mostrar meus projetos, habilidades e experiência como desenvolvedor. Ele foi construído com Next.js e tailwind e inclui animações 3D com Three.js e um sistema de envio de e-mails na seção de contato utilizando Nodemailer.

## Links

- <a href="https://portifolio-enzo.vercel.app" target="_blank">Deploy</a>
- <a href="https://www.linkedin.com/posts/enzo-wu_portfolio-nextjs-threejs-activity-7223451272757035008-71ZX?utm_source=share&utm_medium=member_desktop" target="_blank">Postagem no linkedin</a>

## Tecnologias Utilizadas

- <a href="https://nextjs.org/" target="_blank">Next.js</a>
- <a href="https://threejs.org/" target="_blank">Three.js</a>
- <a href="https://nodemailer.com/" target="_blank">Nodemailer</a>
- <a href="https://reactjs.org/" target="_blank">React</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a>

## Funcionalidades

- **Projetos:** Uma seção dedicada aos meus projetos, com detalhes e links para repositórios ou demonstrações.
- **Tecnologias:** Uma lista das minhas principais tecnologias.
- **Expiência profissional:** Uma breve descrição sobre minha jornada como desenvolvedor.
- **Contato:** Um formulário de contato que utiliza Nodemailer para envio de e-mails diretamente do site.
- **Animações 3D:** Utilização de Three.js para criar animações e tornar a navegação mais envolvente.
- **Animações Motion:** Utilização de framer motion para criar animações e tornar a navegação mais agradável.

## Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/EnzoWu479/portifolio-enzo
    ```
2. Entre na pasta do projeto:
    ```bash
    cd portifolio-enzo
    ```
3. Instale as dependências:
    ```bash
    pnpm install
    ```
4. Configure as variáveis de ambiente para o Nodemailer:
    - Crie um arquivo `.env.local` na raiz do projeto com as seguintes informações:
        ```env
        RECEIVER_EMAIL=emaildestino@seuemail.com
        SENDER_EMAIL=emailenviador@seuemail.com
        SENDER_PASSWORD=senhadoemailenviador
        ```
5. Inicie o servidor de desenvolvimento:
    ```bash
    pnpm dev
    ```
6. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

```bash
.
├───app
│   └───[language]
├───assets
│   ├───images
│   │   └───projects
│   └───lang
├───components
│   ├───canvas
│   ├───contact-form
│   ├───icons
│   ├───sections
│   ├───slider-3d
│   └───ui
├───config
│   └───constants
│       └───texts
│           ├───en
│           └───pt-br
├───lib
│   └───email
├───styles
├───types
└───utils
```

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões, encontrar bugs ou quiser adicionar novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
