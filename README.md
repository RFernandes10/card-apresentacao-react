# Card Apresentação React

<div align="center">

Cartão de perfil pessoal interativo construído com **React 19, TypeScript e Tailwind CSS**.  
Apresenta animação de flip 3D, glassmorfismo e três temas alternáveis — pronto para ser personalizado e publicado.

[![Live Demo](https://img.shields.io/badge/Demo%20ao%20Vivo-0A0E17?style=for-the-badge&logo=github&logoColor=white)](https://rfernandes10.github.io/card-apresentacao-react/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 🎬 Demo

<div align="center">

![Animação de flip do cartão](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/demo-flip.gif)

</div>

---

## 🎨 Temas

Frente do cartão em cada um dos três temas disponíveis.

<div align="center">

| Drácula | Claro | Escuro |
|:---:|:---:|:---:|
| ![Tema Drácula](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/theme-dracula.png) | ![Tema Claro](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/theme-light.png) | ![Tema Escuro](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/theme-dark.png) |

</div>

---

## 🔄 Verso (Skills)

Ao clicar no cartão, ele vira (flip 3D) e revela a grade de habilidades.

<div align="center">

| Drácula | Claro | Escuro |
|:---:|:---:|:---:|
| ![Verso Drácula](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/skills-dracula.png) | ![Verso Claro](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/skills-light.png) | ![Verso Escuro](https://raw.githubusercontent.com/RFernandes10/card-apresentacao-react/main/.github/assets/skills-dark.png) |

</div>

---

## ✨ Features

- **Flip 3D** — clique no cartão para revelar o verso com a grade de habilidades
- **Três temas** — Claro, Escuro e Drácula, alternados por um botão fixo
- **Glassmorfismo** — efeito de transparência e blur via Tailwind CSS
- **Ícones de skills** — mais de 20 tecnologias representadas visualmente com `react-icons`
- **Acessibilidade** — cartão focável via teclado (`tabIndex`, `data-theme` no `<html>`)
- **Mobile-first** — layout responsivo adaptado para qualquer tela
- **Deploy automatizado** — publicação no GitHub Pages com um único comando

---

## 🚀 Tecnologias

| Tecnologia | Versão | Finalidade |
|---|---|---|
| React | 19 | Componentes e gerenciamento de estado |
| TypeScript | 5.9 | Tipagem estática |
| Tailwind CSS | 3.4 | Estilização utilitária |
| Vite | 7 | Dev server com HMR e build de produção |
| React Icons | 5.5 | Ícones de tecnologias no verso do cartão |
| gh-pages | 6.3 | Deploy automatizado no GitHub Pages |

---

## 📦 Instalação

**Pré-requisitos:** Node.js v18 ou superior.

```bash
# 1. Clone o repositório
git clone https://github.com/RFernandes10/card-apresentacao-react.git

# 2. Acesse a pasta
cd card-apresentacao-react

# 3. Instale as dependências
npm install
```

---

## ▶️ Executando o Projeto

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Compila TypeScript e gera a build de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa o ESLint no projeto |
| `npm run deploy` | Faz build e publica no GitHub Pages |

---

## 🏗️ Estrutura do Projeto

```
card-apresentacao-react/
├── .github/
│   └── assets/              # Assets de documentação (GIF, screenshots)
├── public/
│   ├── perfil.jpeg          # Foto de perfil (frente do cartão)
│   └── programmer.png       # Imagem auxiliar
├── src/
│   ├── components/
│   │   ├── ProfileCard.tsx  # Cartão com flip 3D e grade de skills
│   │   └── ThemeSwitcher.tsx# Botão de alternância de tema
│   ├── contexts/
│   │   └── ThemeContext.tsx # Context API para gerenciamento de tema
│   ├── App.tsx              # Componente raiz; aplica data-theme no <html>
│   ├── main.tsx             # Ponto de entrada da aplicação
│   └── index.css            # Variáveis CSS e estilos globais
├── index.html               # HTML raiz (padrão Vite)
├── tailwind.config.js       # Configuração do Tailwind
├── vite.config.ts           # Configuração do Vite (base path para GitHub Pages)
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

- **Frente:** foto, nome, título, bio e links sociais.
- **Verso:** grade 4 colunas com ícone + nome de cada skill, com animação escalonada ao virar.

### `ThemeSwitcher`

Botão posicionado no canto superior direito. Cicla os temas na ordem: `dracula → light → dark → dracula`.

### `ThemeContext`

Context API que expõe `theme` e `toggleTheme`. O tema padrão é `dracula`. O valor é memoizado com `useMemo` para evitar re-renders desnecessários.

---

## 📚 Personalização

Para usar o cartão com seus próprios dados, edite `src/App.tsx`:

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

Coloque sua foto na pasta `public/` e atualize o caminho em `profileImage`.

---

## 🚀 Deploy

O projeto está configurado para o GitHub Pages. O `base` no `vite.config.ts` já aponta para o nome do repositório.

```bash
npm run deploy
```

Isso executa `npm run build` e publica o conteúdo de `dist/` na branch `gh-pages`.

> **Atenção:** certifique-se de que o GitHub Pages está habilitado no repositório apontando para a branch `gh-pages`.

---

## 🤝 Contribuição

1. Faça um fork do repositório
2. Crie uma branch: `git checkout -b feat/minha-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona minha feature'`
4. Push para a branch: `git push origin feat/minha-feature`
5. Abra um Pull Request

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
  Feito com ❤️ por <strong>Roberto Fernandes</strong> — ⭐ se o projeto foi útil, deixe uma estrela!
</div>
