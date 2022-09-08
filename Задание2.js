/*Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

const AnyObject = {

    FisrtOpt: 'Something',
    SecondOpt: 'SomeElse',
    ThirdOpt: 8,
    FourthOpt: "Why3rdOptisJustaNumber"
}

function DoesObjectHasAstring (obj, key) {
    if (Object.keys(obj).includes(key)) {return true;}
    else {return false;}
    
    
}

console.log(DoesObjectHasAstring(AnyObject, "FisrtOpt"))
