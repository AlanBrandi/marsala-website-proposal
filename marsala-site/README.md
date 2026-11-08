# Marsala Campolim · Site

Site institucional one-page (HTML, CSS e JS puros, sem build).

## Abrir
Extraia o .zip e dê dois cliques em `index.html`. Ou, com Python:
```bash
cd marsala-site
python3 -m http.server 8000
```

## Estrutura
- `index.html` — conteúdo de todas as seções.
- `css/styles.css` — tokens de cor/fonte em `:root`, componentes e responsivo.
- `js/main.js` — menu mobile, header ao rolar, abas do cardápio e animações de entrada.
- `assets/img/` — fotos, logos (`logo-light.png` para fundos escuros, `logo-wine.png` para fundos claros) e favicons.

## Identidade visual
- Títulos: **Baumans** (a fonte gratuita mais próxima do "MARSALA" do logo).
- Rótulos e botões: **Quicksand** (próxima do "Coffee and Food").
- Frases de acolhimento: **Cormorant Garamond** itálico. Texto: **Nunito**.
- Cores: marsala `#6B1532`, dourado `#C9A46B`, creme `#F7F0E6`.

## Fotos (`assets/img/fotos/`)
| Arquivo | Onde aparece |
|---|---|
| `salao-vitrine.jpg` | Hero e grade do Instagram |
| `salao-letreiro.jpg` | A casa |
| `panquecas-frutas.jpg` | Nossa história (ao lado da citação do chef) e carrossel |
| `torradas-ovos.jpg`, `toast-parma.jpg`, `mesa-completa.jpg`, `cafe-croissant.jpg`, `brunch-mesa.jpg` | Carrossel "Do nosso forno para a sua mesa" e grade do Instagram |

- `mesa-completa.jpg` e `toast-parma.jpg` foram recortadas para remover o texto sobreposto.
- **Carrossel**: cada foto é um `<li class="carousel__slide">` dentro de `[data-carousel-track]`. Para adicionar, copie um `<li>` e troque `src`, `alt` e a legenda (`figcaption`).
- **Para levar**: os cards estão em `.take-home__grid`. Se tiver fotos dos produtos, dá para trocar o ícone por uma imagem.
- Fotos maiores (≥1200px) deixam o site mais nítido; basta substituir mantendo o mesmo nome.

## O que trocar antes de publicar
- **Cardápio**: os itens da seção `#cardapio` são ilustrativos. Substitua cada `<li>` dentro de `.menu__panel` pelos itens reais.
- **Facebook**: adicione o link no rodapé e em `sameAs` do JSON-LD.

## Hospedar grátis
- **Netlify**: arraste a pasta em https://app.netlify.com/drop.
- **GitHub Pages**: suba a pasta para um repositório e ative Pages em *Settings → Pages*.
