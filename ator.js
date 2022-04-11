//variáveis ator

let yAtor = 366;
let xAtor = 87;
let colisao = false;
let meusPontos = 0;

//funções ator

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}


function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if (yAtor < 366){
    yAtor += 3;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
}

function verificaColisao (){
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
 
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i],comprimentoCarro, alturaCarro, xAtor, yAtor, 20)
    if (colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      if (meusPontos > 0){
      retiraPonto();
      }
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 366;
  xAtor = 100;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 27);
  fill(color(0, 255, 255))
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1
    voltaAtorParaPosicaoInicial();
    somDosPontos.play();
  }
  
}

function retiraPonto(){
  meusPontos -= 1
}