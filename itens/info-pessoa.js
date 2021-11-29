const infoPessoa = document.getElementById('info-pessoa');

const pessoaRender = ({name, imgUrl}) => {
    return (`
        <div>
            <img src='${imgUrl}'></img>
            <p>${name}</p>
            <hr>
        </div>
    `);
}

infoPessoa.innerHTML = pessoaRender(pessoa);