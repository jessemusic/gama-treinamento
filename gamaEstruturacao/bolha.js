var valores=[6,3,8,7,10,5,4,9,2,1];

function ordena(){
    let inicio=0;
    let fim=10;
    let tmp;
    for(vezes=0;vezes<fim-1;vezes++){
    for(pos=inicio;pos<fim-1-vezes;pos++){
        if(valores[pos]> valores[pos +1]){
            tmp=valores[pos];
            valores[pos]=valores[pos+1]
            valores[pos+1]=tmp;
        }
    }
}

}
ordena();
console.log("agora ordenado...");
console.log(valores);

