/* 
  POLYMORPHISM
  Arv mellan klasser / ändrar på saker och funktioner
*/

class Monster {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`The Monster ${this.name} Is Hitting You!`);
  }
}

class FireMonster extends Monster {
  constructor(name) {
    super(name);
  }

  attack() {
    super.attack();
    console.log(`${this.name} Is Also Throwing A Fireball At You.`);
  }
}

class WaterMonster extends Monster {
  constructor(name) {
    super(name);
  }

  waterAttack() {
    console.log(`The Monster ${this.name} Is Sending A Large Wave Of Water Right At You.`);
    super.attack();
  }
}

class StoneMonster extends Monster {
  constructor(name) {
    super(name);
  }
}

const fm = new FireMonster('blazor');
const wm = new WaterMonster('Wateruz');
const sm = new StoneMonster('Stoner');
// fm.attack();
// wm.attack();
// wm.waterAttack();
// sm.attack();


class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  priceInclVat() {
    return this.price * 1.25;
  }
}


class Food extends Product {
  constructor(name, price) {
    super(name, price);
  }

  sale(nr) {
  let newSum = super.priceInclVat() - nr ;    
  console.log(newSum);
  }
}

const f1 = new Food('Snickers', 100);

console.log(f1.priceInclVat());
f1.sale(20);
console.log(f1.price);
