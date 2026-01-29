document.addEventListener('DOMContentLoaded', () => {





    const artistsData = [

        { name: 'Ana Castela', image: './img/anacastela3.jpg' },
        { name: 'Anita', image: './img/anita.jpg' },
        { name: 'Gustavo Lima', image: './img/gustavolima3.jpg' },
        { name: 'Bit Sound', image: './img/logo2.jpg' },
        { name: 'Michael Jackson', image: './img/MichaelJackson.jpg' },
        { name: 'Taylor Swifty', image: './img/taylorswift.jpg' },
        { name: 'The Beatles', image: './img/TheBeatles.jpg' }
    ];

    const albumsData = [
        { name: '0 Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/nacastela3.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/nacastela3.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/nacastela3.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './img/nacastela3.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/nacastela3.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/nacastela3.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/nacastela3.jpg' },    
    ];

    const artistsGrid = document.querySelector ('.artists-grid')
    const albumsGrid = document.querySelector ('.albums-grid')

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
                <   div>
                    <h3>${artist.name}</h3>
                    <p>${artista}</p>
                </div>
            `
        artistGrid.appendChild(artistCard)
    })
                

    albumsData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <div>
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `

    artistGrid.appendChild(albumCard)
    })

})

