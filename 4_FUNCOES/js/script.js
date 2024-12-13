// // console.log("conected");


// function aPrimeira(txt){
//     console.log(`This is my ${txt} function`);
// };

// aPrimeira('Xirigutago');

// const aSegunda = function (tentativa){
//     console.log(`This is my ${tentativa} function. This is inside a variable`);
// };

// aSegunda('Xablau');

// // 2 - Return

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2, n3){
//     return n1 + n2 + n3;
// }

// const resultado = soma(a, 0, b);

// console.log(resultado);

// // 3 - Escopos

// let numero = 90;

// function mudaNumero(){
//     let numero = 89;
//     console.log(`Dentro da função, o valor de numero é ${numero}`);
// }

// console.log(`Fora da função, o valor de numero é ${numero}`);

// mudaNumero();

// // 4 - Escopos aninhados

// let bla = 90;

// function blaNovo(){
//     let bla = 89
//     console.log(`o valor de bla é ${bla}`);

//     if (true){
//         let bla = 64;
//         console.log(`o valor de bla é ${bla}`);

//         if(true){
//             let bla = 61;
//             console.log(`o valor de bla é ${bla}`);
//             if(true){
//                 let bla = 87;
//                 console.log(`o valor de bla é ${bla}`);
//             }
//         }
//     }

// }

// blaNovo();
// console.log(`o valor de bla é ${bla}`);

// // 5 - Arrow Function

// const parOuImpar = (n) => {
//     if(n % 2 === 0){
//         console.log(`Esse numero é par`);
//         return
//     }

//     console.log(`Esse numero é impar`);
// }

// parOuImpar(7);
// parOuImpar(10);
// parOuImpar(2345678);
// parOuImpar(987654323);

// // 6 - Arrow resumida

// const raizQuadrada = (x) => {
//     return x * x;
// };

// console.log(raizQuadrada(3));

// const raizQuadradaResumida = (y) => y * y;

// console.log(raizQuadradaResumida(13));

// const helloWorld = () => console.log('Hello World');
// helloWorld();

// // 7 - Argumentos opcionais

// const multiplication = function(m,n) {
//     if(n === undefined){
//         return m * 12;
//     } else {
//         return m * n;
//     }
// };

// console.log(multiplication(4));
// console.log(multiplication(4, 5));

// const greetings = (name) => {
//     if (!name){
//         console.log('Olá, cliente')
//         return
//     }
//     console.log(`Olá, ${name}`);
// };

// greetings();
// greetings(`Ricardo`);

// 8 - Valor Default

const greeting = (name, greet = 'Fala ae,') => {
    return`${greet} ${name}!`;
};

console.log(greeting('Ricardo'));
console.log(greeting('Porra', 'Ae, caraio,'));

const repetText = (text, repeat = 8) => {
    for(let i = 0; i < repeat ; i++){
        console.log(text);
    }
}

repetText('Repeteco default');
repetText('Repeteco com valor passado', 15);

const meuExemplo = (chuchu, xirigutago = 'dado') => {
    return `Cavalo ${xirigutago}, nao se olha os ${chuchu}`;
};

    console.log(meuExemplo('dentes'));
console.log(meuExemplo('o cu que tem', 'picado por cobra'));

// 9 - Closures

function someFunction() {
    let txt = 'Rapaliga vc';

    function display(comeco) {
        console.log(`${comeco} ${txt}`)
    };

    display(`eu nao Rapaliga`);
}
someFunction();