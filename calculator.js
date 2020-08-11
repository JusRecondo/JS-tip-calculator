document.getElementById('calculator').onchange = function() {
  var bill = Number(document.getElementById('billTotal').value);
  var tipPercent = document.getElementById('tipInput').value;
  var split = document.getElementById('splitInput').value;
  var billEach = bill / split;
  var tipValue = bill * (tipPercent/100);
  var newBillEach = (bill + tipValue) / split;
  var tipAmountEach = tipValue / split;

  document.getElementById('billEach').innerHTML = billEach.toFixed(2);
  document.getElementById('tipOutput').innerHTML = tipPercent + "%";
  document.getElementById('splitOutput').innerHTML = split;
  document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2);
  document.getElementById('tipAmount').innerHTML = "$" + tipAmountEach.toFixed(2);


}
