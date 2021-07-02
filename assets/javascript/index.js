function conteudo_pg() {
    var titulo
    var sumario
    var container1
    var container2

    container1 = document.getElementById("titulo_mapa")
    container2 = document.getElementById("sumario_mapa")


    titulo = "<strong>MAPA 1:</strong> SUL REGI&Atilde;O H&Eacute;LICA"

    sumario = "A Regi&atilde;o H&eacute;lica &eacute; assim conhecida tanto por sua "+
    "localiza&ccedil;&atilde;o ao leste do continente, quanto pela influ&ecirc;ncia solar na "+
    "cultura local <br>" +
    "Parte do Imp&eacute;rio Uidon, conta com cidades como o <a href='urbano2.html'>Porto Solar</a> "+
    "no sul e a Cidade d'Os Arcontes mais ao norte. O mapa em quest&atilde;o mostra as regi&otilde;es "+ "pr&oacute;ximas de Porto Solar: A <a href='floresta2.html'>Floresta Cascapinhenta</a>, parte das <a href='montanha1.html'>Colinas Est&eacute;reis</a>, as "+ "plan&iacute;cies pr&oacute;ximas que produzem comida para a regi&atilde;o local, entre outros. <br>"+
    "O mar pr&oacute;ximo de de Porto Solar &eacute; um dos mais perigosos do Imp&eacute;rio, com "+
    "criaturas de tamanhos, h&aacute;bitos e biologias completamente diferentes. As criaturas mais "+
    "perigosas s&atilde;o os Descendentes de Maqueril, uma classifica&ccedil;&atilde;o para "+
    "criaturas similares a tubar&otilde;es t&atilde;o grandes quanto um gale&atilde;o, que acreditam "+
    "descender do mitol&oacute;gico monstro Maqueril."
    container1.innerHTML = titulo
    container2.innerHTML = sumario

}