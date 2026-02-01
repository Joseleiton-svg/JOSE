# Escola Infantil e Fundamental Primeiros Passos

Website institucional + portal escolar (pais/alunos, professores e direção) com diário escolar digital.

## Estrutura

```
backend/   # API Node.js + Express (mock)
frontend/  # React + Tailwind
```

## Requisitos

- Node.js 18+
- npm

## Como rodar

### Backend

```bash
cd backend
npm install
npm run dev
```

A API ficará disponível em `http://localhost:4000`.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Acessos de demonstração

- Admin: `admin@primeirospassos.com` / `admin123`
- Professor: `professor@primeirospassos.com` / `prof123`
- Pais: `pais@primeirospassos.com` / `pais123`
- Aluno: `aluno@primeirospassos.com` / `aluno123`

## Observações

- O diário escolar foi modelado no frontend com exemplos. O backend expõe endpoints para login, diário e comunicados.
- Uploads são armazenados localmente em `backend/uploads`.
