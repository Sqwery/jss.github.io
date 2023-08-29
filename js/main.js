function checkAge(age) {
    if (!isNaN(age) && age >= 0) {
    if (age >= 18) {
    return "Впускаем";
    } else {
    return "Выгоняем";
    }
    } else {
    return "Дебил";
    }
    }
    
    let age = parseInt(prompt("Введите возраст:"));
    let result = checkAge(age);
    console.log(result);

    
   

    function calculate(a, b) {
    console.log(`Сложение a + b: ${a + b}`);
    console.log(`Вычитание a - b: ${a - b}`);
    console.log(`Умножение a * b: ${a * b}`);
    console.log(`Деление a / b: ${a / b}`);
    console.log(`Возведение a в степень b: ${Math.pow(a, b)}`);
    console.log(`Остаток от деления a % b: ${a % b}`);
    }
    
    let a = parseInt(prompt("Введите число a:"));
    let b = parseInt(prompt("Введите число b:"));
    calculate(a, b);

    
  
    function maxName(...names) {
    let longestName = "";
    for (let name of names) {
    if (name.length > longestName.length) {
    longestName = name;
    }
    }
    return longestName;
    }
    
    let names = ['Alex', 'George', 'Michael'];
    let resultt = maxName(...names);
    console.log(result);
    
    function findMin(...args) {
    let minValue = Infinity;
    for (let item of args) {
    if (Array.isArray(item) || typeof item === 'object') {
    item = Math.min(...Object.values(item));
    }
    if (item < minValue) {
    minValue = item;
    }
    }
    return minValue;
    }
    
    let result1 = findMin(1, 2);
    let result2 = findMin([1, 2]);
    let result3 = findMin({a: 1, b: 2});
    let result4 = findMin({a: 1, b: 2}, {a: 11, b: 12});
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
   
    function adjustProportions(value, multiplier) {
    let result = value.map(x => x * multiplier);
    return result;
    }
    

    let values = [1, 2, 3, 4];
    let multiplier = 2;
    let results = adjustProportions(values, multiplier);
    console.log(results);

    
