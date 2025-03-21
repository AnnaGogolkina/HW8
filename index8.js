// задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort(function(a, b) {
     return a.age - b.age;
 }))

//задание 2
function isPositive(num){
    return num > 0
}

function isMale (prop){
    return prop.gender === 'male'
}

function filter(array, callback){
    const resultArray = []
    array.forEach(element => {
        if(callback(element)){
        resultArray.push(element)
        }
    });

    return resultArray

}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleObject = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopleObject, isMale)); 

//задание 3
let secondsPassed = 0;  // Счётчик прошедших секунд

// Функция для вывода текущей даты
function displayCurrentDate() {
  const currentDate = new Date();  // Получаем текущую дату
  console.log(currentDate.toLocaleString());  // Выводим дату в читаемом формате
}

// Каждые 3 секунды выводим текущую дату
const intervalId = setInterval(() => {
  displayCurrentDate();
  secondsPassed += 3;
  
  // Если прошло 30 секунд, выводим сообщение и останавливаем выполнение
  if (secondsPassed >= 30) {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
  }
}, 3000);  // Интервал 3000 миллисекунд (3 секунды)

//задание 4
function delayForSecond(callback) {
  // Код писать можно только внутри этой функции
 callback();
}
setTimeout(()=>{
  delayForSecond(function () {
    console.log('Привет, Глеб!');
   })
}, 1000)

//задание5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) {  cb(); }
  }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
  console.log('Привет, ${name}!');
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi ('Глеб'))