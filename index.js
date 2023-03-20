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
let str11 =nums[+num]
let newStr = ''
for(let i = 0; i < num1;i++){
  newStr += str11
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
let ress = numberToWord('ten', 'minus', 'three')
let res2 = numberToWord('one', 'plus', 'three')
let res3= numberToWord('five', 'multipul', 'two')
let res4 = numberToWord('eight', 'devision', 'four')
console.log(ress)
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
let x1=[]
for(let i=0; i<compact.length; i++){
  if (typeof compact[i] === 'number'){
   x+=compact[i]
  }
}
console.log(x1)

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
const string = prompt("text");
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
findIndex(str1, string);

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

// easy 1 
function getMaxSubSum(arr,num){
 
    for(let i=1;i<arr.length;i++){
        for(let j=1;arr.length;j++){
            if(arr[i]+arr[j]==num){
             console.log(arr[i],arr[j])
            }
        }
    }

}
getMaxSubSum([2,2,1,4],4)


// easy 2
function actionNum(arr){
    let newArr=[]
    newArr.push( arr[0]+arr[1]+arr[arr.length-1])
    newArr.push( Math.floor( arr[0]/arr[1]/arr[arr.length-1]))
    newArr.push(arr[0]*arr[1]*arr[arr.length-1])
    newArr.push(arr[0]-arr[1]-arr[arr.length-1])
    let obj = {};
    for (let i = 0; i < newArr.length; ++i){ 
         obj[i] = newArr[i];
    }
    
    const {
        0: add, 
        1: devide, 
        2: minus,
        3:multy
    } = {...obj}
    const newObj = Object.assign(
        {},
        {
            add,
            devide,
            minus,
            multy
        }
    );
    console.log(newObj)
    
}
actionNum([15,3,5])

// easy 3
let a = [1,2,3];
let b = a.shift();
a.push(b);
console.log(a)
// easy 4
function makePair(num,num2){
let newArr=[num,num2,]
newArr.push(num+num2)
console.log(newArr)
}
makePair(3,6)


// easy 5
function drop(arr, el) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !==el) {
          newArr.push(arr[i]);
        }
    }
    console.log(newArr)
  }
  
 drop([1, 2, 3], 2)


// easy 6
function changeToArray(obj, num){
    let res = Object.values(obj)
    let bool;
    res.find(e=> {return e === num ? bool = true : bool = false})
    res.push(bool)
    console.log(res)
}
changeToArray({ a: 13, b: 1 }, 1)

//  easy 8
function incremantItems(arr){
 let res=arr.map(el => {return el += 1})
    console.log(res)
}
incremantItems([2, 4, 6, 8])

// easy 9
function getStrLength(arr){
let newArr=[]
arr.forEach(e=>{
    return  newArr.push(e.length)
})

console.log(newArr)
}
getStrLength(['dog','cat','tiger'])

// easy 10
function stringtoArray (str, num)  {
    let newArr = str.split("")
    let res = newArr.slice(0,num)
    console.log(res)
}
stringtoArray('Hi', 1)

// easy 11 
function addArray(arr,arr2){
    let arrays = [...arr,...arr2]
    let len = {
    arrLength: arrays.length
    }
       return [arrays, [len]]
}
console.log(addArray([1,2,3],[1,2,4]))

// easy 12
function findIndex(arr,v){
    let res;
    arr.forEach(e=>v === e?res = e:e )
    console.log(res);
}
findIndex(['hi', 'asd', 'hfjg', 'abc'], 'hfjg')

// middle 1

function countTrue(arr) {
  let values = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      values.push(i);
      count++;
    }
  }
  return [values, count];
}
console.log(countTrue([true,false,false,true,false])); 

// middle 2
function toArray(obj){
return Object.entries(obj)
}
console.log(toArray({a:1,b:2}))
// middle 3
function arrayOfMultiples(num, multy) {
    let res= [];
    for (let i = 1; i <= multy; i++) {
      res.push(num * i);
    }
    return res;
  }
  console.log(arrayOfMultiples(7, 5))

// middle 4
function ObjtoArray(obj){
    return Object.entries(obj)
    }
    console.log(ObjtoArray({D:1,C:2 ,B:3}))
    
    function arrToObject(arr) {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
          obj[arr[i][0]] = arr[i][1];
        }
        return obj;
      }
      
      console.log(arrToObject([["D", 1], ["C", 2],["B",3]]));
//middle 5
const sortIt = arr => {
    let swapped = false;
    const a = [...arr];
    for (let i = 1; i < a.length; i++) {
      swapped = false;
      for (let j = 0; j < a.length - i; j++) {
        if (a[j + 1] < a[j]) {
          [a[j], a[j + 1]] = [a[j + 1], a[j]];
          swapped = true;
        }
      }
      if (!swapped) return a;
    }
    return a;
  };
console.log(  sortIt ([1,2,5,3,0]))

//middle 6

function compact(arr){
let res=[]
    for(let i =0;i<arr.length;i++){
    if( typeof arr[i]==="number"){
        res.push(arr[i])
    }
}
return  res
}
console.log(compact([1,2,false,'str',3,true]))
//middle 7 

function clone(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push([...arr]);
    }
    return result;
  }
  console.log(clone([1,1,1]));
  // secound way
// function clone(arr, n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//       result.push([...arr]);
//     }
//     return result;
//   }
//   console.log(clone([1,1,1], 5));

//middle 8
function testJekpot(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[0]) {
        return false;
      }
    }
    return true;
  }
  console.log(testJekpot(['aa','aa', 'aa']));  



  //middle 10
function createStrText (arr) {
    let res = arr.join("").trim().split(",")
    let text = {text: `${res[0]} ${res[2]} ${res[7]}`}
    console.log(text);
    // let result = '';
    // for (let i = 0; i < arr.length; i++) {
    //   if (typeof arr[i] === 'string') {
    //     result += arr[i] + ' ';
    //   } else if (Array.isArray(arr[i])) {
    //     result += createStrText(arr[i]);
    //   }
    // }
    // console.log(result.trim());
}
createStrText([[["I am"], 8], 1, 2, [[2, ["NodeJs"]], 4, [6, 3,[["text",[["Developer"]]]]]]])

 
  //hard1
 function concat(arr,arr2){
 return [...arr ,...arr2]
 }
console.log( concat([2,2] ,[1,3]))
// hard 2
function secondLargest (arr) {
    let largest = arr[0];
    let secondLargest = arr[0];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  };
  console.log(secondLargest([1,10,99,1]))
// hard 3
function sevenBoom(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].toString().includes('7')) {
        return 'Boom!';
      }
    }
    return 'there is no 7 in the array';
  }
  console.log(sevenBoom([1, 2, 4, 77]));

// hard 4

const addToArray = (num) => {
    let arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }
  console.log(addToArray(11))
  // hard 5
      
function getLength(arr) {
    return arr.toString().split(',').length;
  }
        console.log(getLength([1,  [2, ,2,2,2,2,2,23,4] ])); 
  
//hard 6
        function numInStr(arr) {
            return arr.filter(str => /\d/.test(str));
          }
      console.log(numInStr(['1a', 'a', '1b', 'b']))

 
// task 1

function checkTwoArr(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
      if (arr2.indexOf(arr[i]) !== -1) {
        return false;
      }
    }
    return true;
  }

  console.log(checkTwoArr([1,2,3,4],[0,6])); 
  console.log(checkTwoArr([1,2,3,4],[2,3])); 
  console.log(checkTwoArr([9,9,8],[1,1])); 

 // task 2
  
 
 function sortArr(arr,arr2,str){
 let resArr=arr.concat(arr2).sort()
 console.log(resArr)
 let resArrRev=arr.concat(arr2).sort().reverse()
 console.log(resArrRev)
  let resStr= resArr.fill(str)
  console.log(resStr)
 }
 sortArr([1,3],[2,5],'nodejs')
  
// task 3
function numberSplit(num){
  let half = Math.floor(num / 2);
 return[half,num-half]
}
console.log(numberSplit(11))
// task 4

function sortByLength(arr){
  return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(['aa','cccc','b','ddd']))

// task 5

function filterArr(arr){
  let newArr=[]
   for(let i =0 ; i<arr.length;i++){
     if(+arr[i]){
     newArr.push(arr[i] *100)
     }
   }
   return newArr  
}
console.log(filterArr([1,2,'a','b']))

// task 6
function sumOfCube(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(arr[i], 3);
  }
  
  return sum;
}

console.log(sumOfCube([1,2,3]))



// task 8
function findNumber(arr){
  let sum = 0;
  arr.forEach(el => {sum += el });
  // let sum = arr.reduce((acc, curr) => acc + curr, 0); second way
  console.log(sum / arr.length)
}
findNumber([1,2,3,4])  

// task 9
function formatPhoneNum(arr) {
  let formattedNum = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      formattedNum += "(";
    }
    if (i === 3) {
      formattedNum += ") ";
    }
    if (i === 6) {
      formattedNum += "-";
    }
    formattedNum += arr[i];
  }
  return formattedNum;
}

console.log(formatPhoneNum([1,2,3,4,5,6,7,8,9,10])  )
//task 10
function toArray(num){
  let myArr = String(num).split("").map((num)=>{
    return Number(num)
  })
  console.log(myArr)  }
toArray(21) 

//task 11
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return [min, max, min*max];
}
console.log(minMax([1,2,3,4,5]))
  // task 12
function getDepth(val) {

     if(Array.isArray(val)) {
      return 1 + Math.max(0, ...val.map(getDepth))
     }else {
      return 0
   }
        }
 let result = getDepth([[[[[[[[]]]]]]]])
console.log(result);
  // task 13
    function reverseImage(arr) {
      for (let i = 0; i < arr.length; i++) {
        arr[i].reverse();
      }
      arr.reverse();
      return arr;
    }
    console.log(reverseImage([[1,2,3],[4,5,6]]));
  // task 14


  function changeNumberToString(start, end) {
    const numberToWord = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(numberToWord[i]);
    }
    return result;
  }
  
  function reverseArr(arr) {
    return arr.reverse();
  }
  
  const arr1 = changeNumberToString(1, 5);
  console.log(arr1); 
  
  const array2 = reverseArr(arr1);
  console.log(array2); 

// task 1

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let user = new Person("aziz", 16);
let user2 = new Person("islom", 24);
let user3 = new Person("akibar", 15);
let user4 = new Person("abdulloh", 18);
let user5 = new Person("bunyod", 16);

console.log(user, user2, user3, user4, user5);

// task 2

class Car {
  constructor(name, year, color) {
    this.name = name;
    this.year = year;
    this.color = color;
  }
  showName() {
    console.log(this.name);
    return;
  }
  showYear() {
    console.log(this.year);
    return;
  }
  showColor() {
    console.log(this.color);
    return;
  }
}
let bmw = new Car("x5", 2012, "blue");
let mersades = new Car("avatar", 2022, "dark");
let supra = new Car("supra m4", 1998, "purple");
let toyota = new Car("pick up", 2005, "cream-white");
let nissan = new Car("skyline", 2001, "black");

console.log(supra, mersades, toyota, nissan, bmw);


bmw.showColor();
mersades.showName();
supra.showYear();

// task 3

class myMath {
  static myRound(num) {
    console.log(Math.round(num));
    return;
  }
  static myCeil(num) {
    console.log(Math.ceil(num));
    return;
  }
  static myFloor(num) {
    console.log(Math.floor(num));
    return;
  }
  static myTrunc(num) {
    console.log(Math.trunc(num));
    return;
  }
}
myMath.myRound(1.99);
myMath.myCeil(1.11);
myMath.myFloor(1.11);
myMath.myTrunc(1.59);

// task 4

class Shakl {
  constructor(title, bordered_color) {
    this.title = title;
    this.bordered_color = bordered_color;
  }
  getTitle() {
    console.log(this.title);
    return;
  }
  getBorderColor() {
    console.log(this.bordered_color);
    return;
  }
  getFullDate() {
    console.log(`name:${this.title} borderColor:${this.bordered_color}`);
    return;
  }
}

let torturchak = new Shakl("kvadrat", "blue");
let aylana = new Shakl("dumoloq", "red");
let uchburchak = new Shakl("qirrali uchburchak", "black");
uchburchak.getTitle();
aylana.getBorderColor();
torturchak.getFullDate();
// task 5

class myMathPi {
  static myPI() {
    console.log(3.14);
    return;
  }
}
myMathPi.myPI();

// task 6

class myDate {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  getYear() {
    return this.year;
  }

  getMonth() {
    return this.month;
  }

  getDay() {
    return this.day;
  }

  getWeekday() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(`${this.year}-${this.month}-${this.day}`);
    return daysOfWeek[date.getDay()];
  }
}
const myBirthday = new myDate(2023, 3, 4);
console.log(myBirthday.getYear());
console.log(myBirthday.getMonth());
console.log(myBirthday.getDay());
console.log(myBirthday.getYear());
console.log(myBirthday.getWeekday());



// task 7
class Animals{
 
  constructor(name,feet,wool){
      this.name=name
  this.wool=wool
  this.feet=feet
  
  }   

}


class HomeAnimals extends Animals{
constructor(name,wool,feet,isCute){
  super(wool,feet,name)
  this.isCute=isCute
}
}

class WildAnimals extends Animals{
  constructor(name,wool,feet,nail){
      super(wool,feet,name)
     this.nail=nail

  }
}


let homeAnimals=new HomeAnimals('cat','yes',4,true)
let wildAnimals=new WildAnimals('lion','yes',4,true)




// easy 2
function firstLast6(arr){
 for(let i =0;i<arr.length;i++){
  if(arr[0]==6 || arr[arr.length-1]==6){
    return true
  }
 }
return false
}
console.log(firstLast6([ 1,6,1]))
// easy 3
function sameFirstLast(arr){
    for(let i =0;i<arr.length;i++){
     if(arr[0]  == arr[arr.length-1]){
       return true
     }
    }
   return false
   }
   console.log(sameFirstLast([2,6,1]))

// easy 4

function commanEnd(arr,arr2){
    for(let i =0; i<arr.length ;i++){
    
     if(arr[arr.length-1] == arr2[arr2.length-1]){
    return true
     }
    }
    return false
    }
console.log(commanEnd([1,2,4],[1,5,4]))

// easy 5 

function roteteLeft3(nums){
    return [nums[1],nums[2],nums[0]]
   }
   console.log(roteteLeft3([1,2,3]));

// easy 6

// easy 7
function midThree(nums){
  let middle =Math.floor(nums.length/2);
  return [nums[middle-1] ,nums[middle], nums[middle+1]]
}
console.log(midThree([1,2,3,4,5]))  

// easy 8

function answerCell(first, center, last){
    if(last){
        return false;
    }          
    if(first && !center){
        return false;
    }
    return true;
}
console.log(answerCell(false, true,true ) )
  
// easy 9  
function blackjack(num1, num2) {
    const maxNum = Math.max(num1, num2);
    const numArray = maxNum.toString().split('').map(el => {
      switch (el) {
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        case '0': return 'zero';
      }
    });
    const type = typeof numArray[0];
    return { max_number: maxNum, arr: numArray, arr_length: numArray.length, type: type };
  }
  
console.log(blackjack(19,21))
// easy 10 

function reverseWord(str) {
    return str.split(' ').reverse().join(' ');
  }
  
console.log(reverseWord("the sky is blue"))

// easy 11 
    let arrr1 =['olma',15,[1,2,3]]
const [apple,num,numsArr]=arrr1
const [onee,two,three]=numsArr
console.log(apple,num,onee)
// easy 12 

let array =['olma',15,[5,4,3] , [{name:'a'}]]
const [,,,name] =array
console.log(name)


// middle 1

function removeDups(arr){
    let res=[]
  arr.forEach(e=>{
    if(!res.includes(e)){
        res.push(e)
    }
  })
return res
}
console.log(removeDups([1,2,1,2]))

// middle 2

Array.prototype.myToString = function() {
    let str = '';
    for (let i = 0; i < this.length; i++) {
      if (i !== 0) {
        str += ',';
      }
      if (Array.isArray(this[i])) {
        str += this[i].myToString();
      } else {
        str += this[i].toString();
      }
    }
    return str;
  };
  const arr2 = [1, 2];
  const str = arr2.myToString();
  console.log(str);
    

  // middle 3
  function missingNumber(arr) {
    const n = arr.length + 1;
    const lSum = (n * (n + 1)) / 2;
    const aSum = arr.reduce((sum, num) => sum + num, 0);
    return lSum - aSum;
  }
  
console.log(missingNumber([1, 2, 3, 4,5,  7, 8, 9, 10]))
  


function mumbling(name) {
    let result = '';
    for (let i = 0; i < name.length; i++) {
      let char = name.charAt(i);
      result += char.toUpperCase() + char.toLowerCase().repeat(i) + '-';
    }
    return result.slice(0, -1);
  }
  
  console.log(mumbling('mubashir'));  
  

  // middle 7
  function minusTwoArrFromFirstArray(arr) {
     const [firstArr, secArr] = arr;
     const res = firstArr.map((el, i) => el - secArr[i]);
     return res.filter(el => !isNaN(el));
  }
  console.log(minusTwoArrFromFirstArray(
   [ [10,20,30,40,50,] , [4,5,6,10,9,] ]
    ))

//
    function isPalindrome(text) {
      const reversed = text.split('').reverse().join('');
      return text === reversed;
    }
    
    console.log(isPalindrome('kiyik'));
    console.log(isPalindrome('hello'));
      



      // NODE JS

  //   task 1 

  let text=  Buffer.from('I am learning javascript')
  let text2= Buffer.from('We learnt typescript')
  let x =  Buffer.from(text+text2)
console.log(x)
let res=x.toString()
console.log(res)
    
// task 2

let bufff = Buffer.from("I am learning JavasCript ");
let buff2 = Buffer.from("we learni TypeCript ");
let buff3 = Buffer.from("About buffer ");
let arrr=[bufff,buff2,buff3]
let buf=Buffer.concat(arrr)
let a1 = buf.toString().split(" ");
console.log(a1.indexOf('JavasCript'));


// task 3


let buf1 = Buffer.from("I am learning JavasCript");
let buf2 = Buffer.from("we learni TypeCript");
a=buf1.length;
b= buf2.length;
if(a>b){
  buf1.copy(buf2,0)
  console.log(buf2.toString());
  for (const x of buf2.entries()) {
    console.log(x);
  }
  console.log(buf2.length);
}else if(a<b){
    buf2.copy(buf1, 0);
    console.log(buf1.toString());
    for (const x of buf1.entries()) {
      console.log(x);
    }
    console.log(buf1.length);

}else{
   console.log(true);
}


// task 4
