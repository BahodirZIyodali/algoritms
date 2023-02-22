
// task easy 1
function wordCount(num) {
let nums=['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
let str =nums[+num]

let newStr = ''

for (let i=0 ; i < num ;i++){
  newStr += str
}

console.log(newStr)

}
wordCount('4')
// task easy 1 second way
let nums=['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
let num1=2
let str =nums[+num]
let newStr = ''
for(let i = 0; i < num1;i++){
  newStr += str
}
console.log(newStr)

// task easy 2
function doubleChar(str) {
    let sum = [];
    for (let i = 0; i < str.length; i++){
     let result = (str[i]+str[i]);
     sum  += result;
    }

    console.log(sum)

  }
doubleChar ("Hello")


//task easy 3


function isValid(text){
  let isBoolen = false;
  for(let i = 0; i < text.length; i++){
      if(+text[i]){
        return false;
      } else{
          isBoolen = true;
      }
  }
  if(isBoolen)
  return true;
}
console.log(isValid('ssa'));

//task easy 4
function revarseText(str){
let res=''
 for(let i=str.length-1; i>=0; i--){
    res += str[i]
}
  console.log(res)

}
revarseText('salom')
//task easy 5
function checkNumber(text){
  let num = ''
  for(let i = 0; i < text.length; i++){
      if(+text[i]){
          num += text[i]
      }
  }
  console.log(num);
}
checkNumber("da122143124fvgdfggfgb")

//task easy 6
function checkString(str1, str2) {
  let newStr=''
if(str1.length>str2.length){
for(let i=0; i<str1.length-1; i++){
 newStr +=str1[i].toUpperCase()+str2
}
}
else if(str1.length<str2.length){
  for(let i=0; i < str2.length-1; i++){
    newStr +=str2[i].toUpperCase() + str1
   }
}
console.log(newStr)
}
checkString('hello','hi')

// task middle 1
function ChangeZeroToOne(text){
    let res=''
    for (let i = 0; i < text.length; i++) {
        if(text[i]=='1'){
            res +=0
        }else{
            res +=1
        }

    }
    console.log(res);}
ChangeZeroToOne('10101010')

// task middle 2
function countLetter(text,match){
let res= []
  for(let i=0; i<text.length;i++){
      if(text[i] == match){
       res+= text[i]
      }
  }
  return res.length
}
console.log(countLetter('move capital letters to the front' ,'t'));
// secound way
function countLetter2(text,match){
  let num = 0
  for(let i=0; i<text.length;i++){
      if(text[i] == match){
       num += 1
      }
  }
  return num
}
console.log(countLetter2('move capital letters to the front' ,'t'));
//task middle 3
function Decimator(arg){
  let text=''
  let num=''
  let str=''
for(let i=0;i<arg.length;i++){
   text+=arg[i]
   if(+arg[i]){
    num += arg[i]
 }
   if(!+arg[i]){
    str += arg[i]
 }

}
console.log(`allLength: ${text.length}`)
console.log(`number_length: ${num.length}`)
console.log(`string_length: ${str.length}`)
}
Decimator('test123javascript')

// task middle 4
function findLetterIdx(text, letter){
  let idx = []
  for(let i = 0; i < text.length; i++){
      if(text[i] === letter){
          idx[idx.length] = i
      }
  }
  console.log(idx);
}
findLetterIdx("hello worldlllll", 'l')

// task hard 1

const doubleSwap = (str,before, after) => {
    let s = [];
    let res = "";
    for (let i = 0; i < str.length; i++) {
        //console.log(string[i]);
        if (str[i] === before) {
            s.push(after);
        } else if (str[i] === after) {
            s.push(before);
        } else s.push(str[i]);
    }
    for (let i = 0; i < s.length; i++) {
        res += s[i];
    }
    return res;
};
console.log(doubleSwap("aabbccc", "a", "b"));
// secound way
function Replacement(str, before, after) {
    const i = str.indexOf(before);

    if (str[i] === str[i].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1) ||   after.charAt(0).toLowerCase()
    }
    return str.replace(before, after);
};
console.log(Replacement('aabbcc','a','b'))

// task hard 2
function minSwaps(num) {
    let one=0
    let zero=0
    for (let i = 0; i < num.length; i++) {
        if(num[i]==1){
          one +=1
        }else{zero +=1}
    }
    if(one>=zero){
        return console.log(1);
    }else{
        return console.log(0);
    }
}
minSwaps('100')
//secound way
let num='111110'
let zero =0
let one=0
for(let i =0;i<num.length;i++){
  if(num[i]==1){
   one+=1
  }else{
  zero+=1
  }
}
if(one>=zero){
return console.log(1)
}else{
return console.log(0)
}

// task hard 3

function wordToNumber(){

}
wordToNumber()


//task hard 4
function numberToWord(num1, amal, num2){
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  let n1, n2;
   for(let n = 0; n < numbers.length; n++){
    if(numbers[n] === num1){
        n1 = n
    }
    if(numbers[n] === num2){
       n2 = n
    }
   }
     if(amal == 'minus'){
        let sum = n1 - n2
        return numbers[sum]
    }
    if(amal == 'plus'){
        let sum = n1 + n2
        if(sum > 10){
            return sum
        }
        return numbers[sum]
    }
    if(amal == 'multipul'){
        let sum = n1 * n2
        if(sum > 10){
            return sum
        }
        return numbers[sum]

    }
    if(amal == 'devision'){
        let sum = n1 / n2
        if(sum > 10){
            return sum
        }
        return numbers[sum]
    }
}
let res = numberToWord('ten', 'minus', 'three')
let res2 = numberToWord('one', 'plus', 'three')
let res3= numberToWord('five', 'multipul', 'two')
let res4 = numberToWord('eight', 'devision', 'four')
console.log(res)
console.log(res2)
console.log(res3);
console.log(res4);
// task codewars
function points(x,y) {
    if(x>y){
      console.log('win')
    }
      if(x<y){
      console.log('loss')
      }
      if(x==y){
      console.log('tie')
      }
    }
 points(0,0)
// task codewars
let compact=[1,3,5,'hi',true]
let x=[]
for(let i=0; i<compact.length; i++){
  if (typeof compact[i] === 'number'){
   x+=compact[i]
  }
}
console.log(x)

// task  Arrays in 1 array

const arr =[1,2,3,[1,2,3,[1,2,3]]]
console.log(arr.flat(Infinity))
newArr=arr.join(",")
console.log(newArr)


function plusTwo(a,b){
    let newArr=[]
    for(let i =0;i<a.length;i++){
        newArr.push(a[i])
    }
    for(let i =0;i<b.length;i++){
        newArr.push(b[i])
    }
    return newArr
}
console.log(plusTwo([1,2,3],[3,2,1]))


// task sort unique num
const number =[0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
let newNum=[]
  number.forEach((e)=>{
    if(!newNum.includes(e)){
newNum.push(e)
    } else{
      newNum.push('_')
    }
  })
  console.log(newNum.sort())
