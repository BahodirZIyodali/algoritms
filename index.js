
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
 // task hard 3
 
function wordedMath(num,amal,num2) {
  a=Number(num)
  b=Number(num2)
  let result=0
  let nums=['zero','one','two','three','four','five','six','seven','eight','nine','ten']
  if(amal==='plus'){
      i=a+b;
      result=nums[i]
  }
  if(amal=='minus'){
      i=a-b;
      result=nums[i]
  }
  if(amal=='multiply'){
      i=a*b;
      result=nums[i]
  }
  if(amal=='devision'){
      i=a/b;
      result=nums[i]
  }
  console.log(result);
}
wordedMath('6','minus','5')
wordedMath('2','plus','2')
wordedMath('2','multiply','2')
wordedMath('10','devision','2')
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


// str algorithms

//task 3

function helloName(text){
    let greeting = "Hello";
    const upperName = text.charAt(0).toUpperCase() + text.slice(1);
    if (text.length >= 10) {
      console.log(`${greeting.toUpperCase()} ${text.toUpperCase()}`);
    } else {
      console.log(`${greeting}${upperName}`);
    }
}
helloName('john')


// task 4

let firstTwo='eefdweds'
console.log(firstTwo.slice(0,2));


// task 5

function addText(name1,name2,num){
let double=name1+name2     
console.log(double);
let res= double.slice(0,num)
console.log("result: ",res);
}
addText('about javascript or' ,'typescript',15)

//task 6

function comboString(text,text1){
let res=text.toUpperCase()+text1.toUpperCase()+text.toUpperCase()
console.log(res)
console.log(res.length)
}
comboString('Hello','World')  // nimani indexsini 6 etilvotganini tushunmadim

// task 7
let strToArr = "Solve programming problems in Javascript or Typescript!";
const myArr = strToArr.split(" ");
console.log(myArr)

// task 8

// can't do it

// task 9

function jsCharCode(js){
  let arr=[]
  for(let i =0;i<js.length;i++){
    let jsCode=js[i].charCodeAt()
    arr.push(jsCode)
  }
  console.log(arr)
  }
  jsCharCode('Javascript')

 // task 10  

 // can't do it

// task 11

function isSameNum(num,num2){
  if(num===num2){
    return true
  }else{
    return false
  }
}
console.log(isSameNum(2,2))  
console.log(isSameNum(2,'2'))  

// task 12 
function sameFirstLast(num){
if(num[0]==num[num.length-1]){
  return true
}
return false
}
console.log(sameFirstLast([2,2,3,1]))

// task 13
function MAthRound(num) {
  console.log("value: ",Math.round(num));
             if (num * 1 == num) {
               let num1 =+num.toFixed(3)
               let num2 = +num1.toFixed(2)
               let num3 = +num2.toFixed(1)
               let result = num3.toFixed(0)
             console.log(`value: ${result}`);
           }else{
             console.log("NaN");
         }
}
MAthRound(12.15678)


// task 16
const str = prompt("text");
let str1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dignissimos repudiandae laudantium assumenda ratione veritatis mollitia ipsam aperiam. Harum, assumenda.";

const findIndex = (arg, value) => {
  const arr = arg.split(" ");
  let sum = " ";
  let index=0
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == value) {
          sum = arr[i];
         index+=1
    }
    return index
  }

  console.log(sum.length);
  console.log(arg.indexOf(sum));
};
findIndex(str1, str);

// 2 dars 1

const obj ={two:2}
let {...one}=obj
console.log(one)

// 2 dars 2 
const totalAmountAdj = {a:'moron',b:'moron'}
let size = Object.keys(totalAmountAdj).length;
console.log(size)

// 2 dars 3
function isInRange (num, range) {
    return num >= range.min && num <= range.max ? true : false
      
  }
    console.log(isInRange(3,{min:4,max:5}))
// 2 dars 4

function mostExpensiveItem(items){
    let maxPrice = 0;
    let mostExpensiveItem;
  for (let key in items) {
      if (items[key] > maxPrice) {
        maxPrice = items[key];
        mostExpensiveItem = key;
      }
    }
  return mostExpensiveItem;
  }
  console.log(
  mostExpensiveItem({tv:30,skale:20,piano:40}) )
// 2 dars 5
const addName = (items, name, price) => {
  items[name] = price;
  return items;}
addName({piano:500},"Bratus",400)
// 2 dars 6
function mostExpensive(obj) {
    let max=''
    if(obj.piano>obj.stereo){
         max='piano'
    }else{max='stereo'}
    res={
      ...obj,
      text:`The most expensive one is the ${max} Ring`
    }
    console.log(res);
  }
  mostExpensive({piano:500,stereo:700})

let qitalar={
  Osiyo:{
    title:"Osiyo",
    countres:{
      Uzbekiston:"Uzbekiston",
      Tojikiston:"Tojikiston",
      Turkmaniston:"Turkmaniston",
      Qirgiziston:"Qirgiziston",
      Avgoniston:"Avgoniston",
      Braziiya:"Braziiya",
      Argentina:"Argentina",
    }
  },
  Yevropa :"Yevropa",
  Afrika:"Afrika",
  Shimoliy_Amerika:"Shimoliy Amerika",
  Janubiy_Amerika:"Janubiy Amerika",
  Avstraliya:"Avstraliya",
}
let {
  Osiyo: { 
    title,
     countres:{
      Uzbekiston,
      Tojikiston,
      Turkmaniston,
      Qirgiziston,
      Avgoniston,
      Braziiya,
      Argentina,
    }
  },
  Yevropa,
  Afrika,
  Shimoliy_Amerika,
  Janubiy_Amerika,
  Avstraliya,
} = qitalar;
console.log(
  title,
  Uzbekiston,
  Tojikiston,
  Turkmaniston,
  Qirgiziston,
  Avgoniston,
  Braziiya,
  Argentina,
  Yevropa,
  Afrika,
  Shimoliy_Amerika,
  Janubiy_Amerika,
  Avstraliya
);

// first 3
function number(a,b) {
   let res = {
    numbers:Number(a.toString() + b.toString()),
   }
   Object.seal(res);
   console.log(res,Object.isSealed(res));
}
number(10,30)



//first5
function createNewObj(a) {
    let newObj={}
    let obj={
    zero:0,
    one:1,
    two:2,
    three:3,
    four:4,
    five:5,
    six:6,
    seven:7,
    eight:8,
    nine:9
    }
    if(a>9) return console.log("more then keys", Object.isFrozen(newObj));
    for(k in obj){
        if(obj[k]<=a){
            newObj[k]=obj[k]
        }
    }
    console.log(newObj, Object.isFrozen(newObj));   
}
createNewObj(9)

//first 6
function lastItem(arr) {
    let res={
        lastitem:arr[arr.length-1]
    }
    Object.seal(res);
    Object.freeze(res);
    console.log(res);
}
lastItem([1,2,3,4,])

// second1
let obj1={
  name:'toshmat',
  age:23,
}
let obj2={
  name:'toshmat',
  age:22,
}
function resultObj(obj1,obj2) {
  if(obj1.name===obj2.name && obj1.age===obj2.age){
      Object.freeze(obj1)
      return obj1
  }else{
      Object.seal(obj1);
      Object.seal(obj2);
      return console.log(obj1,obj2);
  }
}
resultObj(obj1, obj2);

//second 2
function findMaxWidth(obj) {
      if(obj.piano>obj.stereo){
          console.log('piano');
          return Object.defineProperty(obj, 'piano', {
              writable: false 
          });                  
      }else{
          console.log("stereo");
          return Object.defineProperty(obj, "stereo", {
            writable: false,
          }); 
  
      }
  }
  findMaxWidth({piano:100,stereo:700})


 //  ----------------------- uyogini qilomadm
 


