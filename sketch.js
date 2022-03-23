function setup() {
  let canvas = createCanvas(500, 400);
  somDaTrilha.loop();

  canvas.parent("sketch-holder");
}

function draw() {
  background(imagemEstrada);
  desenhoSetas();
  verificarBotoes();
  mostraPersonagem();
  mostraCarro();
  movimentaCarro();
  movimentaPersonagem();
  movimentaPersonagem2();
  voltaPosicaoInicialCarro();
  verificaColisao();
  incluiPontos();
  incluiPontosOponente();
  marcaPonto();
  
}

var botoes = [];
botoes.push({x:15,y:330,w:25,h:30,acao:"p1-cima"},{x:15,y:360,w:25,h:30,acao:"p1-baixo"},{x:465,y:330,w:25,h:30,acao:"p2-cima"},{x:465,y:360,w:25,h:30,acao:"p2-baixo"});

function desenhoSetas(){ 
  for(let botao of botoes){
    fill(color(128,128,128));     
    rect(botao.x, botao.y, botao.w, botao.h);
  }
  image(imagemSetaUp, 15.5, 332, 25, 25);
  image(imagemSetaDown, 15.5, 362, 25, 25);
  image(imagemSetaUp, 465.5, 332, 25, 25);
  image(imagemSetaDown, 465.5, 362, 25, 25);
}

function verificarBotoes(){
   if (mouseIsPressed){
     for(let botao of botoes){
       if ((mouseX > botao.x) && (mouseX < botao.x+botao.w) && (mouseY > botao.y) && (mouseY < botao.y+botao.h)) { 
        if (botao.acao == "p1-baixo" || botao.acao == "p1-cima"){
          movimentaPersonagem(botao.acao);
        }
        if (botao.acao == "p2-baixo" || botao.acao == "p2-cima"){
          movimentaPersonagem2(botao.acao);
        }
      }
    } 
  } 
}

