

let contador=1;
let maxIntentos=-1;
let min=0;
let max=0;
while(min>=max){
    min=parseInt(prompt("Elija el vamor minimo"));
    max=parseInt(prompt("Elija el valor maximo, tiene que ser mayor que: "+min))
}
while(maxIntentos<=0){
    maxIntentos=parseInt(prompt("En cuantos intentos quieres hacer?"))
}

let numeroSecreto=Math.floor(Math.random()*max)+min;
let numeroUsuario=numeroSecreto-1;
while(numeroSecreto!=numeroUsuario){
    numeroUsuario=parseInt(prompt(`Ingrese um numero entre ${min} e ${max}`));
    console.log("O numero do usuario: "+numeroUsuario);
    if(numeroSecreto==numeroUsuario){
        console.log("Acertou: "+(numeroSecreto==numeroUsuario));
        alert(`Acertou el numero es: ${numeroSecreto} usted adivinaste en ${contador} ${contador==1?"intento":"intentos"}`);
        
    }else{
        contador++;
        console.log("errou: "+(numeroSecreto==numeroUsuario));
        alert("No acertaste el numero");
        alert(numeroSecreto>numeroUsuario?"El numero es mayor":"El numero es menor");
        if(contador>maxIntentos){
            alert("Ya no puede mas. Llegaste al limite de intentos que son: "+maxIntentos);
            break;
        }
    }
}