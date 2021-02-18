function car(make, model, year ,owner){

    this.make = make;
    this.model = model;
    this.year = year;
    this.owner =owner;
}

mycar = new car("기아","k-5",2015);


function person(name , age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

rand = new person('rand jonson' ,32, 'Male');


yourcar = new car('현대','아방이','2019',rand);

yourcar.color = 'gray';