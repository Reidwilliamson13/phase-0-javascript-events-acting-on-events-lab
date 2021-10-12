let myAge = 12;
if (myAge >= 18 && myAge <= 30) {
  console.log("Yipee, i'm going on vacation!");
} else {
  console.log("Ok, go on!");
}

let rate = 1;
if (rate === 1 && rate <= 3) {
  console.log("Yes, passing!!!");
} else {
  console.log("Uh oh!");
}

let ratedRvAge = 19;
if (ratedRvAge < 18 || ratedRvAge > 80) {
  console.log("No can do");
} else {
  console.log("See you there");
}

function addTen(anyNumber) {
  let result;
  if (anyNumber > 8) {
    result = anyNumber + 10;
  }
  return result;
}

console.log(addTen(addTen(9)));
console.log(addTen(8));
console.log(addTen(18));

function addThree(aNumbr) {
  let result;
  if (aNumbr > 5) {
    result = aNumbr + 3;
  }
  return result;
}

console.log(addThree(addThree(6)));
console.log(addThree(72));
console.log(addThree(702));

function divideByTwo(somNum) {
  let result;
  if (somNum > 4 || somNum < 33) {
    result = somNum / 2;
  }
  return result;
}

console.log(divideByTwo(20));
console.log(divideByTwo(15));

function multiplyThisTwice(somNum) {
  let result;
  if (somNum >= 5) {
    result = somNum * 2;
  }
  return result;
}

console.log(multiplyThisTwice(88));

function addThirty(somNumr) {
  let result;
  if (somNumr > 4 && somNumr < 8) {
    result = somNumr + 30;
    return result;
  } else {
    return "Not today";
  }
}
console.log(addThirty(7));

function subtractTwenty(soNubr) {
  let result;
  if (soNubr > 5) {
    result = soNubr - 20;
    return result;
  } else {
    return "no";
  }
}
console.log(subtractTwenty(9));
console.log(subtractTwenty(4));
console.log(subtractTwenty(5));

function multFive(somNumr) {
  let result;
  if (somNumr === 4) {
    result = somNumr * 5;
    return result;
  } else {
    return "Hey there";
  }
}
console.log(multFive(multFive(4)));
console.log(multFive(4));

function plusTwelve(somNumr) {
  let result;
  if (somNumr === 14 || somNumr === 22) {
    result = somNumr + 12;
    return result;
  } else {
    return somNumr + 3;
  }
}
console.log(plusTwelve(plusTwelve(14)));

function plusTwo(numbr) {
  let result;
  if (numbr >= 3) {
    result = numbr + 2;
    return result;
  } else {
    return numbr * 4;
  }
}
console.log(plusTwo(2));

function timesTwo(somenumr) {
  let result;
  if (somenumr > 8) {
    result = somenumr + 3;
    return result;
  } else {
    return somenumr - 3;
  }
}

console.log(timesTwo(8));

function sayhi() {
  console.log("hello world");
}
sayhi();

function sayhello(name) {
  console.log("Hello how ya doing, " + name);
}
sayhello("Jaymey?");

const doEquation = function (num1, num2) {
  console.log(num1 + num2);
};
doEquation(5, 4);
doEquation(22, 3);

const subtractB = function (num1, num2) {
  return num1 - num2;
};
subtractB(33, 1);

const addMe = function (num1, num2) {
  return num1 + num2;
};
addMe(4, 5);

const twoBytwo = function (a, b) {
  return a * b;
};
twoBytwo(9, 5);

const diviUp = twoBytwo(2, 2);

const divid = function (ab, ac) {
  return ab / ac;
};

const divresult = divid(12, 6);

let table = 3;
let dino = 4;
dino = 9;
table = 5;
console.log(dino + table);

