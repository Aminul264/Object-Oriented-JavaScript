 //** Basic Prototype */

 function Student(name ,id) {
     this.name=name
     this.id =id
    //  this.hello=function () {//*method
    //      console.log('hello '+this.name)
    //  }
 }
 
 //** prototype as like as an object */ using for reduce code duplicating 
 Student.prototype.hello=function () {
    console.log('hello '+this.name)
}

Student.prototype={
    Display:function () {
        console.log('Hello'+'this.name')
    },
    print:function(){
       console.log('Name : '+this.name +'Email: '+this.email)
    } 
}
 var st1 = new Student('Aminul',1910676129)
 var st2 = new Student('Nasim',1910265)

// console.log(st1)
// console.log(st2)
// st1.hello()
// console.log(st1.hello)//*wow
//   st1.hello()
//   st2.hello();
// console.log(Student.prototype)
// console.log(st1.hello==st2.hello)//*true

// console.log(st1.__proto==st2.__proto)//*true

// Student.prototype.email='aminulislam681538@gmail.com';
 
// console.log(st1.email,st2.email)
// console.log(st1)

// st1.__proto__.email='ru.ac.bd'
// console.log(st2.email,st1.email)//*same st1.email==st2.email



console.log(st1)
console.log(st2)