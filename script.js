function trocar (f) {
    document.getElementById("imagem-do-produto").src=f;
}

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


   /* if (indexImagem === 0) {
        indicador2.style.width = '33%';
    } else if (indexImagem === 1) {
        indicador2.style.width = '66%';
    } else if (indexImagem === 2) {
        indicador2.style.width = '100%';
    }

  }


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
 */
/* function menuSw */