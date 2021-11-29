# Link Bio Open para Instagram

O Link Bio Open surgiu de uma necessidade pessoal. Eu decidi fazê-lo da forma mais simples possível para que qualquer pessoa com um pouco de conhecimento em programação possa utilizá-lo. Assim, eu o deixei disponível para todas as pessoas poderem baixá-lo e utilizá-lo, editá-lo da forma como quiser.

## Como utilizar:
Para utilizar basta editar as informações no arquivo "bioindex.js".

> Em pessoa você deverá informar o nome da pessoa ou negócio e a sua respectiva fota, passando uma string contendo o local do arquivo.
>
> const pessoa = { name: 'Seu Nome', imgUrl: 'http://...jpg' }

O item Rede Social é muito mais amplo do que apenas redes sociais, esse é o local onde a pessoa pode inserir seu link de site pessoal, para whatsapp, e muito mais.

> redeSocial é um array contendo objetos que irão gerar a visualização dos itens na tela do usuário. Esse objetos contam com as propriedade name (onde devera ser colocado um nome como referência do link), url (link para a página da web), logoUrl (url do local da imagem/logo que será exibido para o usuário)
>
>const redeSocial = [ 
    {
        name: ' ',
        url: ' ',
        logoUrl: ' '
    },
]


Inserir o seu vídeo destaque é algo muito simples útil, veja:
> Em videoYouTubeDestaque, informe a url do seu vídeo no youtube.
> Informe o link gerado no botão compartilhar, como no exemplo:
>
>const videoYouTubeDestaque = 'https://youtu.be/ETnLewwT2qQ';

Por fim temos um dos iténs mais interessantes do Link Bio Open, os Cards. Nos Cards podemos colocar link's para os mais diversos tipos de serviços, páginas da web e até mesmo referências a publicações.
> Card é  um array contendo objetos que irão gerar a visualização dos itens na tela do usuário. Esse objetos contam com as propriedade title (texto que será exibido na parte inferior do card), url (link para uma página da web), imgUrl (url do local da imagem que será exibida no card)
> 
>const card = [
    {
        title: ' ',
        url: ' ',
        imgUrl: ' '
    },
]

### Obs:

- para uma melhor vizualização dos iténs, utilize imagens quadradas.
- todas as propriedades são strings, ou seja, devem ser passadas entre aspas.

### _Como me encontrar:_
> * [Linkedin](https://www.linkedin.com/in/airan-rocha/);
> * [DIO](https://web.dio.me/users/rocha_airan);
> * [Meu Site](https://www.airanrocha.com.br).