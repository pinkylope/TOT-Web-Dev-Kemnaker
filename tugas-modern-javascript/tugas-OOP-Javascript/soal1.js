// SOAL 1 A ========================================
console.log('=========== SOAL 1 A ===========');
class Animal {
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get name(){
        return this._name;
    }
    set name(x){
        return this._name = x;
    }
    get legs(){
        return this._legs;
    }
    set legs(x){
        return this._legs = x;
    }
    get cold_blooded(){
        return this._cold_blooded;
    }
    set cold_blooded(x){
        return this._cold_blooded = x;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs)

// SOAL 1 B ========================================
console.log("=========== SOAL 1 B ===========");

class Ape extends Animal{
    constructor(name){
        super(name);
        this.legs = 2;
    }
    yell(){
        console.log("Auooo");
    }
}

class Frog extends Animal{
    constructor(name){
        super(name);
        this.legs = 2;
    }
    jump(){
        console.log("Hop Hop");
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)