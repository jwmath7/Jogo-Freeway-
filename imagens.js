//variáveis

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let somDaTrilha;
let somDosPontos;
let somDaColisao;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDosPontos = loadSound("sons/pontos.wav");
  somDaColisao = loadSound("sons/colidiu.mp3");
  
}