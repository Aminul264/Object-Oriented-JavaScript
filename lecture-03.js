//*@This keyword and bind method  */
/@this keyword is related to object /


// var obj = {
//     name : 'stack learner',
//     print:function(){
//        // console.log(this.name)
//        console.log(this)//*Its refer this object that means wherever  we use this in a object ,this refer the object

//     }

// }

// obj.print()
// function myFnc(){
//     console.log(this)//*@here this refer window object (browser)
// }
// myFnc()
//obj.print()
// function myFnc(){
//     function Inner(){
//         console.log(this)//* here also this will refer window object. outside of a object using this refer window object

//     }
//     //Inner()
//     new Inner()//**using new keyword, Inner function will be an object ,thats why  this refer now Inner object...wow,,,thats awesome */
//     console.log(this)//*here this will refer window object coz its now outside of an object .
// }
// myFnc()


// var Student ={
//     name :'Aminul islam',
//     print:function(){
//         console.log(this.name)
//     }
// }
// Student.print() //*Aminul islam
// var myPrint =Student.print //storing objects function
// myPrint()//*undefined
// console.log(myPrint)

// //**Details code of 40 number line */
// var myPrint =function(){
//     console.log(this.name) //* that means here this refer window object .But there is no name in window object,thats why this.name print undefined.
// }

//*@Then Cant we use a function in an object!!!!....???Obviously we will can....We have to use bind method....we have to bind the function of an object. 

//global.value=-10 

// function add(num){
//    console.log(this)
//    console.log(this.value + num)//* before binding :(undefined+ num)= NaN
//                           //*after binding : 100+num =400
// }
// add(10)//undefined
 
// var obj1 ={
//   value:100
// }//object

 // var binded = add.bind(obj1)//*before binding 'this' refer window/global object but after binding 'this' refer the obj1 object .


 //binded(300)//*obj1  object


 //**@ practice and practice and practice and understand the below code ....method(a function that part of object ) vs function  */

//  var Person={
//      name :'Stack Learner',
//      print:function () {//*here print function is a method
//           console.log(this)
//           setTimeout(function () {
//               console.log(this)
//               console.log('Hello'+this.name)//** Here 'this' refer window/global object  because here SetTimeout is e pure function not method */
//           },2000)
//       }
//  }
//  Person.print()

//  //**we can easily solve this problem using 'bind' */
//  var Person={
//     name :'Stack Learner',
//     print:function () {//*here print function is a method
//          console.log(this)
//          setTimeout(function () {
//              console.log(this)
//              console.log('Hello '+this.name)//** Here 'this' Person object .
//          }.bind(this),2000)//**now this refer Person object  */
//      }
// }
// Person.print()

var test={
    hi:function (){
        console.log('I am test object'+ this)
        function name() {
            console.log('I am window/global object '+this) 
        }
        name()
    }
}
test.hi()

