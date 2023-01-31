const divPreencher = document.getElementById("preencher");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const array = [];

const criandoElementos = (name, climate, terrain, population) => {
  const novoElemento = document.getElementById("novoElemento");
  const p_planeta = document.getElementById("p_planeta");
  const p_clima = document.getElementById("p_clima");
  const p_terreno = document.getElementById("p_terreno");
  const p_population = document.getElementById("p_population");

  novoElemento.setAttribute("class", `${name}`);
  p_planeta.setAttribute("class", "title_planeta");
  p_clima.setAttribute("class", "p_padrao");
  p_terreno.setAttribute("class", "p_padrao");
  p_population.setAttribute("class", "p_padrao");

  p_planeta.innerHTML = name;
  p_clima.innerHTML = "Clima: " + climate;
  p_terreno.innerHTML = "Terreno: " + terrain;
  p_population.innerHTML = "População: " + population;
};

const limpa = () => {
  alert("Planeta não encontrado")
  document.getElementById("novoElemento").style.display = "none"
  // criandoElementos();
};

const funcaoAssincrona = async (url) => {
  const resposta = await fetch(url);
  const jsonBody = await resposta.json();
  const capturandoItens = jsonBody.results;

  capturandoItens.filter((elemento) => {
    const { name } = elemento;
    array.push(name);
  });

  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    const item = input.value;
    if (array.indexOf(item) > -1) {
      capturandoItens.map((el) => {
        const { name, climate, terrain, population } = el;
        criandoElementos(item, climate, terrain, population);
        document.getElementById("novoElemento").style.display = "block"
      });
    } else {
      limpa();
    }
  });
};

funcaoAssincrona("https://swapi.dev/api/planets/");