// changing case
// 1. var checktostudent = prompt("Enter your student");
// checktostudent = checktostudent.toUpperCase();
// console.log(checktostudent);


//2. var checktostudent = ["areesha"];
// var firstchar = checktostudent.slice(0);
// var otherchar = checktostudent.slice(2,5);
// firstchar = firstchar.toUppercase();
// otherchar = otherchar.toLowerCase();
// var combinename = firstchar + otherchar;
// console.log(combinename);

// string measuring length and extracting parts

//1.var str = "favoutite mobile phone model";
// var a = str.length;
// document.write(a);

//2. var a = "hello world";
// var charlast = a.charAt(a.length()-1);
// console.log(charlast);

// finding segment

//1. var a = "pakistani";
// for(var i = 0; i <a.length;i++){
//     var text = a.slice(i,i+1);
//     if(text == "n"){
//         alert("N has found in this index" +i);
//     }
// }

// 2. var store = prompt("enter your value");
// for(var i = 0; i <store.length;i++){
//     var text = store.slice(i,i+6);
//     if(text == "!"){
//         document.write("sign has found");
//     }
// }     
//  finding character of location

// var a = "pakistan";
//  for(var i = 0 ;i < a.length; i++){
//     var text = a.slice(i,i+1);
//     if(text == "i"){
//         alert("i has found in this index" + i);
//     }
//  }
//  replacing character
//   var para = "hyder";
//   var para1 = para.replace("hyder", "islam");
//   console.log(para1);

// rounding number

//  var num = Math.round(3.45214);
//  console.log(num);
//  var num = Math.floor(3.45214);
//  console.log(num);
// var num = Math.ceil(3.45214);
// console.log(num);
// var num = prompt("enter your value")
// var num = math.round(-2.678);
// console.log(num);

// var dice = Math.random()*6;
// console.log(dice);
// var head = "2";
// var tail = "1";
// var toss = Math.random()*2;
// console.log(toss);

// var a = "24";
// console.log(typeof(a));
// var a = 24;
// var b = a.toString()
// console.log(typeof(b));

// var num = 66.66666666666;
// var cont = num.toFixed(4);
// console.log(cont);

//    Date methods


// var a = new Date();
// console.log(a);
// console.log(a.getMonth());
// console.log(a.getDay());

// var a = prompt("enter your value")
//  for(var i = 0; i<a.length;i++){
//     if(a > "14.02.2022"){
//         alert("first fifteen days of amonth");
        
//     }else if(a < "16.01.2022"){
//         alert("last days of the month");
//     }

    
//  }
// var a = new Date();
// // console.log(a.getMinutes());
// console.log(a.getTime());
// var specDate = new Date("jan,1,1970");
// // console.log(a.getMinutes());
// console.log(a.getTime());

// var specDate = new Date("dec,31,2021");
// console.log(specDate);

var specDate = new Date("june 18,2015");
console.log(specDate.getDay());
var today = new Date();
console.log(today.getDay());
