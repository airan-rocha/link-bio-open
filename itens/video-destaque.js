const videoDestaque = document.getElementById('video-destaque');

const videoIncorporado = (url) => {
    if(url){
        url = url.replace('https://youtu.be/', '');

        let videoTube = (`
        <iframe width="350px" height="200px" src="https://www.youtube.com/embed/${url}?autoplay=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `);

        videoDestaque.innerHTML = videoTube;
    }
}

videoIncorporado(videoYouTubeDestaque);