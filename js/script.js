alert("WElcome to JS");

// console.log("welcome to js");
// console.log(10);
// console.log(10.10);
// console.log({fname:"Anjuka",gender:"Female"});

// console.table({fname:"Anjuka",gender:"Female"});
// //print Array
// console.log([5,10,25,15]);
// console.table([5,10,25,15]);
// //to print Boolean
// console.log(true);
// //print in console with variable decleration
// var a=5;
// let b=7;
// const c=10;
// console.log(a);
// console.log(b);
// console.log(c);

// //reasign

// a=6;
// console.log(a);

// b=8;
// console.log(b);
// //re-declearation

// var a=25;
// console.log(a);

// var a=6.5;
// console.log(a);

// b=8.5;
// console.log(b);

// var a="Anjuka";
// console.log(a);

// b="Akilan";
// console.log(b);

// b=25;
// console.log(b);
// // you cannot redecleration variable used in "let" method
// // you can redecleration variable used in "var" method
// var a=25;
// console.log(a);

// //array redecleare
// a={fname:"Akilan",gender:"male"}
// console.log(a);
// console.table(a);

// a=[12,11,25,60];
// console.log(a);
// console.table(a);

// b={fname:"Akilan",gender:"male"}
// console.log(b);
// console.table(b);

// b=[12,11,25,60];
// console.log(b);
// console.table(b);

// //console page clear
// //to know what type of values given
// a=1;
// console.log(typeof a);

// a=1.5;
// console.log(typeof a);

// a="Akilan";
// console.log(a+";"+typeof a);

// console.log({fname:"Akilan",Age:"22"});


// //ternary operator

// m=78;
// //35 grade c 50 grade b 60 grade b+ 70 grade A 80 grade A+ 90 grade Distinction

// var mark=(35<=m && m<50)?"Grade c":(60<=m && m<70)?"grade b+":
// (70<=m && m<80)?"grade A":(80<=m && m<90)?"grade a+": "no grade";

// console.log(mark);

// function findGrade(){

//     m=34; //input
// //35 32grade c 60 grade b 80 grade a 90 grade Distintion
// var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ? "Grade B" : (80<=m && m<90) ? "Grade A" : (90<=m && m<=100) ? "Grade Distinction" : "Fail";
// console.log(mark); // output

// }

// findGrade();

// function checkgarde (){
//     console.log("welcome");
//     console.log("Just trying")


// }

// var checkgarde1=(a,b) => {
//     console.log(a+b);
//     return a+b;
// }
// checkgarde();

// checkgarde1(5,6);

// //if conditions

// function gradechecking(m){
//     if(60<m && m<70)
//     {
//         console.log("Grade C");

//         console.log("pass");

//     }
// }
//     gradechecking(68);

// //if-else conditions
// function gradechecking(m){
//     if(35<m && m<60){
//     console.log("Pass");
//     console.log("Grade B");
//     }

//     else{
//         console.log("No grade");
//         console.log("Fail");
//     }
// }
// gradechecking(65);

// //if-else conditions
// function votingage(a)
// {
//     if(18<a && a!=null){
//     console.log("eligible for voting");
// }

//     else{
//         console.log("non eligible for voting");
//     }
// }

// votingage(21);

// //else if conditions
// console.clear();

// function gradechecking(m)
// {
//     if(35>m && m!=null){
//         console.log("Fail");
//         console.log("No Grade");
//     }
//     else{
//         if(35<m && m<=60){
//             console.log("pass");
//             console.log("Grade B");
//         }    

//         else if(60<m && m<=70){
//             console.log("pass");
//             console.log("Grade B+");
//         }
        
//         else if(70<m && m<=80){
//             console.log("pass");
//             console.log("Grade  A+");
//         }
        
//         else if(80<m && m<=90){
//             console.log("pass");
//             console.log("Grade A");
//         }
        
//         else if(90<m && m<=100){
//             console.log("pass");
//             console.log("Grade O or Distinction");
//         }
//         else{
//             gradechecking(prompt("Enter the marks"));
//         }
//     }
// }
// gradechecking();

//Switch Conditional Statement

console.clear();
function chekingWithSwitch(a)
{
    var a1,b1;
    a1=(prompt("Enter a1"));
    b1=(prompt("Enter b1"));
    a1=Number(a1);
    b1=Number(b1);
    

    switch(a){
        case 'add':
            console.log("added value of a1 and b1 is", a1+b1);
            break;

            case 'subtract':
                console.log("subtracted  value of a1 and b1 is", a1-b1);
                break;

            case 'Multiply':
                console.log("Multiplied value of a1 and b1 is", a1*b1);
                break;

            case 'Divison':
                console.log("Divided value of a1 and b1 is", a1/b1);
                break;

                default:
                    alert ("operator not in the list");
    }
}
chekingWithSwitch(prompt("Enter operator"));

form with switch