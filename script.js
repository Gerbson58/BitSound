document.addEventListener('DOMContentLoaded'), () => {





const artistsData = [

{ name: 'Ana Castela', image: './img/anacastela3.jpeg' },
{ name: 'Anita', image: './img/anita.jpeg' },
{ name: 'Gustavo Lima', image: './img/gustavolima3.jpeg' },
{ name: 'Bit Sound', image: './img/logo2.jpeg' },
{ name: 'Michael Jackson', image: './img/MichaelJackson.jpeg' },
{ name: 'Taylor Swifty', image: './img/taylorswift.jpeg' },
{ name: 'The Beatles', image: './img/TheBeatles.jpeg' }
];

const albumsData = [
{ name: '0 Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-vida-loka.jpeg' },
{ name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpeg' },
{ name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpeg' },
{ name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpeg' },
{ name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpeg' },
];

const artistsGrid = document.querySelector{'.artists-grid'}
const albumsGrid = document.querySelector{'.albums-grid'}

artistsData.forEach( artist => {
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')

artistCard.innerHTML =
    <img src="${artist.image}" alt="imagem do ${artist.name}">

    <h3>${artist.name}</h3>
    <p>{artista}</p>         
   
    artist.Grid.appendChild(artistCard)
}) 

albumsData.forEach( album => {
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')

albumCard.innerHTML =
    <img src="${album.image}" alt="imagem do ${album.name}">
        <div>
            <h3>${album.name}</h3>
            <p>{album.artist}</p>
        </div>
            
    
    artist.Grid.appendChild(albumCard)
    
    


}


