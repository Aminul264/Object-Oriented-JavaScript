/****
 * 
 *                           @Inheritance 
 */

function Person(){
    this.name ='Aminul Islam'
}
function Student(){
    //Person.call(Student)//* inherit Person  to student
   Person.call(this)//* both are same 
    this.subject = 'JavaScript'
}

let st1 = new Student()
let name = st1.name
console.log(name)
