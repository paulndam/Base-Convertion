function Stack () {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.theclear = theclear;
}

function push (element) {
  return (this.dataStore[this.top++] = element);
}
function pop () {
  return this.dataStore[this.top--];
}
function peek () {
  return this.dataStore[this.top - 1];
}
function length () {
  return this.top;
}
function theclear () {
  this.top = 0;
  this.dataStore.length = 0;
}

// function for converting a number to any of the bases 2 through 9

function Base (number, base) {
  var theStack = new Stack ();

  do {
    theStack.push (number % base);
    number = Math.floor ((number /= base));
  } while (number > 0);

  var convert = '';
  while (theStack.length () > 0) {
    convert += theStack.pop ();
  }
  return convert;
}

var number = 32;
var base = 2;

var newNumber = Base (number, base);
console.log (`${number} converted to base ${base} is ${newNumber}`);
