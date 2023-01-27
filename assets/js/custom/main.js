const URL = "image.json"
const divPreencher = document.getElementById("preencher");

const criandoElementos = (name, climate) => {
  const novoElemento = document.createElement("div");
  const p_planeta = document.createElement("p");
  const p_clima = document.createElement("p");

  novoElemento.setAttribute("class", `${name}`)
  p_planeta.setAttribute("class", "p_planeta");
  p_clima.setAttribute("class", "p_clima");

  p_planeta.innerHTML = name;
  p_clima.innerHTML = "Clima: " + climate;

  divPreencher.appendChild(novoElemento)
  novoElemento.appendChild(p_planeta);
  novoElemento.appendChild(p_clima);
};

const funcaoAssincrona = async (url) => {
  const resposta = await fetch(url);
  const jsonBody = await resposta.json();
  const capturandoItens = jsonBody.results;
  capturandoItens.map((elemento) => {
    console.log(elemento)
    const { name, climate } = elemento;
    criandoElementos(name, climate)
  })
};

funcaoAssincrona("https://swapi.dev/api/planets/");
