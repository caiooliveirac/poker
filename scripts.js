

var myPix = new Array("010.png","011.png","002.png","009.png","008.png","007.png","006.png","005.png","004.png","003.png","001.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("imagem").src = myPix[randomNum];
} 

jogadores = new Array("1","2","3","4","5")

for (var i = 0; i < jogadores.length; i++) {
    var container = document.querySelector(".container");
    var cartao = '<div class="card" style="width: 18rem;">    <img class="card-img-top" src="001-poker-game.png" alt="Card image cap" id="imagem">    <div class="card-body">      <h5 class="nome-oponente">Jogador 1</h5>      <p class="pote-oponente">Pote:1400</p>      <a href="#" class="btn btn-primary">100</a>    </div>  </div>';
    container.innerHTML += cartao
    choosePic()
 }

 