function soma(a: number, b: number) {
    return a + b
}
soma (1, 2)

//types 
//interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;

}

const animal: IAnimal = {
    nome: 'elefante',
    tipo: "terrestre",
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}db`)
}

const felino: IFelino = {
    nome: 'leão',
    tipo: "terrestre",
    visaoNoturna: true,
}