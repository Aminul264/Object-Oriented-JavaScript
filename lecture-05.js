  //********* bind ,call and apply method */

  function add(a,b){
      return (a+b)*this.c
  }

  var obj1 ={
      c:10
  }
  var obj2 ={
      c:20
  }

  //*bind method return an function and link up with object
  var  result =add(2,3)//NaN
  console.log(result)


  var binded1= add.bind(obj1)
  console.log(binded1(2,4))

  //**call method link object.. call function works instance  and take arguments */
  //*instance calling
     var res1= add.call(obj1,2,3)
     console.log(res1)
     var res2 = add.call(obj2,3,5)
     console.log(res2)

     //*apply method link with object and instance calling 
    //**take arguments with array  system */

    
    var res3 = add.apply(obj1,[3,5])
    console.log(res3)
    var res4 = add.apply(obj2,[3,5])
    console.log(res4)
  
//   var test = add.apply(obj1,3,5)//*throw an error 
//   console.log(test)


 var   Person={
      fullName:function(){
          console.log(this.firstName+' '+' '+this.lastName)
      }
  }

  var Person1={
      firstName:'Aminul',
      lastName:'Islam'
  }
 Person.fullName.apply(Person1)
