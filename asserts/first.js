 var myapp = angular.module("myApp",[]);
myapp.controller("maincontoller",printsum);
function printsum(){
       this.number1=0;
       this.number2=0;
       this.number3=0;
       this.number4=0;
       this.number5=0;
       this.number6=0;
this.sumtotal = function(){

var name1 = parseFloat(this.number1);
var name2 = parseFloat(this.number2);
var name3 = parseFloat(this.number3);
var name4 = parseFloat(this.number4);
var name5 = parseFloat(this.number5);
var name6 = parseFloat(this.number6);
   this.total = (name1*4.50)+(name2*5.00)+(name3*6.50)+(name4*5.50)+(name5*7.50)+(name6*8.50);
  // this.final = total;
}
};
