const normalPerson = {
    firstName : 'Rahim',
    lastName : 'Uddin',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}

// normalPerson.chargeBill(150);
// normalPerson.chargeBill(500);
// normalPerson.getFullName();
// console.log(normalPerson.salary);





const heroPerson = {
    firstName : 'Hero',
    lastName : 'Balam',
    salary : 25000
}
const frindlyPerson = {
    firstName : 'Hero',
    lastName : 'Salam',
    salary : 30000
}

// normalPerson.chargeBill();

const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(2000);
heroBillCharge(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const frindlyBillCharge = normalPerson.chargeBill.bind(frindlyPerson);
frindlyBillCharge(5000);
frindlyBillCharge(2000);
console.log(frindlyPerson.salary);
