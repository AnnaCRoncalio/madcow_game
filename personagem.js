let yPersonagens = [366, 366];
let xPersonagens = [100, 320];

let colisao = false;
let meusPontos = 0;
let pontosOponente = 0;

function mostraPersonagem() {
  for(let i = 0; i < imagemPersonagens.length; i++){
    image(imagemPersonagens[i], xPersonagens[i], yPersonagens[i], 30, 30);
  }
}

function movimentaPersonagem(acao){
  if (acao == undefined){
    if (keyIsDown(UP_ARROW)) {
    yPersonagens[0] -= 3;
  } else if (keyIsDown(DOWN_ARROW)){
    if(podeMover(yPersonagens[0])){
      yPersonagens[0] += 3;
    }   
   }
  } else {
    if (acao == "p1-cima"){
      yPersonagens[0] -= 3;
    } else if (acao == "p1-baixo"){
      if(podeMover(yPersonagens[0])){
      yPersonagens[0] += 3;
      } 
    }
  } 
}

function movimentaPersonagem2(acao){
  if (acao == undefined){
    if (keyIsDown(87)) {
      yPersonagens[1] -= 3;
    } else if (keyIsDown(83)){
      if(podeMover(yPersonagens[1])){
        yPersonagens[1] += 3;
      }   
    }
  } else {
    if (acao == "p2-cima"){
      yPersonagens[1] -= 3;
    } else if (acao == "p2-baixo"){
      if(podeMover(yPersonagens[1])){
      yPersonagens[1] += 3;
      } 
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xPersonagens[0], yPersonagens[0], 15);
    if (colisao){
      colidiu(0);
      somDaColisao.play();
      if (meusPontosMaiorQueZero()){
        meusPontos--;
      }
    }
  }
  for (let i = 0; i < imagemCarros.length; i++){ 
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xPersonagens[1], yPersonagens[1], 15);
    if (colisao){
      colidiu(1);
      somDaColisao.play();
      if (pontosOponentesMaiorQueZero()){
        pontosOponente--;
      }
    }
  }
}

function colidiu(i){
    yPersonagens[i] = 366;
}

function incluiPontos(){
  fill(color(255,240,0))
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, 110, 27);
}

function incluiPontosOponente(){
  fill(color(255,240,0))
  textAlign(CENTER);
  textSize(25);
  text(pontosOponente, 330, 27);
}

function marcaPonto(){
  if (yPersonagens[0] < 15){
    meusPontos++;
    somDoPonto.play();
    yPersonagens[0] = 366;
  } 
  if (yPersonagens[1] < 15){
    pontosOponente++;
    somDoPonto.play();
    yPersonagens[1] = 366;
  }
}

function meusPontosMaiorQueZero(){
  return meusPontos > 0;
}

function pontosOponentesMaiorQueZero(){
  return pontosOponente > 0;
}

function podeMover(personagem){
  return personagem < 366;
}