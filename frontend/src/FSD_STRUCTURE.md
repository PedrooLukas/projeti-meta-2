# Feature-Sliced Design (FSD) Architecture

Esta aplicação segue a arquitetura FSD para melhor organização e escalabilidade do código.

## Estrutura de Pastas

```
src/
├── app/                          # Next.js App Router (páginas e rotas)
│   ├── layout.tsx               # Layout raiz da aplicação
│   ├── page.tsx                 # Página inicial
│   ├── login/                   # Rota de login
│   └── registre-se/             # Rota de registro
│
├── widgets/                      # Componentes grandes e complexos
│   ├── navbar/                  # Widget de navegação
│   │   ├── navbar.widget.tsx
│   │   └── index.ts
│   ├── footer/                  # Widget de rodapé
│   │   ├── footer.widget.tsx
│   │   └── index.ts
│   └── hero/                    # Componentes da seção hero
│       ├── waves.ui.tsx
│       ├── partners-slider.widget.tsx
│       └── index.ts
│
├── features/                     # Funcionalidades específicas
│   └── counter/                 # Feature de animação de contador
│       ├── counter-animation.feature.tsx
│       └── index.ts
│
├── entities/                     # Entidades de negócio (futuro)
│   └── (vazio por enquanto)
│
└── shared/                       # Código compartilhado
    ├── ui/                      # Componentes UI reutilizáveis
    │   ├── button.tsx
    │   ├── card.tsx
    │   ├── input.tsx
    │   ├── sheet.tsx
    │   └── index.ts
    └── lib/                     # Utilitários e helpers
        ├── utils.ts
        └── index.ts
```

## Convenções de Nomenclatura

### Arquivos de Componentes
- **Widgets**: `*.widget.tsx` - Componentes grandes e independentes
- **Features**: `*.feature.tsx` - Funcionalidades específicas
- **UI**: `*.tsx` - Componentes básicos de interface
- **Utilities**: `*.ts` ou `*.tsx` - Funções auxiliares

### Barrel Exports
Cada módulo possui um arquivo `index.ts` para facilitar imports:

```typescript
// Ao invés de:
import { Navbar } from '@/widgets/navbar/navbar.widget';

// Use:
import { Navbar } from '@/widgets/navbar';
```

## Camadas da Arquitetura

### 1. App Layer (`app/`)
- Rotas e páginas da aplicação (Next.js App Router)
- Layouts e configurações de página
- Não deve conter lógica de negócio

### 2. Widgets Layer (`widgets/`)
- Componentes grandes e auto-suficientes
- Geralmente representam seções completas da UI
- Podem importar de: `features/`, `entities/`, `shared/`
- Exemplos: Navbar, Footer, Hero Section

### 3. Features Layer (`features/`)
- Funcionalidades específicas da aplicação
- Lógica de negócio isolada
- Podem importar de: `entities/`, `shared/`
- Exemplos: Autenticação, Busca, Carrinho

### 4. Entities Layer (`entities/`)
- Entidades de negócio
- Modelos de dados
- Podem importar de: `shared/`
- Exemplos: User, Booking, Ship (futuro)

### 5. Shared Layer (`shared/`)
- Código compartilhado entre todas as camadas
- UI components básicos
- Utilitários e helpers
- Não pode importar de outras camadas

## Regras de Importação

```
app/       → pode importar: widgets/, features/, entities/, shared/
widgets/   → pode importar: features/, entities/, shared/
features/  → pode importar: entities/, shared/
entities/  → pode importar: shared/
shared/    → não importa de nenhuma camada
```

## Como Adicionar Novos Componentes

### 1. Componente UI Compartilhado
```bash
# Criar em shared/ui/
src/shared/ui/novo-componente.tsx
# Adicionar export em shared/ui/index.ts
```

### 2. Nova Feature
```bash
# Criar pasta em features/
src/features/nova-feature/
  ├── nova-feature.feature.tsx
  └── index.ts
```

### 3. Novo Widget
```bash
# Criar pasta em widgets/
src/widgets/novo-widget/
  ├── novo-widget.widget.tsx
  └── index.ts
```

## Benefícios desta Arquitetura

1. **Escalabilidade**: Fácil adicionar novas features sem afetar código existente
2. **Manutenibilidade**: Código organizado e fácil de encontrar
3. **Reutilização**: Componentes compartilhados bem definidos
4. **Testabilidade**: Isolamento de lógica facilita testes
5. **Colaboração**: Estrutura clara para trabalho em equipe
