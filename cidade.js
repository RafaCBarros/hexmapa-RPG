function conteudo_pg() {
    var titulo;
    var sumario;
    var container1;
    var container2;

    container1 = document.getElementById("titulo_cidade");
    container2 = document.getElementById("sumario_cidade");
    
    titulo = "PORTO SOLAR";

    sumario = "&ensp;"+
    "Porto Solar &eacute; o assentamento mais importante na Sul da Regi&atilde;o H&eacute;lica "+
    "Fundado muitas gera&ccedil;&otilde;es atr&aacute;s, sobre as ru&iacute;nas de outra "+
    "civiliza&ccedil;&atilde;o."+
    "&ensp;"+
    "No distrito central de Porto Solar, est&aacute; o Castelo da Aurora, constru&iacute;do ao redor "+
    "do antigo Forte da Aurora. No distrito leste, fica o p&iacute;er, o mercado e as resid&ecirc;ncias da classe mais pobre."+
    "&ensp;"+
    "Profecias falam da chegada de um Protetor da Aurora";
    
    container1.innerHTML = titulo;
    container2.innerHTML = sumario;
}

