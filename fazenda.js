function conteudo_pg() {
    var titulo;
    var sumario;
    var container1;
    var container2;

    container1 = document.getElementById("titulo_fazenda");
    container2 = document.getElementById("sumario_fazenda");
    
    titulo = "FAZENDAS E PASTOS";

    sumario = "&ensp;"+
    "As fazendas pr&oacute;ximas ao Vinhedo Real s&atilde;o fonte de sustento para muitos plebeus. "+
    "Apesar de respons&aacute;veis por maior parte do estoque de comida de Porto Solar, os fazendeiros "+
    "e pastores locais s&atilde;o vistos com desd&eacute;m pelos moradores de Porto Solar e "+
    "regi&atilde;o.<br>";

    container1.innerHTML = titulo;
    container2.innerHTML = sumario
}

