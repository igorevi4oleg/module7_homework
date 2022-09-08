/*Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

const PhoneDescription = {
    Name: 'Samsung S',
    SecName: 'Galaxy',
    Series: 21,
    Price: '1500 dollars USA',
    Color: 'Black'
}

function GetObjectandShowKeys3 (arg) {
    for (var key in PhoneDescription) {
        if(PhoneDescription.hasOwnProperty(key))
        console.log(key + ':' + PhoneDescription[key]);
    }
}

GetObjectandShowKeys3 (PhoneDescription)