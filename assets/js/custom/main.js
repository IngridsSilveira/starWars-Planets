const divPreencher = document.getElementById("preencher");

const criandoElementos = (name, climate, terrain, population) => {
  const novoElemento = document.createElement("div");
  const p_planeta = document.createElement("p");
  const p_clima = document.createElement("p");
  const p_terreno = document.createElement("p");
  const p_population = document.createElement("p");

  novoElemento.setAttribute("class", `${name}`)
  p_planeta.setAttribute("class", "title_planeta");
  p_clima.setAttribute("class", "p_padrao");
  p_terreno.setAttribute("class", "p_padrao");
  p_population.setAttribute("class", "p_padrao");

  p_planeta.innerHTML = name;
  p_clima.innerHTML = "Clima: " + climate;
  p_terreno.innerHTML = "Terreno: " + terrain;
  p_population.innerHTML = "População: " + population;

  divPreencher.appendChild(novoElemento)
  novoElemento.appendChild(p_planeta);
  novoElemento.appendChild(p_clima);
  novoElemento.appendChild(p_terreno);
  novoElemento.appendChild(p_population);
};

const funcaoAssincrona = async (url) => {
  const resposta = await fetch(url);
  const jsonBody = await resposta.json();
  const capturandoItens = jsonBody.results;
  capturandoItens.map((elemento) => {
    const { name, climate, terrain, population } = elemento;
    criandoElementos(name, climate, terrain, population)
  })
};

funcaoAssincrona("https://swapi.dev/api/planets/");
