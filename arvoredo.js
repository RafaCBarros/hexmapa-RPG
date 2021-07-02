function conteudo_pg() {
    var titulo;
    var sumario;
    var container1;
    var container2;

    container1 = document.getElementById("titulo_arvoredo");
    container2 = document.getElementById("sumario_arvoredo");
    
    titulo = "ARVOREDO CARVALHO";

    sumario = "&ensp;"+
    "A parte mais antiga de Floresta Cascapinheira, acredita-se que o Grande Carvalho que d&aacute; "+ "nome a essa parte da floresta tem mais de mil anos. <br>"+
    "&ensp;"+
    "O local &eacute; rico em plantas e fungos medicinais, por&eacute;m estranhas criaturas"+
    "tamb&eacute;m rondam a regi&atilde;o tornando perigoso se aventurar muito profundamente. <br>"+
    "&ensp;"+
    "O ascendente culto 'Sacerdotes do Mar' considera o Carvalho e a regi&atilde;o ao redor um local "+
    "profano.";
    
    container1.innerHTML = titulo;
    container2.innerHTML = sumario;
}

function confirmar_pj(x){
    var personagem = [];
    var pjs = [[],[],[],[],[]];
    var opcoes = [[],[],[],[]];
    var cartao_segredo;
    var cartao_conteudo;
    var segredo;
    var i = 0;
    
    cartao_segredo = document.getElementById('segredo');
    cartao_conteudo = document.getElementById('informacao');

    opcoes = [["HUMANO", "ELFO", "DRAGAO","NEPHILIM"], // racas
              ["NOBRE","SALVADOR","GUIA","DRUIDA"],//"classes"
              ["PORTO","LOS ARCONTES","LUNARIA"],//regiao original
              ["COMUM", "ANARLAMBE","SALAMAN","HELIOUS"]]//idiomas

              //personagem = nome, raca, classe, regiao, idioma
    pjs = [["TRISTANA OF ARCONTES", opcoes[0][0], opcoes[1][0], opcoes[2][1], opcoes[3][0]],
            ["VERANIA", opcoes[0][0], opcoes[1][1], opcoes[2][0], opcoes[3][0]],
            ["ARKON", opcoes[0][2], opcoes[1][1], opcoes[2][2], opcoes[3][2]],
            ["CORDION", opcoes[0][2], opcoes[1][2], opcoes[2][0], opcoes[3][1]],
            ["OPAL", opcoes[0][3], opcoes[1][3], opcoes[2][0], opcoes[3][3]]]
    
  
    personagem = pjs[x];
    console.log(personagem)

    while (i < 4) {
        if (personagem[i] == "DRUIDA") {
            cartao_segredo.style.opacity = "100";
            segredo = "Cont&aacute;rio da maioria do mundo, voc&ecirc; sabe a verdade sobre o Grande "+
            "Carvalho e seus arredores.";
            cartao_conteudo.innerHTML = segredo;
        } else if (personagem[i] == "SALVADOR") {
            cartao_segredo.style.opacity = "100";
            segredo = "Os dru&iacute;das lhe consideram um grande aliado e lhe concederam segredos sobre "+
            "o Grande Carvalho, al&eacute;m de passagem segura pelo Arvoredo do Carvalho";
            cartao_conteudo.innerHTML = segredo;
        }
        i++
    }
}