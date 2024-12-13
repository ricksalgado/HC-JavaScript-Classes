// 14 - Slice
// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// const subArray = testeSlice.slice(2,4);
// const subArray2 = testeSlice.slice(2,3 + 3);
// const subArray3 = testeSlice.slice(2);


// console.log(testeSlice);
// console.warn(subArray);
// console.warn(subArray2);
// console.error(subArray3);

// 15-forEach

const familyMembers = [
    {name: "Ana Claudia", category: "Wife"},
    {name: "Eduardo", category: "Brother"},
    {name: "Remulo", category: "Father"},
    {name: "Nilza", category: "Mother"},
    {name: "Domanita", category: "Grand Mother"},
    {name: "Carol", category: "Sister in Law"},
];

familyMembers.forEach((familyMember) => {
    console.log(`This is ${familyMember.name}, my ${familyMember.category}`)
});

// 16- Includes

const birthdayParty = familyMembers.map(familyMember => familyMember.name);

if (birthdayParty.includes("Eduardo")){
    console.log("Eduardo is invited to the Party")
}
if (!birthdayParty.includes("Dimas")){
    console.log("Dimas isn't invited to the Party")
}

console.log(birthdayParty.includes("Eduardo"));
console.log(birthdayParty.includes("Dimas"));

// 20- Split

const nomesAleatorios = "Ana Ricardo Eduardo Carol Chloe Maria Joao Mariana Patricia Luana";

const arrayDeNomes = nomesAleatorios.split(" ");

console.error(arrayDeNomes);
arrayDeNomes.forEach((nominhos) => {
    console.warn(`${nominhos} is here`)
});

// 21 - Join

const nomesDeQuemVem = arrayDeNomes.join(", ");

console.log(nomesDeQuemVem);

const partyItens = ["Cake", "Brigadeiro", "baloons", "Heavy Drugs"];

console.log(`We need to buy ${partyItens.join(", ")}`);

// 22 - Repeat

// const palavra = "Voce será um Dev, ";

// console.log(palavra.repeat(18));

// 26 - JSON

const myJson = '{"name": "Ricardo", "age": 34, "Open to work": true, "skills":["PHP", "JavaScript", "HTML", "CSS"]}';

console.log(myJson);
console.warn(typeof myJson);

const transformJson = JSON.parse(myJson);
console.log(transformJson);
console.log(typeof transformJson);
console.log(transformJson.name);

const backToTheFuture = JSON.stringify(transformJson);
console.error(backToTheFuture);
console.log(typeof backToTheFuture);
