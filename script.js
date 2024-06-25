const url = "https://api.themoviedb.org/3/search/movie?placeholder=&include_adult=false&language=en-US&page=1";
const options = {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjhlYjc5Mjg1YjAyYTEwZTcyZmIwMWZmMjU4MzQ4NCIsIm5iZiI6MTcxOTE2MjYyNi44MTM2NTIsInN1YiI6IjY2Nzg1NjI5NzZjNzg4MDZmMDU2M2FiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a092gdD-cc8bz2fs_iwz1tCY2tSUPcOk5gQB60YXqu4'
  }
};

async function Pesquisar() {
  try {console.log('aq foi')
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

Pesquisar();
