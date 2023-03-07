// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) /2;
  return area;
}

// Desafio 3
function splitSentence(a) {
  let b = a.split(/[\s,]+/)
    return b;
  
}

// Desafio 4
function concatName(a) {
  let primeiro = a[0];
  let ultimo = a.slice (-1)[0];
  return ultimo + ", " + primeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let soma1 =  wins * 3;
  let soma2 = ties * 1;
  return soma1 + soma2;

}

// Desafio 6
function highestCount(a) {
  let high = Math.max(...a);
  let count = 0;
  //console.log(high);
  for (let index = 0; index < a.length; index += 1) {
    let compare = a[index];
      if (compare === high) {
        count += 1;
      } 
      //console.log(count);
  }
  return count; 
} 
//highestCount([7, 8, 7, 89, 4 ,89, 89,])

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let PosCat1 = Math.abs(cat1 - mouse);
  let PosCat2 = Math.abs(cat2 - mouse);
  let Result = ' ';

  if (PosCat1 > PosCat2) {
    Result = 'cat2';

  } else if (PosCat2 > PosCat1) {
    Result = 'cat1';

  } else {
    Result = 'os gatos trombam e o rato foge';
    
  }
  return Result;
}

// Desafio 8
function fizzBuzz(a) {
  let iten = [];

  for (let index = 0; index < a.length; index++) {

    if (a[index] % 3 === 0 && a[index] % 5 === 0) {
      iten.push('fizzBuzz');

    } else if (a[index] % 5 === 0) {
      iten.push('buzz');

    } else if (a[index] % 3 === 0) {
      iten.push('fizz');

    }else{
      iten.push('bug!');
      
    } 
  } return iten;
}

// Desafio 9
function encode(a) {
 //let a = ['a', 'e', 'i', 'o', 'u']
 //let b = ['1', '2', '3', '4', '5']
   // .replace ('a', '1')
  // .replace ('e', '2')
  // .replace ('i', '3')
  // .replace ('o', '4')
  // .replace ('u', '5')
      return a
      .replace (/a/g, '1')
      .replace (/e/g, '2')
      .replace (/i/g, '3')
      .replace (/o/g, '4')
      .replace (/u/g, '5');

}
function decode(a) {
  return a
    .replace (/1/g, 'a')
    .replace (/2/g, 'e')
    .replace (/3/g, 'i')
    .replace (/4/g, 'o')
    .replace (/5/g, 'u');
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
