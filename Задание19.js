/*Переписать консольное приложение из предыдущего юнита на классы.*/


class ElectronicStuff { /*Родительский класс с методами, которые включают/выключают прибор из розетки.*/ 
    constructor () {
        this.roomPosition = 'kitchen',
        this.warranty = 2
    }
    getCost(cost) {  /*Метод получения цены в долларах США от указанной в Рублях*/
    let d = cost / 70;
    console.log(`Цена прибора равна ${d} Долларов США`)
    }

    usePower(currentPower) {  /*Метод определения потребляемой мощности, при котором необходимо передать заявленную в паспорте продукта мощность и рассчитать по формуле. Если передан 0 - прибор не включён в розетку)*/
    let i = currentPower * 220;
    if (i === 0) {console.log (`Техника ${this.name} не включена в сеть`)}
    else
    console.log(`Техника ${this.name} включена в сеть и текущая потребляемая мощность равна ${i} Ватт`)     
    }
}

class HasAppAndBluetooth extends ElectronicStuff { /*Класс с методом, которые включает в себя информацию о наличии мобильного приложения для управления устройством и указанием цены за подписку на приложение*/
        constructor(name, subsCost) {
            super()
            this.appAndBluetoth = 'Yes',
            this.costOfsubscription = subsCost,
            this.name = name
        }
    
}

const kettle = new HasAppAndBluetooth('kettle', 0); 
const fridge = new HasAppAndBluetooth('fridge', 20); 

kettle.getCost(2499); /*Цена в рублях*/
kettle.usePower(0); /*фактическая мощность на текущий момент по паспорту продукта, если прибор включён. если не включён - 0*/

fridge.getCost(11799); /*Цена в рублях*/
fridge.usePower(0.5); /*фактическая мощность на текущий момент по паспорту продукта, если прибор включён. если не включён - 0*/

console.log(kettle)
console.log(fridge)