/**********************
* Objetivo: Criar uma tabela de par ou impar.
*Autor: Cauã Felipe
* Data: 16/02/2023
* Versão: 1.0
**********************************/

var readline = require('readline')
var tabela = require('./modulo/tabelaGerador.js')

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDados.question('Digite um número de início entre 0 e 500: ', function (numeroInicio) {
    let valor1 = numeroInicio;
    entradaDados.question('Digite até que número irá a tabela entre 100 e 1000: ', function (numeroFinal) {
        let valor2 = numeroFinal;
        entradaDados.question('Qual tabela irá querer?:\n\n- Ímpar\n- Par\n- Ambos\n\n',
            function (qualTabela) {
                let modo = qualTabela.toUpperCase().replace('Í','I');
                if (modo != 'IMPAR' && modo != 'PAR' && modo != 'AMBOS') {
                    console.log('ERRO: Não foi possivel encontrar esse modo!');
                    entradaDados.close();
                } else if(valor1 % 1 !== 0 || valor2 % 1 !== 0){
                    console.log('ERRO: Coloque número inteiro!');
                    entradaDados.close();
                } else if (valor1 == '' || valor2 == '' || modo == '') {
                    console.log('ERRO: Preencha todos os dados!');
                    entradaDados.close();
                } else if(isNaN(valor1) || isNaN(valor2)){
                    console.log('ERRO: Coloque número!');
                    entradaDados.close();
                } else if (valor1 < 0 || valor1 > 500 || valor2 < 100 || valor2 > 1000) {
                    console.log('ERRO: Número inicial deve ser de 0 a 500 e o final de 100 a 1000.');
                    entradaDados.close();
                } else if (parseInt(valor1) > parseInt(valor2)) {
                    console.log('ERRO: Número inicial não pode ser maior que o numero final.');
                    entradaDados.close();
                } else if (valor1 == valor2) {
                    console.log('ERRO: Os valores não podem ser igual.');
                    entradaDados.close();
                } else {
                    let geradorTabela = tabela.gerarTabelaImparPar(valor1, valor2, modo);

                    if (geradorTabela === false) {
                        entradaDados.close()
                    } else {
                        entradaDados.close()
                    }
                }
            })
    })
})