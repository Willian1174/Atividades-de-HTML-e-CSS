
var p =[];
var v =[];

p[0] = parseInt(prompt("Digite a posição inicial do canguru:"));

v[0] = parseInt(prompt("Digite a velocidade do canguru:"));

p[1] = parseInt(prompt("Digite a posição inicial do canguru:"));

v[1] = parseInt(prompt("Digite a velocidade do canguru:"));

var mult,mult2;

mult = (p[0]+v[0]);
mult2 =(p[1]+v[1]);


 for(var i=0; i<1000;i++){


mult = mult+v[0];
mult2 =mult2+v[1];



  if(mult==mult2){

clear();
i=2000;
console.log("YES");
console.log(mult,mult2);

}

  else{

clear();
console.log("NO");
console.log(mult,mult2);

}
}