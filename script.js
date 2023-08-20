
const imagens = ['https://c1.wallpaperflare.com/preview/570/887/752/emotions-toys-teddy-bear-soft-toy.jpg', 'https://c1.wallpaperflare.com/preview/535/980/944/stuffed-animals-toys-teddy-bear.jpg', 'https://t3.ftcdn.net/jpg/03/29/09/42/360_F_329094223_QHjakaco7v8zxDRR3EDqpBvJVJHDCPYT.jpg']

var indexImagem = 0;
const unidade = 100/imagens.length
var margem = 0;

function slider (number) {
    indexImagem += number
    if(number > 0) 
    {
        margem = margem + unidade 
    }
    else 
    {
        margem = margem - unidade
    }

    if(indexImagem < 0)
    {
        indexImagem = imagens.length -1
        margem = 100 - unidade
    }
    if(indexImagem >= imagens.length)
    {
        indexImagem = 0
        margem = 0
    }

    document.getElementsByClassName('Carrocel')[0].style.backgroundImage = `url('${imagens[indexImagem]}')`
    console.log("indwx: " + indexImagem)
    console.log("bar: " + Math.round(margem))

    document.querySelector('.Indicador2').style.marginLeft = `${Math.round(margem)}%`


}



function cores (number, cores) {
    var valorCor;
    switch (cores) {
        case "vermelho":
            valorCor = 90;
            break;
        case "verde":
            valorCor = 300;
            break;
        case "azul":
            valorCor = 190;
            break;
    
        default:
            valorCor = 0;
            break;
    }
    document.getElementsByClassName(`item-${number}-produtos`)[0].style.filter = `sepia(100%) hue-rotate(${valorCor}deg) saturate(700%)`;
}




/* botao1.addEventListener('click', () => {
    
})
 */


   /* if (indexImagem === 0) {
        indicador2.style.width = '33%';
    } else if (indexImagem === 1) {
        indicador2.style.width = '66%';
    } else if (indexImagem === 2) {
        indicador2.style.width = '100%';
    }

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