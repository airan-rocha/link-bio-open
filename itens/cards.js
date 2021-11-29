// insira imagens quadradas

const cards = document.getElementById("cards");

var redesSociais = "";

card.forEach(element => {
    const {title, url, imgUrl} = element;

    redesSociais += (`
        <div class='card'>
            <a href='${url}'><img alt='card imagem' src='${imgUrl}'></a>
            <p>${title}</p>
        </div>
    `);
});

cards.innerHTML = redesSociais;