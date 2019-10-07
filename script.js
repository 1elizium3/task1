'use strict';

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),

    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time; 

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;
/*Если программа еще не запущена
( не нажали кнопку "Начать расчет") - сделать кнопки неактивными.*/

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
    /*Если программа еще не запущена
( не нажали кнопку "Начать расчет") - сделать кнопки неактивными.*/
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
            /*i--;*/
        } 
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let questionOptExpenses = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
/*Реализовать функционал: при расчете дневного бюджета учитывать сумму 
обязательных трат (т. e. от бюджета на месяц отнимаем общую 
сумму всех обяз. трат и ее делим на 30 дней)*/
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Ошибка";
    } 
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1); 
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1); 
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
   
};

// for (let key in appData) {
//   console.log("Наша программа включает в себя данные: " + key + "-" + appData[key]);
// };



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

