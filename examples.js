
// Tipos de dados
// ===============================================
var name = 'Max'; // String
var age = 29; // Number
var hasHobbies = true; // Boolean

// Podemos setar a variavel com let em vez de var.
// Assim a variavel caso não seja usada em nenhuma parte do código ela não é carregada na memória.
let name = 'Henrique'

const cpf = '999.999.999' // constante, valor da variavel nunca muda


// Funções
// ===============================================
function somar(valor1, valor2){
  return valor1 + valor2
}
console.log(somar(10, 20));

// Funções arrow
const somar = (valor1, valor2) => {
  return valor1 + valor2
}
console.log(somar(10, 20));

// Função arrow em uma linha
const somar = (valor1, valor2) => valor1 + valor2;
console.log(somar(10, 20));
//----------------------------------------------------


// Objetos, propriedades e metodos
// ===============================================
const pessoa = {
  name: 'Henrique',
  age: 27
}
console.log(pessoa);
console.log(pessoa.name);

// Função dentro do objeto
const pessoa = {
  name: 'Henrique',
  age: 27,
  mensagem() {
    console.log('Olá meu nome é ' + this.name);
  }
}
console.log(pessoa.mensagem());

// Iterador
const hobbies = ['nadar', 'bicicleta', 'viajar'];
for (let hobby of hobbies){
  console.log(hobby);
} 

// Iterador com map
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//----------------------------------------------------


// Arrays, Objetos e referencias
// ===============================================
let coisas_que_gosto = ['nadar', 'bicicleta', 'viajar'];

// Adicionar um objeto no array
coisas_que_gosto.push('Programação');
//----------------------------------------------------


// Spread and Rest operators
// ===============================================

// O spread(propagar), permite você expandir um array a partir de outro através do operador `...`
let partes = ['ombros', 'joelhos'];
let letra = ['cabeca', ...partes, 'e', 'dedos'];
console.log(letra); // ["cabeca", "ombros", "joelhos", "e", "dedos"]

// Outro metodo super pica de usar o exemplo acima
const toArray = (...args) => {
  return [arg1, arg2, arg3]
}
console.log(toArray(1, 2, 3, 4));

var d = new Date(...camposData);
//----------------------------------------------------

