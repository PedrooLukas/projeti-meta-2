# Guia de Migração para FSD Architecture

## O que mudou?

O frontend foi reorganizado seguindo a arquitetura **Feature-Sliced Design (FSD)** para melhor escalabilidade e manutenibilidade.

## Mapeamento de Arquivos

### Antes → Depois

```
src/components/navbar.tsx           → src/widgets/navbar/navbar.widget.tsx
src/components/footer.tsx           → src/widgets/footer/footer.widget.tsx
src/components/waves.tsx            → src/widgets/hero/waves.ui.tsx
src/components/partners-slider.tsx  → src/widgets/hero/partners-slider.widget.tsx
src/components/counter-animation.tsx → src/features/counter/counter-animation.feature.tsx
src/components/ui/button.tsx        → src/shared/ui/button.tsx
src/components/ui/card.tsx          → src/shared/ui/card.tsx
src/components/ui/input.tsx         → src/shared/ui/input.tsx
src/components/ui/sheet.tsx         → src/shared/ui/sheet.tsx
src/lib/utils.ts                    → src/shared/lib/utils.ts
```

## Mudanças nos Imports

### Antes:
```typescript
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Waves } from "@/components/waves";
import { CounterAnimation } from "@/components/counter-animation";
import { cn } from "@/lib/utils";
```

### Depois:
```typescript
import { Navbar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";
import { Button, Card } from "@/shared/ui";
import { Waves } from "@/widgets/hero";
import { CounterAnimation } from "@/features/counter";
import { cn } from "@/shared/lib";
```

## Convenções de Nomenclatura

- **`.widget.tsx`** - Componentes grandes (Navbar, Footer, etc.)
- **`.feature.tsx`** - Funcionalidades específicas
- **`.ui.tsx`** - Componentes de UI menores
- **`index.ts`** - Barrel exports para facilitar imports

## Estrutura de Pastas

```
src/
├── app/              # Next.js App Router
├── widgets/          # Componentes grandes e independentes
├── features/         # Funcionalidades específicas
├── entities/         # Entidades de negócio (futuro)
└── shared/           # Código compartilhado
    ├── ui/          # Componentes UI
    └── lib/         # Utilitários
```

## Como Desenvolver Agora

### Adicionar novo componente UI:
```bash
# Criar arquivo
src/shared/ui/novo-componente.tsx

# Adicionar export
src/shared/ui/index.ts
export { NovoComponente } from './novo-componente';

# Usar
import { NovoComponente } from '@/shared/ui';
```

### Adicionar nova feature:
```bash
# Criar pasta
src/features/nova-feature/
  ├── nova-feature.feature.tsx
  └── index.ts

# Usar
import { NovaFeature } from '@/features/nova-feature';
```

### Adicionar novo widget:
```bash
# Criar pasta
src/widgets/novo-widget/
  ├── novo-widget.widget.tsx
  └── index.ts

# Usar
import { NovoWidget } from '@/widgets/novo-widget';
```

## Benefícios

✅ **Escalabilidade** - Fácil adicionar novas features  
✅ **Organização** - Código bem estruturado  
✅ **Manutenibilidade** - Fácil encontrar e modificar código  
✅ **Reutilização** - Componentes compartilhados bem definidos  
✅ **Testabilidade** - Isolamento facilita testes  

## Documentação Completa

Consulte `src/FSD_STRUCTURE.md` para documentação detalhada da arquitetura.

## Status da Migração

✅ Todos os componentes migrados  
✅ Todos os imports atualizados  
✅ Build funcionando sem erros  
✅ Estrutura FSD completa  
