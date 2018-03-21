class cats{
    constructor(name, weight,tail){
        this.name=name;
        this.weight=weight;
        this.tail=tail;
    }
}

var cat1= new cats("sansa", 30, true);
var cat2= new cats( "timmy", 250, true);
var cat3= new cats("ricky", 8, true )

console.log(`This is ${cat1.name} and she is ${cat1.weight} and it is ${cat1.tail} that she has a tail`);
console.log(`This is ${cat2.name} and she is ${cat2.weight} and it is ${cat2.tail} that she has a tail`);
console.log(`This is ${cat3.name} and she is ${cat3.weight} and it is ${cat3.tail} that she has a tail`);
