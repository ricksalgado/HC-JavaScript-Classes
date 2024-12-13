// 1 - Metodos
const eu = {
    nome: "Ricardo",
    sobrenome: function(){
        console.log("Daniel Salgado")
    }
};

console.log(eu.nome);
eu.sobrenome();


// 2 - Aprofundando em metodos
const pessoa ={

    nome: "New User",

    getNome: function (){
        return this.nome;
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    },
}

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Ricardo")
console.log(`Seja bem vindo ${pessoa.getNome()}`);

// 3 - Prototype

const text = "adsd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

// 5 - Classes basicas

const cachorro = {
    raca: null,
    patas: 4,
    nose: 1,
    bark: true
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

const lhasa = Object.create(cachorro);
lhasa.raca = "Lhasa Apso";

console.error(pastorAlemao);
console.log(pastorAlemao.patas);
console.log(pastorAlemao.bark);
console.log(lhasa.nose);
console.warn(lhasa.raca);
console.error(lhasa);

// 6 - Functions as classes - conbstruction function

function criarCachorro(nome, raca, nickname){

    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca
    cachorro.patas = 4
    cachorro.nickname = nickname
    cachorro.bark = true

    return cachorro
}

const meuDog = criarCachorro("Chewbacca", "Lhasa Apso", "Chewie")

console.log(meuDog);

const dogHumb = criarCachorro("Amora", "Vira Lata", "Pretinha")
console.log(dogHumb);

// 7 - Funcoes como calasses

// Crio o objeto comecando a const com letra maiuscula para o codigo entender o comando. Nisso eu crio a lista de 
function Cachorro(nome, raca){
    this.nome = nome
    this.raca = raca
}

// apos criada a classe com as props a serem recebidas, eu crio um NEW CLASSE para guardar os valores
const joca = new Cachorro("Joca", "Pinscher")
console.log(joca);

const chewie = new Cachorro ("Chewie", "Lhasa Apso");
console.log(chewie)

// 8 - metodos na funcao construtora
Cachorro.prototype.uivar = function(){
    console.warn('Auuuuuu!!');
}

console.error(Cachorro.prototype)
joca.uivar();


// 9 - class ES6

class CachorroClass{
    constructor(nome,raca){
        this.nome = nome
        this.raca = raca
    }
}

const jack = new CachorroClass("Jack", "Bulldog Ingles");
console.log(jack);

const pulguento =   new CachorroClass("Pulguento", "Labrador");
console.log(pulguento);

// 10 - Mais sobre classes

class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao(){
        console.log(`Este caminhao tem ${this.eixos} eixos e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao (6, "roxa");
const caminhom = new Caminhao (2, "branco");

console.log(caminhom);
console.log(scania);

scania.descreverCaminhao();
caminhom.descreverCaminhao();

// // 11 - Overwrite
class Humano{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const rick = new Humano("Ricardo", 34);

console.log(rick);

// 12 - symbol
class Aviao{
    constructor(marca, turbina){
        this.marca = marca;
        this.turbina = turbina;
    }
}

const asas = Symbol()
const pilotos = Symbol()


Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao ("boeing", 10);

console.log(boeing);
console.log(boeing[asas]); // não é possível acessar por meio de propriede
console.log(boeing[pilotos]);

// 13 - Getters and setters
class Post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTit(){
        return `you're reading ${this.titulo}`;
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("JavaScript", "Aprendendo JS");

console.log(myPost);

console.error(myPost.exibirTit)

myPost.adicionarTags = "javascript, nodejs, react, aprendendo, xirigutago";

console.warn(myPost);