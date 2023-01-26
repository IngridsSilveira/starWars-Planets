const teste = [
  "https://raw.githubusercontent.com/IngridsSilveira/starWars-Planets/main/assets/images/planetas/tatooine.jpeg",
  "https://raw.githubusercontent.com/IngridsSilveira/starWars-Planets/main/assets/images/planetas/alderann.webp",
  "https://raw.githubusercontent.com/IngridsSilveira/starWars-Planets/main/assets/images/planetas/yavin.jpeg",
  "https://raw.githubusercontent.com/IngridsSilveira/starWars-Planets/main/assets/images/planetas/hoth.jpeg",
  "https://raw.githubusercontent.com/IngridsSilveira/starWars-Planets/main/assets/images/planetas/dagobah.jpeg",
  "https://raw.githubusercontent.com/IngridsSilveira/starWars-Planets/main/assets/images/planetas/bespin.webp",
  "https://raw.githubusercontent.com/IngridsSilveira/starWars-Planets/main/assets/images/planetas/endor.jpeg",
  "https://raw.githubusercontent.com/IngridsSilveira/starWars-Planets/main/assets/images/planetas/naboo.jpeg",
  "https://raw.githubusercontent.com/IngridsSilveira/starWars-Planets/main/assets/images/planetas/Coruscant.jpg",
  "https://raw.githubusercontent.com/IngridsSilveira/starWars-Planets/main/assets/images/planetas/kamino.webp"
];
const imagens = teste;

const divPreencher = document.getElementById("preencher");

const criandoElementos = (name, climate, image) => {
  const novoElemento = document.createElement("div");
  const p_planeta = document.createElement("p");
  const p_clima = document.createElement("p");
  const img = document.createElement("img");

  novoElemento.setAttribute("class", "novoElemento");
  p_planeta.setAttribute("class", "p_planeta");
  p_clima.setAttribute("class", "p_clima");
  img.setAttribute("class", "imagens");

  img.src = `${image}`

  p_planeta.innerHTML = name;
  p_clima.innerHTML = "Clima: " + climate;

  divPreencher.appendChild(novoElemento);
  novoElemento.appendChild(p_planeta);
  novoElemento.appendChild(p_clima);
  novoElemento.appendChild(img);
};

const funcaoAssincrona = async (url) => {
  const resposta = await fetch(url);
  const jsonBody = await resposta.json();
  const capturandoItens = jsonBody.results;
  capturandoItens.map((elemento) => {
    const { name, climate } = elemento;
    criandoElementos(name, climate, imagens);
  });
};

funcaoAssincrona("https://swapi.dev/api/planets/");
