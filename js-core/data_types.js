function compareObjects(obj1, obj2) {
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
      }
      for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
          if (!obj2.hasOwnProperty(key)) {
            return false;
          }
          if (!compareObjects(obj1[key], obj2[key])) {
            return false;
          }
        }
      }
      return true;
    } else {
      return obj1 === obj2;
    }
  }
  
  const objA = {
    name: 'Dmitriy',
    age: 20
  };
  
  const objB = {
    name: 'Alex',
    age: 25
  };
  
  const objC = {
    name: 'Dmitriy',
    age: 20
  };
  
  console.log(compareObjects(objA, objB)); // Output: false
  console.log(compareObjects(objA, objC)); // Output: true
  