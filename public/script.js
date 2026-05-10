// =============================================
// B.1 - DADOS DO CATÁLOGO
// =============================================

const catalogo = [
  {
    id: 1,
    titulo: "Vingadores: Ultimato",
    tipo: "filme",
    ano: 2019,
    generos: ["acao", "aventura", "ficcao cientifica"],
    nota: 8.4,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime", "thriller"],
    nota: 9.5,
    assistido: true
  },
  {
    id: 3,
    titulo: "Batman: O Cavaleiro das Trevas",
    tipo: "filme",
    ano: 2008,
    generos: ["acao", "crime", "drama"],
    nota: 9.0,
    assistido: true
  },
  {
    id: 4,
    titulo: "Rick and Morty",
    tipo: "serie",
    ano: 2013,
    generos: ["animacao", "ficcao cientifica", "comedia"],
    nota: 9.2,
    assistido: false
  },
  {
    id: 5,
    titulo: "Criminal Minds",
    tipo: "serie",
    ano: 2005,
    generos: ["crime", "drama", "misterio"],
    nota: 8.1,
    assistido: false
  },
  {
    id: 6,
    titulo: "Django Livre",
    tipo: "filme",
    ano: 2012,
    generos: ["acao", "drama", "western"],
    nota: 8.4,
    assistido: true
  },
  {
    id: 7,
    titulo: "Cidade de Deus",
    tipo: "filme",
    ano: 2002,
    generos: ["crime", "drama"],
    nota: 8.6,
    assistido: false
  },
  {
    id: 8,
    titulo: "Tropa de Elite",
    tipo: "filme",
    ano: 2007,
    generos: ["acao", "crime", "drama"],
    nota: 8.0,
    assistido: true
  },
  {
    id: 9,
    titulo: "Invencivel",
    tipo: "serie",
    ano: 2021,
    generos: ["animacao", "acao", "aventura"],
    nota: 8.7,
    assistido: true
  },
  {
    id: 10,
    titulo: "The Boys",
    tipo: "serie",
    ano: 2019,
    generos: ["acao", "comedia", "crime"],
    nota: 8.7,
    assistido: true
  }
];


// =============================================
// B.2 - LENDO OS DADOS
// =============================================

console.log("=== CATÁLOGO COMPLETO ===");
console.log(catalogo);

console.log("Título do primeiro item: " + catalogo[0].titulo);
console.log("Ano do último item: " + catalogo[9].ano);

if (catalogo[2].generos[1]) {
  console.log("Segundo gênero do terceiro item: " + catalogo[2].generos[1]);
} else {
  console.log("O terceiro item não tem segundo gênero");
}


// =============================================
// B.3 - USANDO OS ITERATORS
// =============================================

// A) forEach - listar todos os títulos
console.log("=== LISTA DE TÍTULOS ===");
catalogo.forEach(function(item) {
  console.log("- [" + item.tipo + "] " + item.titulo + " (" + item.ano + ")");
});


// B) map - títulos em caixa alta
console.log("=== TÍTULOS EM MAIÚSCULO ===");
var titulosEmCaixaAlta = catalogo.map(function(item) {
  return item.titulo.toUpperCase();
});
console.log(titulosEmCaixaAlta);


// C) filter - não assistidos
console.log("=== NÃO ASSISTIDOS ===");
var naoAssistidos = catalogo.filter(function(item) {
  return item.assistido === false;
});
console.log("Quantidade de não assistidos: " + naoAssistidos.length);


// D) find - primeiro com nota maior ou igual a 9
console.log("=== PRIMEIRO COM NOTA >= 9 ===");
var destaque = catalogo.find(function(item) {
  return item.nota >= 9;
});
if (destaque) {
  console.log("Título: " + destaque.titulo + " | Nota: " + destaque.nota);
} else {
  console.log("Nenhum item tem nota maior ou igual a 9");
}


// E) reduce - média das notas
console.log("=== MÉDIAS ===");

var somaTotal = catalogo.reduce(function(acumulador, item) {
  return acumulador + item.nota;
}, 0);
var mediaGeral = somaTotal / catalogo.length;
console.log("Média geral: " + mediaGeral.toFixed(2));

var assistidos = catalogo.filter(function(item) {
  return item.assistido === true;
});
var somaAssistidos = assistidos.reduce(function(acumulador, item) {
  return acumulador + item.nota;
}, 0);
var mediaAssistidos = somaAssistidos / assistidos.length;
console.log("Média dos assistidos: " + mediaAssistidos.toFixed(2));


// F) some e every - checagens
console.log("=== CHECAGENS ===");

var temAntesDe2000 = catalogo.some(function(item) {
  return item.ano < 2000;
});
console.log("Tem algum item antes do ano 2000? " + temAntesDe2000);

var todosTemGenero = catalogo.every(function(item) {
  return item.generos.length >= 1;
});
console.log("Todos têm pelo menos 1 gênero? " + todosTemGenero);


// =============================================
// B.4 - MOSTRANDO NA TELA
// =============================================

var totalFilmes = catalogo.filter(function(item) {
  return item.tipo === "filme";
}).length;

var totalSeries = catalogo.filter(function(item) {
  return item.tipo === "serie";
}).length;

var rankingTop3 = catalogo.slice().sort(function(a, b) {
  return b.nota - a.nota;
}).slice(0, 3);

var output = document.getElementById("output");

output.innerHTML =
  "<h2>Resumo do Catálogo</h2>" +
  "<p>Total de itens: " + catalogo.length + "</p>" +
  "<p>Filmes: " + totalFilmes + "</p>" +
  "<p>Séries: " + totalSeries + "</p>" +
  "<p>Não assistidos: " + naoAssistidos.length + "</p>" +
  "<p>Média geral das notas: " + mediaGeral.toFixed(2) + "</p>" +
  "<h3>Top 3 melhores notas:</h3>" +
  "<p>1. " + rankingTop3[0].titulo + " - Nota: " + rankingTop3[0].nota + "</p>" +
  "<p>2. " + rankingTop3[1].titulo + " - Nota: " + rankingTop3[1].nota + "</p>" +
  "<p>3. " + rankingTop3[2].titulo + " - Nota: " + rankingTop3[2].nota + "</p>";