# 🚀 Guia Rápido - Projeti Meta 2

## ✅ Status Atual

✔️ Dependências instaladas (backend e frontend)  
✔️ Servidores iniciados e funcionando  
✔️ Navbar responsivo implementado  
✔️ 4 páginas criadas e funcionando  
✔️ Build testado e sem erros  

## 🌐 Acesse o Projeto

### Frontend (Next.js)
- **URL:** http://localhost:3000
- **Páginas disponíveis:**
  - `/` - Página inicial
  - `/sobre` - Sobre o projeto
  - `/servicos` - Serviços oferecidos
  - `/contato` - Formulário de contato

### Backend (Express API)
- **URL:** http://localhost:3001
- **Endpoints disponíveis:**
  - `GET /` - Status da API
  - `GET /api/teste` - Teste JSON
  - `GET /api/usuarios` - Lista de usuários
  - `GET /api/usuario/:id` - Usuário por ID
  - `POST /api/usuarios` - Criar usuário

## 🎨 Features Implementadas

### Navbar
- ✅ Design moderno com gradiente
- ✅ Menu desktop (>768px)
- ✅ Menu mobile com Sheet drawer
- ✅ Sticky com backdrop blur
- ✅ Navegação funcional entre páginas

### Páginas
- ✅ Home: Hero section + Features + CTA
- ✅ Sobre: Missão e tecnologias
- ✅ Serviços: Grid de serviços com cards
- ✅ Contato: Formulário + informações de contato

### Componentes shadcn/ui
- ✅ Button
- ✅ Card (CardHeader, CardTitle, CardDescription, CardContent)
- ✅ Sheet (para menu mobile)
- ✅ Input (para formulários)

## 📱 Testando

### Desktop
1. Abra http://localhost:3000
2. Navegue pelos links no menu superior
3. Teste os botões de CTA

### Mobile
1. Redimensione o navegador para <768px
2. Clique no ícone de menu (☰)
3. Teste a navegação pelo drawer lateral

## 🔧 Comandos Úteis

### Reiniciar Backend
```powershell
cd backend
npm run dev
```

### Reiniciar Frontend
```powershell
cd frontend
npm run dev
```

### Build de Produção
```powershell
cd frontend
npm run build
```

## 🎯 Próximas Melhorias Sugeridas

1. **Conectar formulário de contato com API**
   - Criar endpoint POST /api/contato no backend
   - Conectar formulário do frontend

2. **Adicionar dark mode**
   - Instalar next-themes
   - Criar toggle no navbar

3. **Configurar PostgreSQL**
   - Editar `backend/.env` com credenciais reais
   - Rodar `npx prisma migrate dev`

4. **Deploy**
   - Frontend: Vercel
   - Backend: Railway ou Render

## 📚 Tecnologias Usadas

- **Next.js 15** + React 19
- **TailwindCSS v4**
- **shadcn/ui** (new-york style)
- **Lucide React** (ícones)
- **TypeScript**
- **Express.js**
- **Prisma ORM**

## 🆘 Problemas Comuns

### Porta já em uso
Se as portas 3000 ou 3001 estiverem ocupadas:
```powershell
# Ver processos na porta 3000
netstat -ano | findstr :3000

# Matar processo (substitua PID)
taskkill /PID <PID> /F
```

### Erro de módulos
```powershell
# Reinstalar dependências
rm -r node_modules package-lock.json
npm install
```

---

**Projeto pronto para desenvolvimento! 🎉**
