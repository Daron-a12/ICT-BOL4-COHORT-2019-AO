//pizza calculator, Daron van der Linden

var smallpizza = prompt("Hoeveel small pizza's wilt u?");
var prijssmall = 4.99;
document.write("Aantal small pizza's: " + smallpizza + ", Kosten small pizza's: " + smallpizza * prijssmall);

document.write("<br />");

var mediumpizza = prompt("Hoeveel medium pizza's wilt u?");
var prijsmedium = 6.99;
document.write("Aantal medium pizza's: " + mediumpizza +", kosten medium pizza's: " + mediumpizza*prijsmedium);

document.write("<br />");

var largepizza = prompt("hoeveel large pizza's wilt u?");
var prijslarge = 8.99;
document.write("Aantal large pizza's: " + largepizza + ", kosten large pizza's: " + largepizza*prijslarge);

document.write("<br />");

var totaal = (smallpizza*prijssmall) + (mediumpizza*prijsmedium) + (largepizza*prijslarge)
document.write("Totaal bedrag: " + totaal)
