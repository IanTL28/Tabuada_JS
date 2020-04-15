function calculaTabuada(){

    //criando uma variavel tabuada, onde foi selecionado o filho tbody da tabela de id=tabuada (no documento html). 
    let tabuada = document.querySelector("#tabuada tbody"); 

    //Obtendo o valor A do campo input number e convertendo em inteiro
    let valorA = parseInt(document.querySelector("#valorA").value); 

    //"Limpando o conteudo do tbody". Toda vez que for rodar de novo, isso tem que ser feito antes do for, para que todos os valores estejam zerados.
    tabuada.innerHTML = ''; 

    for(let valorB = 0; valorB <= 10; valorB++){

        let resultado = valorA * valorB;
   
        let template = ` 

        <td>${valorA}</td>
        <td>x</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${resultado}</td>

        `;

        let tr = document.createElement('tr'); 

        tr.innerHTML = template; 

        tabuada.append(tr); 

    }
}

calculaTabuada(); // chamando a funçao para ela rodar inicialmente. com valor zero. 

document.querySelector("#valorA").addEventListener('change', calculaTabuada); 
//para a funçao rodar caso se troque o valor de A. Que a princípio é zero.
