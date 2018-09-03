var apples = 14;
console.log(apples);
console.log('I have ' + apples + ' apples.');

var materials = ['wood', 'metal', 'stone'];
var woods = {
  'elephant': "The world's largest land mammal.",
  'school': "A place of learning.",
  'ice cream': "A delicious milk-based dessert."
};

var num = 16;
if (num > 10) {
  console.log(num + " is greater than 10.");
} else if (num == 10) {
  console.log(num + " is exactly 10.");
} else {
  console.log(num + " must be less than 10.");
}

for (var i = 0; i < 10; i++) {
  console.log("Doing the same thing over and over");
}

var base = 5;
for (var i = 0; i < 20; i++) {
  console.log(num + base);
}

total = 0
for (var i = 0; i < 100; i++) {
  total += num;
}
console.log(total)

for (var i = 3; i <= 15; i++) {
  if (i > 9) {
    console.log("You can get on the rollercoaster.");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  }
}

container = [ 'purse', 'wallet', 'backpack'];
for (var i = 0; i < container.length; i++) {
  console.log(container[i]);
}

function hello_world() {
  console.log("Hello world!")
}
hello_world()

function add(num1, num2) {
  return num1 + num2
}
console.log(add(1,5))
