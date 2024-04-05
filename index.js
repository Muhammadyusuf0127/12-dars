let str = prompt("Unli harf bor matin kiriting");
let harf = ['a','e','o','u','i',"o'"];
let arr1 =  str.split('')
let son =[]
let son2 = []
for (let i = 0; i < harf.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
        if (arr1[j].toLowerCase()==harf[i]) {
            son++
        }
    }
}
console.log(`Siz kiritgan matn: (${str})`);
console.log(`Siz kiritgan matn ichida: ${son} ta unli harf topdim`);
let arr = [];

function komanda() {
  for (let i = 0; i < Infinity; i++) {
    let str = prompt("Matin kiriting (add, del yoki stop)");

    if (str == "stop") {
      break;
    }

    let str2 = str.split(' ');
    if (str2[0] === 'add') {
      arr.push(str2[1]);
    }else if (str2[0] === 'del' && arr.includes(str2[1])) {
        let index = arr.indexOf(str2[1]);
        arr.splice(index, 1);
      }
  }
}

komanda();
console.log(arr);