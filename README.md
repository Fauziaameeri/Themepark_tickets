<!--
    This file contains the markup for the theme park
    tickets calculator.
    Author:Fauzia Ameeri
    File:theme_park_calculator.html
    Date:1/20/21
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles/styles.css">
    <script type="text/javascript" src="scripts/tickets.js"></script>
    <title>Theme Park Ticket Calculator</title>
</head>
<body>
<div id = "bigDiv">
<div class="code-container"> 
  <img src="images/tp_top.png" alt="First Image">
</div>
<div id ="formDiv" class="code-container"> 
<h1 id ="headTitle"> Theme Park Ticket Calculator </h1>
<form id ="formId">
  <label for="adult">Adult Cost</label><br>
  <input type="text" id="adultCost" name="fname" placeholder ="35.00"><br><br>
  <label for="child">Child Cost</label><br>
  <input type="text" id="childCost" name="lname" placeholder = "15.00"><br><br>
  <label for="AdultTickets">Adult Tickets</label><br>
  <select id="adultTickets" name="adult_ticks">
    <option value="0">0 tickets</option>
    <option value="1">1 tickets</option>
    <option value="2">2 tickets</option>
    <option value="3">3 tickets</option>
    <option value="4">4 tickets</option>
    <option value="5">5 tickets</option>
    <option value="6">6 tickets</option>
    <option value="7">7 tickets</option>
    <option value="8">8 tickets</option>
    <option value="9">9 tickets</option>
    <option value="10">10 tickets</option>
  </select><br><br>
  <label for="ChildTickets">Child Tickets</label><br>
  <select id="childTickets" name="child_ticks">
    <option value="0">0 tickets</option>
    <option value="1">1 tickets</option>
    <option value="2">2 tickets</option>
    <option value="3">3 tickets</option>
    <option value="4">4 tickets</option>
    <option value="5">5 tickets</option>
    <option value="6">6 tickets</option>
    <option value="7">7 tickets</option>
    <option value="8">8 tickets</option>
    <option value="9">9 tickets</option>
    <option value="10">10 tickets</option>
  </select><br><br>
  <button onclick="return myFunction()"> Calculate </button> <br><br>
</form>
 <h3 id ="result"></h3>
</div>
<div class="code-container"> 
  <img src="images/tp_bottom.png" alt="Last Image">
</div>
</div>
</body>
</html>
