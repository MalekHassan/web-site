'use strict';
var carname = '';
var cartype = '';
var carversouin = '';
function first() {
    carname = prompt("Enter your car brand!");
    window.confirm('Nice brand');
}
first();
function second() {
    var cartype = prompt("Is your car type an electrical car or gas?")
    while (cartype !== 'electrical' && cartype !== 'gas') {
        cartype = prompt("please choose If your car is electrical or gas")
    }
    if (cartype == "electrical") {
        window.confirm('Will done keep it Green ,LIKE THAT!')
    }
    else { window.confirm('So It is your chance to use an Electrical one!'); }
}
second();
function third() {
    var carversouin = prompt("Is your Car old or new?")
    if (carversouin == "old") {
        window.confirm('So,It is time to buy a new one')
    }
    else { window.confirm('Check-out our new cars'); }

}

var carsnum = prompt('Gus how many cars do wish to find in the website')
    for (var f=0; f<carsnum; f++) {
document.write('<p><img class="imange3"src="https://www.corunaespiritudefuego.com/wp-content/uploads/2019/01/3.jpg"></p>')
    }

 third()   
 var txt;
var r = confirm("Do you like Cars");
if (r == true) {
   window.confirm( 'we agreed with you, so let us check out the website')
} else {
   window.confirm( "You pressed Cancel! so let us go to the website");
}
document.write('<h3>' + 'it is time to change your ' + carname + '</h3>')
