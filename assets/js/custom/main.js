const teste = {
  images: "../../../images/planetas/tatooine.jpeg"
}
console.log(teste)
const divPreencher = document.getElementById("preencher");

const criandoElementos = (name, climate) => {
  const novoElemento = document.createElement("div");
  const p_planeta = document.createElement("p");
  const p_clima = document.createElement("p");
  const img = document.createElement("img")

  novoElemento.setAttribute("class", "novoElemento")
  p_planeta.setAttribute("class", "p_planeta")
  p_clima.setAttribute("class", "p_clima")
  img.setAttribute("class", "imagens")
  img.src = `${teste.images}`

  p_planeta.innerHTML = name;
  p_clima.innerHTML = "Clima: " + climate;

  divPreencher.appendChild(novoElemento);
  novoElemento.appendChild(p_planeta);
  novoElemento.appendChild(p_clima);
  novoElemento.appendChild(img)
};

const funcaoAssincrona = async (url) => {
  const resposta = await fetch(url);
  const jsonBody = await resposta.json();
  const capturandoItens = jsonBody.results;
  capturandoItens.map((elemento) => {
    const { name, climate } = elemento;
    criandoElementos(name, climate);
  });
};
funcaoAssincrona("https://swapi.dev/api/planets/");
