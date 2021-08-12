let meuNome = "jesse";
let meuSobrenome = "Caetano dos Santos";
let minhaProfissao = "Developer";
console.log(`olá, neu nome é ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`);
console.log(`o objeto é ${{ chave: `valor` }}`);

let isValid = false;

function verify(isValid) {
    if (isValid) {
        return true;
    } else {
        return "opa o que aconteceu";
    }
}

console.log(verify(isValid));
//------------com ternário--------
const reasult = isValid ? true : false;

let lista = [1, 2, 5];
let numerosAIncluirNaLista = [0,3, 4];
console.log(lista);
console.log(numerosAIncluirNaLista);
for (let i = 0; i < numerosAIncluirNaLista.length; i++) {
    for (let j = 0; j < lista.length; j++) {

        if (lista[j] === numerosAIncluirNaLista[i]) {
          
            j++;i++;
        }
        if (lista[j] >= numerosAIncluirNaLista[i]) {
            lista.splice(j, 0, numerosAIncluirNaLista[i]);
            j++;
        }

    }
}
console.log(lista);
//-----------------------------------------------
const listResult = [1,3, ...listaIncluir, 5];
console.log(listResult);
