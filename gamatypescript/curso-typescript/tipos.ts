// Bollean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Jesse'

// Array
const idades: number[] = [11,22,33];
const idades2: Array<number> = [23,323,11,23];

// Tuple
let jogadores:[string,string,string];
jogadores = ['jesse', 'cicrano', 'fulano'];

// Enum
 enum StatusAprovacao{
     Aprovado,
     Pendente,
     Rejeitado
 }
 const statusParaAprovacao:  StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornaDaAPI: any[]= [123,'jesse',false];
const retornaDaAPI2: any = {
    //......
};

// Void
function printarNaTela(msg:string){
    console.log(msg);
}

// Null e Underfined
const u: undefined = undefined;
const n: null = null ;

// Object
function criar(Object: object){
    //...
}
criar({
    propriedade: 1,
})
//criar('jesse'); apresenta erro, pois não é object

// Never
function loopInfinnito(): never{
    while(true){ }
}

function erro(mensagem: string):never{
    throw new Error(mensagem)
}
function falha(){
    return erro('algo falhou');
}

// Union Types
// Template
const nota: string | number = 5;
function exibirNota(nota: number | string | boolean){
    console.log(`A note é ${nota}`);
}
exibirNota('10');
exibirNota(10);
exibirNota(false);

// Alias
type Funcionario ={
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

// type Funcioarios = Array<string>;
const funcionarios: Funcionario[]= [{
    nome:'jesse',
    sobrenome:'Caetano do Santos',
    dataNascimento: new Date()
},{
    nome:'Professor',
    sobrenome:'matemática e programação',
    dataNascimento: new Date()
}];
function tratarFucionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionário ', funcionario.nome);
    }
}

// para campos opcionais
let altura: number | null =  1.5;
altura =  null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}
const contato: Contato = {
    nome: 'jesse',
    telefone1: '1234465677',   
}

// Type Assertion
//Para assegurar que é algo que é esperado, tal como um número ou
// booleano etcetara, como uma espécie de casting
const minhaIdade: any = 19;
(minhaIdade as number).toString();
// const input = document.getElementById("numero1") as HTMLInputElement;
// console.log(input.value);
// outra maneira de anotaçãoanotação 
const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);


