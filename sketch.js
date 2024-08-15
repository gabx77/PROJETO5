let palavra;
let som; 
let imagem;

function setup() {
 createCanvas(500, 500);
 palavra = sw4();
 musica.loop();
}

function preload(){
  imagem = loadImage("imagem.jpg");
  musica = loadSound("musica.mp3");
}


function draw() {
  sw4();
  hilux();
  let maximo = width;
  let minimo = 0;
  
  let aparecer = map(mouseX, 0,width, 1,palavra.length);
  let inicio = palavra.substring(0,aparecer);
  text(inicio, 250, 250);
}

function hilux(){
  background("violet");
  image(imagem,0,0,500,500);
  fill("ligthblue");
  textSize(64);
  textAlign(CENTER,CENTER);
}

function sw4(){
  let palavras = ["hilux","corolla","sw4"];
  return random(palavras);
}