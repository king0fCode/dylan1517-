let mySchedule = {
 name:"Dylan",
 graduationYear:2020,
 major:"Computer Technology Certificate",
 classes: [
  {name: "Object Oriented Programming", code:"CST 154 (01)"},
  {name: "Cloud Computing", code:"CST 251 (01 HY)"}
 ],

getClasses() {
    this.classes.forEach(singleClass => {
    console.log("class name:", singleClass.name,"class code:", singleClass.code);
    document.write("class name:", singleClass.name,"class code:", singleClass.code);
  });
 
},

gradYear:function(){
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log (currentYear)
if (currentYear == this.graduationYear){
    console.log("woot im graduating soon")}
else {
    console.log("i will be done soon")
}
}
}

console.log(mySchedule)

mySchedule.getClasses()
mySchedule.gradYear()