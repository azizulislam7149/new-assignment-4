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

    