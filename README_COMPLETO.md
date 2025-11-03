# BI4Impact | Protótipo de Validação ✅

**Business Intelligence para Organizações da Economia Social**  
*Powered by Ébano Digital*

---

## 🎉 **PROJETO COMPLETO E FUNCIONAL**

Este protótipo está **100% completo** e pronto para ser hospedado no GitHub Pages!

✅ Landing page responsiva e profissional  
✅ Dashboard interativo com Chart.js  
✅ Dados mock realistas  
✅ Sistema de alertas  
✅ Tabela de candidatos  
✅ Gráficos e visualizações  
✅ Design moderno com Tailwind-inspired CSS  

---

## 📁 Estrutura do Projeto

```
bi4impact/
├── index.html                      # ✅ Landing page principal
├── dashboard.html                  # ✅ Dashboard interativo
├── css/
│   ├── style.css                   # ✅ Estilos da landing page
│   └── dashboard.css               # ✅ Estilos do dashboard
├── js/
│   ├── data.js                     # ✅ Dados mock
│   ├── main.js                     # ✅ JavaScript da landing
│   └── dashboard.js                # ✅ JavaScript do dashboard
├── README.md                       # ✅ Este ficheiro
└── Questionario_Validacao_Estrutura.txt  # ✅ Estrutura do questionário
```

---

## 🚀 Como Hospedar no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Aceda a [github.com](https://github.com)
2. Clique em **"New repository"** (botão verde no canto superior direito)
3. Configure o repositório:
   - **Repository name:** `bi4impact` (ou outro nome à escolha)
   - **Visibility:** ☑️ Public
   - **NÃO** selecione "Add a README file"
4. Clique em **"Create repository"**

### Passo 2: Fazer Upload dos Ficheiros

**Opção A: Via interface web do GitHub (RECOMENDADO para quem não usa Git)**

1. No repositório recém-criado, clique em **"uploading an existing file"**
2. Arraste **TODOS** os ficheiros e pastas da pasta `bi4impact/`:
   - `index.html`
   - `dashboard.html`
   - Pasta `css/` (com os 2 ficheiros dentro)
   - Pasta `js/` (com os 3 ficheiros dentro)
   - `README.md`
   - `Questionario_Validacao_Estrutura.txt`
3. Na caixa "Commit changes", escreva: `Initial commit - BI4Impact prototype`
4. Clique em **"Commit changes"**

**Opção B: Via Git (linha de comandos)**

```bash
cd bi4impact
git init
git add .
git commit -m "Initial commit - BI4Impact prototype"
git branch -M main
git remote add origin https://github.com/SEU_USERNAME/bi4impact.git
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No repositório, vá a **Settings** (ícone de engrenagem)
2. Na barra lateral esquerda, clique em **Pages**
3. Em "Build and deployment":
   - **Source:** Deploy from a branch
   - **Branch:** `main` (ou `master`)
   - **Folder:** `/ (root)`
4. Clique em **Save**

⏱️ **Aguarde 2-5 minutos**

🌐 O site estará disponível em:
```
https://SEU_USERNAME.github.io/bi4impact/
```

---

## 📋 Criar o Questionário no Google Forms

### Passo 1: Aceder ao Google Forms
1. Aceda a [forms.google.com](https://forms.google.com)
2. Clique em **"+"** (Novo formulário em branco)

### Passo 2: Configurar o Formulário
1. **Título:** "Validação do Protótipo BI4Impact"
2. **Descrição:** (copiar do ficheiro `Questionario_Validacao_Estrutura.txt`)
3. Copiar **TODAS** as 23 perguntas organizadas em 5 secções

### Passo 3: Configurações Recomendadas
Clique no ícone de **engrenagem** (⚙️) no canto superior direito:

**Aba "General":**
- ☐ Collect email addresses: **NÃO**
- ☐ Limit to 1 response: **NÃO**
- ☑️ Respondents can edit after submit: **SIM**

**Aba "Presentation":**
- ☑️ Show progress bar: **SIM**
- Confirmation message: "Obrigado pela sua participação! O seu feedback é essencial."

### Passo 4: Obter Link de Partilha
1. Clique no botão **"Send"** (canto superior direito)
2. Clique no ícone de **link** (🔗)
3. Clique em **"Shorten URL"**
4. Copie o link: `https://forms.gle/...`

---

## 📧 Enviar às Organizações

### Template de Email

**Assunto:** Convite para validar protótipo de BI para OES | Mestrado IPS

**Corpo:**

```
Caro/a [Nome],

No âmbito do Mestrado em Gestão de Organizações de Economia Social (IPS), 
estou a desenvolver uma investigação sobre Business Intelligence aplicado 
à gestão da empregabilidade em OES.

Criei um protótipo funcional (BI4Impact) e gostaria muito de conhecer a 
sua opinião sobre:
✓ Utilidade das funcionalidades
✓ Facilidade de uso
✓ Aplicabilidade à sua realidade

🔗 **Explorar o protótipo:** https://SEU_USERNAME.github.io/bi4impact/
📋 **Questionário (5-10 min):** https://forms.gle/SEU_LINK

O seu feedback é essencial para validar se esta ferramenta responde às 
necessidades reais do setor.

Muito obrigado/a pela sua colaboração!

[Seu Nome]
[Seu Email]
[Seu Contacto]
```

### Estratégia de Envio

**Onda 1 (Contactos Diretos):**
- Organizações onde fez entrevistas
- Contactos pessoais no setor
- Colegas de mestrado

**Onda 2 (Redes Setoriais):**
- CASES (Cooperativa António Sérgio)
- CNIS (Confederação Nacional das IPSS)
- ANIMAR (Associação Portuguesa para o Desenvolvimento Local)
- Plataformas regionais de OES

**Onda 3 (Follow-up):**
- Após 7 dias: email gentil de lembrete
- Após 14 dias: último reminder

---

## 📊 Acompanhar Respostas

### No Google Forms:

1. Aceda ao formulário
2. Clique em **"Responses"**
3. Visualize:
   - 📈 **Summary:** gráficos automáticos por pergunta
   - 📋 **Individual:** respostas uma a uma
   - 📊 **Link to Sheets:** exportar para Google Sheets

### Exportar para Análise:

1. No separador "Responses"
2. Clique no ícone **Google Sheets** (verde)
3. Será criada uma folha de cálculo
4. Use para:
   - Análises estatísticas (SPSS, R, Python)
   - Gráficos para a tese
   - Tabelas de resultados

---

## ✅ Checklist Final

### Antes de Enviar:
- [ ] Protótipo hospedado e funcional no GitHub Pages
- [ ] Testado em desktop e mobile
- [ ] Questionário criado no Google Forms
- [ ] Link do protótipo inserido no questionário
- [ ] Email template personalizado
- [ ] Lista de contactos organizada

### Durante a Recolha:
- [ ] Monitorizar respostas diariamente
- [ ] Responder a dúvidas rapidamente
- [ ] Enviar follow-up após 1 semana
- [ ] Agradecer participantes

### Após Recolha:
- [ ] Exportar dados para Google Sheets
- [ ] Fazer análise estatística
- [ ] Criar gráficos para a tese
- [ ] Email de agradecimento final

---

## 🎓 Integração na Tese

### Capítulo 4 - Metodologia:
- Descrição técnica do protótipo
- Tecnologias utilizadas (HTML, CSS, JavaScript, Chart.js)
- Processo de validação (questionário)

### Capítulo 5 - Resultados:
- Análise quantitativa das respostas
- Feedback qualitativo
- Identificação de funcionalidades prioritárias
- Barreiras à implementação

### Capítulo 6 - Discussão:
- Validação das hipóteses
- Comparação com literatura
- Implicações práticas
- Recomendações

### Anexos:
- Screenshots do protótipo
- Estrutura do questionário
- Exemplos de respostas
- Link para protótipo (GitHub Pages)

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo e moderno
- **JavaScript (ES6+)** - Interatividade
- **Chart.js 4.4** - Visualização de dados
- **Font Awesome 6.4** - Ícones
- **Google Fonts (Inter)** - Tipografia

---

## 📱 Funcionalidades do Protótipo

### Landing Page (`index.html`)
✅ Hero section com estatísticas animadas  
✅ Secção de funcionalidades  
✅ Problema vs. Solução  
✅ Sobre o projeto  
✅ Call-to-action  
✅ Design responsivo  

### Dashboard (`dashboard.html`)
✅ 4 KPIs principais animados  
✅ Sistema de alertas (4 tipos)  
✅ 5 gráficos interativos:
   - Evolução mensal (linha)
   - Setores de atividade (barras horizontais)
   - Distribuição etária (donut)
   - Taxa de retenção (linha)
   - Escolaridade (barras)  
✅ Tabela de candidatos recentes  
✅ Navegação lateral  
✅ Modal de exportação  
✅ 243 candidatos mock realistas  

---

## 🔧 Resolução de Problemas

### O site não aparece no GitHub Pages?
- Verifique se ativou corretamente em Settings → Pages
- Aguarde 5-10 minutos
- Confirme que o branch está correto (`main` ou `master`)
- Verifique se `index.html` está na raiz do repositório

### Os gráficos não aparecem?
- Verifique a consola do navegador (F12)
- Confirme que `Chart.js` está a carregar corretamente
- Teste num browser diferente

### Ficheiros CSS/JS não carregam?
- Confirme que as pastas `css/` e `js/` estão corretas
- Verifique os caminhos nos ficheiros HTML
- Teste localmente primeiro (pode abrir `index.html` diretamente)

---

## 📞 Suporte

Para dúvidas sobre este protótipo:

📧 **Email:** [INSERIR O SEU EMAIL]  
🌐 **Protótipo:** [INSERIR LINK DO GITHUB PAGES]  
📋 **Questionário:** [INSERIR LINK DO GOOGLE FORMS]  

---

## 📄 Licença

Este protótipo foi desenvolvido para fins académicos.

**Uso livre para:**
- ✅ Organizações da Economia Social (OES)
- ✅ Investigação académica
- ✅ Fins não comerciais

**Citação sugerida:**
```
[Seu Nome]. (2025). BI4Impact: Business Intelligence para 
Organizações da Economia Social. Protótipo desenvolvido no 
âmbito do Mestrado em Gestão de Organizações de Economia Social, 
Instituto Politécnico de Santarém.
```

---

## 🙏 Agradecimentos

Este protótipo foi desenvolvido com base no feedback de:
- 26 profissionais de OES (questionário exploratório)
- 5 entrevistas em profundidade
- Orientação académica do IPS

Obrigado a todas as pessoas que contribuíram para tornar este projeto possível.

---

## 📝 Notas Finais

### ⚠️ Importante:

**Este é um protótipo de validação** desenvolvido para fins académicos.

**Âmbito do Mestrado:**
- ✅ Desenvolvimento do protótipo
- ✅ Validação com questionário
- ✅ Análise de resultados

**NÃO incluído:**
- ❌ Implementação real em organizações
- ❌ Suporte técnico continuado
- ❌ Desenvolvimento futuro garantido

**Possível PASSO 3 (pós-mestrado):**
- Se houver interesse de múltiplas organizações
- Dependente de viabilidade financeira
- Eventual candidatura a financiamento

---

**BI4Impact | Powered by Ébano Digital**  
*Mestrado em Gestão de Organizações de Economia Social*  
*Instituto Politécnico de Santarém | 2024-2025*

---

## 🎯 Próximos Passos

1. ✅ **Hospedar no GitHub Pages** (seguir instruções acima)
2. ✅ **Criar questionário no Google Forms**
3. ✅ **Testar tudo funciona corretamente**
4. ✅ **Enviar emails às organizações**
5. ✅ **Acompanhar respostas**
6. ✅ **Analisar dados**
7. ✅ **Integrar na tese**

**Boa sorte com a sua investigação! 🚀**
