# 🍕 Bella Napoli Pizzaria — Site React + Vite

Site completo para pizzaria com sistema de pedidos, cardápio filtrado e formulário de contato.

## Tecnologias

- **React 18** — biblioteca de UI
- **Vite** — bundler rápido para desenvolvimento
- **React Router DOM v6** — navegação entre páginas (SPA)
- **Google Fonts** — Playfair Display + DM Sans
- **CSS puro** — sem frameworks de UI (Bootstrap, Tailwind etc.)

## Estrutura de páginas

| Rota | Página |
|------|--------|
| `/` | Home (hero, destaques, depoimentos) |
| `/cardapio` | Cardápio com filtro por categoria e busca |
| `/pedido` | Sistema de pedido (entrega / retirada) |
| `/contato` | Formulário de contato e informações |

## Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador: http://localhost:5173
```

## Como fazer o build

```bash
npm run build
# Os arquivos finais ficam na pasta /dist
```

## Deploy no Vercel

1. Faça um fork ou clone deste repositório para o seu GitHub
2. Acesse [vercel.com](https://vercel.com) e crie uma conta
3. Clique em **New Project** → importe o repositório
4. O Vercel detecta automaticamente que é Vite
5. Clique em **Deploy** — pronto! 🚀

> O arquivo `vercel.json` já está configurado para suporte ao React Router (SPA routing).

## Estrutura do projeto

```
pizzaria/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── PizzaCard.jsx / .css
│   ├── data/
│   │   └── pizzas.js          ← dados das pizzas
│   ├── pages/
│   │   ├── Home.jsx / .css
│   │   ├── Cardapio.jsx / .css
│   │   ├── Pedido.jsx / .css
│   │   └── Contato.jsx / .css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css              ← variáveis globais e utilitários
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

## Sobre o projeto (TCC)

Este site foi desenvolvido como exemplo de TCC para alunos do ensino médio técnico em Informática. Ele demonstra:

- Componentização com React
- Roteamento SPA com React Router
- Estado com `useState`
- Props e composição de componentes
- CSS responsivo sem frameworks
- Deploy profissional no Vercel

---

*Projeto criado com ❤️ como exemplo de TCC — Informática*
