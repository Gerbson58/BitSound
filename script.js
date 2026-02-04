document.addEventListener('DOMContentLoaded', () => {

  const artistsData = [
    { name: 'Ana Castela', image: './img/anacastela3.jpg' },
    { name: 'Anita', image: './img/anita.jpg' },
    { name: 'Gustavo Lima', image: './img/gusttavolima.jpg' },
    { name: 'Michael Jackson', image: './img/MichaelJackson1.jpg' },
    { name: 'Taylor Swift', image: './img/taylorswift.jpg' },
    { name: 'The Beatles', image: './img/TheBeatles1.jpg' },
    { name: 'Vanguart', image: './img/vanguart1.jpg' }
  ];

  const albumsData = [
    { name: 'Boiadeira Internacional', artist: 'Ana Castela', image: './img/albumanacastela.jpg' },
    { name: 'Bang!', artist: 'Anita', image: './img/bang.jpg' },
    { name: 'Gusttavo Lima In Grecce', artist: 'Gusttavo Lima', image: './img/gustavolima3.jpg' },
    { name: 'Thriller', artist: 'Michael Jackson', image: './img/MichaelJackson.jpg' },
    { name: 'Lover', artist: 'Taylor Swift', image: './img/lover.jpg' },
    { name: 'Abbey Road', artist: 'The Beatles', image: './img/TheBeatles.jpg' },
    { name: 'Muito Mais que o amor', artist: 'Vanguart', image: './img/vanguart.jpg' }
  ];

  const artistsGrid = document.querySelector('.artists-grid');
  const albumsGrid = document.querySelector('.albums-grid');

  // 🔠 Ordena artistas alfabeticamente
  artistsData.sort((a, b) => a.name.localeCompare(b.name));

  // 🎨 Renderiza artistas
  artistsData.forEach(artist => {
    const card = document.createElement('div');
    card.classList.add('artist-card');
    card.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <div>
                <h3>${artist.name}</h3>
            </div>
        `;
    artistsGrid.appendChild(card);
  });

  // 🎨 Renderiza álbuns
  albumsData.forEach(album => {
    const card = document.createElement('div');
    card.classList.add('album-card');
    card.innerHTML = `
            <img src="${album.image}" alt="${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `;
    albumsGrid.appendChild(card);
  });

});
const API_URL = "http://localhost:8080";
const statusEl = document.getElementById("status");

const params = new URLSearchParams(window.location.search);
const linkToken = params.get("token_link");

let jwt = null;

async function obterJWT() {
  const res = await fetch(`${API_URL}/auth/link`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: linkToken })
  });

  if (res.status === 403) {
    statusEl.innerText = "⛔ Link expirado";
    throw new Error("Link expirado");
  }

  const data = await res.json();
  jwt = data.jwt;
}

async function carregarConteudo() {
  try {
    if (!jwt) await obterJWT();

    const res = await fetch(`${API_URL}/conteudo`, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });

    if (res.status === 401) {
      // JWT expirou → renovar
      jwt = null;
      return carregarConteudo();
    }

    const data = await res.json();
    statusEl.innerText = "✅ Conteúdo carregado com sucesso";
    console.log(data);

  } catch (err) {
    console.error(err);
  }
}

document.getElementById("load").addEventListener("click", carregarConteudo);
