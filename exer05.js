//Definindo quantas vezes o recorde foi batido, e quantas vezes foi reduzido o menor score

var a = [];
var quant;
var ind=1;
var j=0;
var cont=0;
var contador=0;
var maior =0;



quant=prompt("Digite a quantidade de jogos:");

	for(var i=0;i<quant;i++){

      ind=i+1;
     
      a[i]=parseInt(prompt("Digite o "+ind+"º Score"));
      console.log(a[i]);

	}

for (var i = 0; i < a.length; i++) {
   if ( a[i] > maior ) {
      maior = a[i];
      contador=contador +1;
     
   }

  
}
for (var i = 0; i < a.length; i++) {
   if ( a[i] < a[j] ) {
      cont=cont +1;
      console.log("Vezes em que o score diminuiu: "+ cont);
      j=j++;
   }  
}


if (contador==0){
console.log("Vezes em que o record foi batido: "+contador);
}

else{
contador=contador-1;
console.log("Vezes em que o record foi batido:"+contador);

}
if (cont==0){
//cont=cont-1;
console.log("Vezes em que o score diminuiu: "+ cont);
}

else{
//cont=cont-1;
console.log("Vezes em que o score diminuiu: "+cont);

}