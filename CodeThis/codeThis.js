// How to console
//❌
var foo = { type: 'fruit', cost: 3000, element: '🍎' };
var bar = { type: 'protein', cost: 2500, element: '🥩' };
var baz = { type: 'vegetable', cost: 1500, element: '🍆' };

// console.log(foo);
// console.log(bar);
// console.log(baz);


















//✅
//Computed property names
// console.log({ foo, bar, baz });
// console.table([foo, bar, baz]);






















//Console.time ✅
// console.time('Time');

// let i = 0;
// while (i <= 100000) { i++; }

// console.timeEnd('Time');
















//console.trace
const saludar = (cliente) => {
  console.log('Hola, por aqui a la orden');

  console.trace('Ya salude al cliente %s', cliente);
};

// saludar('Diego');
// saludar('Maria');
// saludar('Carlos');
// saludar('Danilo');
















//template literals
//❌
const maria = {
  name: 'Maria 👩',
  age: 25,
  profession: 'Doctor 🩺',
};

function hiClient(client) {
  const {name, age, profession} = client;

  return `Hi ${name}, your age is ${age} and your profession is ${profession}`;
}

// console.log(hiClient(maria));
















//✅

function hiClientPure(str, name, age, profession) {
  const oldYoung = age > 30 ? 'old' : 'young';

  return `${str[0]}${name}, you are ${oldYoung} and your profession is ${profession}`;
}

const str = hiClientPure`Hi ${maria.name}${maria.age}${maria.profession}`;

// console.log(str);

































//How to Conditions
//❌

const eatOrNotEat = (element) => {
  if (element === 'fruit' || element === 'vegetable' || element === 'protein') {
    //eat
    console.log(element, 'eat');
  } else if (element === 'wooden' || element === 'bed') {
    //no eat
    console.log(element, 'no eat');
  }
};

// eatOrNotEat('fruit');
// eatOrNotEat('wooden');














const betterEatOrNotEat = (element) => {
  switch (element) {
    case 'fruit':
    case 'vegetable':
    case 'proteing':
      console.log(element, 'eat');
      break;
    case 'wooden':
    case 'bed':
      console.log(element, 'no eat');
    default:
      break;
  }
};

// betterEatOrNotEat('fruit');
// betterEatOrNotEat('bed');







const eatable = [
'fruit', 'vegetable', 'protein','rice'
];
const notEatable = [
'wooden', 'bed'
];





//✅ → Array
const theBestEatOrNotEat = (element) => {

  if (eatable.includes(element)) {
    console.log(element, 'eat');
  } else if (notEatable.includes(element)) {
    console.log(element, 'not eat');
  }
};

// theBestEatOrNotEat('vegetable');
// theBestEatOrNotEat('bed');

























//How To Switch case
//❌
const switchCase = (element) => {
  switch (element) {
    case 'value1':
      //code 1
      console.log('code 1');
      break;
    case 'value2':
      //code 2
      console.log('code 2');
      break;
    case 'value3':
      //code 3
      console.log('code 3');
      break;
    case 'value4':
      //code 4
      console.log('code 4');
      break;

    default:
      console.log('code default');
      break;
  }
};

// switchCase('value1');
// switchCase('value2');
// switchCase('value3');
// switchCase('value4');
// switchCase('value5');
















//✅
const optionsCase = (element) => {
  const options = {
    ['value1']: 'code 1',
    ['value2']: 'code 2',
    ['value3']: 'code 3',
    ['value4']: 'code 4',
  };

  return options[element] || 'code default';
};

// console.log(optionsCase('value1'));
// console.log(optionsCase('value2'));
// console.log(optionsCase('value3'));
// console.log(optionsCase('value4'));
// console.log(optionsCase('value5'));













//Function calling
//❌
function useCreditCard(){
  console.log('Credit Card 💳');
}

function useMoney() {
  console.log('Money 💵');
}

var hasCreditCard = true;


// if (hasCreditCard) {
//   useCreditCard();
// }else{
//   useMoney();
// }














//✅
// (hasCreditCard ? useCreditCard : useMoney)();

