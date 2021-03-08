
var obj = {
    name : "Aminul islam",
    age : 21 ,
    status : "single" ,
    read : function(){
       
        console.log(this.name,this.status) //* object reffer kore 
    }
}
for( var x in obj){
    // console.log(x)
    // console.log(typeof x)//*string 
    // console.log(obj.x)//undefined coz x is string ,we have to use bracket notation
   
    console.log(obj[x])
}