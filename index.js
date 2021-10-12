//1
function sumOfThreeAndFive(){
  let sum=0;
  for(let i=0; i<=1000; i++){
      if(i%3===0 || i%5===0){
          sum += i;
      }
  }
  return sum;
}

function greaterNum(num1, num2){
 if(typeof(num1, num2) == 'number'){
     if(num1 > num2){
        return num1;
     }else if(num2 > num1){
         return num2;
     }else if(num1 === num2){
        return "both integers are equal"
    }
 }else 
    return 'null'
}

function oddAndEvenInFifteen(){
  for(let i=0; i<=15; i++){
    if(i%2==0){
        console.log(i+" is even");
    }else
        console.log(i+" is odd");
  }
}

function sortThreeNums(num1, num2, num3){
   let numOrder=[];

    if(num1>num2 && num1>num3){
        numOrder.push(num1);
        if(num2>num3){
            numOrder.push(num2, num3);
        }else if(num3>num2){
            numOrder.push(num3, num2);
        }
    }else if(num2>num1 && num2>num3){
        numOrder.push(num2);
        if(num1>num3){
            numOrder.push(num1, num3);
        }else if(num3>num1){
            numOrder.push(num3, num1);
        }
    }else if(num3>num1 && num3>num2){
        numOrder.push(num3);
        if(num1>num2){
            numOrder.push(num1, num2);
        }else if(num2>num1){
            numOrder.push(num2, num1);
        }
    }
  return numOrder;
}




//console.log(sumOfThreeAndFive());
//console.log(greaterNum('str','str'));
//oddAndEvenInFifteen();
console.log(sortThreeNums(4,8,1));


