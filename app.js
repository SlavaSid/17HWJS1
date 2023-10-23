// функции-конструкторы

const array = new Array();
console.log(array);

const now = new Date();
console.log(now);

function Auto(color, year){
// this = {}(неявно)

this.color = color;
this.year = year;
this.stop = function(){
    console.log(`${this.color} auto stop`);
}
this.move = function(){
    console.log(`${this.color} auto moves`);
}
// return (неявно, работает само)




}

const audi = new Auto('red', 2010);
console.log(audi);
audi.move();//red auto moves
audi.stop();

const tayota = new Auto('gray', 2012);
console.log(tayota);
tayota.move();

// try - catch

const newFunc = () => {
    console.log('hello');
    //console.log(c);
    throw new Error('Собственный текст описания ошибки')
}





try{
    newFunc();

} catch(error) {
console.error(error.message);
}

// console.log('текст после выполнения функции');

// Задание
// Используяю fetch отправить запрос на несуществующий урл https://todoappexamplejs.herokuapp.com/no-such-url.json по нажатию на кнопку.
// Отловить и вывести в консоль ошибку при помощи .catch(err => {})

// fetch(url)
//   .then()
//   .then()
//   .catch((err) => {});
const url = 'https://jsonplaceholder.typicode.com/todos';
const button = document.querySelector('button');

button.addEventListener('click', () => {
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error('Статус ответа не тот, который ожидается (не 200)')
        }
    
       return response.json()
    })
    .then(json => console.log(json))
    .catch(error => {
        console.error(error.message);

    })
})
 console.log('текст после выполнения функции');

 // Async Await


//  async function myFunction() {
//     //...
    
//  }
 const myFunct = async () => {
    //return 'hello'
    throw new Error('my text');
 }
 myFunct().then(info => console.log(info))
 .catch(error => console.log(error));


 const fetchJSON = (url) => {
     return fetch(url).then(response => response.json())
 }
 //fetchJSON(url).then((data) => console.log(data));
 button.addEventListener('click', async () => {
    
    const response = await fetch(url); 
    const info = await response.json();
    console.log(info);
 })