function conteudo_pg() {
    var titulo_floresta;
    var sumario_floresta;
    var container1;
    var container2;

    container1 = document.getElementById("titulo_floresta");
    container2 = document.getElementById("sumario_floresta")
    

    titulo_floresta = "FLORETA CASCAPINHENTA";

    sumario_floresta = "&ensp;"+
    "Com &aacute;rvores extramemente resistentes, a Floresta Cascapinhenta &eacute; a fonte de boa "+
    "parte da madeira utilizada em Porto Solar e nos barcos de Estaleiro. Mas madeira n&atilde;o "+
    "&eacute; o &uacute;nico recurso not&aacute;vel da regi&atilde;o, que tamb&eacute;m possui "+
    "fungos e frutas utilizados na culin&aacute;ria local, e uma grande variedade de "+
    "op&ccedil;&otilde;es de ca&ccedil;a.";

    container1.innerHTML = titulo_floresta;
    container2.innerHTML = sumario_floresta;
    

}

