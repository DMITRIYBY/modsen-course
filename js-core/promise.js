function Operation1() { 
    return new Promise((resolve, reject) => {
        console.log('Загружаем данные...');
        setTimeout(() => {
          resolve('Данные загружены')  
        }, 1000);
    });
}

function Operation2(prevResult) { 
    return new Promise((resolve, reject) => {
        console.log('Операция 1 завершена со статусом: ', prevResult);
        setTimeout(() => {
          resolve('Данные обработаны.')  
        }, 500);
    });
}

function testOperations() {
    Operation1()
        .then((result1) => {
            return Operation2(result1);
        })
        .then((result2) => {
            console.log('Результат операций: ',result2);
        })
        .catch((err) => {
            console.log('Ошибка: ', err)
        })
}

console.log(testOperations());