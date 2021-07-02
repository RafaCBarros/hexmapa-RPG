function conteudo_pg() {
    var titulo;
    var sumario;
    var container1;
    var container2;

    container1 = document.getElementById("titulo_vila");
    container2 = document.getElementById("sumario_vila");
    
    titulo = "GALP&Otilde;ES";

    sumario = "&ensp;"+
    "O que come&ccedil;ou como galp&otilde;es ao norte de Porto Solar rapidamente virou em uma pequena "+
    "vila para os marginalizados da cidade, aonde moram os trabalhadores dos p&iacute;ers e servos.<br>"+
    "&ensp;"+
    "A vila possui uma reputa&ccedil;&atilde;o ruim pelas tavernas e figuras sinistras que podem aqui "+
    "ser encontrados."
    
    container1.innerHTML = titulo
    container2.innerHTML = sumario
}

