/*Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 

Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

==========================================================*/


function ElectronicStuff () {  /*Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.*/   
    this.roomPosition = 'kitchen',
    this.warranty = 2
}

ElectronicStuff.prototype.getCost = function(cost) { /*Метод получения цены в долларах США от указанной в Рублях*/
    let d = cost / 70;
    console.log(`Цена прибора равна ${d} Долларов США`)
}
ElectronicStuff.prototype.usePower = function(currentPower) { /*Метод определения потребляемой мощности, при котором необходимо передать заявленную в паспорте продукта мощность и рассчитать по формуле. Если передан 0 - прибор не включён в розетку)*/
    let i = currentPower * 220;
    if (i === 0) {console.log (`Техника ${this.name} не включена в сеть`)}
    else
    console.log(`Техника ${this.name} включена в сеть и текущая потребляемая мощность равна ${i} Ватт`)    
}
function HasAppAndBluetooth (name, subsCost) { /*Функция, которая включает в себя информацию о наличии мобильного приложения для управления устройством и указанием цены за подписку на приложение*/
    this.appAndBluetoth = 'Yes',
    this.costOfsubscription = subsCost,
    this.name = name
}

HasAppAndBluetooth.prototype = new ElectronicStuff()


const kettle = new HasAppAndBluetooth('kettle', 0); /*Передаём (`название`, цена подписки)*/
const fridge = new HasAppAndBluetooth('fridge', 20); /*Передаём (`название`, цена подписки)*/

kettle.getCost(2499); /*Цена в рублях*/
kettle.usePower(0); /*фактическая мощность на текущий момент по паспорту продукта, если прибор включён. если не включён - 0*/

fridge.getCost(11799); /*Цена в рублях*/
fridge.usePower(0.5); /*фактическая мощность на текущий момент по паспорту продукта, если прибор включён. если не включён - 0*/

console.log(kettle)
console.log(fridge)
