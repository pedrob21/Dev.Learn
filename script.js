<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>USPFLIX</title>
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="https://www.icmc.usp.br/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src="https://avatars.githubusercontent.com/u/31321925?s=200&v=4" width="50px">
      </a>
    </header>
  </div>

  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold text-body-emphasis">USPFLIX</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Encontre seu filme favorito!</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <input type="text" id="nomeFilme" placeholder="Nome do filme">
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onclick="Pesquisar()">Pesquisar</button>
      </div>
    </div>
  </div>

  <div class="filmes"></div>

     async function Pesquisar() {
      const inputValor = document.getElementById('pesquisar').value.trim();
      if (inputValor === '') {
        alert('Digite o nome do filme ou série para pesquisar.');
        return;
      }

      const url = `https://imdb-top-100-movies.p.rapidapi.com/search?type=title&term=${encodeURIComponent(inputValor)}`;

      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            const filmesDiv = document.querySelector('.filmes');
            filmesDiv.innerHTML = '';
            if (response.results && response.results.length > 0) {
              response.results.forEach(filme => {
                const titulo = filme.title;
                const elementoFilme = document.createElement('p');
                elementoFilme.textContent = titulo;
                filmesDiv.appendChild(elementoFilme);
              });
            } else {
              filmesDiv.textContent = 'Nenhum resultado foi encontrado.';
            }
          } else {
            console.error('Erro na requisição:', this.status);
            alert('Ocorreu um erro na requisição. Por favor, tente novamente mais tarde.');
          }
        }
      });

      xhr.open('GET', 'https://imdb-top-100-movies.p.rapidapi.com/');
      xhr.setRequestHeader('x-rapidapi-key', 'b9715b912amsh8c346f5f7c302b3p1a80d4jsn47b14aaea364');
      xhr.setRequestHeader('x-rapidapi-host', 'imdb-top-100-movies.p.rapidapi.com');

      xhr.send(data);
</body>

</html>
