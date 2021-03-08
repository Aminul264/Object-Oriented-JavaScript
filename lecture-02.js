//*constructor pattern...........class 

function Person(){
    console.log(' Is it works as like a Class !!!! ')
}

var person1 = new Person() //* person1 is an object and person is not a function it will be a  now a  class for declaring as  new keyword.

var person2 =new Person();
person2.name =' Aminul Islam' //* that means person is  working  as a class.Person2 is an object .


function Student(name ,email){
    this.name = name;
    this.email = email;
    this.print = function(){
        console.log('Name : '+ this.name)
    }
}//*this refer to the Student object properties/ 

var st1 = new Student('Aminul Islam','aminulislam681538@gmail.com')//*If don't use the new keyword then what happened !!!? think and checkout the output.
var st2 = new Student('Bellal Hossen','mabellal@SpeechGrammarList.com')

var  st3 = new Student('Rupa Dey','deyrupa@gmail.com')
// console.log(st1)//object
// console.log(st1.name)

var studentList =[st1,st2,st3]
console.log(studentList)

studentList.forEach(function(student){
   //console.log('Email : ' + student.email)
  // student.print()
  console.log(student)
});

//* show the propertis that means its an object
for( var props in st1){
    console.log('Properties :'+ props)
}

//*
//console.log(Student.constructor)
