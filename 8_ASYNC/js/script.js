// 1 - setTimeout
// console.log("Ainda nao executou");

// setTimeout(function () {
//     console.log("Executou a função setTimeout");
// }, 2000)

// console.log("Ainda nao executou 2");

// 3 - setInterval
// console.log("Ainda nao executou")

// setInterval(function(){
//     console.log("Executou a função setInterval");
// },3000)

// console.log("Ainda nao executou 2")

// 4 - Promises
// const promessa = Promise.resolve(5 + 5)

// console.log("Ainda nao executou 3")

// promessa
//     .then(value => {
//         console.log(`a soma é ${value}`)
//         return value;

//     })
//     .then((value) => value - 1)
//     .then((value) => console.log(`agora é ${value}`));

// console.log("Ainda nao executou 4");

// // 4.b - Falha na promise
// Promise.resolve(4 + "sdf")
//     .then((n) => {
//         if(Number.isNaN(n)){
//             throw new Error("Não é um número");
//         }
//         return console.warn(n);
//     })
//     .catch((errado) => console.log(`ocorreu um erro ${errado}`));


// 5 - rejeicao
// function checkNumber(n){
//     return new Promise((resolve, reject) => {
//         if (n > 10){
//             resolve(`o numero ${n} é maior que 10`);
//         } else {
//             reject (new Error(`Numero ${n} eh muito baixo`));
//         }
//     });
// }

// const a = checkNumber(4567);

// const b = checkNumber(5);

// a.then((v) => console.log(`o resultado eh ${v}`)).catch((err) => console.warn(`um erro aconteceu ${err}`))
// b.then((v) => console.log(`o resultado eh ${v}`)).catch((err) => console.warn(`um erro aconteceu ${err}`))


// console.log(a,b)

// 6 - resolvendo varias promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(10)
    }, 3000)
})

const p2 = Promise.resolve(10+10);

const p3 = new Promise((resolve, reject) => {
    if (30>10){
        resolve(30);
    } else {
        reject("erro!");
    }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - async func
async function somarComDelay(a,b){
    return a + b
}

somarComDelay(2,4).then((value) => {
    setTimeout(function(){
        console.log(`o valor da soma eh: ${value}`);
    },7000)
});

console.log('xirigutago')

// 8 - async await
function resolveComDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Segura Peao!`);
        },10000);
    });
}

async function chamadaAsync() {
    console.log("Chamando a Promise e esperando o resultado")
    
    const result = await resolveComDelay();
    console.warn(`O resultado chegou: ${result}`);
}

chamadaAsync();

// 9 - Generators
function* generators(){
    yield 1;
    yield 'second yield';
    yield () => console.log('arrow function');
    const name = yield "What is your name"
    yield `Hello ${name}`;
}

const gen = generators();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next('Rick').value);