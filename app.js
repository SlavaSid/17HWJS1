// 1. Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес. С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые другие).  shops. В итоге должен получиться массив объектов типа:

// [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]

// 2. С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:

// ['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']


const shops = [];
function Sell (title, address){
this.title = title;
this.address = address;
shops.push(this);
}
const green = new Sell('Green', 'ул. Петра Мстиславца 11, Минск');
const proStore = new Sell('ProStore', 'пр-т Дзержинского, 126, Минск');

const newArr = shops.map(item => item.address);



// Задание 2

// Напишите асинхронную функцию, которая получает список пользователей с сервера jsonplaceholder. Выведите список пользователей на страницу. В задании используйте синтаксис async-await и предусмотрите обработку ошибок.
const url = 'https://jsonplaceholder.typicode.com/users';
const ul = document.querySelector('.addLi');
const newFunc = async () => {
    try{
    const response = await fetch(url); 
    if(!response.ok){
throw new Error ('статус-код не 200');
    }
    
    const info = await response.json();
    info.forEach(element => {
    ul.innerHTML += `<li>${element.name}</li>`;
    });
    }catch(error) {
        console.error(error.message);
        }
};

   newFunc();
 