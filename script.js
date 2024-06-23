async function Pesquisar() {
  const inputValor = document.getElementById('pesquisar').value.trim();
  if (inputValor === '') {
    alert('Digite o nome do filme ou série para pesquisar.');
    return;
  }

  const url = "https://imdb-top-100-movies.p.rapidapi.com/search?type=title&term=${encodeURIComponent(inputValor)}";

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

  xhr.open('GET', url);
  xhr.setRequestHeader('x-rapidapi-key', 'b9715b912amsh8c346f5f7c302b3p1a80d4jsn47b14aaea364');
  xhr.setRequestHeader('x-rapidapi-host', 'imdb-top-100-movies.p.rapidapi.com');

xhr.send();
}
