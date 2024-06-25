class UserError extends Error{
    constructor(message){
        super(message);
        this.name = 'UserError';
    }
}

function checkNumber (num) {
    if(Number.isInteger(num)){
        console.log('Число целочисленное');
    } else{
        throw new UserError("Ошибка: число не является целочисленным");
    }
}

try{
    let number = checkNumber(5.6); //Вызовет ошибку
} catch(err){
    console.log(err.message);
}