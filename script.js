
const imagens = ['https://c1.wallpaperflare.com/preview/570/887/752/emotions-toys-teddy-bear-soft-toy.jpg', 'https://c1.wallpaperflare.com/preview/535/980/944/stuffed-animals-toys-teddy-bear.jpg', 'https://t3.ftcdn.net/jpg/03/29/09/42/360_F_329094223_QHjakaco7v8zxDRR3EDqpBvJVJHDCPYT.jpg']

var indexImagem = 0;

function slider (number) {
    console.log("Oi VIni!")
    console.log("O Tamanho da lista é " + imagens.length)
    indexImagem += number
    console.log("O index é " + indexImagem)
    if(indexImagem < 0)
    {
        console.log("Entro no if :D ")
        indexImagem = imagens.length -1
        console.log("O index é " + indexImagem)
    }
    if(indexImagem >= imagens.length)
    {
        console.log("Entro no else")
        indexImagem = 0
        console.log("O index é " + indexImagem)

    }
    document.getElementsByClassName('Carrocel')[0].style.backgroundImage = `url('${imagens[indexImagem]}')`
    console.log(indexImagem)
}

const botao1 = document.querySelector('cor1');
const botao2 = document.querySelector('cor2');
const botao3 = document.querySelector('cor3');

const img1 = document.querySelector

botao1.addEventListener('click', () => {
    
})




/* //setar contador inicial
let count = 0;

//selecionando os botoes e valores
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }
        value.textContent = count;
    });
});

function trocar (f) {
    document.getElementById("imagem-do-produto").src=f;
}


 */
/* function menuSw */