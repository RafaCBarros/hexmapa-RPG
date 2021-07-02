/*
  Funcao para pesquisar os personagens

  As variaveis que guardam os personagens
  var = [   [nome do personagem, raca, classe,regiao, idioma],[nome do personagem, raca, classe,regiao, idioma]   ]

Regiao de Origem
  Porto Solar
  Cidade d'Os Arcontes
  Terras Perdidas de Lunaria


Fluente nos Idiomas:
  Comum, o idioma das União Hélica
  Salaman, o idioma dos Dragões
  Anarlambe, o idioma dos elfos da Região Hélica
  Helious, o idioma sagrado da Região Hélica


*/

function status_lista(){
  var botao;
  var ficha;
  var informacao;

  ficha = document.getElementById("ficha")
  botao = document.getElementById("conhecimento")
  informacao = document.getElementById("segredo")

  if (botao.innerHTML == "Ativar Lista de Personagens"){
  ficha.style.opacity = "100"
  botao.className = "btn btn-outline-danger my-2 my-sm-0"
  botao.innerHTML = "Desativar Lista de Personagens"
  } else {
    ficha.style.opacity = "0"
    informacao.style.opacity = "0"    
    botao.className = "btn btn-outline-success my-2 my-sm-0"
    botao.innerHTML = "Ativar Lista de Personagens"
  }
  
}

function filtrar() {
  // Declare variaveis
  var entrada;
  var sense;
  var menu;
  var item;
  var a;

  //Identifique
  entrada = document.getElementById("procura"); //recebe input (botao apertado)
  sense = entrada.value.toUpperCase(); //transforma em caps
  menu = document.getElementById("lista_pjs"); //guarda a lista
  item = menu.getElementsByTagName("li"); //guarda cada item da lista << COLECAOHTML

  // Laco para achar o que parece com a ENTRADA, e esconder o resto
  for (let i in item) { // i = tamanho de li, aka numero de itens na colecao
    a = item[i].getElementsByTagName("a")[0]; //pegar o li e expor so a tag "a"

    // transformar texto dentro da ancora em maiusculo, procura o index da letra guardada no SENSE, se encontrar a letra em alguma posicao (aka > -1), deixa o display de tal item quieto
    // se não achar a letra de SENSE na palavra, display muda para NONE;
    if (a.innerHTML.toUpperCase().indexOf(sense) > -1) { 
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}