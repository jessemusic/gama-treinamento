class Matematica{
    soma(valorA,valorB){
        return valorA + valorB;
    }
    subtracao(valorA,valorB){
        return valorA - valorB;
    }
    multiplicao(valorA,valorB){
        return valorA * valorB;
    }
    divisao(valorA, valorB){
        return valorA / valorB;
    }
}
var instanciaMatematica = new Matematica;
var resultado = instanciaMatematica.subtracao(4,7);
console.log(resultado);
