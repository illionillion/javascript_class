console.log("ok");

class Count_f{
 constructor(counter){
    this.counter=0;
 }
 Count(){
     this.counter++;
     document.getElementById("output").innerHTML=this.counter;
 }
}

window.onload=function () {
    const count_class=new Count_f();
    document.getElementById("count_btn").onclick=function () {
        count_class.Count();
    }
}