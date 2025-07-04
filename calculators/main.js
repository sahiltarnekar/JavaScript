function add() {
  let value1 = Number(document.getElementById("value1").value);
  let value2 = Number(document.getElementById("value2").value);
  document.getElementById("output").innerHTML = "Add = " + (value1 + value2);
}
function sub() {
  let value1 = Number(document.getElementById("value1").value);
  let value2 = Number(document.getElementById("value2").value);
  document.getElementById("output").innerHTML = "Add = " + (value1 - value2);
}
function multi() {
  let value1 = Number(document.getElementById("value1").value);
  let value2 = Number(document.getElementById("value2").value);
  document.getElementById("output").innerHTML = "Add = " + (value1 * value2);
}
function div() {
  let value1 = Number(document.getElementById("value1").value);
  let value2 = Number(document.getElementById("value2").value);
  document.getElementById("output").innerHTML = "Add = " + (value1 / value2);
}