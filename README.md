# Portfólio Profissional - React & Vite

## 📋 Sobre o Projeto

Este é um portfólio profissional desenvolvido com **React** e **Vite**, utilizando componentes modernos e Hooks do React para criar uma experiência interativa e dinâmica.

## 🎨 Template Escolhido

**Template 01** - Design moderno e minimalista com seções para:
- Hero Section (Apresentação pessoal)
- Blog (Artigos e posts)
- Projetos (Portfólio de trabalhos)
- Footer (Redes sociais e informações de contato)

O design foi desenvolvido seguindo fielmente as diretrizes do Template 01, com layout responsivo e interface limpa e profissional.

## 🚀 Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **Vite 5.0.8** - Build tool e servidor de desenvolvimento
- **CSS3** - Estilização moderna com variáveis CSS e responsividade
- **React Hooks** - useState, useEffect, useCallback, useMemo, useRef

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd "C:\Users\guilh\Meu Portfolio"
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse o projeto no navegador:
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter ESLint

## 🎣 Hooks do React Implementados

O projeto utiliza diversos Hooks do React para gerenciar estado e efeitos colaterais:

### 1. **useState**
Utilizado em múltiplos componentes para gerenciar estado local:
- **Hero**: `isDownloading`, `viewCount`, `downloadCount`
- **Blog**: `selectedTag`, `filteredPosts`, `posts`
- **Projects**: `visibleProjects`, `projectLikes`, `projects`
- **Header**: `isScrolled`
- **Footer**: `hoveredIcon`

### 2. **useEffect**
Implementado para efeitos colaterais e lifecycle:
- **Hero**: Carregamento e atualização de estatísticas do localStorage
- **Blog**: Filtragem de posts baseada na tag selecionada
- **Projects**: 
  - Carregamento de likes do localStorage
  - Intersection Observer para animações de scroll
- **Header**: Listener de scroll para efeito no header

### 3. **useCallback**
Otimização de funções para evitar re-renderizações desnecessárias:
- Função de download no Hero
- Handlers de scroll no Header
- Handlers de mouse no Footer

### 4. **useMemo**
Memoização de valores computados:
- Tags únicas no Blog
- Posts formatados no Blog
- Links sociais e ano atual no Footer

### 5. **useRef**
Referência a elementos DOM:
- Container de projetos para Intersection Observer

## 📝 Informações Pessoais

O portfólio contém informações pessoais do desenvolvedor:

- **Nome**: Guilherme Andrade
- **Localização**: São Paulo - SP
- **Profissão**: Engenheiro de Dados | Desenvolvedor | Analista
- **Especialidades**: Desenvolvimento | Dados | Bilíngue | IA | Suporte | Scrum
- **Contato**: 
  - Email: guilhermeandradesv@gmail.com
  - WhatsApp: (85) 98963-8663
  - LinkedIn: https://www.linkedin.com/in/guilhermeandradesv/

## 📸 Adicionando sua Foto

Para adicionar sua foto ao portfólio:

1. Coloque sua foto na pasta `public/` com o nome `guilherme-photo.jpg`
2. A foto será exibida automaticamente na seção Hero
3. Formato recomendado: JPG ou PNG, tamanho mínimo 300x300px
4. A foto será exibida em formato circular com borda

**Nota**: Se a foto não for encontrada, ela será ocultada automaticamente sem quebrar o layout.

## 🎯 Funcionalidades Implementadas

### Hero Section
- Contador de visualizações com persistência no localStorage
- Contador de downloads do resumo
- Botão de download com feedback visual

### Blog Section
- Sistema de filtros por tags
- Cards de posts com informações detalhadas
- Layout responsivo em grid

### Projects Section
- Sistema de likes por projeto
- Animações de entrada ao scroll
- Persistência de likes no localStorage

### Header
- Navegação sticky com efeito ao scroll
- Links de navegação suave

### Footer
- Links para redes sociais
- Copyright dinâmico com ano atual
- Efeitos de hover interativos

## 📁 Estrutura do Projeto

```
portfolio-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Blog.jsx
│   │   ├── Blog.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design e Estilo

O projeto segue um design moderno e profissional com:
- Paleta de cores consistente usando variáveis CSS
- Tipografia clara e legível
- Layout responsivo para diferentes tamanhos de tela
- Animações suaves e transições
- Acessibilidade com aria-labels e semântica HTML

## 📱 Responsividade

O portfólio é totalmente responsivo, adaptando-se a:
- Desktops (1200px+)
- Tablets (768px - 1199px)
- Mobile (< 768px)

## 🔧 Configuração do Vite

O projeto utiliza Vite como build tool, oferecendo:
- Hot Module Replacement (HMR) rápido
- Build otimizada para produção
- Suporte nativo a ES modules

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio pessoal.

## 👤 Autor

**Guilherme** - Desenvolvedor Full-stack

---

Desenvolvido com ❤️ usando React e Vite
