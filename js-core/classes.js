class Human {
    constructor(firstname, age, country){
        this.firstname = firstname;
        this.age = age;
        this.country = country;
    }

    info(){
        return `Привет, меня зовут ${this.firstname}, мне ${this.age} и я из ${this.country}.`;
    }
}

const person1 = new Human('Дмитрий', 20, 'Беларусь');
const person2 = new Human('Александр', 25, 'Россия');

console.log(person1.info());
console.log(person2.info());