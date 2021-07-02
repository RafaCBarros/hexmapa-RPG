function conteudo_pg() {
    var titulo;
    var sumario;
    var container1;
    var container2;

    container1 = document.getElementById("titulo_estaleiro");
    container2 = document.getElementById("sumario_estaleiro");
    
    titulo = "ESTALEIRO";
    
    sumario = "&ensp;"+
    "O Estaleiro &eacute; uma importante centro artesanal que cresceu para se tornar uma pequena vila."+
    "<br>&ensp;"+
    "Originado de um estaleiro, a constru&ccedil;&atilde;o naval da vila &eacute; o orgulho dos "+
    "moradores. A fabrica&ccedil;&atilde;o dos navios locais &eacute; diversa e a qualidade renomada "+
    "em todo o Imp&eacute;rio.";
    
    container1.innerHTML = titulo;
    container2.innerHTML = sumario;
}

