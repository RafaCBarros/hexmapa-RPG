function conteudo_pg() {
    var titulo_vinhedo;
    var sumario_vinhedo;
    var container1;
    var container2;

    container1 = document.getElementById("titulo_vinhedo");
    container2 = document.getElementById("sumario_vinhedo");
    
    titulo_vinhedo = "VINHEDO REAL";

    sumario_vinhedo = "&ensp;"+
    "Vinhedo Real foi incialmente constru&iacute;do ap&oacute;s o Tratado dos Luxos, que restringia "+
    "importa&ccedil;&atilde;o de bens de luxo durante a Guerra dos Primeiros.<br>"+
    "&ensp;"+
    "A regi&atilde;o recebeu in&uacute;meros encantamentos para garante a produ&ccedil;&atilde;o "+
    "de uvas de boa qualidade durante todo o ano. Dado os encantamentos, que precisam ser refeitos "+
    "regularmente, o pre&ccedil;o do vinho produzido &eacute; exorbitante, e assim o vinho ali "+
    "produzido &eacute; chamado o Vinho de Reis. <br>"+
    "&ensp;"+
    "Os fazendeiros de Vinhedo Real s&atilde;o considerados mais do que fazendeiros, mas sim "+
    "artes&otilde;es."
    
    container1.innerHTML = titulo_vinhedo
    container2.innerHTML = sumario_vinhedo
}

