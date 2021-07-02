function conteudo_pg() {
    var titulo;
    var sumario;
    var container1;
    var container2;

    container1 = document.getElementById("titulo_montanha");
    container2 = document.getElementById("sumario_montanha");


    titulo = "COLINAS EST&Eacute;REIS";

    sumario = "&ensp;"+
    "Extendendo-se al&eacute;m do territ&oacute;rio do Imp&eacute;rio, Colinas Est&eacute;reis "+
    "&eacute; o nome de uma perigosa e &aacute;rida serra, praticamente imposs&iacute;vel de ser "+
    "atravessada."+
    "&ensp;"+
    "Todas as tentativas imperiais de minerar os recursos embaixo dessa serra ou construir um "+
    "forte s&atilde;o foram infrut&iacute;feras, motivo por tr&aacute;s do nome do local.";

    container1.innerHTML = titulo;
    container2.innerHTML = sumario;

}