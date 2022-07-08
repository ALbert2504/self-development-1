const car = {
  wheels: 4,

  init() {
    console.log(`I've got ${this.wheels} wheels and my owner is ${this.owner}`);
  }
};

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Albert',
  }
});

console.log(carWithOwner.__proto__ === car);
// console.log(carWithOwner instanceof car);

carWithOwner.init();