const funcaoAssincrona = async (url) => {
    const resposta = await fetch(url);
    const jsonBody = await resposta.json();
    console.log(jsonBody)
  
  
  };
  funcaoAssincrona("https://swapi.dev/api/planets/");