'use strict';

let money, time; 

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooesExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
                && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
                /*i--;*/
            } 
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooesOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов", "");
            
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses); 
        }
    },
    chooesIncome: function() {
       
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

        if ( (typeof(items)) === 'string' && items != null && items != '' ) {
            console.log("Вы ввели не коректные данные или вообще не ввели их");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
          } 
      
        appData.income.forEach(function(item, i) {
            alert("Способы доп. заработка: " + (i + 1)/*++i*/ + " " + item );
        });

    },
    
};

for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + "-" + appData[key]);
};



// for (let i = 0; i < 1; i++) {
//   let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

//   if ( (typeof(items)) === 'string' && items != null && items != '' ) {
//       appData.income = items.split(', ');
//       appData.income.push(prompt('Может что-то еще?'));
//       appData.income.sort();
//       i++;
//   }
//   else {
//       i--;
//   } 
// }



// // // let i = 0;
// // // while (i < 2) {
// // //     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
// // //         b = prompt("Во сколько обойдется?", "");

// // //     if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
// // //         && a != '' && b != '' && a.length < 50) {
// // //         console.log("OK");
// // //         appData.expenses[a] = b;
// // //     } else {
// // //         i = i - 1;
// // //     }
// // //         i++;
// // // }

// // // let i = 0;
// // // do {
// // //     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
// // //         b = prompt("Во сколько обойдется?", "");

// // //         if ( (typeof(a))=== "string" && (typeof(a)) != null && (typeof(b)) != null 
// // //             && a != '' && b != '' && a.length < 50) {
// // //             console.log("Yeap");
// // //             appData.expenses[a] = b;
            
// // //         } else {
// // //             i = i - 1;
// // //         }
// // //         i++;
// // // }
// // // while (i < 2);






// // let calc = function (a,b) {
// //     return (a ** b);
// //  }
  
// //  console.log(calc(3,4));
// //  console.log(calc(4,4));
  
// //  function retVar() {
// //     let num = 50;
// //     return num;
// //  }
  
// //  let anotherNum = retVar();
// //  console.log(anotherNum);
 
// // switch (browser) {
// //     case 'Edge':
// //       alert( "You've got the Edge!" );
// //       break;
  
// //     case 'Chrome':
// //     case 'Firefox':
// //     case 'Safari':
// //     case 'Opera':
// //       alert( 'Okay we support these browsers too' );
// //       break;
  
// //     default:
// //       alert( 'We hope that this page looks ok!' );
// //   }

// // const number = +prompt('Введите число между 0 и 3', '');
// // if (number === 0) {
// //   alert('Вы ввели число 0');
// // }

// // if (number === 1) {
// //   alert('Вы ввели число 1');
// // }

// // if (number === 2 || number === 3) {
// //   alert('Вы ввели число 2, а может и 3');
// // }

// // function checkAge(age) {
// //     if (age > 18) {
// //       return true;
// //     } else {
// //       return confirm('Родители разрешили?');
// //     }
// // }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }


// for (let i = 1; i <= 8; ++i) {
//   console.log(i);
// }

// let arr = [1, 15, 4, 2],
//   i = arr.sort(cNum);

// function cNum(a,b) {
//   return a+b;
// }

// console.log(arr);


// let arr = ["first", 2, 3, "four", 5];

// arr.forEach(function(item, i, mass) {
  
//    console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

