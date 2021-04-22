document.getElementById('calculator').addEventListener('change', function() {
  let bill = Number(document.getElementById('billTotal').value);
  let tipPercent = document.getElementById('tipInput').value;
  let split = document.getElementById('splitInput').value;
  let billEach = bill / split;
  let tipValue = bill * (tipPercent/100);
  let newBillEach = (bill + tipValue) / split;
  let tipAmountEach = tipValue / split;

  document.getElementById('billEach').innerHTML = billEach.toFixed(2);
  document.getElementById('tipOutput').innerHTML = tipPercent + "%";
  document.getElementById('splitOutput').innerHTML = split;
  document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2);
  document.getElementById('tipAmount').innerHTML = "$" + tipAmountEach.toFixed(2);


} );
