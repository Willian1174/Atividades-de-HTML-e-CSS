//Exercício 06 - atribuindo valores as barras de chocolate, e somando para verificar se o resultado é igual ao dia de aniversário, limitando a frequência da soma com o mês digitado.

var ind=0;
var quant;
var barras = [];
var d,m;
var j=1;
var cont=0; 
var sum;

    quant = prompt("Digite a quantidade de barrinhas de chocolate:");


for(var i=0;i<quant;i++){


	barras[i] = parseInt(prompt("Digite o valor da "+ind+"º barra:"));
}


d = prompt("Digite o dia do aniversário");
m = prompt("Digite o mês de aniversário");


for(var i=0;i<barras.length;i++){ 


 sum=barras[i]+barras[j];


 if (sum == d){   
 
 j++;
 cont++;

 }

}


while(cont>m){

	cont=cont-1;
}


if(quant<=1){

cont=1;

}

console.log(cont);
