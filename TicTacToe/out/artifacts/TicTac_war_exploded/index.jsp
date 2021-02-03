<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <link rel="stylesheet" href="my.css">
    <title>Tic Tac Toe</title>
  </head>
  <body>
  <h2>WELCOME TO TIC_TAC_TOE</h2>
<div>
  <table>
     <tr>
       <td id="11" onclick='Check("11")'>EMPTY</td>
       <td id="12" onclick='Check("12")'>EMPTY</td>
       <td id="13" onclick='Check("13")'>EMPTY</td>
    </tr>
    <tr>
      <td id="21" onclick='Check("21")'>EMPTY</td>
      <td id="22" onclick='Check("22")'>EMPTY</td>
      <td id="23" onclick='Check("23")'>EMPTY</td>
    </tr>
    <tr>
      <td id="31" onclick='Check("31")'>EMPTY</td>
      <td id="32" onclick='Check("32")'>EMPTY</td>
      <td id="33" onclick='Check("33")'>EMPTY</td>
    </tr>
  </table>
</div>

  <p id="p">Player X turn</p>
  <script src="myJS.js"></script>
  </body>
</html>
