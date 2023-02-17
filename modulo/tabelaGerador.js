/**********************
* Objetivo: Criar uma tabela de par ou impar.
*Autor: Cauã Felipe
* Data: 16/02/2023
* Versão: 1.0
**********************************/

const gerarTabelaImparPar = function (numeroInicial, numeroFinal, escolhaDeModo) {

  let inicio = parseInt(numeroInicial);
  let fim = parseInt(numeroFinal);
  let escolha = escolhaDeModo;
  let status = true;

  if (inicio == 0 || fim == 0) {
    status = false;
  } else if (isNaN(inicio) || isNaN(fim)) {
    status = false;
  } else if(inicio > fim) {
    status = false;
  } else if(inicio == fim){
    status = false;
  } else if(inicio < 0 || inicio > 500 || fim < 100 || fim > 1000) {
    status = false;
  } else {
    if (escolha == 'PAR' || escolha == 'AMBOS') {
      console.log('\nTabela de Números Pares');
      let contadorPares = 0;
      for (i = inicio; i <= fim; i++) {
        if (i % 2 == 0) {
          console.log(i, '- par')
          contadorPares++
        }
      }
      console.log('Quantidade de Pares encontrados: ' + contadorPares)
    }

    if (escolha == 'IMPAR' || escolha == 'AMBOS') {
      console.log('\n\nTabela de Números Impares');
      let contadorImpares = 0;
      for (i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
          console.log(i, '- impar')
          contadorImpares++
        }
      }
      console.log('Quantidade de Impares encontrados: ' + contadorImpares)
    }
  }
  return status;
}

module.exports = {
    gerarTabelaImparPar
}