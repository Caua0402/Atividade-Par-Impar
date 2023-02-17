/**********************
* Objetivo: Criar uma tabela de par ou impar.
*Autor: Cauã Felipe
* Data: 13/02/2023
* Versão: 1.0
**********************************/

var readline = require('readline')
var tabela = require('./modulo/tabelaGerador.js')

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDados.question('Digite um número de início entre 0 e 500: ', function (numeroDeInicio) {
    let valor1 = numeroDeInicio;
    entradaDados.question('Digite até que número irá a tabela entre 100 e 1000: ', function (numeroFinal) {
        let valor2 = numeroFinal;
        entradaDados.question('Qual tabela irá querer?:\n\n- Ímpar\n- Par\n- Ambos\n\n',
            function (qualTabela) {
                let modo = qualTabela.toUpperCase().replace('Í','I');
                if (modo != 'IMPAR' && modo != 'PAR' && modo != 'AMBOS') {
                    console.log('ERRO: Esse modo não existe!');
                    entradaDados.close();
                } else if(valor1 % 1 !== 0 || valor2 % 1 !== 0){
                    console.log('ERRO: Apenas números inteiros são aceitos!');
                    entradaDados.close();
                } else if (valor1 == '' || valor2 == '' || modo == '') {
                    console.log('ERRO: Nenhum dado deve estar vazio!');
                    entradaDados.close();
                } else if(isNaN(valor1) || isNaN(valor2)){
                    console.log('ERRO: Os dois valores devem ser números!');
                    entradaDados.close();
                } else if (valor1 < 0 || valor1 > 500 || valor2 < 100 || valor2 > 1000) {
                    console.log('ERRO: O número inicial deve ser entre 0 e 500 e o número final deve ser entre 100 e 1000.');
                    entradaDados.close();
                } else if (parseInt(valor1) > parseInt(valor2)) {
                    console.log('ERRO: O número inicial não deve ser maior que o número final.');
                    entradaDados.close();
                } else if (valor1 == valor2) {
                    console.log('ERRO: Os valores digitados não podem ser iguais.');
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