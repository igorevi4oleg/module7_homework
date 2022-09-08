/*Написать функцию, которая создает пустой объект, но без прототипа.*/

function CreateEmptyObject () {
    return Object.create(null)
}

const NewEmptyOnject = CreateEmptyObject();
console.log (NewEmptyOnject);
