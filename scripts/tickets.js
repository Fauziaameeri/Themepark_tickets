/*
    This file calculates the cost of theme park tickets when
    the user clicks the calculate button.
    Author:Fauzia Ameeri
    File:tickets.js
    Date:1/20/21
*/

function myFunction() {
    let textBox1 = document.getElementById("adultCost");
    let textBox2 = document.getElementById("childCost"); 
    let textBox3 = document.getElementById("adultTickets"); 
    let textBox4 = document.getElementById("childTickets");
    let textBoxValue1 = textBox1.value; 
    let textBoxValue2 = textBox2.value; 
    let textBoxValue3 = textBox3.value; 
    let textBoxValue4 = textBox4.value; 
    textBoxValue1 = parseFloat(textBoxValue1)
    textBoxValue2 = parseFloat(textBoxValue2)
    textBoxValue3 = parseInt(textBoxValue3)
    textBoxValue4 = parseInt(textBoxValue4)
    let total_cost = textBoxValue1 * textBoxValue3 + textBoxValue2 * textBoxValue4
    let outputBox = document.getElementById("result");
    outputBox.innerHTML = "Total cost for tickets: $" + total_cost.toString()
   return false;
}