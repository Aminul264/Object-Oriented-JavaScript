
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
