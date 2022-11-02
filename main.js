let lab1 = [5,5,0,5,5,10,10]
let lab2 = [5,5,5,5,5,5,10]
let lab3 = [5,9,10,15]
let lab4_5 = [10,5,5,5,5,5,10,10,10,10,5]
let lab6 = [5,5,10,5,5,10]
let lab8 = [5,10,10,10,5]

let sum1 = 0;
for (let i = 0; i < lab1.length; i++) {
  sum1 += lab1[i];
}
let sum2 = 0;
for (let i = 0; i < lab2.length; i++) {
  sum2 += lab2[i];
}
let sum3 = 0;
for (let i = 0; i < lab3.length; i++) {
  sum3 += lab3[i];
}
let sum4_5 = 0;
for (let i = 0; i < lab4_5.length; i++) {
  sum4_5 += lab4_5[i];
}
let sum6 = 0;
for (let i = 0; i < lab6.length; i++) {
  sum6 += lab6[i];
}
let sum8 = 0;
for (let i = 0; i < lab8.length; i++) {
  sum8 += lab8[i];
}

function get_sum(lab){
  S=0;
  for (let i=0; i <lab.length;i++)
  S=S+lab[i]
  return S
}
get_sum(lab1);
get_sum(lab2);
get_sum(lab3);
get_sum(lab4_5);
get_sum(lab6);
get_sum(lab8);
console.log(get_sum(lab1));
console.log(get_sum(lab2));
console.log(get_sum(lab3));
console.log(get_sum(lab4_5));
console.log(get_sum(lab6));
console.log(get_sum(lab8));


function main(lab1,lab2,lab3,lab4_5,lab6,lab8) {
    let sum1 = get_sum(lab1)
    let sum2 = get_sum(lab2)
    let sum3 = get_sum(lab3)
    let sum4_5 = get_sum(lab4_5)
    let sum6 = get_sum(lab6)
    let sum8 = get_sum(lab8)
    let quiz = [38]
    let sums = [sum1,sum2,sum3,sum4_5,sum6,sum8]
    let total_score = (sum1+sum2+sum3+sum4_5+sum6+sum8)/(40*7)*60+quiz/40*40

  const results = {
        lab1 : [5,5,0,5,5,10,10],
        lab2 : [5,5,5,5,5,5,10],
        lab3 : [5,9,10,15],
        lab4_5 : [10,5,5,5,5,5,10,10,10,10,5],
        lab6 : [5,5,10,5,5,10],
        lab8 : [5,10,10,10,5],
        quiz: [38],
        sums : [sum1,sum2,sum3,sum4_5,sum6,sum8],
        total_score: total_score,

 
    }
    return results
  }
  console.log (main(lab1,lab2,lab3,lab4_5,lab6,lab8))