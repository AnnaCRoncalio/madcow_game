let imagemEstrada;

let imagemSetaUp;
let imagemSetaDown;

let imagemPersonagem;
let imagemPersonagem2;

let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload() {
  imagemEstrada = loadImage("Imagens/estrada.png");
  
  imagemSetaUp = loadImage("Imagens/up-arrow.png");
  imagemSetaDown = loadImage("Imagens/down-arrow.png");
  
  imagemPersonagem = loadImage("Imagens/ator-1.png");
  imagemPersonagem2 = loadImage("Imagens/ator-1.png")
  imagemPersonagens = [imagemPersonagem, imagemPersonagem2];
  
  imagemCarro = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}