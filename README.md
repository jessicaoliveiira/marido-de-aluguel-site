# 🔧 Marido de Aluguel – Site Profissional

Site moderno e otimizado para SEO de serviços de **Marido de Aluguel**, construído com **Next.js 14 App Router**, **TypeScript** e **Tailwind CSS**.

---

## 🚀 Stack Tecnológica

- **Next.js 14** – App Router, SSG, metadata API
- **TypeScript** – Tipagem completa
- **Tailwind CSS** – Design responsivo e mobile-first
- **React Hook Form** – Formulário de contato validado
- **Lucide React** – Ícones modernos
- **Vercel** – Deploy otimizado

---

## 📂 Estrutura do Projeto

```
marido-de-aluguel-site/
├── app/
│   ├── layout.tsx          # Layout global + metadados SEO
│   ├── page.tsx            # Home (Hero, Serviços, Depoimentos, FAQ, CTA)
│   ├── servicos/page.tsx   # Página de Serviços detalhados
│   ├── sobre/page.tsx      # Sobre o Profissional
│   ├── avaliacoes/page.tsx # Avaliações dos clientes
│   ├── contato/page.tsx    # Formulário + Mapa + Contato
│   ├── sitemap.ts          # Sitemap automático
│   ├── robots.ts           # Robots.txt automático
│   └── not-found.tsx       # Página 404 personalizada
├── components/
│   ├── Header.tsx          # Header fixo com menu responsivo
│   ├── Footer.tsx          # Footer completo
│   ├── WhatsAppFloat.tsx   # Botão flutuante WhatsApp
│   ├── ContactForm.tsx     # Formulário (React Hook Form)
│   ├── TestimonialCard.tsx # Card de depoimento
│   ├── FAQSection.tsx      # FAQ acordeão (Schema.org)
│   └── SchemaOrg.tsx       # Dados estruturados LocalBusiness
├── lib/
│   └── config.ts           # ⚙️  CONFIGURAÇÕES CENTRAIS (edite aqui!)
└── public/
    └── og-image.jpg        # Imagem para Open Graph (adicionar)
```

---

## ⚙️ Configuração Inicial

### 1. Edite `lib/config.ts`

Todas as informações do negócio ficam em um único arquivo:

```ts
export const siteConfig = {
  name: 'Marido de Aluguel',
  city: 'São Paulo', // ← Sua cidade
  state: 'SP',
  phone: '5511943135297', // ← Seu WhatsApp (só números, com DDI)
  phoneFormatted: '(11) 94313-5297',
  email: 'contato@seusite.com.br',
  address: 'São Paulo, SP – Atendemos toda a região',
  instagram: 'https://instagram.com/seu_perfil',
  facebook: 'https://facebook.com/sua_pagina',
  whatsappMessage: 'Olá, gostaria de solicitar um orçamento',
  googleMapsEmbed: 'COLE_AQUI_O_EMBED_DO_GOOGLE_MAPS'
};
```

### 2. Adicione a imagem Open Graph

Coloque uma imagem `og-image.jpg` (1200×630px) em `/public/`.

### 3. (Opcional) Adicione foto do profissional

Coloque uma foto em `/public/images/profissional.jpg` e edite `app/sobre/page.tsx` para usar `<Image>` do Next.js.

---

## 🛠️ Rodando Localmente

```bash
# Instalar dependências
pnpm install

# Servidor de desenvolvimento
pnpm dev
# Acesse: http://localhost:3000

# Build de produção
pnpm build

# Rodar produção local
pnpm start
```

---

## 🚀 Deploy na Vercel

### Opção 1 – Interface Web (mais fácil)

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em **"Add New Project"**
3. Importe o repositório do GitHub
4. Clique em **"Deploy"** — a Vercel detecta o Next.js automaticamente

### Opção 2 – CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer deploy
vercel

# Deploy em produção
vercel --prod
```

### Variáveis de Ambiente (opcional)

No painel da Vercel, adicione se necessário:

| Variável                      | Valor                             |
| ----------------------------- | --------------------------------- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `5511943135297`                   |
| `NEXT_PUBLIC_GA_ID`           | `G-XXXXXXXXXX` (Google Analytics) |

---

## 📈 SEO Implementado

- ✅ `<title>` e `<meta description>` dinâmicos por página
- ✅ **Open Graph** (Facebook, WhatsApp) e **Twitter Card**
- ✅ **Schema.org** `LocalBusiness` com dados estruturados
- ✅ **FAQ Schema** para rich snippets no Google
- ✅ `sitemap.xml` automático via `app/sitemap.ts`
- ✅ `robots.txt` automático via `app/robots.ts`
- ✅ URLs semânticas: `/servicos`, `/sobre`, `/avaliacoes`, `/contato`
- ✅ Estrutura semântica HTML (`h1`, `h2`, `h3`)
- ✅ Imagens com `loading="lazy"` e `alt` descritivos
- ✅ `aria-label` em todos os elementos interativos

---

## 🎨 Personalização de Cores

Em `tailwind.config.js`:

```js
colors: {
  brand: {
    blue: "#1D4ED8",       // Cor principal — troque pelo seu azul
    "blue-dark": "#1e3a8a",
    green: "#16A34A",      // Cor do WhatsApp — mantenha verde
    "green-dark": "#15803d",
  }
}
```

---

## 📱 Funcionalidades

| Feature                               | Status |
| ------------------------------------- | ------ |
| Design mobile-first responsivo        | ✅     |
| Header fixo com menu hamburguer       | ✅     |
| Botão flutuante WhatsApp              | ✅     |
| Hero com CTA e trust indicators       | ✅     |
| Cards de serviços com ícones          | ✅     |
| Depoimentos estilo Google Reviews     | ✅     |
| FAQ com Schema.org                    | ✅     |
| Formulário validado (React Hook Form) | ✅     |
| Mapa Google Maps embed                | ✅     |
| Página 404 personalizada              | ✅     |
| Sitemap.xml automático                | ✅     |
| Robots.txt                            | ✅     |
| Open Graph / SEO meta tags            | ✅     |
| Schema.org LocalBusiness              | ✅     |
| Acessibilidade (aria-labels)          | ✅     |

---

## 🔧 Próximos Passos Recomendados

1. **Adicione fotos reais** do profissional e dos serviços
2. **Configure o Google Analytics** (adicione o script no `layout.tsx`)
3. **Registre no Google Search Console** e submeta o sitemap
4. **Configure um domínio personalizado** na Vercel
5. **Ative o Google My Business** com o link do site
6. **Integre um backend de e-mail** (ex: [Resend](https://resend.com) ou Formspree) para receber os formulários por e-mail também

---

## 📞 Suporte

Dúvidas? Abra uma issue no repositório.
