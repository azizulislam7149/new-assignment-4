function calculateTax(income, expense){
    if(income <0 || expense < 0 || expense>income){
        return 'invalid Input'
    }

    let savings = income-expense;
    let tax = savings * 0.2;
    return tax;
}

console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 1500));
console.log(calculateTax(6000, -1500));

 function sendNotification(email){
if(email.split('') .indexOf('@')=== -1){
    return 'Invalid Input'
}
// if(email.split('') .includesOf('@')=== false){
//     return 'Invalid Input'
// }
let emailArr = email.split('@');
let notification =`${emailArr[0]} sent you an email from ${emailArr[1]} `
return notification
 } 
 
 console.log(sendNotification ('zihad@gmail.com'));
 console.log(sendNotification ('farhan34@yaho.com'));
 console.log(sendNotification ('nadim.name@yaho.com'));
 console.log(sendNotification ('fahim234.hotmail.com'));
 console.log(sendNotification ('sadia8cloud.com'));

 function checkDigit(name){
    if(typeof name !== 'string'){
        return 'Invaltd Input'
    }
    let nameArr = name.split('')
    for(let char of nameArr){
        if(!isNaN(char)){
            return true
        }
    }
    return false
 }
 console.log(checkDigit('raj123'));
 console.log(checkDigit('sumon'));
 console.log(checkDigit('name2024'));
 console.log(checkDigit('!@'));
 console.log(checkDigit(['Raj']));