var square = (x) => {
  return x * x;
};

var squareExpression = (x) => x * x;

console.log(square(5));
console.log(squareExpression(9));

var user = {
  name: 'Tommy',
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hi. I'm ${this.name}`);
    console.log(arguments);
  },
  sayHiAltAlt: function() {
    console.log('Alt Alt Alt');
  }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);
