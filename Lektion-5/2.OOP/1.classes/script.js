//Classes 

class Prouct {
  constructor(name, desc, price, inStock) {
    this.name = name;
    this.description = desc;        // behöver inte skriva samma namn här blir description namnet för variablen
                                    //  i objektet som vi skapar med klassen.
    this.price = price;
    this.inStock = inStock;
  }

  priceInclVat() {
    this.price = this.price * 1.25;
    return this
  }

  sale(amount, cb) {
    let sum = this.price - amount
    if(cb)
      cb(sum)
    else
      return sum
  }
}

const product1 = new Prouct('product 1', 'this is a product', 200, true);
console.log(product1.priceInclVat().sale(35));
console.log(product1);

product1.sale(25, (sum) => {
  console.log('den nya summan blir '+ sum)
});

