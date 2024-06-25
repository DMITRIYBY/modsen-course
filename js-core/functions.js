// function repeatOperation(operation, interval) {
//     // Проверяем, что операция является функцией
//     if (typeof operation !== 'function') {
//       throw new Error('Первый аргумент должен быть функцией');
//     }
  
//     // Проверяем, что интервал является числом
//     if (typeof interval !== 'number' || interval <= 0) {
//       throw new Error('Интервал должен быть положительным числом');
//     }
  
//     // Используем setInterval для многократного выполнения операции
//     const intervalId = setInterval(operation, interval);
  
//     // Возвращаем функцию для остановки выполнения операции
//     return function stop() {
//       clearInterval(intervalId);
//     };
//   }
  
//   // Пример использования
//   const operation = () => {
//     console.log('Операция выполнена в', new Date());
//   };
  
//   // Запускаем операцию каждые 2 секунды
//   const stopRepeating = repeatOperation(operation, 2000);
  
//   // Останавливаем выполнение операции через 10 секунд
//   setTimeout(() => {
//     stopRepeating();
//     console.log('Операция остановлена');
//   }, 10000);
  

function intervalOperations(){
  
}