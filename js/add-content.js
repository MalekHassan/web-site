'use strict';
var carname = '';
var cartype='';
var carversouin='';
function first(){
    carname = prompt("Enter your car brand!");
    window.confirm('Nice brand');
}
first();
function second(){
    var cartype = prompt("Is you car type an electrical car or gas?")
    if (cartype=="electrical") {
        window.confirm('Will done keep it Green ,LIKE THAT!')}
       else { window.confirm ('So It is your chance to use an Electrical one!');}
 }
 second();
     function third(){
    var carversouin = prompt("Is your Car old or new?")
    if (carversouin=="old") {
        window.confirm('So,It is time to buy a new one')}
       else { window.confirm ('Check-out our new cars');}    

 }
 third()   
   var txt;
var r = confirm("Do you like Cars");
if (r == true) {
    window.confirm( 'we agreed with you, so let us check out the website')
} else {
    window.confirm( "You pressed Cancel! so let us go to the website");
}


