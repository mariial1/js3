// - створити функцію яка виводить масив
//
// let numbers = [22, 765, true, [56, false, 'Mariia'], 'matilda', null, 911];
// function privatNumbers (arr) {
//     console.log(arr);
// }
// privatNumbers(numbers)

// - створити функцію яка заповнює масив рандомними числами
// та виводить його. Для виведення використати попвередню функцію.
//
// function newNbmbers (length, min, max){
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.random()*(max-min)+min);
//     }
//     console.log(arr)
// }
// let arr2 =newNbmbers(5, 3, 53)

// - створити функцію яка приймає три числа
// та виводить та повертає найменьше.
//1)
// function retNumber (x, y, z){
//     console.log(x, y, z);
//     let numb = Math.min(x, y, z)
//     console.log(numb);
// }
// retNumber(24, 78, 43);
//
// 2)
// function retNumber (x, y, z){
//     console.log(x, y, z);
//     let numb = Math.min(x, y, z);
//     return numb;
// }
// let numb = retNumber(244, 78, 43);
//
// console.log(numb);

// - створити функцію яка приймає три числа
// та виводить та повертає найбільше.
//1)
// function retNumber (x, y, z){
//     console.log(x, y, z);
//     let numb = Math.max(x, y, z)
//     console.log(numb);
// }
// retNumber(24, 78, 43);
//
//2)
// function retNumber (x, y, z){
//     console.log(x, y, z);
//     let numb = Math.max(x, y, z);
//     return numb;
// }
// let numb = retNumber(244, 788, 43);
//
// console.log(numb);

// - створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше
// 1)
// function retNumber (){
//     let min = Math.min();
//     let max = Math.max();
//     console.log(min);
//     return max;
// }
// retNumber ();
// console.log(max);
//
// 2)
// function retNumber (){
//     console.log(arguments);
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const z of arguments) {
//         if (z > max) max = z;
//         if (z < min) min = z;
//     }
//     console.log(min);
//     return max;
// }
// let max = retNumber (9, 2, 4, 16, 7, 8);
// console.log (max);

// - створити функцію яка виводить масив
//
// function funArr(arr){
//     console.log(arr);
// }
// let numb = ['love', true, 125, 777, 'you'];
// funArr (numb);

// - створити функцію яка повертає найбільше число з масиву
//
// function funArr(arr){
//     console.log(arr);
//     let numb = arr[0];
//     for (const xxx of arr) {
//         if(numb < arr) numb = arr
//     }
//     return numb;
// }
// let numb1 = funArr([92, 833, 125, 77, 773]);
//
// console.log(numb1);//не тот результат...

// - створити функцію яка повертає найменьше число з масиву

// - створити функцію яка приймає масив чисел
// та складає значення елементів масиву та повертає його.
//
// function sumNumber (arr){
//     let sum = 0;
//     for (const all of arr) {
//         sum += all;
//     }
//     return sum;
// }
// let sumNumber1 = sumNumber([4, 6, 7, 3]);
//
// console.log(sumNumber1);


// - створити функцію яка приймає масив чисел
// та повертає середнє арифметичне його значень.
//
// function middleNumber (arr){
//     let middle = 0;
//     for (const all of arr) {
//         middle += all;
//     }
//     return middle/arr.length;
// }
// let middleNumber1 = middleNumber([4, 6, 7, 3]);
//
// console.log(middleNumber1);

// - Створити функцію яка приймає масив будь яких объектів,
// та повертає значення кількості об'єктів в масиві
//
// let books = [{name:`foreword`, pageCount: 14},
//     {name:`boyWhoLived`, pageCount: 18},
//     [3, 4, 77],
//     {name:`vanishingGlass`, pageCount: 13},
//     true,
//     {name:`lettersFromNoOne`, pageCount: 17},
//     {name:`afterword`, pageCount: 19}]
//
// function countObj (arrObj) {
//     let Obj = 0;
//     for (let count of arrObj) {
//         if (typeof count === 'object'){
//             Obj++;
//         }
//     }
//     return Obj;
// }
// let number = countObj(books);
// console.log(number)

// - Створити функцію яка приймає масив будь яких объектів,
// та повертає загальн кількість полів в них
//
// let books = [{name:`foreword`, pageCount: 14},
//     {name:`boyWhoLived`, pageCount: 18},
//     [3, 4, 77],
//     {name:`vanishingGlass`, pageCount: 13},
//     true,
//     {name:`lettersFromNoOne`, pageCount: 17},
//     {name:`afterword`, pageCount: 19}]
//
// function countObj (arrObj) {
//     let Obj = 0;
//     for (let count of arrObj) {
//         if (typeof count === 'object') {
//             for (let key in count) {
//                 Obj++;
//             }
//         }
//     }
//     return Obj;
// }
// let number = countObj(books);
// console.log(number)

// - створити функцію  яка скаладає значення елементів з
// однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// - *** приймає масив та число "i", та міняє місцями
// об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи
// з значенням 0 у кінець маисву. Зберігаючи при цьому
// порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
//
// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
//
//
//
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
//
// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
//
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========