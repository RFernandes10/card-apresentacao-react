<div align="center">
  <h1>Card Apresentação React</h1>
  <p><strong>Cartão de perfil digital interativo com flip 3D, múltiplos temas e glassmorfismo</strong></p>

  [![Live Demo](https://img.shields.io/badge/Demo%20ao%20Vivo-0A0E17?style=for-the-badge&logo=github&logoColor=white)](https://rfernandes10.github.io/card-apresentacao-react/)
  [![Licença MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)](https://github.com/RFernandes10/card-apresentacao-react/pulls)
  <br/>
  [![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
</div>

Cartão de apresentação profissional construído com **React 19, TypeScript e Tailwind CSS**. O card exibe informações de perfil na frente e habilidades técnicas no verso, com animação de flip 3D e suporte a três temas de cores.

---

## 🎬 Demo

<div align="center">
  <img src="https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/demo-flip.gif" alt="Animação de flip do cartão" width="400px"/>
</div>

---

## 🎨 Temas

<div align="center">

**Frente (perfil)**

| Drácula | Claro | Escuro |
|:---:|:---:|:---:|
| ![Tema Drácula](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/theme-dracula.png) | ![Tema Claro](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/theme-light.png) | ![Tema Escuro](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/theme-dark.png) |

**Verso (skills)**

| Drácula | Claro | Escuro |
|:---:|:---:|:---:|
| ![Skills Drácula](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/skills-dracula.png) | ![Skills Claro](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/skills-light.png) | ![Skills Escuro](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/skills-dark.png) |

</div>

---

## ✨ Features

- **Flip 3D** — animação suave ao virar o cartão para revelar a grade de habilidades
- **Glassmorfismo** — efeito vidro com backdrop-filter e transparência
- **3 Temas** — Claro, Escuro e Drácula alternados por um botão flutuante
- **Ícones de Skills** — 22+ tecnologias representadas visualmente com `react-icons`
- **Responsivo** — layout adaptável do mobile ao desktop
- **Acessibilidade** — navegação por teclado e elementos semânticos
- **Deploy automatizado** — publique no GitHub Pages com um único comando

---

## 🚀 Tecnologias

| Tecnologia | Versão | Finalidade |
|---|---|---|
| React | 19 | Componentes e gerenciamento de estado |
| TypeScript | 5.9 | Tipagem estática |
| Tailwind CSS | 3.4 | Estilização utilitária |
| Vite | 7 | Dev server com HMR e build |
| React Icons | 5.5 | Ícones de tecnologias e redes sociais |
| gh-pages | 6.3 | Deploy no GitHub Pages |

---

## 📦 Instalação

**Pré-requisitos:** Node.js 18+.

```bash
git clone https://github.com/RFernandes10/card-apresentacao-react.git
cd card-apresentacao-react
npm install
```

---

## ⚙️ Configuração

Este projeto **não requer variáveis de ambiente**. Todos os dados do perfil são definidos em `src/App.tsx`:

```tsx
<ProfileCard
  name="Seu Nome"
  title="Seu Cargo"
  bio="Sua descrição pessoal."
  profileImage="./sua-foto.jpeg"
  githubUrl="https://github.com/seu-usuario"
  linkedinUrl="https://linkedin.com/in/seu-perfil"
  skills={["React", "TypeScript", "Node.js"]}
/>
```

Coloque sua foto na pasta `public/` e atualize o caminho em `profileImage`. Para modificar as cores dos temas, ajuste as variáveis CSS em `src/index.css`.

---

## ▶️ Executando

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia servidor de desenvolvimento com HMR em `http://localhost:5173` |
| `npm run build` | Executa type-check e gera build de produção em `dist/` |
| `npm run preview` | Pré-visualiza a build de produção localmente |
| `npm run lint` | Executa ESLint em todo o código |
| `npm run deploy` | Build + deploy no GitHub Pages |

---

## 🏗️ Estrutura do Projeto

```
card-apresentacao-react/
├── .github/
│   └── assets/              # Assets de documentação (GIF, screenshots)
├── public/
│   ├── perfil.jpeg          # Foto de perfil
│   └── programmer.png       # Imagem auxiliar
├── src/
│   ├── components/
│   │   ├── ProfileCard.tsx  # Card com flip 3D e grade de skills
│   │   └── ThemeSwitcher.tsx# Botão de alternância de tema
│   ├── contexts/
│   │   └── ThemeContext.tsx  # Context API + hook useTheme
│   ├── App.tsx              # Componente raiz; aplica data-theme no <html>
│   ├── main.tsx             # Ponto de entrada da aplicação
│   └── index.css            # Variáveis CSS, temas e utilitários 3D
├── index.html               # HTML raiz (padrão Vite)
├── tailwind.config.js       # Configuração do Tailwind com cores customizadas
├── vite.config.ts           # Configuração do Vite (base path para GitHub Pages)
├── tsconfig.json            # TypeScript project references
├── eslint.config.js         # ESLint flat config
└── package.json
```

---

## 🧩 Principais Componentes

### `ProfileCard`

| Prop | Tipo | Descrição |
|---|---|---|
| `name` | `string` | Nome exibido na frente do cartão |
| `title` | `string` | Cargo ou título profissional |
| `bio` | `string` | Breve descrição pessoal |
| `profileImage` | `string` | Caminho para a foto de perfil |
| `githubUrl` | `string` | URL do perfil no GitHub |
| `linkedinUrl` | `string` | URL do perfil no LinkedIn |
| `skills` | `string[]` | Lista de habilidades exibidas no verso |

- **Frente:** foto, nome, título, bio e links sociais
- **Verso:** grade 4 colunas com ícone + nome de cada skill, com animação escalonada ao virar

### `ThemeSwitcher`

Botão posicionado no canto superior direito. Cicla os temas na ordem: **dracula → light → dark → dracula**.

### `ThemeProvider` + `useTheme`

Gerencia o estado global do tema via Context API. O tema é sincronizado com o atributo `data-theme` no `<html>`, que dispara as variáveis CSS correspondentes.

---

## 🎨 Personalização de Temas

As cores de cada tema são definidas via variáveis CSS em `src/index.css`:

| Tema | Background | Card | Texto |
|---|---|---|---|
| **Light** | Cinza claro | Branco | Escuro |
| **Dark** | Cinza escuro | Vidro escuro | Claro |
| **Dracula** | Roxo escuro | Vidro roxo | Claro com detalhes verdes |

Para adicionar um novo tema, crie um seletor `[data-theme="seu-tema"]` com as variáveis `--color-*` correspondentes.

---

## 🚀 Deploy

O projeto está configurado para GitHub Pages. O `base` no `vite.config.ts` já aponta para o nome do repositório.

```bash
npm run deploy
```

Isso executa `npm run build` e publica o conteúdo de `dist/` na branch `gh-pages`.

> **Atenção:** certifique-se de que o GitHub Pages está habilitado no repositório apontando para a branch `gh-pages`.

A aplicação está disponível em: [https://rfernandes10.github.io/card-apresentacao-react/](https://rfernandes10.github.io/card-apresentacao-react/)

---

## 🤝 Contribuição

1. Fork o repositório
2. Crie uma branch: `git checkout -b feat/minha-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona minha funcionalidade'`
4. Push para a branch: `git push origin feat/minha-feature`
5. Abra um Pull Request

Mantenha o código limpo, tipado e siga os padrões existentes.

---

## 📄 Licença

Distribuído sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <a href="https://www.linkedin.com/in/roberto-wolowitz/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="mailto:robertofernandes144@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  <a href="https://github.com/RFernandes10">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
  </a>

  <br/><br/>
  Feito com ❤️ e ☕ por <strong>Roberto Fernandes</strong>
</div>
