//Declaração de array que receberá a grade
var dados=[];

//Variável responsável por receber o tamanho da grade
var n = prompt("Digite a quantidade de números da grade:") 

// For percorrendo o tamanho da grade
 for(var i=0; i<n;i++){
  var inn =i+1; 

//if para verificar se este é último número da grade
if(inn<n){

   dados[i]=prompt("Digite o "+inn+"º valor");

//Converter o valor da array para int
var ard= parseInt(dados[i]);

//Soma o valor mais 2 para verificar se será divisível por 5
ard = ard + 2;
var ard2=ard-1;

//Caso o valor for divisível por 5  
if(ard % 5 == 0){
console.log(ard);
}

//Caso faltar apenas um número para ficar divisível por 5
if(ard2 % 5 ==0){
console.log(ard2);
}

//Caso não for divisível por 5
else if(ard % 5 != 0){
console.log(dados[i]);
}
}
}

//Caso não for nenhum dos testes, pegará penultimo valor menos 7, 5 somado aos 2 acrescentados na variável ard
ard=ard-7;
console.log(ard)
