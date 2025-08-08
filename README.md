# Case técnico Inside diagnosticos

### Deploy da aplicação

[Case-Inside-Diagnosticos](https://inside-diagnosticos-case.vercel.app/)

---

### Organização do projeto

- Iniciei o projeto utilizando o framework [Vite](https://vitejs.dev/config/) e [React](https://reactjs.org/)
- Criei a estrutura de pastas baseado no objetivo do case
- Para me desafiar, optei por criar uma pipeline que realiza o build da aplicação e envia para a branch main do github
- Realizei o deploy da aplicação na vercel baseado na versão que está na branch main.

---

### Como iniciar a aplicação

#### 1 - Softwares necessários

- PNPM
- Node.js
- vscode ou outro editor de código

#### 2 - Configurar ambiente

- utilize o comando `pnpm install` para instalar dependências
- na raiz do projeto, crie o arquivo `.env` e insira a variável de ambiente `VITE_APP_BASE_URL=https://jsonplaceholder.typicode.com`

#### 3 - Rodar o servidor

- Utilize o comando `pnpm run dev`
- Acesse `http://localhost:5173/` no seu navegador
