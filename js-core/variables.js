function someFunction () {
    if(true){
        let a = 5;
        var b = 10;
        const c = 15;   

        console.log('let a from block: ',a)
        console.log('var  b from block: ',b)
        console.log('const c from block: ', c)
    }

    // console.log('let a from func: ',a) ошибка видимости тк блочная область видимости
    console.log('var b from func: ',b)
    // console.log('const c from func: ',c) ошибка видимости тк блочная область видимости
}

someFunction();

//все операции ниже вызывают ошибки ввиду того, что переменные находятся внутри блока в функции. 
// console.log(a);
// console.log(b);
// console.log(c);
