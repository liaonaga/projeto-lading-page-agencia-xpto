/*

    

*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar')
let imagemAtual = 0;


function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagens() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}
// quando clicar na seta para avançar, temos que esonder todas as imagens e mostrar a próxima imagem

setaAvancar.addEventListener('click', function () {

    //testa se o contador da imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {
        console.log('não pode avançar mais');
        return;

    }
    // a imagem atual começa em 0 pq é a primeira imagem
    // assim que for clicado no avançar, eu preciso adicionar mais 1 ao contador de imagens para saber que agora eu vou mostrar a segunda imagem

    imagemAtual++;
    // esconder todas as imagens
    // pegar todas as imagens usando o DOM e remover a classe mostrar

    esconderImagens()

    // mostrar a próxima imagem
    //     pegar todas as imagens, descobrir qual é a p´roxima, e colocar a classe mostrar nela
    mostrarImagens()
    
})

setaVoltar.addEventListener('click', function () {

    if(imagemAtual === 0) {
        console.log('não pode voltar mais');
        return;
    }
    
    imagemAtual--;

    esconderImagens()
    mostrarImagens()
})